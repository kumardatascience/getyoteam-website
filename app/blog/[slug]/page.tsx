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
  return {
    title: `${post.title} — GetyoTeam Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
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
          <span className="text-2xl shrink-0 mt-0.5">{block.emoji}</span>
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
              <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <p className="text-sm font-bold text-white mb-1">{item.title}</p>
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

  return (
    <div className="pt-24 pb-20">
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

        {/* Author card */}
        <div className="mt-10 card-glass p-6 border border-purple-900/20 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold shrink-0">
            KK
          </div>
          <div>
            <p className="text-sm font-bold text-white">Kumar Katariya</p>
            <p className="text-xs text-slate-400 mb-2">AI/ML Engineer · Top Rated Plus on Upwork · Kaggle Expert</p>
            <Link href="/contact" className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors">
              Work with me →
            </Link>
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
