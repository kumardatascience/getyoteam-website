const testimonials = [
  {
    name: "Erika Shapiro",
    role: "CEO",
    company: "Study Song LLC",
    text: "Kumar acted with utmost professionalism and skill, working tirelessly to complete the project according to my standards. Highly recommended for any AI or ML project.",
    rating: 5,
    initials: "ES",
    color: "from-purple-600 to-violet-600",
  },
  {
    name: "Zhanna Shekhtmeyster",
    role: "Founder",
    company: "ABC Observe",
    text: "Kumar and his team did a wonderful job. I now consider them an extension of my team. Their expertise in AI and attention to detail is outstanding.",
    rating: 5,
    initials: "ZS",
    color: "from-sky-600 to-blue-600",
  },
  {
    name: "Themis Vasarmidis",
    role: "Founder",
    company: "Mindfulness Greece",
    text: "Our app is No.1 in the Google Play Store in the Wellness category. Huge success from zero experience! Kumar's team delivered beyond expectations.",
    rating: 5,
    initials: "TV",
    color: "from-green-600 to-emerald-600",
  },
  {
    name: "Simon Islam",
    role: "CEO",
    company: "Fair Pattern",
    text: "Excellent work from Kumar and Team. The AI solution they built has transformed our workflow. Will definitely hire again and again.",
    rating: 5,
    initials: "SI",
    color: "from-orange-600 to-amber-600",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Client Reviews
          </p>
          <h2 className="section-heading text-white mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            100% Job Success Score across 117+ projects. Here&apos;s what a few clients had to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-glass p-6 border border-purple-900/20 flex flex-col gap-4">
              {/* Quote mark */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-purple-700/50 shrink-0">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              <p className="text-slate-300 leading-relaxed text-sm flex-1">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3 pt-2 border-t border-purple-900/20">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                  <p className="text-xs text-slate-400 truncate">{t.role}, {t.company}</p>
                </div>
                <Stars count={t.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Upwork CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.upwork.com/freelancers/kumardatascience"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-green-400 border border-green-800/40 bg-green-900/10 hover:bg-green-900/20 hover:border-green-600/50 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <circle cx="12" cy="12" r="10" className="opacity-30"/>
              <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            View all 117+ reviews on Upwork →
          </a>
        </div>
      </div>
    </section>
  );
}
