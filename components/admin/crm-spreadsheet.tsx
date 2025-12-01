"use client";

import { useState, useEffect } from "react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [panelMessage, setPanelMessage] = useState("");
  const [panelNotes, setPanelNotes] = useState("");
  const [isSavingPanel, setIsSavingPanel] = useState(false);

  useEffect(() => {
    setLeads(initialLeads);
  }, [initialLeads]);

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
    { key: "contactName", label: "Name", width: "150px", priority: "high" },
    { key: "companyName", label: "Company", width: "150px", priority: "medium" },
    { key: "email", label: "Email", width: "200px", priority: "high" },
    { key: "phone", label: "Phone", width: "130px", priority: "high" },
    { key: "city", label: "City", width: "120px", priority: "low" },
    { key: "industry", label: "Industry", width: "150px", priority: "low" },
    { key: "createdAt", label: "Created", width: "120px", readOnly: true, priority: "low" },
    { key: "updatedAt", label: "Updated", width: "120px", readOnly: true, priority: "low" },
  ];

  // Mobile card view
  const MobileCardView = () => (
    <div className="space-y-4 md:hidden">
      {leads.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-500 text-sm">No converted leads yet.</p>
          <p className="text-gray-500 text-sm mt-1">Convert contacts from the Contacts page.</p>
        </div>
      ) : (
        <>
          {leads.map((lead) => (
            <div
              key={lead.id}
              onClick={() => handleRowClick(lead)}
              className="bg-white rounded-lg border-2 border-gray-200 p-5 shadow-md active:shadow-lg active:border-primary-300 transition-all cursor-pointer touch-manipulation min-h-[200px]"
            >
              <div className="mb-4 pb-4 border-b-2 border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">{lead.contactName}</h3>
                {lead.companyName && (
                  <p className="text-base text-gray-700 font-semibold">{lead.companyName}</p>
                )}
              </div>
              <div className="space-y-3.5">
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Email</div>
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-base text-primary-600 hover:text-primary-700 font-semibold break-all block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {lead.email}
                  </a>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Phone</div>
                  <a
                    href={`tel:${lead.phone}`}
                    className="text-base text-primary-600 hover:text-primary-700 font-semibold block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {lead.phone}
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-100">
                  {lead.city && (
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">City</div>
                      <p className="text-sm text-gray-900 font-semibold">{lead.city}</p>
                    </div>
                  )}
                  {lead.industry && (
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Industry</div>
                      <p className="text-sm text-gray-900 font-semibold">{lead.industry}</p>
                    </div>
                  )}
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Created</div>
                  <p className="text-sm text-gray-600 font-medium">{formatDate(lead.createdAt)}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-2 border-gray-200 p-4 mt-6">
            <div className="text-center">
              <p className="text-base text-gray-800 font-bold">
                Total Leads: <span className="text-primary-600 text-lg">{leads.length}</span>
              </p>
              <p className="text-sm text-gray-600 mt-2 font-medium">Tap any card above to view and edit details</p>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // Desktop table view
  const DesktopTableView = () => (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hidden md:block">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ minWidth: "100%" }}>
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-300 sticky top-0 z-10">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200 whitespace-nowrap"
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
                  className="px-4 py-12 text-center text-gray-500"
                >
                  <p className="text-base">No converted leads yet.</p>
                  <p className="text-sm mt-1">Convert contacts from the Contacts page.</p>
                </td>
              </tr>
            ) : (
              leads.map((lead, index) => (
                <tr
                  key={lead.id}
                  className={`hover:bg-blue-50 transition-colors cursor-pointer touch-manipulation ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                  onClick={() => handleRowClick(lead)}
                >
                  {columns.map((col) => {
                    const value = lead[col.key as keyof Lead];
                    const displayValue: string =
                      col.key === "createdAt" || col.key === "updatedAt"
                        ? formatDate(value as Date)
                        : String(value || "");

                    return (
                      <td
                        key={col.key}
                        className="px-3 py-2.5 border-r border-gray-200"
                      >
                        <div className="min-h-[24px] flex items-center">
                          {col.key === "email" ? (
                            <a
                              href={`mailto:${displayValue}`}
                              className="text-xs text-primary-600 hover:text-primary-700 hover:underline font-medium truncate max-w-full"
                              onClick={(e) => e.stopPropagation()}
                              title={displayValue}
                            >
                              {displayValue}
                            </a>
                          ) : col.key === "phone" ? (
                            <a
                              href={`tel:${displayValue}`}
                              className="text-xs text-primary-600 hover:text-primary-700 hover:underline font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {displayValue}
                            </a>
                          ) : (
                            <span className="text-xs text-gray-900 font-medium truncate max-w-full" title={displayValue || ""}>
                              {displayValue || <span className="text-gray-400">—</span>}
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="text-sm text-gray-700 font-medium">
          Total Leads: <span className="text-primary-600 font-bold">{leads.length}</span>
        </div>
        <div className="text-xs text-gray-500">
          Click any row to view and edit details
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Mobile Card View - shows only on mobile */}
      <MobileCardView />
      
      {/* Desktop Table View - shows only on desktop */}
      <DesktopTableView />

      {/* Side Panel */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={handleClosePanel}
          />
          
          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-full md:w-[45%] lg:w-[40%] bg-white shadow-2xl transform transition-transform overflow-y-auto">
            <div className="flex flex-col h-full min-h-screen">
              {/* Header */}
              <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0 z-10">
                <div className="flex-1 min-w-0 pr-4">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 truncate">
                    {selectedLead.contactName}
                  </h2>
                  {selectedLead.companyName && (
                    <p className="text-sm text-gray-600 mt-1 truncate">
                      {selectedLead.companyName}
                    </p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClosePanel}
                  className="hover:bg-gray-200 min-h-[44px] min-w-[44px] touch-manipulation flex-shrink-0"
                >
                  ✕
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 px-4 md:px-6 py-6 space-y-6 pb-24">
                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-gray-200">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Email
                    </label>
                    <a
                      href={`mailto:${selectedLead.email}`}
                      className="block text-sm md:text-base text-primary-600 hover:text-primary-700 hover:underline mt-2 font-medium break-all"
                    >
                      {selectedLead.email}
                    </a>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Phone
                    </label>
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="block text-sm md:text-base text-primary-600 hover:text-primary-700 hover:underline mt-2 font-medium"
                    >
                      {selectedLead.phone}
                    </a>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      City
                    </label>
                    <p className="text-sm md:text-base text-gray-900 mt-2 font-medium">{selectedLead.city}</p>
                  </div>
                  {selectedLead.industry && (
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Industry
                      </label>
                      <p className="text-sm md:text-base text-gray-900 mt-2 font-medium">{selectedLead.industry}</p>
                    </div>
                  )}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Created
                    </label>
                    <p className="text-sm md:text-base text-gray-900 mt-2 font-medium">
                      {formatDate(selectedLead.createdAt)}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Updated
                    </label>
                    <p className="text-sm md:text-base text-gray-900 mt-2 font-medium">
                      {formatDate(selectedLead.updatedAt)}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Original Message
                  </label>
                  <Textarea
                    value={panelMessage}
                    onChange={(e) => setPanelMessage(e.target.value)}
                    className="w-full min-h-[150px] md:min-h-[200px] text-sm md:text-base resize-y"
                    placeholder="Original message from contact..."
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    CRM Notes
                  </label>
                  <Textarea
                    value={panelNotes}
                    onChange={(e) => setPanelNotes(e.target.value)}
                    className="w-full min-h-[150px] md:min-h-[200px] text-sm md:text-base resize-y"
                    placeholder="Add notes about this lead..."
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 md:px-6 py-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 flex flex-col sm:flex-row justify-end gap-3 sticky bottom-0 z-10">
                <Button
                  variant="outline"
                  onClick={handleClosePanel}
                  disabled={isSavingPanel}
                  className="min-h-[44px] touch-manipulation w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={handleSavePanel}
                  disabled={isSavingPanel}
                  className="min-h-[44px] touch-manipulation w-full sm:w-auto"
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

