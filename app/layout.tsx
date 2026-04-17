import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Kumar Katariya | AI/ML Engineer | Top Rated Upwork",
  description:
    "Kumar Katariya — AI/ML Engineer: RAG, LLMs, LangChain, NLP & Computer Vision. Top Rated Plus Upwork (Top 3%), 117+ projects, $400K+ earned. Ahmedabad, India.",
  keywords: [
    "AI ML Engineer",
    "RAG LangChain",
    "LLM development",
    "NLP engineer",
    "computer vision",
    "Kumar Katariya",
    "getyoteam",
    "Upwork Top Rated Plus",
    "AI chatbot development",
    "machine learning consultant",
  ],
  authors: [{ name: "Kumar Katariya", url: "https://getyoteam.com" }],
  creator: "Kumar Katariya",
  metadataBase: new URL("https://getyoteam.com"),
  alternates: { canonical: "https://getyoteam.com" },
  openGraph: {
    title: "Kumar Katariya | AI/ML Engineer | Top Rated Upwork",
    description:
      "Top Rated Plus AI/ML Engineer on Upwork. RAG, LLMs, LangChain, NLP, Computer Vision. 117+ projects · $400K+ earned · 100% Job Success.",
    url: "https://getyoteam.com",
    siteName: "getyoteam",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "getyoteam — Kumar Katariya AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Katariya | AI/ML Engineer | Top Rated Upwork",
    description:
      "Top Rated Plus AI/ML Engineer on Upwork. RAG, LLMs, LangChain, NLP, Computer Vision. 117+ projects · $400K+ earned.",
    images: ["https://getyoteam.com/getyoteam-1.png"],
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
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "getyoteam",
    url: "https://getyoteam.com",
    description: "AI/ML engineering services by Kumar Katariya",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://getyoteam.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kumar Katariya",
    jobTitle: "AI/ML Engineer",
    url: "https://getyoteam.com",
    email: "info@getyoteam.com",
    telephone: "+91-9106939053",
    image: "https://getyoteam.com/getyoteam-1.png",
    sameAs: [
      "https://www.upwork.com/freelancers/aimlengineer",
      "https://www.kaggle.com/kumarkatariya",
      "https://github.com/kumardatascience",
      "https://www.linkedin.com/in/kumar-katariya/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380051",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "RAG",
      "LangChain",
      "LLMs",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "getyoteam",
    description:
      "AI/ML engineering services specialising in RAG, LLMs, LangChain, NLP and Computer Vision.",
    url: "https://getyoteam.com",
    founder: { "@type": "Person", name: "Kumar Katariya" },
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
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
