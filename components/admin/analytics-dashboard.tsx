"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="365">Last year</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Total Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary-600">{data.forms.totalSubmissions}</div>
            <p className="text-sm text-gray-500 mt-1">
              {data.forms.totalContacts} contacts + {data.forms.totalCandidates} candidates
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Contact Forms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{data.forms.totalContacts}</div>
            <p className="text-sm text-gray-500 mt-1">In the last {data.period} days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Resume Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{data.forms.totalCandidates}</div>
            <p className="text-sm text-gray-500 mt-1">In the last {data.period} days</p>
          </CardContent>
        </Card>
      </div>

      {/* Breakdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contacts by City</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data.breakdowns.contactsByCity.length === 0 ? (
                <p className="text-gray-500 text-sm">No data</p>
              ) : (
                data.breakdowns.contactsByCity.map((item) => (
                  <div key={item.city} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">{item.city}</span>
                    <span className="text-sm font-semibold text-gray-900">{item.count}</span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Candidates by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data.breakdowns.candidatesByLocation.length === 0 ? (
                <p className="text-gray-500 text-sm">No data</p>
              ) : (
                data.breakdowns.candidatesByLocation.map((item) => (
                  <div key={item.location} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">{item.location}</span>
                    <span className="text-sm font-semibold text-gray-900">{item.count}</span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blog Stats */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Blog Statistics</CardTitle>
            <Link href="/admin/blog">
              <button className="text-sm text-primary-600 hover:text-primary-700">Manage Blog</button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold text-gray-900">{data.blog.totalPosts}</div>
              <p className="text-sm text-gray-500">Total Posts</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{data.blog.publishedPosts}</div>
              <p className="text-sm text-gray-500">Published Posts</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

