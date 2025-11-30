"use client";

import { usePathname } from "next/navigation";
import { AdminNavigation } from "@/components/admin/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  // For login page, don't show navigation
  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main>{children}</main>
      </div>
    );
  }

  // For other admin pages, show navigation (auth check happens in middleware)
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavigation />
      <main>{children}</main>
    </div>
  );
}

