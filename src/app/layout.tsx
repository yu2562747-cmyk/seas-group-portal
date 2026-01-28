import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "./client-shell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SEAS GROUP PORTAL",
  description: "福祉グループの総合案内と各法人サイトへのポータル。",
  openGraph: {
    title: "SEAS GROUP PORTAL",
    description: "福祉グループの総合案内と各法人サイトへのポータル。",
    url: "/",
    images: [{ url: "/ogp.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp.png"],
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
