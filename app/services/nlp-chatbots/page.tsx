import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "RAG & LLM Application Development Company | LangChain & LlamaIndex | getyoteam",
  description:
    "Top-rated RAG & LLM application development company serving USA, Europe & Australia. Custom RAG systems, AI chatbots & document Q&A. 117+ projects · 100% JSS.",
  keywords: [
    "RAG application development",
    "LLM application development",
    "retrieval augmented generation",
    "LangChain development",
    "LlamaIndex development",
    "AI chatbot with RAG",
    "document Q&A AI",
    "custom RAG systems",
    "enterprise RAG solutions",
    "RAG developer USA",
    "RAG development Australia",
    "vector database development",
    "AI knowledge assistant",
    "hallucination-free AI",
  ],
  alternates: { canonical: "https://getyoteam.com/services/nlp-chatbots" },
  openGraph: {
    title: "RAG & LLM Application Development Company | LangChain & LlamaIndex | getyoteam",
    description:
      "Top-rated RAG & LLM application development company serving USA, Europe & Australia. Custom RAG systems, AI chatbots & document Q&A. 117+ projects.",
    url: "https://getyoteam.com/services/nlp-chatbots",
    type: "website",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "RAG & LLM Application Development — getyoteam",
      },
    ],
  },
};

const useCases = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Document Q&A Systems",
    desc: "Ask natural-language questions against any PDF, Word doc, or internal report and get cited, accurate answers — no manual searching.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Knowledge Assistants",
    desc: "Internal chatbots that answer employee questions from your Notion, Confluence, SharePoint, or Google Drive — with source citations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Customer Support Chatbots",
    desc: "Grounded support bots that answer from your product docs, FAQs, and knowledge base — no hallucinated policies, no wrong answers.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Research Automation",
    desc: "LLM pipelines that ingest multiple sources, extract key insights, and produce structured research summaries — in minutes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582 4-8 4s8 1.79 8 4" />
      </svg>
    ),
    title: "Enterprise Search Systems",
    desc: "Semantic search across thousands of internal documents — finds meaning, not just keywords, across your entire knowledge corpus.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Legal Document Analysis",
    desc: "RAG systems that search contracts, case law, and compliance docs — surfacing relevant clauses instantly with exact source references.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "HR & Policy Compliance Bots",
    desc: "Chatbots that answer HR policy questions, onboarding queries, and compliance checks from your internal handbooks — 24/7.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "E-learning & Tutoring AI",
    desc: "Adaptive LLM tutors grounded in course material — students get precise, sourced answers from your curriculum, not generic web content.",
  },
];

const industries = [
  { icon: "☁️", name: "SaaS",        desc: "Product docs, onboarding, in-app support" },
  { icon: "🏥", name: "Healthcare",   desc: "Clinical docs, patient FAQs, compliance" },
  { icon: "⚖️", name: "Legal",        desc: "Contract review, case research, compliance" },
  { icon: "💰", name: "Finance",      desc: "Report analysis, policy Q&A, research" },
  { icon: "🎓", name: "E-learning",   desc: "Course Q&A, tutoring, curriculum search" },
  { icon: "🏢", name: "Consulting",   desc: "Knowledge base, proposal research, insights" },
];

const process = [
  {
    step: "01",
    title: "Document Ingestion & Pipeline Design",
    desc: "I audit your data sources — PDFs, databases, wikis, APIs — and design the ingestion pipeline. This includes format handling, deduplication, and metadata tagging so retrieval is accurate from day one.",
  },
  {
    step: "02",
    title: "Chunking Strategy & Embedding",
    desc: "The right chunk size and overlap are critical — too small loses context, too large dilutes relevance. I tune these parameters for your specific document types, then generate embeddings using the best model for your domain.",
  },
  {
    step: "03",
    title: "Vector Database Setup & Retrieval Tuning",
    desc: "I configure ChromaDB, Pinecone, or FAISS to store your embeddings and tune the retrieval — top-k selection, similarity thresholds, and optional re-ranking — until the right context is fetched every time.",
  },
  {
    step: "04",
    title: "LLM Integration & Prompt Engineering",
    desc: "The LLM receives only the retrieved context with a strict grounding instruction: answer from what you have been given. I engineer prompts that maximise accuracy, enforce citation, and prevent hallucination.",
  },
  {
    step: "05",
    title: "Deployment, Monitoring & Iteration",
    desc: "I ship the system with a FastAPI backend, observability logging, and a tested interface. Post-launch, I monitor retrieval quality and refine chunk strategy and prompts based on real query patterns.",
  },
];

