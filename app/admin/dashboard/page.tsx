import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardSkeleton } from "@/components/ui/loading";
import { Suspense } from "react";

async function getStats() {
  try {
    const [contactCount, candidateCount, recentContacts, recentCandidates] = await Promise.all([
      prisma.contact.count(),
      prisma.candidate.count(),
      prisma.contact.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
      }),
      prisma.candidate.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return {
      contactCount,
      candidateCount,
      recentContacts,
      recentCandidates,
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return {
      contactCount: 0,
      candidateCount: 0,
      recentContacts: [],
      recentCandidates: [],
    };
  }
}

export default async function DashboardPage() {
  const stats = await getStats();

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Overview of your recruitment activity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Total Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary-600">
                {stats.contactCount}
              </div>
              <p className="text-sm text-gray-500 mt-1">Contact form submissions</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Total Candidates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary-600">
                {stats.candidateCount}
              </div>
              <p className="text-sm text-gray-500 mt-1">Resume submissions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Recent Contacts</CardTitle>
                <Link href="/admin/contacts">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<CardSkeleton />}>
                <div className="space-y-4">
                  {stats.recentContacts.length === 0 ? (
                    <p className="text-gray-500 text-sm text-center py-4">No contacts yet</p>
                  ) : (
                    stats.recentContacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="border-b border-gray-200 pb-3 last:border-0 hover:bg-gray-50 p-2 rounded transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">{contact.contactName}</p>
                            <p className="text-sm text-gray-600">{contact.email}</p>
                            {contact.companyName && (
                              <p className="text-sm text-gray-500">{contact.companyName}</p>
                            )}
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                            {formatDate(contact.createdAt)}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Suspense>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Recent Candidates</CardTitle>
                <Link href="/admin/submissions">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<CardSkeleton />}>
                <div className="space-y-4">
                  {stats.recentCandidates.length === 0 ? (
                    <p className="text-gray-500 text-sm text-center py-4">No candidates yet</p>
                  ) : (
                    stats.recentCandidates.map((candidate) => (
                      <div
                        key={candidate.id}
                        className="border-b border-gray-200 pb-3 last:border-0 hover:bg-gray-50 p-2 rounded transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">
                              {candidate.firstName} {candidate.lastName}
                            </p>
                            <p className="text-sm text-gray-600">{candidate.email}</p>
                            <p className="text-sm text-gray-500">
                              {candidate.positionType} - {candidate.industry}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                            {formatDate(candidate.createdAt)}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
