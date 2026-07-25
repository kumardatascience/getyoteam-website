import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Computer Vision Development Services | Image Recognition, Object Detection & Video AI | getyoteam",
  description:
    "Custom image recognition and object detection services — from data annotation to production API. 117+ projects, 100% JSS. Start with a free quote.",
  keywords: [
    "computer vision development services",
    "image recognition",
    "object detection services",
    "computer vision solutions",
    "computer vision development company",
    "image processing solutions",
    "object detection system",
    "image classification model",
    "video analytics AI",
    "OCR document processing",
    "YOLO object detection",
    "OpenCV development",
    "computer vision engineer",
    "real-time video AI",
    "visual inspection AI",
    "facial recognition system",
    "medical imaging AI",
  ],
  alternates: { canonical: "https://getyoteam.com/services/computer-vision" },
  openGraph: {
    title: "Computer Vision Development Services | Image Recognition, Object Detection & Video AI | getyoteam",
    description:
      "Expert computer vision development services — image classification, object detection, video analytics & OCR. Production-ready systems. 117+ projects · 100% JSS.",
    url: "https://getyoteam.com/services/computer-vision",
    type: "website",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "Computer Vision Development Services — getyoteam",
      },
    ],
  },
};

const useCases = [
  {
    icon: "🖼️",
    title: "Image Classification Systems",
    desc: "CNN-based image classification for product categorization, quality inspection, and visual search — scalable systems that process millions of images with high accuracy across diverse visual categories.",
  },
  {
    icon: "📦",
    title: "Object Detection & Tracking (YOLO)",
    desc: "Real-time object detection and multi-object tracking using YOLO and ResNet — deployed for security, manufacturing, and retail environments with high mAP and sub-100ms inference.",
  },
  {
    icon: "🏥",
    title: "Medical Imaging AI",
    desc: "Transfer learning models for diagnostic support — detecting pneumonia from chest X-rays, analyzing pathology slides, and segmenting anatomical structures with clinical-grade accuracy.",
  },
  {
    icon: "📄",
    title: "OCR & Document Processing",
    desc: "Optical character recognition and intelligent document processing pipelines that extract structured data from invoices, forms, and PDFs — integrating naturally with downstream automation workflows.",
  },
  {
    icon: "🎥",
    title: "Video Analytics & Surveillance AI",
    desc: "Frame-by-frame video analysis pipelines for motion detection, crowd monitoring, anomaly detection, and behavioral analytics — built for real-time and batch video processing at scale.",
  },
  {
    icon: "👤",
    title: "Facial Recognition Systems",
    desc: "Face detection, alignment, and recognition systems for access control, identity verification, and customer analytics — with anti-spoofing and privacy-compliant architecture.",
  },
  {
    icon: "🏭",
    title: "Quality Inspection in Manufacturing",
    desc: "Automated visual defect detection for production lines — classifying surface defects, dimensional anomalies, and assembly errors with speed and consistency that surpasses manual inspection.",
  },
  {
    icon: "🛒",
    title: "Retail & Customer Behavior Analytics",
    desc: "In-store footfall tracking, shelf monitoring, and customer behavior analysis using computer vision — giving retail teams actionable insights from existing CCTV infrastructure.",
  },
];

const industries = [
  { icon: "🏥", name: "Healthcare",             desc: "Medical imaging, diagnostic AI, pathology" },
  { icon: "🏭", name: "Manufacturing",           desc: "Defect detection, quality control, inspection" },
  { icon: "🛒", name: "Retail",                  desc: "Shelf analytics, footfall, behavior AI" },
  { icon: "🔒", name: "Security & Surveillance", desc: "Face recognition, anomaly detection, CCTV AI" },
  { icon: "🚗", name: "Automotive",              desc: "ADAS, object detection, lane analysis" },
  { icon: "📦", name: "Logistics",               desc: "Barcode reading, damage detection, sorting" },
];

