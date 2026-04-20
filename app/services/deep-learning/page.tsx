import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Deep Learning Development Company | CNNs, Transformers & Neural Networks | getyoteam",
  description:
    "Top-rated deep learning development company serving USA, Europe & Australia. CNN image classification, transformer NLP, speech AI & production neural network deployment. 117+ projects · 100% JSS.",
  keywords: [
    "deep learning development company",
    "deep learning development services",
    "deep learning solutions company",
    "CNN development",
    "transformer model development",
    "neural network development",
    "computer vision deep learning",
    "deep learning engineer",
    "PyTorch development",
    "TensorFlow developer",
    "transfer learning services",
    "deep learning developer USA",
    "deep learning Australia",
    "image classification AI",
    "NLP transformer development",
  ],
  alternates: { canonical: "https://getyoteam.com/services/deep-learning" },
  openGraph: {
    title: "Deep Learning Development Company | CNNs, Transformers & Neural Networks | getyoteam",
    description:
      "Top-rated deep learning development company serving USA, Europe & Australia. CNN image classification, transformer NLP & speech AI. 117+ projects · 100% JSS.",
    url: "https://getyoteam.com/services/deep-learning",
    type: "website",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "Deep Learning Development Services — getyoteam",
      },
    ],
  },
};

const useCases = [
  {
    icon: "🖼️",
    title: "Image Classification Systems",
    desc: "CNN-based image classification for quality inspection, product categorization, and visual search — including a Cats vs Dogs CNN project demonstrating scalable deep learning for millions of images.",
  },
  {
    icon: "🏥",
    title: "Medical Imaging AI",
    desc: "Transfer learning model (ResNet) to detect pneumonia from chest X-rays — production-grade diagnostic support AI achieving 86%+ accuracy on clinical imaging datasets.",
  },
  {
    icon: "🎙️",
    title: "Speech & Audio AI",
    desc: "wav2vec2-based emotion recognition and audio classification systems — deep learning models that extract meaning from raw audio signals for real-world speech AI applications.",
  },
  {
    icon: "🧠",
    title: "NLP with Transformers",
    desc: "BERT, Hugging Face Transformers, and custom fine-tuned models for text classification, sentiment analysis, entity extraction, and document understanding at scale.",
  },
  {
    icon: "👁️",
    title: "Object Detection Systems",
    desc: "YOLO and ResNet-based object detection pipelines for security, manufacturing quality control, and retail analytics — real-time inference with high mAP across diverse visual environments.",
  },
  {
    icon: "🔍",
    title: "Document Understanding",
    desc: "Transformer models combined with embeddings for intelligent document parsing, layout analysis, and information extraction — turning unstructured PDFs into structured data.",
  },
  {
    icon: "⚡",
    title: "Real-Time AI Systems",
    desc: "Low-latency deep learning inference pipelines optimized for production — GPU-accelerated model serving with FastAPI and TorchServe for sub-100ms response times at scale.",
  },
];

const industries = [
  { icon: "🏥", name: "Healthcare",              desc: "Medical imaging, diagnostic AI, clinical NLP" },
  { icon: "💰", name: "Finance",                  desc: "Fraud detection, document processing, signals" },
  { icon: "🛒", name: "E-commerce",               desc: "Visual search, product tagging, recommendations" },
  { icon: "🚗", name: "Automotive",               desc: "Object detection, ADAS, inspection systems" },
  { icon: "🔒", name: "Security & Surveillance",  desc: "Face recognition, anomaly detection, CCTV AI" },
  { icon: "🎓", name: "EdTech",                   desc: "Speech AI, engagement analysis, content NLP" },
];

