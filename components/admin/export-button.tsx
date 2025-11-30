"use client";

import { Button } from "@/components/ui/button";

interface ExportButtonProps {
  data: Array<Record<string, any>>;
  headers: string[];
  filename: string;
}

export function ExportButton({ data, headers, filename }: ExportButtonProps) {
  const handleExport = () => {
    const csv = [
      headers.map((h) => `"${h}"`).join(","),
      ...data.map((row) =>
        headers
          .map((header) => {
            const value = row[header.toLowerCase().replace(/\s+/g, "")] || "";
            return `"${String(value).replace(/"/g, '""')}"`;
          })
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}-${new Date().toISOString().split("T")[0]}.csv`;
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