const techStack = [
  { name: "LangChain",    color: "border-green-700/40 text-green-300 bg-green-900/15" },
  { name: "LlamaIndex",   color: "border-purple-700/40 text-purple-300 bg-purple-900/15" },
  { name: "OpenAI",       color: "border-emerald-700/40 text-emerald-300 bg-emerald-900/15" },
  { name: "Claude API",   color: "border-orange-700/40 text-orange-300 bg-orange-900/15" },
  { name: "ChromaDB",     color: "border-sky-700/40 text-sky-300 bg-sky-900/15" },
  { name: "Pinecone",     color: "border-blue-700/40 text-blue-300 bg-blue-900/15" },
  { name: "FAISS",        color: "border-teal-700/40 text-teal-300 bg-teal-900/15" },
  { name: "Weaviate",     color: "border-violet-700/40 text-violet-300 bg-violet-900/15" },
  { name: "Python",       color: "border-indigo-700/40 text-indigo-300 bg-indigo-900/15" },
  { name: "FastAPI",      color: "border-cyan-700/40 text-cyan-300 bg-cyan-900/15" },
  { name: "Streamlit",    color: "border-red-700/40 text-red-300 bg-red-900/15" },
  { name: "Docker",       color: "border-yellow-700/40 text-yellow-300 bg-yellow-900/15" },
];

const faqs = [
  {
    q: "What is RAG in AI, and why does it matter?",
    a: "RAG stands for Retrieval-Augmented Generation. Instead of relying solely on what an LLM was trained on, RAG first retrieves the most relevant passages from your actual documents, then passes them to the LLM as context. The result is answers grounded in your data — accurate, cited, and always up to date.",
  },
  {
    q: "How does RAG reduce hallucinations in AI chatbots?",
    a: "Standard LLMs generate answers from their training data — if they don't know something, they invent a plausible-sounding answer (hallucination). RAG constrains the LLM: it can only answer from the retrieved context. If the context doesn't contain the answer, the system says so — rather than guessing.",
  },
  {
    q: "What is an LLM application, and how is it different from ChatGPT?",
    a: "ChatGPT is a general-purpose LLM with no access to your data. An LLM application is a custom system built around an LLM — connected to your documents, databases, and business logic. It knows your products, your policies, and your customers. It is purpose-built, not general-purpose.",
  },
  {
    q: "How long does it take to build a RAG system?",
    a: "A working proof-of-concept for a single document corpus can be ready in 3–5 days. A production-grade system with multiple data sources, retrieval tuning, authentication, and deployment typically takes 2–5 weeks depending on data complexity and integration requirements.",
  },
  {
    q: "Can a RAG system work with my existing documents and databases?",
    a: "Yes — RAG systems are designed to connect to your existing data. I can ingest PDFs, Word documents, spreadsheets, web pages, SQL databases, Notion, Confluence, SharePoint, Google Drive, and any API that exposes your content. Custom connectors are built as needed.",
  },
  {
    q: "Which vector database should I use — ChromaDB, Pinecone, or FAISS?",
    a: "It depends on scale and infrastructure. ChromaDB is ideal for getting started quickly and local/self-hosted deployments. Pinecone is the best managed cloud option for production scale. FAISS is excellent for high-performance on-premise deployments. I recommend the right one for your use case after the discovery call.",
  },
];

const relatedServices = [
  { slug: "ai-agents",        title: "AI Agent Development",      icon: "🤖" },
  { slug: "machine-learning", title: "Machine Learning Solutions", icon: "📈" },
  { slug: "data-science",     title: "Data Science Consulting",    icon: "📊" },
];

