import type { Metadata } from "next";
import "./globals.css";

const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  "http://localhost:3000";

const siteUrl = new URL(
  deploymentUrl.startsWith("http") ? deploymentUrl : `https://${deploymentUrl}`,
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Muhammad Azeem — Full-Stack & Applied AI Engineer",
  description:
    "Software Engineer building production-minded Full-Stack and Applied AI systems with Python, FastAPI, Next.js, TypeScript, and PostgreSQL.",
  keywords: [
    "Muhammad Azeem",
    "Software Engineer",
    "Applied AI Engineer",
    "Full-Stack Engineer",
    "LLM Engineering",
    "FastAPI",
    "Next.js",
    "PostgreSQL",
  ],
  authors: [{ name: "Muhammad Azeem", url: "https://github.com/muhammadAzeem0x000" }],
  openGraph: {
    title: "Muhammad Azeem — Full-Stack & Applied AI Engineer",
    description: "Evidence-grounded AI, secure SaaS, and production-minded software systems.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 907,
        alt: "Muhammad Azeem — Full-Stack and Applied AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Azeem — Full-Stack & Applied AI Engineer",
    description: "Evidence-grounded AI, secure SaaS, and production-minded software systems.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/profile.jpg", type: "image/jpeg" }],
    shortcut: "/profile.jpg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