const process = [
  {
    step: "01",
    title: "Data Collection & Annotation",
    desc: "Computer vision models are only as good as their labeled data. I audit your image and video datasets for quality, class balance, and volume — then define annotation strategies (bounding boxes, segmentation masks, class labels) and tooling to build clean, production-ready training data.",
  },
  {
    step: "02",
    title: "Preprocessing & Augmentation",
    desc: "Raw images are normalized, resized, and standardized for model input. Augmentation strategies — flipping, rotation, color jitter, mosaic (for YOLO), and cutmix — expand the effective dataset and prevent overfitting, especially when labeled data is limited.",
  },
  {
    step: "03",
    title: "Model Selection (CNN, YOLO, ResNet)",
    desc: "The right architecture is chosen based on your task: ResNet or EfficientNet for classification, YOLOv8/v9 for detection and tracking, U-Net for segmentation, or a custom CNN pipeline. Transfer learning from ImageNet-pretrained weights dramatically reduces training time and data requirements.",
  },
  {
    step: "04",
    title: "Training & Evaluation (mAP, Accuracy)",
    desc: "Models are trained on GPU with systematic hyperparameter tuning — learning rate scheduling, anchor optimization (YOLO), and class weighting. Evaluation uses task-appropriate metrics: mAP@50 for detection, top-1/top-5 accuracy for classification, Dice coefficient for segmentation.",
  },
  {
    step: "05",
    title: "Deployment & Real-Time Inference",
    desc: "Production deployment via FastAPI or ONNX Runtime — containerized with Docker and deployable on any cloud or edge device. For real-time video pipelines, models are quantized and optimized for low-latency GPU inference. Monitoring for input drift and confidence degradation is built in from day one.",
  },
];

const techStack = [
  { name: "PyTorch",              color: "border-orange-700/40 text-orange-300 bg-orange-900/15" },
  { name: "TensorFlow",          color: "border-yellow-700/40 text-yellow-300 bg-yellow-900/15" },
  { name: "OpenCV",              color: "border-brand/40 text-brand bg-brand/15" },
  { name: "YOLO",                color: "border-sky-700/40 text-sky-300 bg-sky-900/15" },
  { name: "ResNet / EfficientNet", color: "border-blue-700/40 text-blue-300 bg-blue-900/15" },
  { name: "U-Net",               color: "border-brand/40 text-brand bg-brand/15" },
  { name: "Hugging Face",        color: "border-amber-700/40 text-amber-300 bg-amber-900/15" },
  { name: "Tesseract / PaddleOCR", color: "border-teal-700/40 text-teal-300 bg-teal-900/15" },
  { name: "scikit-learn",        color: "border-cyan-700/40 text-cyan-300 bg-cyan-900/15" },
  { name: "FastAPI",             color: "border-green-700/40 text-green-300 bg-green-900/15" },
  { name: "Docker",              color: "border-red-700/40 text-red-300 bg-red-900/15" },
  { name: "ONNX Runtime",        color: "border-brand/40 text-brand bg-brand/15" },
];

