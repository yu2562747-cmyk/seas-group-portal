import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "./client-shell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SEAS GROUP PORTAL",
    template: "%s | SEAS GROUP PORTAL",
  },
  description: "福祉グループの総合案内と各法人サイトへのポータル。",
  applicationName: "SEAS GROUP PORTAL",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SEAS GROUP PORTAL",
    description: "福祉グループの総合案内と各法人サイトへのポータル。",
    url: "/",
    siteName: "SEAS GROUP PORTAL",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "SEAS GROUP PORTAL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEAS GROUP PORTAL",
    description: "福祉グループの総合案内と各法人サイトへのポータル。",
    images: ["/ogp.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