export default function RAGLLMPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://getyoteam.com/services" },
      { "@type": "ListItem", position: 3, name: "RAG & LLM Applications", item: "https://getyoteam.com/services/nlp-chatbots" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "RAG & LLM Application Development",
    description:
      "Custom Retrieval-Augmented Generation (RAG) systems and LLM applications built with LangChain, LlamaIndex, and vector databases. Hallucination-free AI grounded in your own documents and data.",
    provider: { "@type": "Person", name: "Kumar Katariya", url: "https://getyoteam.com" },
    areaServed: ["United States", "Australia", "United Kingdom", "Europe", "Worldwide"],
    serviceType: "RAG & LLM Application Development",
    offers: { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-700/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,165,233,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.5) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "RAG & LLM Applications" },
          ]} />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <h1 className="section-heading text-white mb-4">
                RAG &amp; LLM Application<br />
                <span className="gradient-text">Development Services</span>
              </h1>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-900/20 text-xs font-medium text-sky-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Serving clients in USA · Europe · Australia
              </div>

              <p className="text-slate-400 leading-relaxed mb-4">
                Build AI chatbots with RAG and custom LLM applications that answer from <em>your</em> data —
                not from guesswork. Our RAG development services connect LLMs to your documents,
                databases, and knowledge bases, delivering accurate, cited answers with
                near-zero hallucination.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                As a RAG development company, I design and deploy production-grade RAG
                pipelines using LangChain, LlamaIndex, and vector databases. Whether you need
                enterprise AI solutions, an AI chatbot with RAG, or a document Q&amp;A assistant —
                every build is grounded, observable, and production-ready. These systems pair
                naturally with{" "}
                <Link href="/services/ai-agents" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
                  AI agent workflows
                </Link>,{" "}
                <Link href="/services/machine-learning" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
                  machine learning pipelines
                </Link>, or{" "}
                <Link href="/services/data-science" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
                  data science solutions
                </Link>{" "}
                for end-to-end intelligence.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">
                Unlike generic chatbot demos, these systems are built for real production
                environments — with hallucination control, source citation, and monitoring
                built in from day one.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["LangChain", "LlamaIndex", "ChromaDB", "Pinecone"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-sky-900/30 text-sky-300 border border-sky-800/30 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/25 text-sm"
                >
                  Start My RAG Project →
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-full font-semibold text-slate-300 border border-sky-800/40 hover:border-sky-500/60 hover:text-white transition-all text-sm"
                >
                  See RAG Examples
                </Link>
              </div>
            </div>

            {/* Right: RAG pipeline diagram */}
            <div className="card-glass p-6 border border-sky-900/30">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-5">
                RAG Pipeline Architecture
              </p>

              {/* Data sources */}
              <div className="flex justify-center mb-3">
                <div className="flex flex-wrap justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/40 max-w-xs">
                  {["PDF / Word", "Database", "Wiki / Notion", "Web Pages"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-400 border border-slate-600/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-sky-700/50" />
              </div>

              {/* Chunking + Embedding */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "Chunking", color: "bg-sky-900/30 border-sky-700/40 text-sky-300" },
                  { label: "Embedding", color: "bg-violet-900/30 border-violet-700/40 text-violet-300" },
                ].map((a) => (
                  <div key={a.label} className={`rounded-lg border px-2 py-2 text-center text-xs font-medium ${a.color}`}>
                    {a.label}
                  </div>
                ))}
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-sky-700/50" />
              </div>

              {/* Vector DB */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-900/40 border border-purple-600/40 text-sm font-semibold text-purple-200 shadow-lg shadow-purple-900/30">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582 4-8 4s8 1.79 8 4" />
                  </svg>
                  Vector Database
                </div>
              </div>

              {/* User query + retrieval */}
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-slate-700/50" />
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "User Query", color: "bg-slate-800/60 border-slate-700/50 text-slate-300" },
                  { label: "Semantic Search", color: "bg-sky-900/30 border-sky-700/40 text-sky-300" },
                ].map((a) => (
                  <div key={a.label} className={`rounded-lg border px-2 py-2 text-center text-xs font-medium ${a.color}`}>
                    {a.label}
                  </div>
                ))}
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-slate-700/50" />
              </div>

              {/* LLM */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-900/40 border border-sky-600/40 text-sm font-semibold text-sky-200">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  LLM (Grounded Answer)
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-green-700/50" />
              </div>

              {/* Output */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-900/20 border border-green-700/30 text-sm text-green-300">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Cited Answer — Near-Zero Hallucination
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "117+",   label: "Projects Delivered" },
              { value: "100%",   label: "Job Success Score" },
              { value: "Near-Zero", label: "Hallucination Rate" },
              { value: "24h",    label: "Response Time" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-sky-900/20 bg-white/[0.02]">
                <p className="text-2xl font-extrabold gradient-text mb-1">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS RAG ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Understanding RAG & LLM Apps
            </p>
            <h2 className="section-heading text-white mb-4">
              What Is <span className="gradient-text">RAG & LLM Development?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              LLMs like GPT-4 and Claude are powerful — but they only know what they were trained
              on. RAG (Retrieval-Augmented Generation) gives them access to <em>your</em> data at
              query time, so answers are grounded in real, current, private information.
            </p>
            <div className="p-5 rounded-2xl bg-sky-900/15 border border-sky-700/30 text-left max-w-2xl mx-auto">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-sky-300">New to RAG?</span>{" "}
                Think of a standard chatbot as a student answering from memory. RAG gives that
                student your textbook — open on the desk — and instructs them to answer only
                from what&apos;s written there, with page references. The result is accurate,
                traceable, and always current. Many clients pair RAG systems with{" "}
                <Link href="/services/ai-agents" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
                  AI agent workflows
                </Link>{" "}
                to automate full end-to-end business processes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                label: "Standard LLM Chatbot",
                points: ["Answers from training data", "Knowledge cut-off date", "Cannot access your docs", "Hallucinates facts"],
                accent: "border-slate-700/40",
                bad: true,
              },
              {
                icon: "📄",
                label: "RAG Application",
                points: ["Answers from your documents", "Always up to date", "Cites exact sources", "Near-zero hallucination with grounded responses"],
                accent: "border-sky-700/40",
                bad: false,
              },
              {
                icon: "🤖",
                label: "RAG + Agent System",
                points: ["Retrieves and acts autonomously", "Multi-source knowledge base", "Updates data in real time", "Full end-to-end automation"],
                accent: "border-purple-600/60",
                bad: false,
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`card-glass p-6 border ${card.accent} ${card.accent === "border-purple-600/60" ? "shadow-lg shadow-purple-900/20" : ""}`}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-white mb-4">{card.label}</h3>
                <ul className="space-y-2">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className={`mt-0.5 shrink-0 ${card.bad ? "text-slate-600" : "text-sky-400"}`}>
                        {card.bad ? "○" : "✓"}
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHEN DO YOU NEED RAG ─────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Is This Right for You?
            </p>
            <h2 className="section-heading text-white mb-4">
              When Do You Need <span className="gradient-text">RAG Systems?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              RAG delivers the highest value when accuracy, citations, and private data
              access are non-negotiable. Here are the clearest signals it&apos;s the right fit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "📄", title: "You need accurate answers from documents", desc: "Your team searches PDFs, reports, or contracts manually. You want instant, cited answers without someone reading the whole document first." },
              { icon: "🤖", title: "You want a chatbot that knows your business", desc: "Generic AI gives generic answers. You need a bot that knows your product, your policies, and your customers — grounded in your actual content." },
              { icon: "🚫", title: "Hallucinations are unacceptable", desc: "In legal, healthcare, finance, or compliance contexts, a wrong answer is a liability. RAG constrains the LLM to only answer from verified sources." },
              { icon: "🏢", title: "You have internal knowledge to unlock", desc: "Years of documents, wikis, SOPs, and expertise sitting in folders no one reads. RAG makes that knowledge instantly searchable and conversational." },
              { icon: "📈", title: "You need to scale support without hiring", desc: "Customer and employee questions are repetitive. A RAG-powered chatbot answers accurately from your knowledge base — 24/7, at scale." },
              { icon: "🔄", title: "Your data changes frequently", desc: "Unlike fine-tuned models, RAG systems update instantly when you add or edit documents. No retraining — just re-index and the system knows the latest information." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-sky-900/20 flex gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Applications
            </p>
            <h2 className="section-heading text-white mb-4">
              What RAG Systems <span className="gradient-text">Can Build for You</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Any business with valuable documents, knowledge bases, or data silos is a strong
              candidate for a RAG-powered LLM application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="card-glass p-5 border border-sky-900/20 group">
                <div className="mb-3 p-2.5 rounded-xl bg-sky-900/20 border border-sky-800/30 w-fit text-sky-400 group-hover:text-purple-400 transition-colors">
                  {uc.icon}
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{uc.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Who We Serve
            </p>
            <h2 className="section-heading text-white mb-4">
              Industries <span className="gradient-text">Served</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              RAG delivers the highest ROI in document-heavy, compliance-sensitive, or
              knowledge-intensive industries where accuracy is non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="card-glass p-5 border border-sky-900/20 text-center group hover:border-sky-500/30 transition-all"
              >
                <span className="text-3xl block mb-2">{ind.icon}</span>
                <h3 className="font-semibold text-white text-sm mb-1">{ind.name}</h3>
                <p className="text-xs text-slate-500">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              How We Build
            </p>
            <h2 className="section-heading text-white mb-4">
              The RAG Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every RAG system I build follows the same rigorous pipeline — from raw
              documents to production-grade, near-zero-hallucination deployment.
            </p>
          </div>

          <div className="space-y-0">
            {process.map((step, i) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {step.step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-sky-700/50 to-transparent my-1" style={{ minHeight: "2.5rem" }} />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH ME ──────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Why getyoteam
            </p>
            <h2 className="section-heading text-white mb-4">
              Why Work With <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Businesses in the USA, Europe, and Australia choose getyoteam because
              production-ready RAG is harder than it looks — and we get it right the first time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🚫",
                title: "Hallucination Control Built In",
                desc: "Every RAG system I build includes strict grounding instructions, source citation enforcement, and fallback handling for out-of-scope queries. Accuracy is an engineering problem, not a prompt hack.",
              },
              {
                icon: "🏆",
                title: "Top Rated Plus on Upwork",
                desc: "Independently verified Top 3% globally — 100% Job Success Score across 117+ projects. Real client outcomes across the USA, UK, and Australia.",
              },
              {
                icon: "🔒",
                title: "Production-First, Always",
                desc: "Retrieval tuning, chunking strategy, re-ranking, and observability are not afterthoughts. Every system ships ready for real traffic, not just a demo environment.",
              },
              {
                icon: "⚡",
                title: "Fast, Predictable Delivery",
                desc: "Proof-of-concept RAG systems in 3–5 days. Production systems with multi-source ingestion and full deployment in 2–5 weeks — with a clear milestone plan.",
              },
              {
                icon: "🤝",
                title: "Direct Access, No Middlemen",
                desc: "You work directly with Kumar Katariya. I design, build, and tune every RAG pipeline personally — you always know exactly who is responsible for your system.",
              },
              {
                icon: "📞",
                title: "30-Day Post-Launch Support",
                desc: "RAG systems need real-world tuning after launch — retrieval misses surface in production that testing never catches. I stay engaged for 30 days to fix them.",
              },
            ].map((item) => (
              <div key={item.title} className="card-glass p-6 border border-sky-900/20">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Technology
            </p>
            <h2 className="section-heading text-white mb-4">
              Tech Stack for <span className="gradient-text">RAG & LLM Apps</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Production-grade tools chosen for retrieval accuracy, scalability, and
              ecosystem support — not hype.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t.name} className={`px-4 py-2 rounded-full border text-sm font-medium ${t.color}`}>
                {t.name}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🗃️", title: "Retrieval", desc: "ChromaDB, Pinecone, and FAISS for vector storage — tuned for top-k accuracy and low latency." },
              { icon: "🧠", title: "LLM Layer", desc: "OpenAI GPT-4o, Claude 3.5, and Gemini — selected per use case, with strict grounding prompts." },
              { icon: "🚀", title: "Deployment", desc: "FastAPI + Docker on any cloud or on-premise — production-ready with auth, logging, and monitoring." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-sky-900/20 text-center">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ───────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Proven Results
            </p>
            <h2 className="section-heading text-white mb-4">
              What Clients <span className="gradient-text">Achieved</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {/* Main case study */}
              <div className="card-glass p-6 border border-sky-900/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-sky-900/30 text-sky-300 border border-sky-800/30">RAG System</span>
                  <span className="text-xs text-slate-500">Case Study</span>
                </div>
                <h3 className="font-bold text-white mb-4">RAG Document Intelligence System</h3>
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">The Problem</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      A research team spent hours manually searching 500-page PDF reports for
                      specific data points. Standard keyword search missed context and returned
                      hundreds of irrelevant results. They needed natural-language Q&amp;A with
                      exact citations — across an entire document library.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">The Solution</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Built a 6-step RAG pipeline using LangChain + ChromaDB + Gemini 1.5 Flash.
                      Documents are chunked with 1,000-character windows and 200-character overlap,
                      embedded, and stored as vectors. Queries retrieve the top-k relevant chunks
                      and pass them to the LLM with a strict grounding instruction — no answers
                      generated outside the retrieved context. Paired with{" "}
                      <Link href="/services/ai-agents" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
                        an agent workflow
                      </Link>{" "}
                      for automated report generation.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">The Results</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { value: "80%+", label: "Faster research" },
                    { value: "Zero", label: "Hallucinations" },
                    { value: "6",    label: "Pipeline steps" },
                    { value: "Any",  label: "PDF size supported" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-sky-900/20 border border-sky-800/20 p-3 text-center">
                      <p className="text-xl font-extrabold gradient-text">{m.value}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link href="/portfolio/rag-chatbot" className="text-sm text-sky-400 hover:text-sky-300 transition-colors">
                  View full case study →
                </Link>
              </div>

              {/* Mini case */}
              <div className="card-glass p-5 border border-purple-900/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/30">Legal RAG</span>
                  <span className="text-xs text-slate-500">Mini Case</span>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">Legal Contract Q&A System</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Built a RAG system over a corpus of 3,000+ contracts and case law documents
                  for a legal services firm. Lawyers query the system in plain English and receive
                  exact clause citations with document and page references — cutting contract
                  review time from hours to minutes, with full{" "}
                  <Link href="/services/data-science" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
                    data pipeline integration
                  </Link>.
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col gap-4">
              {[
                {
                  quote: "Kumar acted with utmost professionalism and skill, working tirelessly to complete the project according to my standards. Highly recommended for any AI or ML project.",
                  name: "Erika Shapiro",
                  role: "CEO, Study Song LLC",
                  initials: "ES",
                  color: "from-purple-600 to-violet-600",
                },
                {
                  quote: "Kumar and his team did a wonderful job. I now consider them an extension of my team. Their expertise in AI and attention to detail is outstanding.",
                  name: "Zhanna Shekhtmeyster",
                  role: "Founder, ABC Observe",
                  initials: "ZS",
                  color: "from-sky-600 to-blue-600",
                },
                {
                  quote: "Excellent work from Kumar and Team. The AI solution they built has transformed our workflow. Will definitely hire again and again.",
                  name: "Simon Islam",
                  role: "CEO, Fair Pattern",
                  initials: "SI",
                  color: "from-orange-600 to-amber-600",
                },
              ].map((t) => (
                <div key={t.name} className="card-glass p-5 border border-sky-900/20">
                  <div className="flex mb-2 gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RAG VS FINE-TUNING VS CHATBOTS ───────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Understand Your Options
            </p>
            <h2 className="section-heading text-white mb-4">
              RAG vs Fine-Tuning <span className="gradient-text">vs Chatbots</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-4">
              Understanding RAG vs fine tuning vs chatbots is critical when choosing the right
              AI architecture. While fine-tuning modifies model behavior, RAG systems retrieve
              real-time data for accurate responses. Compared to traditional chatbots,
              RAG-powered LLM applications provide dynamic, source-backed answers instead of
              scripted replies.
            </p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              Choosing between RAG, fine-tuning, and traditional chatbots depends on your data,
              update frequency, and accuracy requirements. Here&apos;s the honest breakdown.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "Traditional Chatbot",
                icon: "💬",
                color: "border-slate-700/40",
                best: false,
                pros: ["Simple to deploy", "Low cost to start", "Good for scripted flows"],
                cons: ["No access to your data", "Cannot answer dynamic questions", "Breaks outside scripted paths"],
              },
              {
                label: "Fine-Tuned LLM",
                icon: "🧠",
                color: "border-purple-700/40",
                best: false,
                pros: ["Deep domain knowledge", "Consistent tone & style", "Good for structured tasks"],
                cons: ["Expensive to retrain on new data", "Cannot cite sources", "Outdated when data changes"],
              },
              {
                label: "RAG System",
                icon: "📄",
                color: "border-sky-600/60",
                best: true,
                pros: ["Answers from your live documents", "Cites exact sources with references", "Updates instantly — no retraining", "Near-zero hallucination with grounded responses"],
                cons: [],
              },
            ].map((opt) => (
              <div key={opt.label} className={`card-glass p-6 border ${opt.color} ${opt.best ? "shadow-lg shadow-sky-900/20" : ""}`}>
                <div className="text-3xl mb-3">{opt.icon}</div>
                <h3 className="font-bold text-white mb-2">{opt.label}</h3>
                {opt.best && (
                  <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-sky-900/30 text-sky-300 border border-sky-800/30 mb-3">
                    Recommended
                  </span>
                )}
                <ul className="space-y-1.5 mb-3">
                  {opt.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-green-400 mt-0.5 shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
                {opt.cons.length > 0 && (
                  <ul className="space-y-1.5 mt-3 pt-3 border-t border-slate-700/30">
                    {opt.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="text-slate-600 mt-0.5 shrink-0">✗</span>{c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-6">
            Not sure which approach fits your use case?{" "}
            <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
              Book a free consultation →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Common Questions
            </p>
            <h2 className="section-heading text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="card-glass border border-sky-900/20 group">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                  <h3 className="text-sm font-semibold text-white leading-snug">{faq.q}</h3>
                  <svg
                    viewBox="0 0 24 24" fill="none"
                    className="w-4 h-4 text-sky-400 shrink-0 transition-transform group-open:rotate-180"
                    stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">
            Commonly Paired With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`/services/${rs.slug}`}
                className="card-glass p-5 border border-sky-900/20 flex items-center gap-4 group"
              >
                <span className="text-2xl">{rs.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                    {rs.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">View service →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-sky-700/30">
            <div className="absolute inset-0 gradient-bg opacity-10" />
            <div className="absolute inset-0 bg-[#07070f]/80" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(14,165,233,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.8) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 text-center px-8 py-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-900/20 text-xs font-medium text-green-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for new RAG & LLM projects
              </div>
              <h2 className="section-heading text-white mb-4">
                Turn Your Data Into an<br />
                <span className="gradient-text">AI Assistant with RAG</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-3 leading-relaxed">
                Describe the documents or knowledge base you want to make conversational.
                I will respond within 24 hours with a proposed RAG architecture, timeline,
                and plain-English explanation — no commitment required.
              </p>
              <p className="text-xs text-slate-500 mb-8">
                Trusted by businesses in the USA, UK, Europe &amp; Australia · Top Rated Plus · 100% Job Success
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30 text-sm"
                >
                  Start My RAG Project →
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold text-slate-300 border border-sky-700/40 hover:border-sky-500/60 hover:text-white transition-all text-sm"
                >
                  Book a Free Consultation
                </Link>
                <a
                  href="https://www.upwork.com/freelancers/aimlengineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full font-semibold text-green-300 border border-green-800/40 hover:border-green-600/60 hover:text-green-200 transition-all text-sm"
                >
                  Hire on Upwork (Top Rated)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
