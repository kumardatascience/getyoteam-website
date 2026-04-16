import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GetyoTeam | AI/ML Engineer — Kumar Katariya | Top Rated Plus Upwork",
  description:
    "Kumar Katariya — AI/ML Engineer specialising in RAG, LLMs, LangChain, NLP & Computer Vision. Top Rated Plus on Upwork (Top 3%), 117+ projects, $400K+ earned. Based in Ahmedabad, India.",
  keywords: [
    "AI ML Engineer",
    "RAG LangChain",
    "LLM development",
    "NLP engineer",
    "computer vision",
    "Kumar Katariya",
    "GetyoTeam",
    "Upwork Top Rated Plus",
    "AI chatbot development",
    "machine learning consultant",
  ],
  authors: [{ name: "Kumar Katariya", url: "https://getyoteam.com" }],
  creator: "Kumar Katariya",
  metadataBase: new URL("https://getyoteam.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "GetyoTeam | AI/ML Engineer — Kumar Katariya",
    description:
      "Top Rated Plus AI/ML Engineer on Upwork. RAG, LLMs, LangChain, NLP, Computer Vision. 117+ projects · $400K+ earned · 100% Job Success.",
    url: "https://getyoteam.com",
    siteName: "GetyoTeam",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GetyoTeam",
    description:
      "AI/ML engineering services specialising in RAG, LLMs, LangChain, NLP and Computer Vision.",
    url: "https://getyoteam.com",
    founder: {
      "@type": "Person",
      name: "Kumar Katariya",
      jobTitle: "AI/ML Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      email: "info@getyoteam.com",
      telephone: "+91-9106939053",
    },
    areaServed: "Worldwide",
    serviceType: [
      "AI Agent Development",
      "RAG & LLM Applications",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Data Science",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07070f] text-slate-200">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
