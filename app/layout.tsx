import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  const siteUrl = new URL(`${protocol}://${host}`);
  const shareImage = new URL("/og.png", siteUrl).toString();

  return {
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
      images: [{ url: shareImage, width: 1733, height: 907, alt: "Muhammad Azeem — Full-Stack and Applied AI Engineer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Muhammad Azeem — Full-Stack & Applied AI Engineer",
      description: "Evidence-grounded AI, secure SaaS, and production-minded software systems.",
      images: [shareImage],
    },
    icons: {
      icon: [{ url: "/profile.jpg", type: "image/jpeg" }],
      shortcut: "/profile.jpg",
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