const process = [
  {
    step: "01",
    title: "Data Preparation & Augmentation",
    desc: "Deep learning requires clean, well-labeled data at scale. I audit your dataset for quality, balance, and volume — then apply augmentation strategies (rotation, flipping, noise injection, mixup) to maximise the effective training set and prevent overfitting.",
  },
  {
    step: "02",
    title: "Model Architecture Selection",
    desc: "The right architecture is chosen based on your modality and problem: ResNet / EfficientNet for image classification, YOLO for detection, BERT / DistilBERT for NLP, wav2vec2 for audio, or a custom CNN/Transformer hybrid. I never force a one-size architecture.",
  },
  {
    step: "03",
    title: "Training & Hyperparameter Tuning",
    desc: "Models are trained on GPU with transfer learning from pretrained weights (ImageNet, HuggingFace Hub) to dramatically reduce training time and data requirements. Learning rate scheduling, dropout, weight decay, and early stopping are tuned systematically — not guessed.",
  },
  {
    step: "04",
    title: "Evaluation & Optimization",
    desc: "Beyond accuracy: I evaluate with precision, recall, F1, AUC, and confusion matrices. Grad-CAM visualisations explain what the model is looking at. Quantization and pruning are applied where latency matters — so the model is both accurate and fast enough for production.",
  },
  {
    step: "05",
    title: "Deployment & Monitoring",
    desc: "Production deployment via FastAPI, TorchServe, or ONNX runtime — containerized with Docker and deployable on any cloud. I monitor model drift, input distribution shifts, and prediction confidence over time. Models degrade silently without monitoring; I build that in from day one.",
  },
];

const techStack = [
  { name: "PyTorch",                color: "border-orange-700/40 text-orange-300 bg-orange-900/15" },
  { name: "TensorFlow",             color: "border-yellow-700/40 text-yellow-300 bg-yellow-900/15" },
  { name: "Keras",                  color: "border-red-700/40 text-red-300 bg-red-900/15" },
  { name: "Hugging Face",           color: "border-amber-700/40 text-amber-300 bg-amber-900/15" },
  { name: "OpenCV",                 color: "border-indigo-700/40 text-indigo-300 bg-indigo-900/15" },
  { name: "YOLO",                   color: "border-sky-700/40 text-sky-300 bg-sky-900/15" },
  { name: "ResNet / EfficientNet",  color: "border-blue-700/40 text-blue-300 bg-blue-900/15" },
  { name: "BERT / Transformers",    color: "border-violet-700/40 text-violet-300 bg-violet-900/15" },
  { name: "wav2vec2",               color: "border-purple-700/40 text-purple-300 bg-purple-900/15" },
  { name: "scikit-learn",           color: "border-teal-700/40 text-teal-300 bg-teal-900/15" },
  { name: "FastAPI",                color: "border-green-700/40 text-green-300 bg-green-900/15" },
  { name: "Docker",                 color: "border-cyan-700/40 text-cyan-300 bg-cyan-900/15" },
];

const faqs = [
  {
    q: "What is deep learning and when does it outperform traditional machine learning?",
    a: "Deep learning uses multi-layer neural networks that automatically learn hierarchical representations from raw data — no manual feature engineering required. It outperforms traditional ML when working with unstructured data (images, audio, text) at scale, complex pattern recognition tasks, and problems where the signal is non-linear and high-dimensional. For tabular structured data, gradient boosting ML is usually faster, more interpretable, and equally accurate.",
  },
  {
    q: "How long does it take to build a production deep learning model?",
    a: "A proof-of-concept image classifier or fine-tuned NLP model can be ready in 3–7 days using transfer learning. A full production system — with data pipelines, training on your dataset, evaluation, optimization, and API deployment — typically takes 2–6 weeks depending on dataset size, model complexity, and integration requirements. I provide a detailed timeline after reviewing your data.",
  },
  {
    q: "Do I need a massive dataset to use deep learning?",
    a: "Not necessarily. Transfer learning lets us start from pretrained models (ResNet, BERT, wav2vec2) trained on millions of examples, then fine-tune on your domain-specific data. This means high-accuracy results are achievable with hundreds or a few thousand labeled examples in many cases. I assess your dataset during discovery and recommend the right approach — sometimes traditional ML on small data beats deep learning.",
  },
  {
    q: "What frameworks do you use for deep learning development?",
    a: "PyTorch is the primary framework for research-grade and production models. TensorFlow/Keras for projects requiring TFLite or TF Serving. Hugging Face Transformers for all NLP tasks — BERT, DistilBERT, RoBERTa, and custom fine-tuning. OpenCV and YOLO for computer vision. wav2vec2 for audio. The stack is matched to your problem, not forced.",
  },
  {
    q: "How do you deploy deep learning models to production?",
    a: "I deploy models as REST APIs via FastAPI, TorchServe, or ONNX Runtime — containerized with Docker and deployable on AWS, GCP, Azure, or on-premise. For latency-sensitive applications, I apply model quantization and pruning to reduce inference time. Every deployment includes input validation, logging, confidence monitoring, and alerts for distribution drift.",
  },
  {
    q: "What is the difference between deep learning and machine learning?",
    a: "Machine learning covers a broad family of algorithms (decision trees, gradient boosting, SVMs) that work best on structured, tabular data and require manual feature engineering. Deep learning is a subset of ML using multi-layer neural networks — it excels at unstructured data (images, text, audio) because it learns representations automatically. For business problems involving customer behavior, sales data, or financial records, ML is often faster and more interpretable. For vision, language, or audio problems, deep learning is the right tool.",
  },
];

