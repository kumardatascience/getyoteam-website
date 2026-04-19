import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { blogPosts, type BodyBlock } from "@/app/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const title = `${post.title} | getyoteam Blog`;
  return {
    title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `https://getyoteam.com/blog/${slug}` },
    openGraph: {
      title,
      description: post.excerpt,
      url: `https://getyoteam.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Kumar Katariya"],
      images: [
        {
          url: "https://getyoteam.com/getyoteam-1.png",
          width: 1200,
          height: 630,
          alt: `${post.title} — getyoteam Blog`,
        },
      ],
    },
  };
}

const categoryColor: Record<string, string> = {
  "AI":               "bg-purple-900/40 text-purple-300 border-purple-800/30",
  "Machine Learning": "bg-sky-900/40 text-sky-300 border-sky-800/30",
  "NLP":              "bg-violet-900/40 text-violet-300 border-violet-800/30",
  "Computer Vision":  "bg-indigo-900/40 text-indigo-300 border-indigo-800/30",
  "Tutorials":        "bg-teal-900/40 text-teal-300 border-teal-800/30",
};

const categoryToServices: Record<string, Array<{ label: string; href: string }>> = {
  "AI":               [{ label: "AI Agent Development", href: "/services/ai-agents" }, { label: "RAG & LLM Applications", href: "/services/nlp-chatbots" }],
  "Machine Learning": [{ label: "Machine Learning Solutions", href: "/services/machine-learning" }, { label: "Data Science Consulting", href: "/services/data-science" }],
  "NLP":              [{ label: "RAG & LLM Applications", href: "/services/nlp-chatbots" }, { label: "NLP & Text Analytics", href: "/services/nlp-chatbots" }],
  "Computer Vision":  [{ label: "Computer Vision", href: "/services/computer-vision" }, { label: "Deep Learning", href: "/services/deep-learning" }],
  "Tutorials":        [{ label: "AI Agent Development", href: "/services/ai-agents" }, { label: "Machine Learning Solutions", href: "/services/machine-learning" }],
};

function renderBlock(block: BodyBlock, i: number) {
  if (typeof block === "string") {
    return (
      <p key={i} className="text-slate-300 leading-relaxed text-base sm:text-[1.0625rem]">
        {block}
      </p>
    );
  }

  switch (block.type) {
    case "heading":
      return (
        <h2 key={i} className="text-xl sm:text-2xl font-bold text-white mt-10 mb-3">
          {block.text}
        </h2>
      );

    case "callout":
      return (
        <div key={i} className="flex gap-4 p-5 rounded-xl border border-purple-800/40 bg-purple-900/10 my-6">
          <span className="text-2xl shrink-0 mt-0.5" role="img" aria-label={block.label}>{block.emoji}</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-1.5">{block.label}</p>
            <p className="text-sm text-slate-300 leading-relaxed">{block.text}</p>
          </div>
        </div>
      );

    case "diagram":
      return (
        <div key={i} className="my-6 rounded-xl border border-purple-800/40 bg-[#080810] overflow-hidden">
          {block.title && (
            <div className="px-4 py-2.5 border-b border-purple-900/30 bg-purple-900/10">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400">{block.title}</p>
            </div>
          )}
          <pre className="p-5 text-sm text-slate-300 font-mono leading-7 overflow-x-auto whitespace-pre">
            {block.lines.join("\n")}
          </pre>
        </div>
      );

    case "steps":
      return (
        <div key={i} className="space-y-3 my-6">
          {block.items.map((item, j) => (
            <div key={j} className="flex gap-4 p-4 rounded-xl border border-purple-900/20 bg-white/[0.02] hover:border-purple-800/40 transition-colors">
              <span className="text-2xl shrink-0 mt-0.5" role="img" aria-label={item.title}>{item.icon}</span>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "stats":
      return (
        <div key={i} className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {block.items.map((item, j) => (
            <div key={j} className="p-4 rounded-xl border border-purple-900/20 bg-white/[0.02] text-center">
              <p className="text-2xl font-extrabold gradient-text mb-1">{item.value}</p>
              <p className="text-xs text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const idx  = blogPosts.indexOf(post);
  const prev = blogPosts[idx - 1] ?? null;
  const next = blogPosts[idx + 1] ?? null;

  const relatedServices = categoryToServices[post.category] ?? categoryToServices["Tutorials"];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://getyoteam.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://getyoteam.com/blog/${slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Kumar Katariya",
      url: "https://getyoteam.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "getyoteam",
      url: "https://getyoteam.com",
    },
    mainEntityOfPage: `https://getyoteam.com/blog/${slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumb crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]} />

        <article className="mt-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${categoryColor[post.category] ?? "bg-slate-900/40 text-slate-400 border-slate-700/30"}`}>
              {post.category}
            </span>
            <span className="text-xs text-slate-500">
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="text-xs text-slate-500">{post.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 border-l-2 border-purple-600 pl-4 italic">
            {post.excerpt}
          </p>

          {/* Body blocks */}
          <div className="space-y-5">
            {post.body.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-purple-900/20">
            {post.tags.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-purple-900/20 text-purple-400 border border-purple-900/30">
                #{t}
              </span>
            ))}
          </div>
        </article>

        {/* Related Services — internal linking */}
        <div className="mt-10 p-6 rounded-2xl border border-purple-900/20 bg-white/[0.02]">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Need This Built for Your Business?</h2>
          <p className="text-slate-400 text-sm mb-4">
            Kumar Katariya builds production-grade AI systems like this. Explore related services or get in touch.
          </p>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-xs font-semibold px-4 py-2 rounded-full border border-purple-800/40 text-purple-300 hover:border-purple-500/60 hover:text-white transition-all"
              >
                {s.label} →
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-xs font-semibold px-4 py-2 rounded-full gradient-bg text-white hover:opacity-90 transition-opacity"
            >
              Start Your AI Project →
            </Link>
          </div>
        </div>

        {/* Author card */}
        <div className="mt-6 card-glass p-6 border border-purple-900/20 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold shrink-0" aria-label="Kumar Katariya">
            KK
          </div>
          <div>
            <p className="text-sm font-bold text-white">Kumar Katariya</p>
            <p className="text-xs text-slate-400 mb-2">AI/ML Engineer · Top Rated Plus on Upwork · Kaggle Expert</p>
            <div className="flex gap-4">
              <Link href="/about" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                About me →
              </Link>
              <Link href="/contact" className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                Work with me →
              </Link>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-8 border-t border-purple-900/20">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group flex flex-col p-4 rounded-xl border border-purple-900/20 hover:border-purple-500/30 transition-all">
              <span className="text-xs text-slate-500 mb-1">← Previous Post</span>
              <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">{prev.title}</span>
            </Link>
          ) : <div />}
          {next && (
            <Link href={`/blog/${next.slug}`} className="group flex flex-col p-4 rounded-xl border border-purple-900/20 hover:border-purple-500/30 transition-all text-right ml-auto w-full">
              <span className="text-xs text-slate-500 mb-1">Next Post →</span>
              <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">{next.title}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
