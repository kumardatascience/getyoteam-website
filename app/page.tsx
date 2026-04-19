import type { Metadata } from "next";
import Hero          from "@/app/components/Hero";
import Achievements  from "@/app/components/Achievements";
import Services      from "@/app/components/Services";
import Portfolio     from "@/app/components/Portfolio";
import KaggleSection from "@/app/components/KaggleSection";
import About         from "@/app/components/About";
import Testimonials  from "@/app/components/Testimonials";
import TechStack     from "@/app/components/TechStack";
import Contact       from "@/app/components/Contact";

export const metadata: Metadata = {
  title: "AI/ML Engineer for Hire | RAG, LangChain & LLM Apps | getyoteam",
  description:
    "Hire Kumar Katariya — Top Rated Plus AI/ML Engineer on Upwork. Build RAG systems, LLM apps, computer vision & ML solutions. 117+ projects, $400K+ earned.",
  keywords: [
    "AI development company",
    "machine learning services",
    "LangChain development",
    "RAG chatbot development",
    "computer vision solutions",
    "AI consulting services",
    "deep learning solutions",
    "NLP development",
    "LLM applications",
    "predictive analytics services",
    "time series forecasting",
    "hire AI engineer",
  ],
  alternates: { canonical: "https://getyoteam.com" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <Services />
      <Portfolio />
      <KaggleSection />
      <About />
      <Testimonials />
      <TechStack />
      <Contact />
    </>
  );
}
