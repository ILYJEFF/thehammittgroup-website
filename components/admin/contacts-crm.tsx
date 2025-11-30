"use client";

import { useState, useEffect } from "react";
import { ContactCrmCard } from "./contact-crm-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";

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

interface ContactsCrmProps {
  contacts: Contact[];
}

export function ContactsCrm({ contacts: initialContacts }: ContactsCrmProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [statusFilter, setStatusFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  useEffect(() => {
    setStatusFilter(searchParams.get("status") || "all");
    setCityFilter(searchParams.get("city") || "");
    setIndustryFilter(searchParams.get("industry") || "");
  }, [searchParams]);

  const filteredContacts = initialContacts.filter((contact) => {
    if (statusFilter !== "all" && contact.status !== statusFilter) return false;
    if (cityFilter && contact.city !== cityFilter) return false;
    if (industryFilter && !contact.industry?.toLowerCase().includes(industryFilter.toLowerCase())) return false;
    return true;
  });

  const statusCounts = {
    all: initialContacts.length,
    new: initialContacts.filter((c) => c.status === "new").length,
    archived: initialContacts.filter((c) => c.status === "archived").length,
  };

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all" && value !== "") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/admin/contacts?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>CRM Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <Select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  handleFilterChange("status", e.target.value);
                }}
              >
                <option value="all">All Statuses ({statusCounts.all})</option>
                <option value="new">New ({statusCounts.new})</option>
                <option value="archived">Archived ({statusCounts.archived})</option>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <Select
                value={cityFilter}
                onChange={(e) => {
                  setCityFilter(e.target.value);
                  handleFilterChange("city", e.target.value);
                }}
              >
                <option value="">All Cities</option>
                <option value="DFW">Dallas-Fort Worth</option>
                <option value="Austin">Austin</option>
                <option value="Houston">Houston</option>
                <option value="San Antonio">San Antonio</option>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <Input
                type="text"
                placeholder="Filter by industry..."
                value={industryFilter}
                onChange={(e) => {
                  setIndustryFilter(e.target.value);
                  handleFilterChange("industry", e.target.value);
                }}
              />
            </div>
          </div>
          {(statusFilter !== "all" || cityFilter || industryFilter) && (
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setStatusFilter("all");
                  setCityFilter("");
                  setIndustryFilter("");
                  router.push("/admin/contacts");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Leads ({filteredContacts.length})
          </h2>
          <p className="text-sm text-gray-600">
            Showing {filteredContacts.length} of {initialContacts.length} contacts
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {filteredContacts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-gray-500">No contacts found matching your filters.</p>
            </CardContent>
          </Card>
        ) : (
          filteredContacts.map((contact) => (
            <ContactCrmCard key={contact.id} contact={contact} />
          ))
        )}
      </div>
    </div>
  );
}

