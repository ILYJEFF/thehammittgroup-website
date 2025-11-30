"use client";

import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentLocation: string;
  desiredLocation: string;
  industry: string;
  positionType: string;
  status: string;
  createdAt: Date;
}

export function SubmissionsExportButton({
  candidates,
}: {
  candidates: Candidate[];
}) {
  const handleExport = () => {
    const csv = [
      [
        "Name",
        "Email",
        "Phone",
        "Current Location",
        "Desired Location",
        "Industry",
        "Position",
        "Status",
        "Date",
      ],
      ...candidates.map((c) => [
        `${c.firstName} ${c.lastName}`,
        c.email,
        c.phone,
        c.currentLocation,
        c.desiredLocation,
        c.industry,
        c.positionType,
        c.status,
        formatDate(c.createdAt),
      ]),
    ]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `candidates-${new Date().toISOString().split("T")[0]}.csv`;
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

