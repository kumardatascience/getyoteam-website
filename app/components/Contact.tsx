"use client";

import { useState, FormEvent } from "react";

const SERVICES = [
  "AI Agent Development",
  "RAG & LLM Applications",
  "Machine Learning Solutions",
  "Deep Learning",
  "Computer Vision",
  "NLP & Text Analytics",
  "Data Science Consulting",
  "Speech & Audio AI",
  "Mobile App Development",
  "Other / Not sure",
];

const BUDGETS = [
  "< $500",
  "$500 – $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Let's discuss",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", service: "", budget: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New Lead from getyoteam Website",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Let&apos;s Build Together
          </p>
          <h2 className="section-heading text-white mb-4">
            Start Your <span className="gradient-text">AI Project</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Tell me about your project and I&apos;ll get back to you within 24 hours with a plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-purple-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                ),
                label: "Email",
                value: "info@getyoteam.com",
                href: "mailto:info@getyoteam.com",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-purple-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                ),
                label: "Phone",
                value: "+91-910 693 9053",
                href: "tel:+919106939053",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-purple-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                ),
                label: "Location",
                value: "S.G Road, Ahmedabad 380051, India",
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-purple-900/30 border border-purple-800/30 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-white hover:text-purple-300 transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919106939053?text=Hi%20Kumar%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl border border-green-700/40 bg-green-900/15 text-green-300 hover:bg-green-900/25 hover:border-green-600/50 transition-all text-sm font-semibold"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* Response time */}
            <div className="p-4 rounded-xl border border-purple-900/20 bg-white/[0.02]">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="text-green-400 font-semibold">⚡ Fast response:</span> I typically reply within
                a few hours during IST business hours (Mon–Sat, 9am–7pm).
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {status === "sent" ? (
              <div className="card-glass p-10 border border-purple-900/20 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  Thank you! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name:"",email:"",company:"",service:"",budget:"",message:"" }); }}
                  className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold gradient-bg text-white hover:opacity-90 transition-opacity"
                >
                  Send Another
                </button>
              </div>
            ) : status === "error" ? (
              <div className="card-glass p-10 border border-red-900/30 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-14 h-14 rounded-full bg-red-900/40 border border-red-700/40 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Something went wrong.</h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  Please email{" "}
                  <a href="mailto:info@getyoteam.com" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                    info@getyoteam.com
                  </a>
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glass p-6 sm:p-8 border border-purple-900/20 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" required value={form.name} onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-purple-900/30 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="email">Email *</label>
                    <input
                      id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-purple-900/30 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="company">Company / Organisation</label>
                  <input
                    id="company" name="company" value={form.company} onChange={handleChange}
                    placeholder="Acme Corp (optional)"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-purple-900/30 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.07] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="service">Service Needed *</label>
                    <select
                      id="service" name="service" required value={form.service} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0f0f1a] border border-purple-900/30 text-slate-300 text-sm focus:outline-none focus:border-purple-500/60 transition-all appearance-none"
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="budget">Budget Range</label>
                    <select
                      id="budget" name="budget" value={form.budget} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0f0f1a] border border-purple-900/30 text-slate-300 text-sm focus:outline-none focus:border-purple-500/60 transition-all appearance-none"
                    >
                      <option value="">Select budget…</option>
                      {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="message">Project Description *</label>
                  <textarea
                    id="message" name="message" required value={form.message} onChange={handleChange}
                    rows={5}
                    placeholder="Describe your project, goals, and any relevant context…"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-purple-900/30 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.07] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-all shadow-lg shadow-purple-600/25 disabled:opacity-60 disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
