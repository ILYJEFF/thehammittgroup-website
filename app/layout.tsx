import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toast";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Hammitt Group | Texas Manufacturing Recruitment Specialists",
  description: "Premier recruiting agency specializing in Texas manufacturing. Connecting top talent with leading manufacturers in DFW, Austin, Houston, and San Antonio.",
  keywords: "Texas manufacturing recruitment, DFW manufacturing jobs, Austin manufacturing recruiters, Houston manufacturing staffing, San Antonio manufacturing careers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}

