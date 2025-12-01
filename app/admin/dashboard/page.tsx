import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardSkeleton } from "@/components/ui/loading";
import { Suspense } from "react";
import { AnalyticsDashboard } from "@/components/admin/analytics-dashboard";

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
    <div className="py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Overview of your recruitment activity</p>
        </div>

        <div className="mb-8">
          <AnalyticsDashboard />
        </div>

        {stats.contactCount === 0 && stats.candidateCount === 0 && (
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Welcome to The Hammitt Group Admin Dashboard
            </h3>
            <p className="text-blue-800">
              Once you start receiving contact form submissions and candidate resumes, they&apos;ll appear here.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card className="hover:shadow-md transition-shadow touch-manipulation">
            <CardHeader className="pb-3">
              <CardTitle className="text-base md:text-lg">Total Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl md:text-3xl font-bold text-primary-600">
                {stats.contactCount}
              </div>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Contact form submissions</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow touch-manipulation">
            <CardHeader className="pb-3">
              <CardTitle className="text-base md:text-lg">Total Candidates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl md:text-3xl font-bold text-secondary-600">
                {stats.candidateCount}
              </div>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Resume submissions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <CardTitle className="text-base md:text-lg">Recent Contacts</CardTitle>
                <Link href="/admin/contacts" className="touch-manipulation">
                  <Button variant="ghost" size="sm" className="min-h-[44px] min-w-[80px]">View All</Button>
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
                        className="border-b border-gray-200 pb-3 last:border-0 hover:bg-gray-50 p-3 md:p-2 rounded transition-colors touch-manipulation min-h-[60px]"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 text-sm md:text-base truncate">{contact.contactName}</p>
                            <p className="text-xs md:text-sm text-gray-600 truncate">{contact.email}</p>
                            {contact.companyName && (
                              <p className="text-xs md:text-sm text-gray-500 truncate">{contact.companyName}</p>
                            )}
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
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
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <CardTitle className="text-base md:text-lg">Recent Candidates</CardTitle>
                <Link href="/admin/submissions" className="touch-manipulation">
                  <Button variant="ghost" size="sm" className="min-h-[44px] min-w-[80px]">View All</Button>
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
                        className="border-b border-gray-200 pb-3 last:border-0 hover:bg-gray-50 p-3 md:p-2 rounded transition-colors touch-manipulation min-h-[60px]"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 text-sm md:text-base truncate">
                              {candidate.firstName} {candidate.lastName}
                            </p>
                            <p className="text-xs md:text-sm text-gray-600 truncate">{candidate.email}</p>
                            <p className="text-xs md:text-sm text-gray-500 truncate">
                              {candidate.positionType} - {candidate.industry}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
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
