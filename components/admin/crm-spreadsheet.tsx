"use client";

import { useState, useRef, useEffect } from "react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
// Using a simple X character instead of icon library

interface Lead {
  id: string;
  contactName: string;
  companyName: string | null;
  email: string;
  phone: string;
  city: string;
  industry: string | null;
  message: string;
  status: string;
  notes: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface CrmSpreadsheetProps {
  leads: Lead[];
}

export function CrmSpreadsheet({ leads: initialLeads }: CrmSpreadsheetProps) {
  const router = useRouter();
  const [leads, setLeads] = useState(initialLeads);
  const [editingCell, setEditingCell] = useState<{ rowId: string; field: string } | null>(null);
  const [editValue, setEditValue] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [panelMessage, setPanelMessage] = useState("");
  const [panelNotes, setPanelNotes] = useState("");
  const [isSavingPanel, setIsSavingPanel] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setLeads(initialLeads);
  }, [initialLeads]);

  useEffect(() => {
    if (editingCell && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingCell]);

  const handleCellClick = (rowId: string, field: string, currentValue: string) => {
    setEditingCell({ rowId, field });
    setEditValue(currentValue || "");
  };

  const handleSave = async (rowId: string, field: string) => {
    if (editValue === leads.find((l) => l.id === rowId)?.[field as keyof Lead]) {
      setEditingCell(null);
      return;
    }

    setIsSaving(true);
    try {
      const updateData: any = { [field]: editValue || null };
      
      const response = await fetch(`/api/admin/contacts/${rowId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        const updatedLead = await response.json();
        setLeads(leads.map((l) => (l.id === rowId ? updatedLead : l)));
        setEditingCell(null);
        router.refresh();
      }
    } catch (error) {
      console.error("Error saving:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, rowId: string, field: string) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSave(rowId, field);
    } else if (e.key === "Escape") {
      setEditingCell(null);
    }
  };

  const handleBlur = (rowId: string, field: string) => {
    handleSave(rowId, field);
  };

  const handleRowClick = (lead: Lead) => {
    setSelectedLead(lead);
    setPanelMessage(lead.message || "");
    setPanelNotes(lead.notes || "");
  };

  const handleClosePanel = () => {
    setSelectedLead(null);
    setPanelMessage("");
    setPanelNotes("");
  };

  const handleSavePanel = async () => {
    if (!selectedLead) return;

    setIsSavingPanel(true);
    try {
      const response = await fetch(`/api/admin/contacts/${selectedLead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: panelMessage,
          notes: panelNotes,
        }),
      });

      if (response.ok) {
        const updatedLead = await response.json();
        setLeads(leads.map((l) => (l.id === selectedLead.id ? updatedLead : l)));
        setSelectedLead(updatedLead);
        router.refresh();
      }
    } catch (error) {
      console.error("Error saving panel:", error);
    } finally {
      setIsSavingPanel(false);
    }
  };

  const columns = [
    { key: "contactName", label: "Name", width: "180px" },
    { key: "companyName", label: "Company", width: "180px" },
    { key: "email", label: "Email", width: "220px" },
    { key: "phone", label: "Phone", width: "150px" },
    { key: "city", label: "City", width: "140px" },
    { key: "industry", label: "Industry", width: "180px" },
    { key: "createdAt", label: "Created", width: "140px", readOnly: true },
    { key: "updatedAt", label: "Updated", width: "140px", readOnly: true },
  ];

  return (
    <div className="relative">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 border-b-2 border-gray-300 sticky top-0 z-10">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase border-r border-gray-300 whitespace-nowrap"
                    style={{ width: col.width, minWidth: col.width }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    No converted leads yet. Convert contacts from the Contacts page.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleRowClick(lead)}
                  >
                  {columns.map((col) => {
                    const isEditing =
                      editingCell?.rowId === lead.id &&
                      editingCell?.field === col.key;
                    const value = lead[col.key as keyof Lead];
                    const displayValue: string =
                      col.key === "createdAt" || col.key === "updatedAt"
                        ? formatDate(value as Date)
                        : String(value || "");

                    return (
                      <td
                        key={col.key}
                        className={`px-4 py-2 border-r border-gray-200 ${
                          isEditing ? "p-0" : "cursor-pointer"
                        }`}
                        onClick={() =>
                          !col.readOnly &&
                          handleCellClick(lead.id, col.key, String(value || ""))
                        }
                      >
                        {isEditing ? (
                          <Input
                            ref={inputRef as React.RefObject<HTMLInputElement>}
                            type={col.key === "email" ? "email" : "text"}
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onBlur={() => handleBlur(lead.id, col.key)}
                            onKeyDown={(e) => handleKeyDown(e, lead.id, col.key)}
                            className="w-full border-0 rounded-none focus:ring-2 focus:ring-primary-500"
                            disabled={isSaving}
                            onClick={(e) => e.stopPropagation()}
                          />
                        ) : (
                          <div className="min-h-[24px] flex items-center">
                            {col.key === "email" ? (
                              <a
                                href={`mailto:${displayValue}`}
                                className="text-primary-600 hover:underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {displayValue}
                              </a>
                            ) : col.key === "phone" ? (
                              <a
                                href={`tel:${displayValue}`}
                                className="text-primary-600 hover:underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {displayValue}
                              </a>
                            ) : (
                              <span className="text-sm text-gray-900">
                                {displayValue}
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Total Leads: <span className="font-semibold">{leads.length}</span>
          </div>
          <div className="text-xs text-gray-500">
            Click row to view details • Click cell to edit • Press Enter to save • Press Esc to cancel
          </div>
        </div>
      </div>

      {/* Side Panel */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={handleClosePanel}
          />
          
          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[40%] bg-white shadow-2xl transform transition-transform">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedLead.contactName}
                  </h2>
                  {selectedLead.companyName && (
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedLead.companyName}
                    </p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClosePanel}
                  className="hover:bg-gray-200"
                >
                  ✕
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-200">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Email
                    </label>
                    <a
                      href={`mailto:${selectedLead.email}`}
                      className="block text-sm text-primary-600 hover:underline mt-1"
                    >
                      {selectedLead.email}
                    </a>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Phone
                    </label>
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="block text-sm text-primary-600 hover:underline mt-1"
                    >
                      {selectedLead.phone}
                    </a>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      City
                    </label>
                    <p className="text-sm text-gray-900 mt-1">{selectedLead.city}</p>
                  </div>
                  {selectedLead.industry && (
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase">
                        Industry
                      </label>
                      <p className="text-sm text-gray-900 mt-1">{selectedLead.industry}</p>
                    </div>
                  )}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Created
                    </label>
                    <p className="text-sm text-gray-900 mt-1">
                      {formatDate(selectedLead.createdAt)}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Updated
                    </label>
                    <p className="text-sm text-gray-900 mt-1">
                      {formatDate(selectedLead.updatedAt)}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    value={panelMessage}
                    onChange={(e) => setPanelMessage(e.target.value)}
                    className="w-full min-h-[200px] text-sm"
                    placeholder="Original message from contact..."
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    CRM Notes
                  </label>
                  <Textarea
                    value={panelNotes}
                    onChange={(e) => setPanelNotes(e.target.value)}
                    className="w-full min-h-[200px] text-sm"
                    placeholder="Add notes about this lead..."
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={handleClosePanel}
                  disabled={isSavingPanel}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={handleSavePanel}
                  disabled={isSavingPanel}
                >
                  {isSavingPanel ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