const faqs = [
  {
    q: "What is computer vision development and what can it do for my business?",
    a: "Computer vision development builds AI systems that extract structured information from images and video — replacing manual visual inspection, automating document processing, enabling real-time monitoring, and powering intelligent analytics. Practical applications include defect detection on production lines, OCR for invoice automation, object detection in security feeds, and image classification for e-commerce cataloging. The key differentiator from rule-based image processing is that computer vision models learn from examples — they generalize to new visual conditions rather than breaking on edge cases.",
  },
  {
    q: "How long does it take to build a computer vision system?",
    a: "A proof-of-concept image classifier or YOLO object detector can be ready in 3–7 days using transfer learning on a pre-annotated dataset. A full production system — with data annotation pipelines, model training on your domain data, evaluation, optimization, and API deployment — typically takes 2–6 weeks depending on dataset size, annotation complexity, and integration requirements. I provide a detailed timeline after reviewing your data and use case.",
  },
  {
    q: "Do I need a large labeled dataset to build a computer vision model?",
    a: "Not necessarily. Transfer learning from ImageNet-pretrained models (ResNet, EfficientNet, YOLO) allows high-accuracy results with a few hundred to a few thousand labeled images in many cases. For object detection, active learning and data augmentation strategies can stretch a small dataset significantly. I assess your available data during discovery and recommend whether you need a labeling campaign or whether transfer learning can get you to production-ready accuracy with what you have.",
  },
  {
    q: "What object detection frameworks do you use?",
    a: "YOLOv8 and YOLOv9 are the primary frameworks for real-time object detection — they offer the best speed/accuracy tradeoff for production systems. For classification, ResNet50 and EfficientNet are fine-tuned from ImageNet weights. For segmentation, U-Net and Mask R-CNN. For OCR and document processing, Tesseract and PaddleOCR combined with transformer-based document models. The stack is always matched to the specific task — not forced into one architecture.",
  },
  {
    q: "Can computer vision systems run in real time on video?",
    a: "Yes. Real-time inference on video streams is a core use case. YOLO-based detection runs at 30–60+ FPS on GPU hardware. For edge deployment (cameras, embedded devices), models are quantized to INT8 with ONNX Runtime or TensorRT, enabling real-time inference on hardware like NVIDIA Jetson without a cloud GPU. Latency requirements are discussed during discovery to select the right model size and optimization strategy.",
  },
  {
    q: "How does computer vision differ from deep learning?",
    a: "Computer vision is the application domain — building systems that understand images and video. Deep learning is the underlying technology that powers modern computer vision models (CNNs, YOLO, Transformers). Computer vision systems use deep learning for feature extraction and pattern recognition, but the computer vision pipeline also includes preprocessing (OpenCV), annotation, model evaluation (mAP), and deployment infrastructure. Most production computer vision work sits at the intersection of both disciplines.",
  },
  {
    q: "Do you offer custom object detection services?",
    a: "Yes. Object detection services build models that locate and classify multiple objects within an image or video frame — drawing bounding boxes with class labels and confidence scores, often in real time. I deliver end-to-end object detection services using YOLOv8/v9 for most production cases: dataset annotation, training on your domain-specific objects, evaluation with mAP, and deployment as a low-latency API. Typical applications include security and surveillance, retail shelf analytics, manufacturing defect detection, and traffic or vehicle analysis.",
  },
  {
    q: "What does an image recognition software development company actually deliver?",
    a: "Custom image recognition software development covers the full pipeline — data collection and annotation, model training (ResNet or EfficientNet for classification, YOLO for detection), evaluation, and production API deployment — not just a trained model file. As an image recognition software development company, getyoteam builds systems tuned to your specific visual categories rather than reselling a generic off-the-shelf API, which matters when your images differ from the everyday photos public models were trained on. Every delivery includes preprocessing, confidence scoring, and post-launch monitoring so accuracy holds up on real production data.",
  },
  {
    q: "What is the best object detection software for developers?",
    a: "For most developers, YOLOv8 or YOLOv9 (Ultralytics) is the best object detection software today — it gives the strongest speed-to-accuracy tradeoff, a clean Python and CLI API, and straightforward export to ONNX or TensorRT for deployment. If you need instance segmentation, Detectron2 (Mask R-CNN) is worth the extra complexity; RT-DETR is a strong transformer-based alternative; and OpenCV's DNN module is fine for running pre-trained models without a training pipeline. These frameworks are all free and open source — the real work is annotation quality, domain-specific training, and production optimization, which is exactly where I focus when building object detection systems for clients.",
  },
];

const relatedServices = [
  { slug: "deep-learning",    title: "Deep Learning Development", icon: "🧠" },
  { slug: "machine-learning", title: "Machine Learning Solutions", icon: "📈" },
  { slug: "nlp-chatbots",     title: "RAG & LLM Applications",    icon: "💬" },
];

