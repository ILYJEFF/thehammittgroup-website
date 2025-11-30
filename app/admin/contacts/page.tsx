import { prisma } from "@/lib/db";
import { ContactsExportButton } from "@/components/admin/contacts-export-button";
import { ContactsCrm } from "@/components/admin/contacts-crm";
import { Suspense } from "react";

async function getContacts(searchParams: { 
  city?: string; 
  industry?: string; 
  status?: string;
}) {
  const where: any = {
    status: { not: "deleted" }, // Exclude deleted contacts
  };

  if (searchParams.city) {
    where.city = searchParams.city;
  }

  if (searchParams.industry) {
    where.industry = { contains: searchParams.industry, mode: "insensitive" };
  }

  if (searchParams.status && searchParams.status !== "all") {
    where.status = searchParams.status;
  }

  return await prisma.contact.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
}

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: { city?: string; industry?: string; status?: string };
}) {
  let contacts: Awaited<ReturnType<typeof getContacts>>;
  try {
    contacts = await getContacts(searchParams);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    contacts = [];
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">CRM - Contact Management</h1>
            <p className="text-gray-600 mt-2">
              Manage leads, convert contacts, and track your pipeline
            </p>
          </div>
          {contacts.length > 0 && <ContactsExportButton contacts={contacts} />}
        </div>

        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          <ContactsCrm contacts={contacts} />
        </Suspense>
      </div>
    </div>
  );
}

