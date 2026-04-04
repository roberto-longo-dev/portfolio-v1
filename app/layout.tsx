import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const baseUrl = "https://robertolongo.dev";

export const metadata: Metadata = {
  title: "Roberto Longo — Full-Stack Engineer",
  description:
    "Full-Stack Engineer specializing in backend and edge infrastructure. Building scalable web platforms with Node.js, TypeScript and Cloudflare.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Roberto Longo — Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in backend and edge infrastructure. Building scalable web platforms with Node.js, TypeScript and Cloudflare.",
    url: baseUrl,
    siteName: "Roberto Longo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roberto Longo — Full-Stack Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roberto Longo — Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in backend and edge infrastructure. Building scalable web platforms with Node.js, TypeScript and Cloudflare.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${dmMono.variable}`}
    >
      <body className="antialiased bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
