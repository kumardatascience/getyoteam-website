import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import Contact from "@/app/components/Contact";

export const metadata: Metadata = {
  title: "Contact Kumar Katariya — Hire AI/ML Engineer | GetyoTeam",
  description:
    "Start your AI project with Kumar Katariya. Top Rated Plus AI/ML Engineer on Upwork. Response within 24 hours. WhatsApp available.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      </div>
      <Contact />
    </div>
  );
}
