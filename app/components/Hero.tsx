"use client";

import { useState, useEffect, useRef } from "react";

const ROLES = [
  "AI Agents",
  "RAG Systems",
  "Predictive Models",
  "Computer Vision",
  "Workflow Automation",
];

const STATS = [
  { value: 117,    suffix: "+", label: "Projects Completed" },
  { value: 400,    suffix: "K+", label: "Total Earned ($)" },
  { value: 100,    suffix: "%",  label: "Job Success Score" },
  { value: 3,      suffix: "%",  label: "Top Upwork Globally" },
];

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 45, pause = 1800) {
  const [displayed, setDisplayed]   = useState("");
  const [wordIndex, setWordIndex]   = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayed(
          isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

function useCounter(target: number, duration = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, trigger }: { stat: typeof STATS[0]; trigger: boolean }) {
  const count = useCounter(stat.value, 1800, trigger);
  return (
    <div className="text-center px-4 py-3">
      <div className="text-3xl sm:text-4xl font-extrabold gradient-text tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
    </div>
  );
}

export default function Hero() {
  const role       = useTypingEffect(ROLES);
  const statsRef   = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-900/20 text-xs sm:text-sm font-medium text-purple-300 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          Available for new projects · Ahmedabad, India
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-white">Building the Future</span>
          <br />
          <span className="gradient-text-animate">with AI &amp; Machine Learning</span>
        </h1>

        {/* Typing subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-3 h-9 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span>{role}</span>
          <span className="animate-blink text-purple-400">|</span>
        </p>

        <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Kumar Katariya — Top Rated Plus AI/ML Engineer on Upwork, turning complex AI challenges into production-ready solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#portfolio"
            className="px-8 py-3.5 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-semibold text-white border border-purple-500/40 bg-white/5 hover:bg-white/10 hover:border-sky-400/50 transition-all hover:-translate-y-0.5"
          >
            Start Your AI Project →
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-1 rounded-2xl border border-purple-800/30 bg-white/[0.03] backdrop-blur-sm divide-x divide-purple-800/20 divide-y sm:divide-y-0">
            {STATS.map((s) => (
              <StatCard key={s.label} stat={s} trigger={started} />
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-14 flex justify-center animate-float" style={{ animationDelay: "1s" }}>
          <a href="#achievements" aria-label="Scroll down" className="text-slate-500 hover:text-purple-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
