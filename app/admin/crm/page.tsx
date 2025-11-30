import { prisma } from "@/lib/db";
import { CrmSpreadsheet } from "@/components/admin/crm-spreadsheet";
import { Suspense } from "react";

async function getConvertedLeads() {
  return await prisma.contact.findMany({
    where: {
      status: "converted",
    },
    orderBy: { updatedAt: "desc" },
  });
}

export default async function CrmPage() {
  let leads: Awaited<ReturnType<typeof getConvertedLeads>>;
  try {
    leads = await getConvertedLeads();
  } catch (error) {
    console.error("Error fetching converted leads:", error);
    leads = [];
  }

  return (
    <div className="py-8">
      <div className="max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">CRM - Lead Management</h1>
          <p className="text-gray-600 mt-2">
            Manage your converted leads in an Excel-style spreadsheet
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          <CrmSpreadsheet leads={leads} />
        </Suspense>
      </div>
    </div>
  );
}

