"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { AdminNavigation } from "@/components/admin/navigation";
import { PWARegister } from "@/components/admin/pwa-register";

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
      <>
        <Script id="pwa-meta" strategy="afterInteractive">
          {`
            const metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            metaThemeColor.content = '#1e40af';
            document.head.appendChild(metaThemeColor);
            
            const metaAppleMobile = document.createElement('meta');
            metaAppleMobile.name = 'apple-mobile-web-app-capable';
            metaAppleMobile.content = 'yes';
            document.head.appendChild(metaAppleMobile);
            
            const metaAppleStatusBar = document.createElement('meta');
            metaAppleStatusBar.name = 'apple-mobile-web-app-status-bar-style';
            metaAppleStatusBar.content = 'default';
            document.head.appendChild(metaAppleStatusBar);
            
            const linkManifest = document.createElement('link');
            linkManifest.rel = 'manifest';
            linkManifest.href = '/manifest.json';
            document.head.appendChild(linkManifest);
            
            const linkAppleIcon = document.createElement('link');
            linkAppleIcon.rel = 'apple-touch-icon';
            linkAppleIcon.href = '/favicon.png';
            document.head.appendChild(linkAppleIcon);
          `}
        </Script>
        <div className="min-h-screen bg-gray-50">
          <main>{children}</main>
        </div>
      </>
    );
  }

  // For other admin pages, show navigation (auth check happens in middleware)
  return (
    <>
      <Script id="pwa-meta" strategy="afterInteractive">
        {`
          const metaThemeColor = document.createElement('meta');
          metaThemeColor.name = 'theme-color';
          metaThemeColor.content = '#1e40af';
          document.head.appendChild(metaThemeColor);
          
          const metaAppleMobile = document.createElement('meta');
          metaAppleMobile.name = 'apple-mobile-web-app-capable';
          metaAppleMobile.content = 'yes';
          document.head.appendChild(metaAppleMobile);
          
          const metaAppleStatusBar = document.createElement('meta');
          metaAppleStatusBar.name = 'apple-mobile-web-app-status-bar-style';
          metaAppleStatusBar.content = 'default';
          document.head.appendChild(metaAppleStatusBar);
          
          const linkManifest = document.createElement('link');
          linkManifest.rel = 'manifest';
          linkManifest.href = '/manifest.json';
          document.head.appendChild(linkManifest);
          
          const linkAppleIcon = document.createElement('link');
          linkAppleIcon.rel = 'apple-touch-icon';
          linkAppleIcon.href = '/favicon.png';
          document.head.appendChild(linkAppleIcon);
        `}
      </Script>
      <PWARegister />
      <div className="min-h-screen bg-gray-50">
        <AdminNavigation />
        <main className="pb-safe">{children}</main>
      </div>
    </>
  );
}

