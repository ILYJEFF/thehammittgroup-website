"use client";

import { useState, useRef, useEffect } from "react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

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

  const columns = [
    { key: "contactName", label: "Name", width: "150px" },
    { key: "companyName", label: "Company", width: "150px" },
    { key: "email", label: "Email", width: "200px" },
    { key: "phone", label: "Phone", width: "130px" },
    { key: "city", label: "City", width: "120px" },
    { key: "industry", label: "Industry", width: "150px" },
    { key: "message", label: "Message", width: "300px" },
    { key: "notes", label: "Notes", width: "300px" },
    { key: "createdAt", label: "Created", width: "120px", readOnly: true },
    { key: "updatedAt", label: "Updated", width: "120px", readOnly: true },
  ];

  return (
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
                  className="hover:bg-gray-50 transition-colors"
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
                          col.key === "message" || col.key === "notes" ? (
                            <Textarea
                              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleBlur(lead.id, col.key)}
                              onKeyDown={(e) => handleKeyDown(e, lead.id, col.key)}
                              className="w-full min-h-[60px] border-0 rounded-none focus:ring-2 focus:ring-primary-500"
                              disabled={isSaving}
                            />
                          ) : (
                            <Input
                              ref={inputRef as React.RefObject<HTMLInputElement>}
                              type={col.key === "email" ? "email" : "text"}
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleBlur(lead.id, col.key)}
                              onKeyDown={(e) => handleKeyDown(e, lead.id, col.key)}
                              className="w-full border-0 rounded-none focus:ring-2 focus:ring-primary-500"
                              disabled={isSaving}
                            />
                          )
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
          Click any cell to edit • Press Enter to save • Press Esc to cancel
        </div>
      </div>
    </div>
  );
}

