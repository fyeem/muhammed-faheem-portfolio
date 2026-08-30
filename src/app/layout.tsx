import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | Computer Science Engineering & Full-Stack Developer`,
  description: `${PERSONAL_INFO.name} — B.Tech Computer Science and Engineering student at Lovely Professional University. Full-stack developer building robust web applications with Next.js, TypeScript, PostgreSQL, and Supabase.`,
  keywords: [
    "Muhammed Faheem Abdul Azeez",
    "Muhammed Faheem",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Lovely Professional University",
    "Soulent Perfumes",
    "PostgreSQL",
    "Supabase",
    "Smart India Hackathon",
    "Portfolio",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.githubUrl }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammedfaheem.dev",
    title: `${PERSONAL_INFO.name} | Full-Stack Developer Portfolio`,
    description: `${PERSONAL_INFO.title} • Specializing in Next.js, TypeScript, and PostgreSQL applications.`,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Full-Stack Developer`,
    description: `${PERSONAL_INFO.title} • Next.js, TypeScript, Supabase, PostgreSQL.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: "Computer Science Engineering Student & Full-Stack Developer",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Lovely Professional University",
      },
    ],
    url: "https://muhammedfaheem.dev",
    sameAs: [
      PERSONAL_INFO.githubUrl,
      PERSONAL_INFO.linkedinUrl,
    ],
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Supabase",
      "Python",
      "C++",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "Vercel",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#080c14] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
