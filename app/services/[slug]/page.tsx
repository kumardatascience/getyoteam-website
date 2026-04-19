import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { services } from "@/app/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services
    .filter((s) => s.slug)
    .map((s) => ({ slug: s.slug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const title = `${service.title} Services | getyoteam`;
  const desc = service.shortDesc.length > 160
    ? service.shortDesc.slice(0, 157) + "..."
    : service.shortDesc;
  return {
    title,
    description: desc,
    alternates: { canonical: `https://getyoteam.com/services/${slug}` },
    openGraph: {
      title,
      description: desc,
      url: `https://getyoteam.com/services/${slug}`,
      type: "website",
      images: [
        {
          url: "https://getyoteam.com/getyoteam-1.png",
          width: 1200,
          height: 630,
          alt: `${service.title} — getyoteam`,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://getyoteam.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://getyoteam.com/services/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.useCases.map((useCase) => ({
      "@type": "Question",
      name: `Can you build a ${useCase.toLowerCase()}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes — ${service.title} is one of my core specialisations. ${useCase}. Contact me at https://getyoteam.com/contact to discuss your project.`,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDesc,
    provider: {
      "@type": "Person",
      name: "Kumar Katariya",
      url: "https://getyoteam.com",
    },
    areaServed: "Worldwide",
    serviceType: service.title,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumb crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]} />

        {/* Hero */}
        <div className="mt-10 mb-12">
          <span className="text-5xl mb-4 block" role="img" aria-label={service.title}>{service.icon}</span>
          <h1 className="section-heading text-white mb-4">{service.title}</h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{service.shortDesc}</p>
        </div>

        {/* Description */}
        <div className="card-glass p-6 border border-purple-900/20 mb-8">
          <h2 className="text-base font-bold text-white mb-3">Overview</h2>
          <p className="text-slate-400 leading-relaxed">{service.longDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Tech stack */}
          <div className="card-glass p-6 border border-purple-900/20">
            <h2 className="text-base font-bold text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/30 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Use cases */}
          <div className="card-glass p-6 border border-purple-900/20">
            <h2 className="text-base font-bold text-white mb-4">Use Cases</h2>
            <ul className="space-y-2">
              {service.useCases.map((u) => (
                <li key={u} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="text-purple-400 mt-0.5 shrink-0">✓</span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-purple-900/20 bg-white/[0.02] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready to build with {service.title}?</h2>
          <p className="text-slate-400 text-sm mb-6">
            Tell me about your project and I&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/25 text-sm"
            >
              Start Your AI Project →
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 rounded-full font-semibold text-slate-300 border border-purple-800/40 hover:border-purple-500/60 hover:text-white transition-all text-sm"
            >
              See Related Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
