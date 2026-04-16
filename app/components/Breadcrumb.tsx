import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span>/</span>}
          {c.href ? (
            <Link href={c.href} className="hover:text-purple-400 transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="text-slate-300">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
