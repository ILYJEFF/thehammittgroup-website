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

        <div className="grid grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8">
          <Card className="hover:shadow-lg active:shadow-xl transition-all touch-manipulation border-2 border-primary-100">
            <CardHeader className="pb-2 px-4 pt-4">
              <CardTitle className="text-sm md:text-base font-semibold text-gray-700">Contacts</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                {stats.contactCount}
              </div>
              <p className="text-xs text-gray-500">Form submissions</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg active:shadow-xl transition-all touch-manipulation border-2 border-secondary-100">
            <CardHeader className="pb-2 px-4 pt-4">
              <CardTitle className="text-sm md:text-base font-semibold text-gray-700">Candidates</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-1">
                {stats.candidateCount}
              </div>
              <p className="text-xs text-gray-500">Resume submissions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card className="border-2 border-gray-200">
            <CardHeader className="pb-3 px-4 pt-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg md:text-xl font-bold text-gray-900">Recent Contacts</CardTitle>
                <Link href="/admin/contacts" className="touch-manipulation">
                  <Button variant="ghost" size="sm" className="min-h-[44px] px-3 text-xs md:text-sm font-semibold text-primary-600">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <Suspense fallback={<CardSkeleton />}>
                <div className="space-y-3">
                  {stats.recentContacts.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500 text-sm">No contacts yet</p>
                    </div>
                  ) : (
                    stats.recentContacts.map((contact) => (
                      <Link
                        key={contact.id}
                        href={`/admin/contacts`}
                        className="block border-2 border-gray-100 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50/50 active:bg-primary-100 transition-all touch-manipulation"
                      >
                        <div className="flex justify-between items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-base text-gray-900 mb-1 truncate">{contact.contactName}</p>
                            <p className="text-sm text-primary-600 font-medium truncate mb-1">{contact.email}</p>
                            {contact.companyName && (
                              <p className="text-xs text-gray-600 truncate">{contact.companyName}</p>
                            )}
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0 font-medium">
                            {formatDate(contact.createdAt)}
                          </span>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </Suspense>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardHeader className="pb-3 px-4 pt-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg md:text-xl font-bold text-gray-900">Recent Candidates</CardTitle>
                <Link href="/admin/submissions" className="touch-manipulation">
                  <Button variant="ghost" size="sm" className="min-h-[44px] px-3 text-xs md:text-sm font-semibold text-primary-600">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <Suspense fallback={<CardSkeleton />}>
                <div className="space-y-3">
                  {stats.recentCandidates.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500 text-sm">No candidates yet</p>
                    </div>
                  ) : (
                    stats.recentCandidates.map((candidate) => (
                      <Link
                        key={candidate.id}
                        href={`/admin/submissions`}
                        className="block border-2 border-gray-100 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50/50 active:bg-primary-100 transition-all touch-manipulation"
                      >
                        <div className="flex justify-between items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-base text-gray-900 mb-1 truncate">
                              {candidate.firstName} {candidate.lastName}
                            </p>
                            <p className="text-sm text-primary-600 font-medium truncate mb-1">{candidate.email}</p>
                            <p className="text-xs text-gray-600 truncate">
                              {candidate.positionType} - {candidate.industry}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0 font-medium">
                            {formatDate(candidate.createdAt)}
                          </span>
                        </div>
                      </Link>
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
