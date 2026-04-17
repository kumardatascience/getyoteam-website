import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import Contact from "@/app/components/Contact";

export const metadata: Metadata = {
  title: "Contact Kumar Katariya — Hire AI/ML Engineer | getyoteam",
  description:
    "Start your AI/ML project today. Hire Kumar Katariya — Top Rated Plus Upwork Engineer. Response within 24 hours. RAG, LLMs, Computer Vision, NLP available.",
  alternates: { canonical: "https://getyoteam.com/contact" },
  openGraph: {
    title: "Contact Kumar Katariya — Hire AI/ML Engineer | getyoteam",
    description:
      "Start your AI/ML project today. Hire Kumar Katariya — Top Rated Plus Upwork Engineer. Response within 24 hours. RAG, LLMs, Computer Vision, NLP available.",
    url: "https://getyoteam.com/contact",
    type: "website",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "Contact Kumar Katariya — AI/ML Engineer",
      },
    ],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://getyoteam.com/contact" },
    ],
  };

  return (
    <div className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      </div>
      <Contact />
    </div>
  );
}
