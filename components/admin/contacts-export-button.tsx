"use client";

import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface Contact {
  id: string;
  contactName: string;
  email: string;
  phone: string;
  companyName: string | null;
  city: string;
  industry: string | null;
  message: string;
  createdAt: Date;
}

export function ContactsExportButton({ contacts }: { contacts: Contact[] }) {
  const handleExport = () => {
    const csv = [
      ["Name", "Email", "Phone", "Company", "City", "Industry", "Message", "Date"],
      ...contacts.map((c) => [
        c.contactName,
        c.email,
        c.phone,
        c.companyName || "",
        c.city,
        c.industry || "",
        c.message.replace(/"/g, '""'),
        formatDate(c.createdAt),
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contacts-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button variant="outline" onClick={handleExport}>
      Export CSV
    </Button>
  );
}

