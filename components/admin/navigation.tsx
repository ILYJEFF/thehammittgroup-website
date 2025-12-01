"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AdminNavigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/contacts", label: "Contacts" },
    { href: "/admin/crm", label: "CRM" },
    { href: "/admin/submissions", label: "Submissions" },
    { href: "/admin/blog", label: "Blog" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop: Logo and Nav */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link href="/admin/dashboard" className="text-lg md:text-xl font-bold text-primary-900">
              Admin
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-2 lg:px-3 py-2 text-sm font-medium transition-colors touch-manipulation",
                    pathname === item.href
                      ? "text-primary-600 border-b-2 border-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop: Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              View Site
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="touch-manipulation"
            >
              Sign Out
            </Button>
          </div>

          {/* Mobile: Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 px-2">
              Site
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 touch-manipulation"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-3 text-base font-medium rounded-md touch-manipulation min-h-[44px] flex items-center",
                    pathname === item.href
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200 mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut({ callbackUrl: "/admin/login" });
                  }}
                  className="w-full justify-start min-h-[44px] touch-manipulation"
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

