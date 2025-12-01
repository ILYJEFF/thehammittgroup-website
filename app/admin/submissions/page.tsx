import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { SubmissionsExportButton } from "@/components/admin/submissions-export-button";
import { Badge } from "@/components/ui/badge";
import { StatusSelector } from "@/components/admin/status-selector";

export const dynamic = 'force-dynamic';

async function getCandidates(searchParams: {
  location?: string;
  industry?: string;
  status?: string;
}) {
  const where: any = {};

  if (searchParams.location) {
    where.desiredLocation = searchParams.location;
  }

  if (searchParams.industry) {
    where.industry = { contains: searchParams.industry, mode: "insensitive" };
  }

  if (searchParams.status) {
    where.status = searchParams.status;
  }

  return await prisma.candidate.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
}

export default async function SubmissionsPage({
  searchParams,
}: {
  searchParams: { location?: string; industry?: string; status?: string };
}) {
  let candidates: Awaited<ReturnType<typeof getCandidates>>;
  try {
    candidates = await getCandidates(searchParams);
  } catch (error) {
    console.error("Error fetching candidates:", error);
    candidates = [];
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Candidate Submissions</h1>
            <p className="text-gray-600 mt-2">Manage candidate resumes and applications</p>
          </div>
          {candidates.length > 0 && <SubmissionsExportButton candidates={candidates} />}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <form method="get" className="flex gap-4 flex-wrap">
              <Select name="location" defaultValue={searchParams.location || ""}>
                <option value="">All Locations</option>
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
              <Select name="status" defaultValue={searchParams.status || ""}>
                <option value="">All Statuses</option>
                <option value="new">New</option>
                <option value="reviewing">Reviewing</option>
                <option value="contacted">Contacted</option>
                <option value="placed">Placed</option>
              </Select>
              <Button type="submit" variant="primary">
                Filter
              </Button>
              {searchParams.location || searchParams.industry || searchParams.status ? (
                <Link href="/admin/submissions">
                  <Button type="button" variant="outline">
                    Clear
                  </Button>
                </Link>
              ) : null}
            </form>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Candidates ({candidates.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {candidates.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No candidates found</p>
                ) : (
                  candidates.map((candidate) => (
                    <div
                      key={candidate.id}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {candidate.firstName} {candidate.lastName}
                          </h3>
                          <p className="text-sm text-gray-600">{candidate.email}</p>
                        </div>
                        <div className="text-right">
                          <StatusSelector
                            candidateId={candidate.id}
                            currentStatus={candidate.status}
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(candidate.createdAt)}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                        <div>
                          <strong>Phone:</strong>{" "}
                          <a
                            href={`tel:${candidate.phone}`}
                            className="text-primary-600 hover:underline"
                          >
                            {candidate.phone}
                          </a>
                        </div>
                        <div>
                          <strong>Current Location:</strong> {candidate.currentLocation}
                        </div>
                        <div>
                          <strong>Desired Location:</strong> {candidate.desiredLocation}
                        </div>
                        <div>
                          <strong>Industry:</strong> {candidate.industry}
                        </div>
                        <div>
                          <strong>Position:</strong> {candidate.positionType}
                        </div>
                      </div>
                      {candidate.coverLetter && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-sm font-medium text-gray-700 mb-1">
                            Cover Letter:
                          </p>
                          <p className="text-sm text-gray-600">{candidate.coverLetter}</p>
                        </div>
                      )}
                      {candidate.resumeUrl && (
                        <div className="mt-3">
                          <a
                            href={candidate.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                          >
                            View Resume →
                          </a>
                        </div>
                      )}
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

