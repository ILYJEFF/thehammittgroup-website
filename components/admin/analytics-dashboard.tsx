"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

interface AnalyticsData {
  period: number;
  forms: {
    totalContacts: number;
    totalCandidates: number;
    totalSubmissions: number;
    recentContacts: any[];
    recentCandidates: any[];
  };
  blog: {
    totalPosts: number;
    publishedPosts: number;
    recentPosts: any[];
  };
  breakdowns: {
    contactsByCity: Array<{ city: string; count: number }>;
    candidatesByLocation: Array<{ location: string; count: number }>;
    contactsByStatus: Array<{ status: string; count: number }>;
  };
  trends: {
    daily: Array<{ date: string; contacts: number; candidates: number; total: number }>;
  };
}

export function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("30");

  useEffect(() => {
    fetchAnalytics();
  }, [period]);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/analytics?period=${period}`);
      if (response.ok) {
        const analyticsData = await response.json();
        setData(analyticsData);
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-gray-200 rounded animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (!data) {
    return <div className="text-center py-8 text-gray-500">No analytics data available</div>;
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="w-full sm:w-auto px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm md:text-base font-medium touch-manipulation min-h-[44px] bg-white"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="365">Last year</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
        <Card className="border-2 border-primary-100 hover:border-primary-300 transition-colors">
          <CardHeader className="pb-2 px-4 pt-4">
            <CardTitle className="text-sm font-semibold text-gray-700">Total Submissions</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{data.forms.totalSubmissions}</div>
            <p className="text-xs text-gray-600">
              {data.forms.totalContacts} contacts + {data.forms.totalCandidates} candidates
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
          <CardHeader className="pb-2 px-4 pt-4">
            <CardTitle className="text-sm font-semibold text-gray-700">Contact Forms</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{data.forms.totalContacts}</div>
            <p className="text-xs text-gray-600">Last {data.period} days</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
          <CardHeader className="pb-2 px-4 pt-4">
            <CardTitle className="text-sm font-semibold text-gray-700">Resume Submissions</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{data.forms.totalCandidates}</div>
            <p className="text-xs text-gray-600">Last {data.period} days</p>
          </CardContent>
        </Card>
      </div>

      {/* Breakdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="border-2 border-gray-200">
          <CardHeader className="pb-3 px-4 pt-4">
            <CardTitle className="text-base md:text-lg font-bold text-gray-900">Contacts by City</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="space-y-3">
              {data.breakdowns.contactsByCity.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-4">No data</p>
              ) : (
                data.breakdowns.contactsByCity.map((item) => (
                  <div key={item.city} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm md:text-base font-medium text-gray-700">{item.city}</span>
                    <span className="text-base md:text-lg font-bold text-primary-600">{item.count}</span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200">
          <CardHeader className="pb-3 px-4 pt-4">
            <CardTitle className="text-base md:text-lg font-bold text-gray-900">Candidates by Location</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="space-y-3">
              {data.breakdowns.candidatesByLocation.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-4">No data</p>
              ) : (
                data.breakdowns.candidatesByLocation.map((item) => (
                  <div key={item.location} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm md:text-base font-medium text-gray-700">{item.location}</span>
                    <span className="text-base md:text-lg font-bold text-secondary-600">{item.count}</span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blog Stats */}
      <Card className="border-2 border-gray-200">
        <CardHeader className="pb-3 px-4 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <CardTitle className="text-base md:text-lg font-bold text-gray-900">Blog Statistics</CardTitle>
            <Link href="/admin/blog" className="touch-manipulation">
              <Button variant="ghost" size="sm" className="min-h-[44px] text-xs md:text-sm font-semibold text-primary-600">
                Manage Blog
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{data.blog.totalPosts}</div>
              <p className="text-xs md:text-sm text-gray-600 font-medium">Total Posts</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border-2 border-green-100">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">{data.blog.publishedPosts}</div>
              <p className="text-xs md:text-sm text-gray-600 font-medium">Published Posts</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

