"use client";

import { useState } from "react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

interface Contact {
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

interface ContactCrmCardProps {
  contact: Contact;
}

export function ContactCrmCard({ contact }: ContactCrmCardProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(contact.notes || "");
  const [status, setStatus] = useState(contact.status);
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const statusColors = {
    new: "bg-blue-100 text-blue-800",
    archived: "bg-gray-100 text-gray-800",
    converted: "bg-green-100 text-green-800",
    deleted: "bg-red-100 text-red-800",
  };

  const handleStatusChange = async (newStatus: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/contacts/${contact.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setStatus(newStatus);
        router.refresh();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveNotes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/contacts/${contact.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes }),
      });

      if (response.ok) {
        setIsEditing(false);
        router.refresh();
      }
    } catch (error) {
      console.error("Error saving notes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/contacts/${contact.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    } finally {
      setIsLoading(false);
      setShowDeleteConfirm(false);
    }
  };

  if (status === "deleted") {
    return null; // Don't show deleted contacts
  }

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-lg text-gray-900">
              {contact.contactName}
            </h3>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                statusColors[status as keyof typeof statusColors] || statusColors.new
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
          {contact.companyName && (
            <p className="text-sm text-gray-600 mb-1">{contact.companyName}</p>
          )}
          <p className="text-xs text-gray-500">
            Received {formatDate(contact.createdAt)}
            {contact.updatedAt.getTime() !== contact.createdAt.getTime() && (
              <> • Updated {formatDate(contact.updatedAt)}</>
            )}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
        <div>
          <strong className="text-gray-700">Email:</strong>{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-primary-600 hover:underline"
          >
            {contact.email}
          </a>
        </div>
        <div>
          <strong className="text-gray-700">Phone:</strong>{" "}
          <a
            href={`tel:${contact.phone}`}
            className="text-primary-600 hover:underline"
          >
            {contact.phone}
          </a>
        </div>
        <div>
          <strong className="text-gray-700">City:</strong> {contact.city}
        </div>
        {contact.industry && (
          <div>
            <strong className="text-gray-700">Industry:</strong> {contact.industry}
          </div>
        )}
      </div>

      <div className="mb-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-700 whitespace-pre-wrap">{contact.message}</p>
      </div>

      <div className="mb-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-700">CRM Notes</label>
          {!isEditing && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(true)}
            >
              {notes ? "Edit" : "Add Notes"}
            </Button>
          )}
        </div>
        {isEditing ? (
          <div className="space-y-2">
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about this lead..."
              rows={3}
              className="w-full"
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="primary"
                onClick={handleSaveNotes}
                disabled={isLoading}
              >
                Save
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setNotes(contact.notes || "");
                  setIsEditing(false);
                }}
                disabled={isLoading}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-600 min-h-[3rem]">
            {notes || (
              <span className="text-gray-400 italic">No notes yet</span>
            )}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
        {status !== "new" && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleStatusChange("new")}
            disabled={isLoading}
          >
            Mark as New
          </Button>
        )}
        {status !== "archived" && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleStatusChange("archived")}
            disabled={isLoading}
          >
            Archive
          </Button>
        )}
        <Button
          size="sm"
          variant="primary"
          onClick={() => handleStatusChange("converted")}
          disabled={isLoading}
        >
          Convert to Lead
        </Button>
        {!showDeleteConfirm ? (
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowDeleteConfirm(true)}
            disabled={isLoading}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            Delete
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleDelete}
              disabled={isLoading}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Confirm Delete
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowDeleteConfirm(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

