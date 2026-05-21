import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteConfig } from "@/lib/site-config";
import "./globals.css";

/** Read env on each request (Vercel dashboard changes apply without code edits). */
export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const site = getSiteConfig();
  return {
    metadataBase: new URL(site.siteUrl),
    title: {
      default: `${site.name} — Terminal file explorer`,
      template: `%s · ${site.name}`,
    },
    description: site.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = getSiteConfig();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader site={site} />
        <main className="flex-1">{children}</main>
        <SiteFooter site={site} />
      </body>
    </html>
  );
}