const relatedServices = [
  { slug: "computer-vision",  title: "Computer Vision",           icon: "👁️" },
  { slug: "machine-learning", title: "Machine Learning Solutions", icon: "📈" },
  { slug: "nlp-chatbots",     title: "RAG & LLM Applications",    icon: "🧠" },
];

export default function DeepLearningPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://getyoteam.com/services" },
      { "@type": "ListItem", position: 3, name: "Deep Learning Services", item: "https://getyoteam.com/services/deep-learning" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Deep Learning Development Services",
    description:
      "Custom deep learning model development — CNNs, Transformers, and neural networks for computer vision, NLP, and speech AI. Production-ready systems deployed with PyTorch, TensorFlow, and Hugging Face.",
    provider: { "@type": "Person", name: "Kumar Katariya", url: "https://getyoteam.com" },
    areaServed: ["United States", "Australia", "United Kingdom", "Europe", "Worldwide"],
    serviceType: "Deep Learning Development",
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-700/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(99,102,241,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.5) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Deep Learning Services" },
          ]} />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <h1 className="section-heading text-white mb-2">
                Deep Learning <span className="gradient-text">Development Company</span>
              </h1>
              <p className="text-lg font-medium text-slate-300 mb-4">
                CNNs, Transformers &amp; Neural Networks for Production AI
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-900/20 text-xs font-medium text-indigo-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Serving clients in USA · Europe · Australia
              </div>

              <p className="text-slate-400 leading-relaxed mb-4">
                Build deep learning systems for computer vision, NLP, and audio AI that solve
                complex problems at scale. From CNN-based image classification to transformer-based
                NLP models, our deep learning development services deliver high-accuracy,
                production-ready AI systems — not experimental notebooks.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                As a deep learning solutions company, I design and deploy neural network models
                using PyTorch, TensorFlow, and Hugging Face Transformers. Whether you need
                an image classifier, a speech recognition model, or a transformer for document
                understanding, every build ships with GPU-optimized training, transfer learning,
                and full production deployment. These systems integrate naturally with{" "}
                <Link href="/services/computer-vision" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                  computer vision
                </Link>{" "}
                pipelines,{" "}
                <Link href="/services/nlp-chatbots" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                  RAG &amp; LLM applications
                </Link>
                , or{" "}
                <Link href="/services/machine-learning" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                  machine learning solutions
                </Link>{" "}
                for end-to-end AI systems.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">
                Built for production — not research. Every delivery includes data pipelines,
                transfer learning, evaluation metrics, and API deployment from day one.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["PyTorch", "TensorFlow", "Hugging Face", "OpenCV"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-800/30 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/25 text-sm"
                >
                  Start My Deep Learning Project →
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-full font-semibold text-slate-300 border border-indigo-800/40 hover:border-indigo-500/60 hover:text-white transition-all text-sm"
                >
                  See Deep Learning Projects
                </Link>
              </div>
            </div>

            {/* Right: deep learning pipeline diagram */}
            <div className="card-glass p-6 border border-indigo-900/30">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-5">
                Deep Learning Pipeline Architecture
              </p>

              {/* Inputs */}
              <div className="flex justify-center mb-3">
                <div className="flex flex-wrap justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/40 max-w-xs">
                  {["Images", "Text", "Audio"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-400 border border-slate-600/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-indigo-700/50" />
              </div>

              {/* Preprocessing + Embeddings */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "Data Preprocessing",          color: "bg-indigo-900/30 border-indigo-700/40 text-indigo-300" },
                  { label: "Feature Extraction / Embeds", color: "bg-blue-900/30 border-blue-700/40 text-blue-300" },
                ].map((a) => (
                  <div key={a.label} className={`rounded-lg border px-2 py-2 text-center text-xs font-medium ${a.color}`}>
                    {a.label}
                  </div>
                ))}
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-indigo-700/50" />
              </div>

              {/* Model architecture */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-900/40 border border-indigo-600/40 text-sm font-semibold text-indigo-200 shadow-lg shadow-indigo-900/30">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Model Architecture (CNN / Transformer)
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-slate-700/50" />
              </div>

              {/* Training + Validation */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "Training & Validation",  color: "bg-slate-800/60 border-slate-700/50 text-slate-300" },
                  { label: "Evaluation Metrics",     color: "bg-indigo-900/30 border-indigo-700/40 text-indigo-300" },
                ].map((a) => (
                  <div key={a.label} className={`rounded-lg border px-2 py-2 text-center text-xs font-medium ${a.color}`}>
                    {a.label}
                  </div>
                ))}
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-slate-700/50" />
              </div>

              {/* Deployment */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-900/40 border border-purple-600/40 text-sm font-semibold text-purple-200">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  Model Deployment (API)
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
                  High-Accuracy AI Predictions at Scale
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "117+",  label: "Projects Delivered" },
              { value: "100%",  label: "Job Success Score" },
              { value: "86%+",  label: "Model Accuracy (CV)" },
              { value: "24h",   label: "Response Time" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-indigo-900/20 bg-white/[0.02]">
                <p className="text-2xl font-extrabold gradient-text mb-1">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS DEEP LEARNING ────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Understanding Deep Learning
            </p>
            <h2 className="section-heading text-white mb-4">
              What Is <span className="gradient-text">Deep Learning Development?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Deep learning uses multi-layer neural networks — CNNs, RNNs, and Transformers —
              to automatically learn representations from raw unstructured data. No manual
              feature engineering. The network discovers the features itself, layer by layer,
              enabling state-of-the-art accuracy on images, text, and audio.
            </p>
            <div className="p-5 rounded-2xl bg-indigo-900/15 border border-indigo-700/30 text-left max-w-2xl mx-auto">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-indigo-300">New to deep learning?</span>{" "}
                Think of a CNN as a visual cortex trained on millions of images — it has
                learned to recognise edges, shapes, and objects without being told what to
                look for. A Transformer does the same for language: it has read billions of
                words and can now understand context, sentiment, and meaning. Many clients
                pair deep learning models with{" "}
                <Link href="/services/nlp-chatbots" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                  RAG &amp; LLM applications
                </Link>{" "}
                for richer, knowledge-grounded AI systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📋",
                label: "Traditional Programming",
                points: ["Rules written by hand", "Breaks on edge cases", "Cannot handle unstructured data", "Cannot learn from examples"],
                accent: "border-slate-700/40",
                bad: true,
              },
              {
                icon: "📈",
                label: "Machine Learning",
                points: ["Learns from structured data", "Manual feature engineering", "Interpretable predictions", "Limited on images & audio"],
                accent: "border-blue-700/40",
                bad: false,
              },
              {
                icon: "🧠",
                label: "Deep Learning",
                points: ["Handles images, text & audio", "No manual feature engineering", "Learns representations automatically", "State-of-the-art accuracy at scale"],
                accent: "border-indigo-600/60",
                bad: false,
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`card-glass p-6 border ${card.accent} ${card.accent === "border-indigo-600/60" ? "shadow-lg shadow-indigo-900/20" : ""}`}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-white mb-4">{card.label}</h3>
                <ul className="space-y-2">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className={`mt-0.5 shrink-0 ${card.bad ? "text-slate-600" : "text-indigo-400"}`}>
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

      {/* ── WHEN DO YOU NEED DEEP LEARNING ──────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Is This Right for You?
            </p>
            <h2 className="section-heading text-white mb-4">
              When Do You Need <span className="gradient-text">Deep Learning?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Deep learning delivers the most value for unstructured data problems where
              traditional ML and rules-based systems hit a ceiling.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🖼️", title: "Working with images, audio, or text at scale", desc: "If your problem involves raw unstructured data — photos, recordings, documents — deep learning is the correct tool. Traditional ML requires you to hand-craft features; CNNs and Transformers learn them automatically." },
              { icon: "🎯", title: "Need accuracy beyond traditional ML", desc: "For classification problems on images, speech, or long-form text, deep learning models consistently outperform gradient boosting and SVMs. When accuracy is business-critical, neural networks are the benchmark." },
              { icon: "📦", title: "Large datasets available", desc: "Deep learning scales with data. If you have thousands to millions of labeled examples, the performance gap between DL and traditional ML widens. Transfer learning makes it accessible even with smaller datasets." },
              { icon: "🔮", title: "Complex pattern recognition required", desc: "Pneumonia in an X-ray, emotion in a voice clip, fraud in a transaction sequence — patterns too subtle for human-defined rules. Deep learning finds these patterns reliably and consistently." },
              { icon: "⚙️", title: "Manual feature engineering is failing", desc: "If your team is spending weeks crafting features for a problem that still doesn't perform well, that's the signal to switch to deep learning — which learns the representations itself." },
              { icon: "⚡", title: "Real-time AI inference needed", desc: "Production systems requiring sub-100ms response — object detection in video, real-time speech transcription, live document scanning — are built with optimized deep learning inference pipelines." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-indigo-900/20 flex gap-4">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Applications
            </p>
            <h2 className="section-heading text-white mb-4">
              What Deep Learning <span className="gradient-text">Can Build for You</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Images, text, audio — if the data is unstructured, deep learning is the
              right foundation. Here are the systems I build and deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="card-glass p-5 border border-indigo-900/20 group">
                <div className="mb-3 p-2.5 rounded-xl bg-indigo-900/20 border border-indigo-800/30 w-fit text-indigo-400 group-hover:text-blue-400 transition-colors text-xl">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Who We Serve
            </p>
            <h2 className="section-heading text-white mb-4">
              Industries <span className="gradient-text">Served</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Deep learning delivers the highest impact in industries where unstructured
              data — images, audio, documents — drives business decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="card-glass p-5 border border-indigo-900/20 text-center group hover:border-indigo-500/30 transition-all"
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
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              How We Build
            </p>
            <h2 className="section-heading text-white mb-4">
              The Deep Learning Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every project follows the same rigorous deep learning development process —
              from raw data to GPU-trained, production-deployed neural networks.
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
                    <div className="w-px flex-1 bg-gradient-to-b from-indigo-700/50 to-transparent my-1" style={{ minHeight: "2.5rem" }} />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Why getyoteam
            </p>
            <h2 className="section-heading text-white mb-4">
              Why Work With <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Businesses in the USA, Europe, and Australia choose getyoteam because
              production deep learning is harder than a notebook — and we get it right
              the first time. Proven results from real projects, not research papers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🚀",
                title: "Production-Ready DL Systems",
                desc: "Every model ships with data pipelines, API endpoints, input validation, and monitoring — not just a .pkl file. What works in the notebook runs reliably in production.",
              },
              {
                icon: "⚡",
                title: "GPU Optimization & Training Efficiency",
                desc: "Mixed-precision training, gradient checkpointing, and batch size tuning minimize GPU cost and training time. Models are also quantized and pruned for fast production inference.",
              },
              {
                icon: "🔄",
                title: "Transfer Learning Expertise",
                desc: "Pretrained models (ResNet, EfficientNet, BERT, wav2vec2) are fine-tuned on your domain data — dramatically reducing training time and the labeled data requirements.",
              },
              {
                icon: "🏆",
                title: "Top Rated Plus on Upwork",
                desc: "Independently verified Top 3% globally — 100% Job Success Score across 117+ projects. Real client outcomes across the USA, UK, and Australia.",
              },
              {
                icon: "🤝",
                title: "Direct Access, No Middlemen",
                desc: "You work directly with Kumar Katariya — a Kaggle Expert and IBM-certified AI engineer. I design, train, and deploy every model personally.",
              },
              {
                icon: "📞",
                title: "30-Day Post-Launch Support",
                desc: "Model drift and real-world edge cases surface after deployment, not before. I stay engaged for 30 days to monitor, retrain, and refine until the system performs as expected.",
              },
            ].map((item) => (
              <div key={item.title} className="card-glass p-6 border border-indigo-900/20">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Technology
            </p>
            <h2 className="section-heading text-white mb-4">
              Tech Stack for <span className="gradient-text">Deep Learning</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Battle-tested frameworks chosen for accuracy, training efficiency, and
              production deployment — not trend-chasing.
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
              { icon: "🧠", title: "Deep Learning Frameworks", desc: "PyTorch and TensorFlow/Keras for all neural network development — with Hugging Face Transformers for NLP fine-tuning and BERT-based models." },
              { icon: "👁️", title: "Computer Vision", desc: "OpenCV for preprocessing, YOLO for real-time object detection, ResNet and EfficientNet for classification, transfer learning on ImageNet weights." },
              { icon: "🚀", title: "Deployment", desc: "FastAPI, TorchServe, and ONNX Runtime — containerized with Docker on any cloud. Models are quantized for production latency requirements." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-indigo-900/20 text-center">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Proven Results
            </p>
            <h2 className="section-heading text-white mb-4">
              What Clients <span className="gradient-text">Achieved</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {/* Main case study */}
              <div className="card-glass p-6 border border-indigo-900/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-800/30">Deep Learning</span>
                  <span className="text-xs text-slate-500">Case Study</span>
                </div>
                <h3 className="font-bold text-white mb-4">Chest X-Ray Pneumonia Detector</h3>
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">The Problem</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Manual review of chest X-rays for pneumonia is time-consuming, subject to
                      radiologist fatigue, and unavailable in resource-limited settings. The client
                      needed a production-grade diagnostic AI that could reliably flag pneumonia
                      cases from raw X-ray images with high accuracy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">The Solution</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Fine-tuned a ResNet-based{" "}
                      <Link href="/services/computer-vision" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                        CNN image classification model
                      </Link>{" "}
                      on a labeled clinical X-ray dataset using transfer learning from ImageNet
                      weights. Data augmentation (flipping, zoom, contrast normalization) expanded
                      the effective training set. Deployed as a REST API with confidence
                      scores and Grad-CAM visualisations showing the model&apos;s attention regions.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">The Results</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { value: "86%+",     label: "Model Accuracy" },
                    { value: "ResNet",   label: "Transfer Learning" },
                    { value: "Grad-CAM", label: "Explainability" },
                    { value: "REST API", label: "Production Deploy" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-indigo-900/20 border border-indigo-800/20 p-3 text-center">
                      <p className="text-xl font-extrabold gradient-text">{m.value}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link href="/portfolio/pneumonia-detector" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                  View full case study →
                </Link>
              </div>

              {/* Mini case */}
              <div className="card-glass p-5 border border-purple-900/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/30">Speech AI</span>
                  <span className="text-xs text-slate-500">Mini Case</span>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">Speech Emotion Recognition</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Built a speech emotion recognition system using wav2vec2 fine-tuned on
                  emotional speech datasets. The model classifies audio segments by emotional
                  state — anger, happiness, sadness, neutral — enabling real-time sentiment
                  analysis in call center and customer experience applications. Pairs with{" "}
                  <Link href="/services/nlp-chatbots" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                    NLP pipelines
                  </Link>{" "}
                  for full multimodal understanding.
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
                  color: "from-indigo-600 to-violet-600",
                },
                {
                  quote: "Kumar and his team did a wonderful job. I now consider them an extension of my team. Their expertise in AI and attention to detail is outstanding.",
                  name: "Zhanna Shekhtmeyster",
                  role: "Founder, ABC Observe",
                  initials: "ZS",
                  color: "from-blue-600 to-indigo-600",
                },
                {
                  quote: "Excellent work from Kumar and Team. The AI solution they built has transformed our workflow. Will definitely hire again and again.",
                  name: "Simon Islam",
                  role: "CEO, Fair Pattern",
                  initials: "SI",
                  color: "from-orange-600 to-amber-600",
                },
              ].map((t) => (
                <div key={t.name} className="card-glass p-5 border border-indigo-900/20">
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

      {/* ── DL VS ML VS AI ───────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Understand Your Options
            </p>
            <h2 className="section-heading text-white mb-4">
              Deep Learning vs Machine Learning <span className="gradient-text">vs AI</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-4">
              AI is the broad field; machine learning is a subset that learns from data;
              deep learning is a subset of ML using multi-layer neural networks. Choosing
              between deep learning vs machine learning depends on your data type, volume,
              and latency requirements. Deep learning excels at unstructured data; ML wins
              on tabular data with limited volume.
            </p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              For most image, audio, and long-form text problems, deep learning is the clear
              choice. Here&apos;s the honest comparison.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "Machine Learning",
                icon: "📈",
                color: "border-slate-700/40",
                best: false,
                pros: ["Best for tabular/structured data", "Fast to train and retrain", "SHAP-explainable predictions"],
                cons: ["Requires manual feature engineering", "Limited on images, audio, text", "Ceiling on unstructured problems"],
              },
              {
                label: "Deep Learning",
                icon: "🧠",
                color: "border-indigo-600/60",
                best: true,
                pros: ["Handles images, text & audio", "No manual feature engineering", "State-of-the-art accuracy at scale", "Transfer learning reduces data needs"],
                cons: [],
              },
              {
                label: "Traditional AI / Rules",
                icon: "📋",
                color: "border-purple-700/40",
                best: false,
                pros: ["Fully transparent logic", "No training data needed", "Deterministic output"],
                cons: ["Breaks on edge cases", "Cannot handle unstructured data", "Manual updates required"],
              },
            ].map((opt) => (
              <div key={opt.label} className={`card-glass p-6 border ${opt.color} ${opt.best ? "shadow-lg shadow-indigo-900/20" : ""}`}>
                <div className="text-3xl mb-3">{opt.icon}</div>
                <h3 className="font-bold text-white mb-2">{opt.label}</h3>
                {opt.best && (
                  <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-800/30 mb-3">
                    Best for unstructured data
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
            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
              Book a free consultation →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Common Questions
            </p>
            <h2 className="section-heading text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="card-glass border border-indigo-900/20 group">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                  <h3 className="text-sm font-semibold text-white leading-snug">{faq.q}</h3>
                  <svg
                    viewBox="0 0 24 24" fill="none"
                    className="w-4 h-4 text-indigo-400 shrink-0 transition-transform group-open:rotate-180"
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
      <section className="py-12 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">
            Commonly Paired With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`/services/${rs.slug}`}
                className="card-glass p-5 border border-indigo-900/20 flex items-center gap-4 group"
              >
                <span className="text-2xl">{rs.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
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
          <div className="relative rounded-3xl overflow-hidden border border-indigo-700/30">
            <div className="absolute inset-0 gradient-bg opacity-10" />
            <div className="absolute inset-0 bg-[#07070f]/80" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(99,102,241,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.8) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 text-center px-8 py-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-900/20 text-xs font-medium text-green-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for new deep learning projects
              </div>
              <h2 className="section-heading text-white mb-4">
                Build High-Accuracy AI<br />
                <span className="gradient-text">with Deep Learning</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-3 leading-relaxed">
                Describe your use case — image, text, or audio — and I will propose the right
                deep learning architecture within 24 hours. No commitment, no jargon.
              </p>
              <p className="text-xs text-slate-500 mb-8">
                Trusted by businesses in the USA, UK, Europe &amp; Australia · Top Rated Plus · 100% Job Success
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30 text-sm whitespace-nowrap"
                >
                  Start My Deep Learning Project →
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold text-slate-300 border border-indigo-700/40 hover:border-indigo-500/60 hover:text-white transition-all text-sm whitespace-nowrap"
                >
                  Book a Free Consultation
                </Link>
                <a
                  href="https://www.upwork.com/freelancers/aimlengineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full font-semibold text-green-300 border border-green-800/40 hover:border-green-600/60 hover:text-green-200 transition-all text-sm whitespace-nowrap"
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
