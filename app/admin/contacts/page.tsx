import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { ContactsExportButton } from "@/components/admin/contacts-export-button";

async function getContacts(searchParams: { city?: string; industry?: string }) {
  const where: any = {};

  if (searchParams.city) {
    where.city = searchParams.city;
  }

  if (searchParams.industry) {
    where.industry = { contains: searchParams.industry, mode: "insensitive" };
  }

  return await prisma.contact.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
}

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: { city?: string; industry?: string };
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
            <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
            <p className="text-gray-600 mt-2">Manage and review contact form submissions</p>
          </div>
          {contacts.length > 0 && <ContactsExportButton contacts={contacts} />}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <form method="get" className="flex gap-4">
              <Select name="city" defaultValue={searchParams.city || ""}>
                <option value="">All Cities</option>
                <option value="DFW">Dallas-Fort Worth</option>
                <option value="Austin">Austin</option>
                <option value="Houston">Houston</option>
                <option value="San Antonio">San Antonio</option>
              </Select>
              <input
                type="text"
                name="industry"
                placeholder="Filter by industry..."
                defaultValue={searchParams.industry || ""}
                className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
              />
              <Button type="submit" variant="primary">Filter</Button>
              {searchParams.city || searchParams.industry ? (
                <Link href="/admin/contacts">
                  <Button type="button" variant="outline">Clear</Button>
                </Link>
              ) : null}
            </form>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Contacts ({contacts.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No contacts found</p>
                ) : (
                  contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {contact.contactName}
                          </h3>
                          {contact.companyName && (
                            <p className="text-sm text-gray-600">{contact.companyName}</p>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">
                          {formatDate(contact.createdAt)}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                        <div>
                          <strong>Email:</strong>{" "}
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-primary-600 hover:underline"
                          >
                            {contact.email}
                          </a>
                        </div>
                        <div>
                          <strong>Phone:</strong>{" "}
                          <a
                            href={`tel:${contact.phone}`}
                            className="text-primary-600 hover:underline"
                          >
                            {contact.phone}
                          </a>
                        </div>
                        <div>
                          <strong>City:</strong> {contact.city}
                        </div>
                        {contact.industry && (
                          <div>
                            <strong>Industry:</strong> {contact.industry}
                          </div>
                        )}
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-700">{contact.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

