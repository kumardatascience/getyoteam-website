"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICE_LINKS = [
  { label: "AI Agent Development",    href: "/services/ai-agents" },
  { label: "RAG & LLM Applications",  href: "/services/nlp-chatbots" },
  { label: "Machine Learning",        href: "/services/machine-learning" },
  { label: "Deep Learning",           href: "/services/deep-learning" },
  { label: "Computer Vision",         href: "/services/computer-vision" },
  { label: "Data Science",            href: "/services/data-science" },
  { label: "Speech & Audio AI",       href: "/services/speech-ai" },
];

const NAV_LINKS = [
  { label: "Portfolio",    href: "/portfolio" },
  { label: "Blog",         href: "/blog" },
  { label: "About",        href: "/about" },
  { label: "Contact",      href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070f]/90 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[76px]">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex items-center shrink-0">
            <Image
              src="/getyoteam-1.png"
              alt="getyoteam logo"
              width={260}
              height={68}
              priority
              className="h-14 w-auto object-contain"
              style={{ imageRendering: "crisp-edges" }}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">

            {/* Services dropdown */}
            <li ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className="flex items-center gap-1 hover:text-white transition-colors group"
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-sky-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl border border-purple-900/30 bg-[#0f0f1a]/95 backdrop-blur-xl shadow-2xl shadow-purple-900/20 py-1.5 z-50">
                  {SERVICE_LINKS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={closeAll}
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-purple-900/25 transition-all"
                    >
                      {s.label}
                    </Link>
                  ))}
                  <div className="border-t border-purple-900/20 mt-1.5 pt-1.5">
                    <Link
                      href="/services"
                      onClick={closeAll}
                      className="block px-4 py-2 text-sm font-semibold text-purple-400 hover:text-purple-300 hover:bg-purple-900/25 transition-all"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </li>

            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={closeAll}
                  className="hover:text-white transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-sky-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              onClick={closeAll}
              className="px-5 py-2 rounded-full text-sm font-semibold gradient-bg text-white hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/25 animate-pulse-glow"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f1a]/95 backdrop-blur-xl border-t border-purple-900/30">
          <ul className="flex flex-col gap-1 px-4 py-4">

            {/* Services accordion */}
            <li>
              <button
                onClick={() => setMobileServicesOpen((o) => !o)}
                className="flex items-center justify-between w-full py-3 px-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-purple-900/20 rounded-lg transition-all"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <ul className="ml-3 mt-1 border-l border-purple-900/30 pl-3 space-y-1">
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={closeAll}
                        className="block py-2 px-2 text-xs text-slate-400 hover:text-white hover:bg-purple-900/20 rounded-md transition-all"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/services"
                      onClick={closeAll}
                      className="block py-2 px-2 text-xs font-semibold text-purple-400 hover:text-purple-300 rounded-md transition-all"
                    >
                      View All →
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={closeAll}
                  className="block py-3 px-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-purple-900/20 rounded-lg transition-all"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <Link
                href="/contact"
                onClick={closeAll}
                className="block text-center py-3 px-3 text-sm font-semibold gradient-bg text-white rounded-full hover:opacity-90 transition-opacity"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
