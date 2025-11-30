"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Select } from "@/components/ui/select";
import { toast } from "sonner";

interface StatusSelectorProps {
  candidateId: string;
  currentStatus: string;
  onUpdate?: () => void;
}

export function StatusSelector({
  candidateId,
  currentStatus,
  onUpdate,
}: StatusSelectorProps) {
  const [status, setStatus] = useState(currentStatus);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus: string) => {
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/admin/candidates/${candidateId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setStatus(newStatus);
        toast.success("Status updated");
        onUpdate?.();
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      toast.error("Failed to update status");
      setStatus(currentStatus); // Revert on error
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Badge
        variant={
          status === "new"
            ? "primary"
            : status === "reviewing"
            ? "warning"
            : status === "contacted"
            ? "success"
            : "default"
        }
      >
        {status}
      </Badge>
      <Select
        value={status}
        onChange={(e) => handleStatusChange(e.target.value)}
        disabled={isUpdating}
        className="w-32"
      >
        <option value="new">New</option>
        <option value="reviewing">Reviewing</option>
        <option value="contacted">Contacted</option>
        <option value="placed">Placed</option>
      </Select>
    </div>
  );
}