export default function ComputerVisionPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://getyoteam.com/services" },
      { "@type": "ListItem", position: 3, name: "Computer Vision Development Services", item: "https://getyoteam.com/services/computer-vision" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Computer Vision Development Services",
    description:
      "Custom computer vision solutions — image classification, object detection, video analytics, OCR, and real-time visual AI systems. Production-ready deployment with PyTorch, YOLO, and OpenCV.",
    provider: { "@type": "Person", name: "Kumar Katariya", url: "https://getyoteam.com" },
    areaServed: ["United States", "Australia", "United Kingdom", "Europe", "Worldwide"],
    serviceType: "Computer Vision Development",
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/15 rounded-full blur-3xl" />
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
            { label: "Computer Vision Services" },
          ]} />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <h1 className="section-heading text-white mb-2">
                Computer Vision <span className="gradient-text">Development Services</span>
              </h1>
              <p className="text-lg font-medium text-slate-300 mb-4">
                Image Recognition, Object Detection &amp; Video AI for Production
              </p>

              <p className="text-slate-400 leading-relaxed mb-4">
                Build production-grade computer vision solutions that extract real insights from
                images and video at scale. From image recognition and object detection to
                real-time video analytics and OCR systems — our computer vision development
                services are designed for businesses that need accuracy, speed, and scalability
                in production environments.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                As a leading computer vision development company, I help startups and enterprises
                design, train, and deploy custom computer vision models tailored to real-world use
                cases. If you&apos;re looking to hire computer vision developers or build AI-powered
                visual systems, I deliver end-to-end solutions — from data annotation to deployment
                and monitoring.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                These systems integrate naturally with{" "}
                <Link href="/services/deep-learning/" className="text-brand hover:text-white underline underline-offset-2 transition-colors">
                  deep learning development
                </Link>
                ,{" "}
                <Link href="/services/machine-learning/" className="text-brand hover:text-white underline underline-offset-2 transition-colors">
                  machine learning solutions
                </Link>
                , and{" "}
                <Link href="/services/rag-llm/" className="text-brand hover:text-white underline underline-offset-2 transition-colors">
                  RAG &amp; LLM applications
                </Link>{" "}
                — enabling fully integrated AI systems across your business.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">
                Built for production — not demos. Every delivery includes annotation pipelines,
                model training, evaluation metrics, and API deployment from day one.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["PyTorch", "YOLO", "OpenCV", "ResNet"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-brand/30 text-brand border border-brand/30 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full font-semibold btn-accent shadow-lg shadow-[#b6ff3c]/30 text-sm whitespace-nowrap"
                >
                  Start My Computer Vision Project →
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-full font-semibold text-slate-300 border border-brand/40 hover:border-brand/60 hover:text-white transition-all text-sm whitespace-nowrap"
                >
                  See Computer Vision Projects
                </Link>
              </div>
            </div>

            {/* Right: computer vision pipeline diagram */}
            <div className="card-glass p-6 border border-brand/30">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-5">
                Computer Vision Pipeline Architecture
              </p>

              {/* Inputs */}
              <div className="flex justify-center mb-3">
                <div className="flex flex-wrap justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/40 max-w-xs">
                  {["Images", "Video", "Documents"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-400 border border-slate-600/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-brand/50" />
              </div>

              {/* Preprocessing + Feature Extraction */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "Preprocessing (resize, normalize)", color: "bg-brand/30 border-brand/40 text-brand" },
                  { label: "Feature Extraction (CNNs)",          color: "bg-blue-900/30 border-blue-700/40 text-blue-300" },
                ].map((a) => (
                  <div key={a.label} className={`rounded-lg border px-2 py-2 text-center text-xs font-medium ${a.color}`}>
                    {a.label}
                  </div>
                ))}
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-brand/50" />
              </div>

              {/* Model inference */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand/40 border border-brand/40 text-sm font-semibold text-brand shadow-lg shadow-brand/30">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Object Detection / Classification (YOLO, ResNet)
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-slate-700/50" />
              </div>

              {/* Training + Evaluation */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "Model Inference",        color: "bg-slate-800/60 border-slate-700/50 text-slate-300" },
                  { label: "Evaluation (mAP, F1)",   color: "bg-brand/30 border-brand/40 text-brand" },
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
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand/40 border border-brand/40 text-sm font-semibold text-brand">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  Deployment (API / Real-Time Systems)
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
                  Real-Time Visual Intelligence at Scale
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "117+", label: "Projects Delivered" },
              { value: "100%", label: "Job Success Score" },
              { value: "86%+", label: "Model Accuracy (CV)" },
              { value: "24h",  label: "Response Time" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-brand/20 bg-white/[0.02]">
                <p className="text-2xl font-extrabold gradient-text mb-1">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS COMPUTER VISION ──────────────────────────────────────── */}
      <section className="py-16 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Understanding Computer Vision
            </p>
            <h2 className="section-heading text-white mb-4">
              What Is <span className="gradient-text">Computer Vision Development?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Computer vision development builds AI systems that can see, analyze, and understand
              images and video — extracting structured insights from visual data at scale. Like
              giving machines the ability to interpret visual information the way humans do, but
              faster, more consistently, and without fatigue.
            </p>
            <div className="p-5 rounded-2xl bg-brand/15 border border-brand/30 text-left max-w-2xl mx-auto">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-brand">New to computer vision?</span>{" "}
                Think of a CNN as a visual cortex trained on millions of images — it has learned
                to recognize edges, shapes, objects, and context without being told what to look
                for. Computer vision solutions apply this capability to practical problems: reading
                documents, inspecting products, tracking objects in video, and analyzing visual
                patterns that would take humans hours to review. Many clients pair computer vision
                pipelines with{" "}
                <Link href="/services/nlp-chatbots" className="text-brand hover:text-white underline underline-offset-2 transition-colors">
                  RAG &amp; LLM applications
                </Link>{" "}
                for multimodal AI systems that see and reason simultaneously.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📋",
                label: "Rule-Based Image Processing",
                points: ["Thresholds and filters written by hand", "Breaks on lighting or angle changes", "Cannot handle novel visual conditions", "Cannot learn from labeled examples"],
                accent: "border-slate-700/40",
                bad: true,
              },
              {
                icon: "📈",
                label: "Traditional Machine Learning",
                points: ["Works on structured/tabular features", "Requires manual feature extraction", "Limited on raw pixel data", "Poor generalization across visual domains"],
                accent: "border-blue-700/40",
                bad: false,
              },
              {
                icon: "👁️",
                label: "Computer Vision AI",
                points: ["Handles raw images, video & documents", "Learns visual features automatically", "Generalizes across lighting, angles & conditions", "State-of-the-art accuracy at production scale"],
                accent: "border-brand/60",
                bad: false,
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`card-glass p-6 border ${card.accent} ${card.accent === "border-brand/60" ? "shadow-lg shadow-brand/20" : ""}`}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-white mb-4">{card.label}</h3>
                <ul className="space-y-2">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className={`mt-0.5 shrink-0 ${card.bad ? "text-slate-600" : "text-brand"}`}>
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

      {/* ── WHEN DO YOU NEED COMPUTER VISION ────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Is This Right for You?
            </p>
            <h2 className="section-heading text-white mb-4">
              When Do You Need <span className="gradient-text">Computer Vision?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Computer vision solutions deliver the highest ROI when visual data is central to your
              workflow and manual review is the bottleneck.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🖼️", title: "Working with images or video at scale", desc: "If your team is reviewing thousands of images or hours of footage manually, computer vision development services can automate that process — processing visual data in seconds with consistent accuracy across every frame." },
              { icon: "🔍", title: "Need automation of visual inspection", desc: "Defect detection, quality control, and compliance checks that currently rely on human eyes are ideal candidates for computer vision AI — achieving higher throughput, lower error rates, and 24/7 operation." },
              { icon: "🎥", title: "Real-time monitoring or surveillance", desc: "Security, traffic management, and facility monitoring use cases that require instant detection of events or anomalies in live video feeds benefit from optimized real-time object detection pipelines." },
              { icon: "⏱️", title: "Manual image analysis is too slow", desc: "If image or video review is creating a bottleneck — in medical diagnosis, document processing, or content moderation — computer vision solutions can reduce turnaround from hours to milliseconds." },
              { icon: "🏭", title: "Quality control and defect detection", desc: "Manufacturing and logistics operations with visual inspection requirements can deploy CNN-based defect classifiers that catch anomalies at line speed — dramatically reducing scrap rates and recall risk." },
              { icon: "📄", title: "Document and OCR automation required", desc: "If your workflow involves manually extracting data from invoices, forms, or PDFs, an image processing solution combining OCR with document AI can automate extraction, validation, and routing end-to-end." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-brand/20 flex gap-4">
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
      <section className="py-16 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Applications
            </p>
            <h2 className="section-heading text-white mb-4">
              What Computer Vision Solutions <span className="gradient-text">Can Build for You</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Images, video, documents — if the data is visual, computer vision is the right
              foundation. Here are the systems I build and deploy for production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="card-glass p-5 border border-brand/20 group">
                <div className="mb-3 p-2.5 rounded-xl bg-brand/20 border border-brand/30 w-fit text-brand group-hover:text-blue-400 transition-colors text-xl">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Who We Serve
            </p>
            <h2 className="section-heading text-white mb-4">
              Industries <span className="gradient-text">Served</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Computer vision solutions deliver the highest impact in industries where visual data
              drives decisions — and where manual review creates the biggest bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="card-glass p-5 border border-brand/20 text-center group hover:border-brand/30 transition-all"
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
      <section className="py-16 bg-[#0f0f11]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              How We Build
            </p>
            <h2 className="section-heading text-white mb-4">
              The Computer Vision Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every computer vision project follows the same rigorous development process — from
              raw image data and annotation to GPU-trained, production-deployed visual AI systems.
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
                    <div className="w-px flex-1 bg-gradient-to-b from-brand/50 to-transparent my-1" style={{ minHeight: "2.5rem" }} />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Why getyoteam
            </p>
            <h2 className="section-heading text-white mb-4">
              Why Work With <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Businesses in the USA, Europe, and Australia choose getyoteam because production
              computer vision is harder than a demo — and we get it right the first time. Proven
              results from real deployments, not tutorials.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🚀",
                title: "Production-Ready CV Systems",
                desc: "Every computer vision solution ships with preprocessing pipelines, API endpoints, input validation, and monitoring — not just a model file. What works on test images runs reliably in production on live data.",
              },
              {
                icon: "⚡",
                title: "Optimized Inference & Low Latency",
                desc: "Models are quantized and optimized with ONNX Runtime or TensorRT for production latency requirements. Real-time video pipelines run at 30–60+ FPS. Edge deployment on Jetson hardware is supported when needed.",
              },
              {
                icon: "🔄",
                title: "CNNs, YOLO & OpenCV Expertise",
                desc: "Deep experience with the full computer vision stack — YOLOv8/v9 for detection, ResNet and EfficientNet for classification, U-Net for segmentation, OpenCV for preprocessing, and Tesseract for OCR.",
              },
              {
                icon: "🏆",
                title: "Top Rated Plus on Upwork",
                desc: "Independently verified Top 3% globally — 100% Job Success Score across 117+ projects. Real client outcomes across the USA, UK, and Australia, with computer vision projects spanning healthcare, manufacturing, and retail.",
              },
              {
                icon: "🤝",
                title: "Direct Access, No Middlemen",
                desc: "You work directly with Kumar Katariya — a Kaggle Expert and IBM-certified AI engineer. I design, annotate, train, and deploy every computer vision system personally.",
              },
              {
                icon: "📞",
                title: "30-Day Post-Launch Support",
                desc: "Visual distribution shifts and edge cases surface after deployment. I stay engaged for 30 days to monitor model confidence, retrain on failure cases, and refine until the system performs as expected in production.",
              },
            ].map((item) => (
              <div key={item.title} className="card-glass p-6 border border-brand/20">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Technology
            </p>
            <h2 className="section-heading text-white mb-4">
              Tech Stack for <span className="gradient-text">Computer Vision</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Battle-tested frameworks chosen for accuracy, inference speed, and production
              deployment — covering the full computer vision development stack.
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
              { icon: "🧠", title: "Model Development", desc: "PyTorch and TensorFlow for CNN training — with YOLO for object detection, ResNet and EfficientNet for classification, and U-Net for segmentation tasks." },
              { icon: "👁️", title: "Vision & Preprocessing", desc: "OpenCV for image preprocessing, augmentation, and frame extraction. Tesseract and PaddleOCR for document intelligence. ONNX for cross-platform inference." },
              { icon: "🚀", title: "Deployment", desc: "FastAPI and ONNX Runtime — containerized with Docker on any cloud or edge device. Models are quantized for production latency and monitored for input distribution drift." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-brand/20 text-center">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Proven Results
            </p>
            <h2 className="section-heading text-white mb-4">
              What Clients <span className="gradient-text">Achieved</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {/* Main case study */}
              <div className="card-glass p-6 border border-brand/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-brand/30 text-brand border border-brand/30">Computer Vision</span>
                  <span className="text-xs text-slate-500">Case Study</span>
                </div>
                <h3 className="font-bold text-white mb-4">Medical Imaging: Pneumonia Detection from X-Rays</h3>
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">The Problem</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Manual review of chest X-rays for pneumonia is time-consuming, subject to
                      radiologist fatigue, and unavailable in resource-limited settings. The client
                      needed a production-grade image classification model that could reliably flag
                      pneumonia cases from raw X-ray images with clinical-grade accuracy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand mb-1">The Solution</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Fine-tuned a ResNet-based CNN image classification model on a labeled clinical
                      X-ray dataset using transfer learning from ImageNet weights. Data augmentation
                      (flipping, zoom, contrast normalization) expanded the effective training set.
                      Deployed as a REST API with confidence scores and Grad-CAM visualizations showing
                      the model&apos;s attention regions — providing both predictions and explainability.
                      These{" "}
                      <Link href="/services/deep-learning" className="text-brand hover:text-white underline underline-offset-2 transition-colors">
                        deep learning techniques
                      </Link>{" "}
                      are central to modern medical imaging AI.
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
                    <div key={m.label} className="rounded-xl bg-brand/20 border border-brand/20 p-3 text-center">
                      <p className="text-xl font-extrabold gradient-text">{m.value}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link href="/portfolio/pneumonia-detector" className="text-sm text-brand hover:text-white transition-colors">
                  View full case study →
                </Link>
              </div>

              {/* Mini case */}
              <div className="card-glass p-5 border border-brand/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-brand/30 text-brand border border-brand/30">Object Detection</span>
                  <span className="text-xs text-slate-500">Mini Case</span>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">Real-Time Object Detection System</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Built a YOLOv8-based object detection and tracking system for a retail client
                  monitoring in-store customer behavior and shelf occupancy. The system processes
                  live CCTV feeds at 30+ FPS, detecting and classifying objects with bounding
                  boxes in real time. Integrated with a{" "}
                  <Link href="/services/machine-learning" className="text-brand hover:text-white underline underline-offset-2 transition-colors">
                    machine learning
                  </Link>{" "}
                  analytics pipeline for footfall reporting and planogram compliance alerts.
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
                  color: "from-brand to-brand",
                },
                {
                  quote: "Kumar and his team did a wonderful job. I now consider them an extension of my team. Their expertise in AI and attention to detail is outstanding.",
                  name: "Zhanna Shekhtmeyster",
                  role: "Founder, ABC Observe",
                  initials: "ZS",
                  color: "from-blue-600 to-brand",
                },
                {
                  quote: "Excellent work from Kumar and Team. The AI solution they built has transformed our workflow. Will definitely hire again and again.",
                  name: "Simon Islam",
                  role: "CEO, Fair Pattern",
                  initials: "SI",
                  color: "from-orange-600 to-amber-600",
                },
              ].map((t) => (
                <div key={t.name} className="card-glass p-5 border border-brand/20">
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

      {/* ── CV VS ML VS RULES ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0f0f11]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Understand Your Options
            </p>
            <h2 className="section-heading text-white mb-4">
              Computer Vision vs Machine Learning <span className="gradient-text">vs Rules</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-4">
              Rule-based image processing is brittle and breaks on visual variation. Traditional
              machine learning requires manual feature extraction and struggles with raw pixel data.
              Computer vision AI — powered by CNNs and deep learning — learns visual representations
              automatically and generalizes reliably across real-world conditions.
            </p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              For most image, video, and document problems, computer vision development is the
              clear choice. Here&apos;s the honest comparison.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "Machine Learning",
                icon: "📈",
                color: "border-slate-700/40",
                best: false,
                pros: ["Best for structured/tabular data", "Fast to train and retrain", "SHAP-explainable predictions"],
                cons: ["Requires manual feature engineering", "Limited on raw image and video data", "Poor generalization across visual domains"],
              },
              {
                label: "Computer Vision AI",
                icon: "👁️",
                color: "border-brand/60",
                best: true,
                pros: ["Handles images, video & documents", "No manual feature engineering", "State-of-the-art accuracy at scale", "Generalizes across real-world conditions"],
                cons: [],
              },
              {
                label: "Rule-Based Image Processing",
                icon: "📋",
                color: "border-brand/40",
                best: false,
                pros: ["Fully transparent logic", "No training data required", "Deterministic output"],
                cons: ["Breaks on lighting and angle changes", "Cannot handle novel visual conditions", "Manual updates for every edge case"],
              },
            ].map((opt) => (
              <div key={opt.label} className={`card-glass p-6 border ${opt.color} ${opt.best ? "shadow-lg shadow-brand/20" : ""}`}>
                <div className="text-3xl mb-3">{opt.icon}</div>
                <h3 className="font-bold text-white mb-2">{opt.label}</h3>
                {opt.best && (
                  <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-brand/30 text-brand border border-brand/30 mb-3">
                    Best for visual data problems
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
            <Link href="/contact" className="text-brand hover:text-white underline underline-offset-2 transition-colors">
              Book a free consultation →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Common Questions
            </p>
            <h2 className="section-heading text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="card-glass border border-brand/20 group">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                  <h3 className="text-sm font-semibold text-white leading-snug">{faq.q}</h3>
                  <svg
                    viewBox="0 0 24 24" fill="none"
                    className="w-4 h-4 text-brand shrink-0 transition-transform group-open:rotate-180"
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
      <section className="py-12 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">
            Commonly Paired With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`/services/${rs.slug}`}
                className="card-glass p-5 border border-brand/20 flex items-center gap-4 group"
              >
                <span className="text-2xl">{rs.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-brand transition-colors">
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
          <div className="relative rounded-3xl overflow-hidden border border-brand/30">
            <div className="absolute inset-0 gradient-bg opacity-10" />
            <div className="absolute inset-0 bg-[#0a0a0b]/80" />
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
                Available for new computer vision projects
              </div>
              <h2 className="section-heading text-white mb-4">
                Build Production-Ready Visual AI<br />
                <span className="gradient-text">with Computer Vision</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-3 leading-relaxed">
                Describe your use case — images, video, or documents — and I will propose the right
                computer vision architecture within 24 hours. No commitment, no jargon.
              </p>
              <p className="text-xs text-slate-500 mb-8">
                Trusted by businesses in the USA, UK, Europe &amp; Australia · Top Rated Plus · 100% Job Success
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold btn-accent shadow-lg shadow-[#b6ff3c]/35 text-sm whitespace-nowrap"
                >
                  Start My Computer Vision Project →
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold text-slate-300 border border-brand/40 hover:border-brand/60 hover:text-white transition-all text-sm whitespace-nowrap"
                >
                  Discuss Your Vision AI Use Case
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
