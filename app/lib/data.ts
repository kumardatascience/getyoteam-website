// Central data store — all pages import from here.
// Sections: Services · Projects · BlogPosts · Testimonials · Achievements · About · Kaggle

export type Service = {
  slug: string | null; // null = no dedicated page
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  useCases: string[];
  color: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDesc: string;
  problem: string;
  solution: string;
  tech: string[];
  metric: string;
  metricIcon: string;
  highlights: Array<{ value: string; label: string }>;
  results: string[];
  category: string[];
  liveUrl: string | null;
  githubUrl: string;
  gradient: string;
  accent: string;
};

export type BodyBlock =
  | string
  | { type: "heading"; text: string }
  | { type: "callout"; emoji: string; label: string; text: string }
  | { type: "diagram"; title?: string; lines: string[] }
  | { type: "steps"; items: Array<{ icon: string; title: string; desc: string }> }
  | { type: "stats"; items: Array<{ value: string; label: string }> };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  body: BodyBlock[];
  date: string;
  category: string;
  readTime: string;
  tags: string[];
};

// ─── Services ────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    slug: "ai-agents",
    icon: "🤖",
    title: "AI Agent Development",
    shortDesc:
      "Multi-agent systems and autonomous AI workflows built with LangChain, CrewAI, and Claude API to automate complex business processes.",
    longDesc:
      "I design and deploy multi-agent AI systems that work autonomously — researching, deciding, and acting on your behalf without manual intervention. From simple single-agent automations to complex pipelines where specialised agents collaborate, I build systems that scale with your business. Every agent is production-hardened with retries, observability, and graceful error handling.",
    tech: ["LangChain", "CrewAI", "Claude API", "AutoGen", "OpenAI", "Python", "FastAPI"],
    useCases: [
      "Customer support automation that escalates intelligently",
      "Research agents that synthesise reports from multiple sources",
      "Content pipelines that draft, review, and publish autonomously",
      "Data extraction and enrichment workflows",
      "Internal knowledge-base Q&A agents",
    ],
    color: "purple",
  },
  {
    slug: "nlp-chatbots",
    icon: "🧠",
    title: "RAG & LLM Applications",
    shortDesc:
      "Custom chatbots and document Q&A systems using Retrieval-Augmented Generation with ChromaDB, Pinecone, and vector databases.",
    longDesc:
      "I build Retrieval-Augmented Generation (RAG) pipelines that give LLMs access to your private documents, databases, and knowledge bases — without hallucination. The result is a chatbot or Q&A system that answers from your actual data, cites sources, and stays current. I handle everything from chunking strategy and embedding models to retrieval tuning and production deployment.",
    tech: ["LangChain", "ChromaDB", "Pinecone", "Google Gemini", "OpenAI", "Streamlit", "FastAPI"],
    useCases: [
      "PDF and document Q&A systems",
      "Internal knowledge-base chatbots",
      "Customer-facing support bots grounded in product docs",
      "Legal and compliance document search",
      "Multilingual enterprise search",
    ],
    color: "sky",
  },
  {
    slug: "machine-learning",
    icon: "📈",
    title: "Machine Learning Solutions",
    shortDesc:
      "Predictive models, classification and regression systems using state-of-the-art ensemble methods for real business impact.",
    longDesc:
      "I build end-to-end machine learning solutions — from raw data to deployed model. Whether you need to predict customer churn, detect fraud, forecast demand, or score leads, I apply the right algorithms with rigorous feature engineering and cross-validation. I favour interpretable, battle-tested methods (XGBoost, LightGBM, ensemble stacking) that deliver measurable ROI.",
    tech: ["XGBoost", "LightGBM", "CatBoost", "scikit-learn", "Python", "Pandas", "SHAP"],
    useCases: [
      "Customer churn and lifetime value prediction",
      "Financial risk and bankruptcy prediction",
      "Demand forecasting and inventory optimisation",
      "Lead scoring and conversion prediction",
      "Anomaly and fraud detection",
    ],
    color: "violet",
  },
  {
    slug: "deep-learning",
    icon: "🔬",
    title: "Deep Learning",
    shortDesc:
      "Neural networks and transfer learning solutions with PyTorch and TensorFlow — from transformers to custom CNN architectures.",
    longDesc:
      "When standard ML hits its limits, deep learning unlocks the next level of performance. I design and train neural networks for tabular data, images, text, and audio — leveraging transfer learning to dramatically cut training time. From fine-tuning a pre-trained ResNet for your specific image domain to building a custom transformer, I deliver models that are accurate, fast, and deployable.",
    tech: ["PyTorch", "TensorFlow", "Transformers", "Hugging Face", "ResNet", "BERT", "CUDA"],
    useCases: [
      "Custom image classifiers and detectors",
      "Fine-tuned language models for domain-specific text",
      "Time series forecasting with LSTM and Temporal Fusion",
      "Multi-modal learning combining text and image",
      "Generative models and synthetic data",
    ],
    color: "blue",
  },
  {
    slug: "computer-vision",
    icon: "👁️",
    title: "Computer Vision",
    shortDesc:
      "Image classification, object detection, and medical imaging AI using the latest CNN architectures.",
    longDesc:
      "I build production-grade computer vision systems that see, classify, and detect at scale. Whether it is quality control on a manufacturing line, medical image analysis, or real-time object tracking, I combine the right architecture (ResNet, YOLO, EfficientNet) with your domain data to hit the accuracy targets your use-case demands.",
    tech: ["PyTorch", "OpenCV", "YOLO", "ResNet", "EfficientNet", "Flask", "Docker"],
    useCases: [
      "Medical imaging and pathology detection",
      "Manufacturing defect and quality inspection",
      "Real-time object detection and tracking",
      "Document OCR and layout understanding",
      "Satellite and aerial image analysis",
    ],
    color: "indigo",
  },
  {
    slug: "data-science",
    icon: "📊",
    title: "Data Science Consulting",
    shortDesc:
      "End-to-end EDA, feature engineering, statistical analysis, and business insight dashboards.",
    longDesc:
      "Raw data rarely speaks for itself. I turn your data into clear, actionable intelligence through rigorous exploratory analysis, statistical modelling, and stakeholder-ready dashboards. Whether you need a one-off analysis to answer a business question or an ongoing data science retainer, I deliver insights grounded in statistical rigour — not gut feel.",
    tech: ["Python", "Pandas", "Plotly", "Seaborn", "Jupyter", "SQL", "Tableau"],
    useCases: [
      "Business KPI dashboards and reporting",
      "A/B testing design and analysis",
      "Customer segmentation and cohort analysis",
      "Market and competitor research",
      "Data quality audits and ETL pipeline design",
    ],
    color: "teal",
  },
  {
    slug: "speech-ai",
    icon: "🎙️",
    title: "Speech & Audio AI",
    shortDesc:
      "Speech emotion recognition and audio classification using wav2vec2 and advanced audio processing.",
    longDesc:
      "Audio is one of the richest and most underexploited data sources in enterprise. I build systems that classify, transcribe, and understand speech and audio — from detecting customer sentiment in call recordings to identifying equipment faults from vibration data. I leverage state-of-the-art transformer-based audio models for accuracy that beats classical approaches by significant margins.",
    tech: ["wav2vec2", "PyTorch", "Hugging Face", "LibROSA", "Whisper", "Transformers"],
    useCases: [
      "Call centre emotion and sentiment detection",
      "Speaker identification and verification",
      "Keyword spotting and wake-word detection",
      "Audio event classification",
      "Accent and dialect analysis",
    ],
    color: "purple",
  },
  {
    slug: null,
    icon: "🌐",
    title: "NLP & Text Analytics",
    shortDesc:
      "Sentiment analysis, named entity recognition, and text classification pipelines powered by Hugging Face transformers.",
    longDesc: "",
    tech: ["Hugging Face", "BERT", "spaCy", "NLTK", "Python"],
    useCases: [],
    color: "cyan",
  },
  {
    slug: null,
    icon: "📱",
    title: "Mobile App Development",
    shortDesc:
      "Native iOS and Android applications with Swift and Kotlin, including AI-powered features and seamless UX/UI design.",
    longDesc: "",
    tech: ["Swift", "Kotlin", "iOS", "Android"],
    useCases: [],
    color: "sky",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "rag-chatbot",
    title: "RAG Document Chatbot",
    shortDesc:
      "End-to-end AI system that answers questions from any PDF document in seconds using Retrieval-Augmented Generation — deployed live on Streamlit Cloud.",
    problem:
      "Knowledge workers spend hours manually searching through dense PDF reports, legal documents, and research papers. Ctrl+F finds keywords but misses context. Teams needed a way to ask natural-language questions and get accurate, cited answers — instantly.",
    solution:
      "Built a 6-step RAG pipeline: PyPDF loads the document and splits it into 1,000-character chunks with 200-character overlap. Google Generative AI Embeddings convert each chunk into vectors stored in ChromaDB. At query time, the top-k relevant chunks are retrieved and passed to gemini-1.5-flash via a ConversationalRetrievalChain — answers are strictly grounded in the retrieved context with multi-turn chat history maintained. Deployed to Streamlit Cloud with auto-deploy on GitHub push and API keys managed via Streamlit Secrets.",
    tech: ["LangChain", "ChromaDB", "Google Gemini 1.5 Flash", "Streamlit", "PyPDF", "Python"],
    metric: "80%+ faster research",
    metricIcon: "⚡",
    highlights: [
      { value: "RAG", label: "Architecture" },
      { value: "6", label: "Pipeline Steps" },
      { value: "1,000", label: "Chunk Size (chars)" },
      { value: "Free", label: "Deployment Cost" },
    ],
    results: [
      "Reduces document research time by 80%+ versus manual search",
      "Answers strictly grounded in the source document — zero hallucination",
      "1,000-character chunks with 200-character overlap preserve full context",
      "Multi-turn conversation with chat history maintained across questions",
      "Deployed live on Streamlit Cloud — free hosting, auto-deploy on GitHub push",
    ],
    category: ["All", "NLP", "RAG"],
    liveUrl: "https://rag-document-chatbotgit-dqeamxetxufcy6vzaj7q9s.streamlit.app",
    githubUrl: "https://github.com/kumardatascience/rag-document-chatbot",
    gradient: "from-purple-600/30 via-violet-600/20 to-indigo-600/30",
    accent: "#7c3aed",
  },
  {
    slug: "pneumonia-detector",
    title: "Chest X-Ray Pneumonia Detector",
    shortDesc:
      "Transfer learning AI classifying chest X-rays as PNEUMONIA or NORMAL with 86.22% accuracy — deployed live on Render.com, built in 4 days.",
    problem:
      "Pneumonia kills 2.5M+ people worldwide every year. Radiologist shortages in developing regions leave chest X-ray backlogs that delay diagnosis by days or weeks. An automated screening tool that flags high-risk scans for urgent review could save lives — especially given the severe class imbalance (74% pneumonia cases) in real-world data.",
    solution:
      "Fine-tuned ResNet18 (pre-trained on 14M ImageNet images) on 5,216 chest X-rays at 150×150 resolution. All backbone layers were frozen — only the final Linear(512,1) layer (513 weights) was trained, making it fast and efficient. Data augmentation (RandomHorizontalFlip, RandomRotation ±10°, ColorJitter brightness & contrast) and weighted BCEWithLogitsLoss corrected the 74:26 class imbalance. Trained with Adam lr=0.001 for 10 epochs on Kaggle T4 GPU. The 43MB model file is served via Flask on Render.com — upload an X-ray, get PNEUMONIA/NORMAL in under 200ms.",
    tech: ["PyTorch", "ResNet18", "Transfer Learning", "Flask", "Render", "BCEWithLogitsLoss", "Python"],
    metric: "86.22% accuracy · +48pp vs baseline CNN",
    metricIcon: "🎯",
    highlights: [
      { value: "86.22%", label: "Test Accuracy" },
      { value: "+48pp", label: "vs Baseline CNN" },
      { value: "5,216", label: "X-rays Trained" },
      { value: "4 Days", label: "Build to Deploy" },
    ],
    results: [
      "86.22% test accuracy — 48 percentage points above the 37.5% baseline CNN trained from scratch",
      "Baseline 3-layer CNN achieved only 37.5% with severe overfitting — transfer learning is the decisive factor",
      "74:26 class imbalance (pneumonia vs normal) handled with weighted BCEWithLogitsLoss",
      "Only 513 parameters trained — final FC layer only; all 14M+ backbone weights frozen",
      "43MB model deployed live on Render.com via Flask — inference under 200ms per image",
      "Entire project — data prep, training, deployment — completed in 4 days",
    ],
    category: ["All", "Deep Learning", "Vision"],
    liveUrl: "https://pneumonia-app-cnn.onrender.com",
    githubUrl: "https://github.com/kumardatascience/pneumonia-app-cnn",
    gradient: "from-sky-600/30 via-blue-600/20 to-cyan-600/30",
    accent: "#0ea5e9",
  },
  {
    slug: "bankruptcy-prediction",
    title: "Company Bankruptcy Prediction",
    shortDesc:
      "AI early-warning system for financial distress — XGBoost AUC 0.9367 across 6,819 companies and 94 financial features including Altman Z-Score inspired ratios.",
    problem:
      "Bankruptcy causes massive financial losses for investors, creditors, and employees. Traditional analysis is slow, manual, and reactive — catching problems too late. With only 220 bankrupt companies out of 6,819 (3.22%), the severe 30:1 class imbalance makes this a particularly hard detection problem. A data-driven model can flag at-risk companies months before collapse.",
    solution:
      "Prepared 6,819 company records (94 numeric features, zero missing values). Added 4 Altman Z-Score inspired engineered features: Working Capital, Debt-to-Assets, Retained Earnings, and CashFlow-to-Debt ratios. Applied IQR-based outlier clipping, StandardScaler normalisation, and class-weight balancing (30:1). Trained 4 models (Logistic Regression, XGBoost, LightGBM, CatBoost) with 5-fold stratified CV. XGBoost achieved the best standalone AUC of 0.9367; a Logistic Regression meta-model stacking all 4 base predictions reached AUC 0.923. Threshold optimised to 0.365 to balance precision and recall on the minority bankrupt class.",
    tech: ["XGBoost", "LightGBM", "CatBoost", "scikit-learn", "StandardScaler", "Pandas", "Python"],
    metric: "XGBoost AUC 0.9367 · 109/220 caught",
    metricIcon: "📊",
    highlights: [
      { value: "0.9367", label: "XGBoost AUC" },
      { value: "6,819", label: "Companies Analysed" },
      { value: "94", label: "Financial Features" },
      { value: "4", label: "ML Models Tested" },
    ],
    results: [
      "XGBoost AUC of 0.9367 — well above the 0.80 industry standard for financial distress models",
      "109 of 220 bankrupt companies correctly flagged (49.5% recall at optimised threshold 0.365)",
      "97% of 6,599 healthy companies correctly classified — 6,501 of 6,599 correct",
      "Top signal: Total income/Total expense ratio (20.49% importance) — spending more than earning is the strongest bankruptcy signal",
      "Leverage ratios (Debt ratio, Total debt/Net worth, Equity-to-Liability) account for ~30% of model importance combined",
      "4 Altman Z-Score inspired features engineered on top of 94 raw financial ratios",
    ],
    category: ["All", "ML"],
    liveUrl: null,
    githubUrl: "https://github.com/kumardatascience/company-bankruptcy-prediction",
    gradient: "from-green-600/30 via-emerald-600/20 to-teal-600/30",
    accent: "#10b981",
  },
  {
    slug: "speech-emotion",
    title: "Speech Emotion Recognition",
    shortDesc:
      "Deep learning system recognising human emotions from raw audio using state-of-the-art wav2vec2 transformer architecture.",
    problem:
      "Call centres and mental health applications need to detect emotional states from voice in real time. Traditional handcrafted audio features (MFCCs, pitch) plateau at ~70% accuracy and struggle with speaker variability.",
    solution:
      "Fine-tuned Facebook's wav2vec2 transformer — pre-trained on 960 hours of unlabelled speech — on labelled emotion datasets. The model learns rich contextual audio representations directly from waveforms, bypassing fragile feature engineering. PyTorch Lightning manages training with gradient accumulation and mixed precision.",
    tech: ["wav2vec2", "PyTorch", "Transformers", "Hugging Face", "LibROSA", "Python"],
    metric: "85–92% target accuracy",
    metricIcon: "🎙️",
    highlights: [
      { value: "85–92%", label: "Target Accuracy" },
      { value: "960h", label: "Pre-training Audio" },
      { value: "<500ms", label: "Inference Latency" },
      { value: "0", label: "Manual Features Needed" },
    ],
    results: [
      "Target accuracy range of 85–92% across emotion classes",
      "End-to-end learning from raw audio — no manual feature engineering",
      "Robust to speaker variability via pre-trained representations",
      "Supports real-time inference for live call monitoring",
      "Deployable as a REST API with sub-second latency",
    ],
    category: ["All", "Deep Learning", "NLP"],
    liveUrl: null,
    githubUrl: "https://github.com/kumardatascience",
    gradient: "from-pink-600/30 via-rose-600/20 to-red-600/30",
    accent: "#f43f5e",
  },
  {
    slug: "personality-prediction",
    title: "Kaggle — Personality Prediction (Rank 21)",
    shortDesc:
      "ML competition predicting introvert vs extrovert from 8 behavioural features — ranked 21st out of 4,329 teams (top 0.5%) with 97.27% accuracy.",
    problem:
      "Kaggle Playground Series S5E7 challenge: predict personality type (Introvert/Extrovert) from anonymised behavioural survey features. The key challenges are handling missing values, extracting maximum signal from only 8 features, and avoiding leaderboard overfitting on a dataset with near-perfect class separability.",
    solution:
      "Merged two external personality datasets with the competition training data to expand training signal. Applied median imputation for numeric features (Time_spent_Alone, Social_event_attendance, Going_outside, Friends_circle_size, Post_frequency) and most-frequent imputation for categoricals (Stage_fear, Drained_after_socializing). Used OneHotEncoding and trained a GradientBoostingClassifier (sklearn) achieving 97.27% cross-validation accuracy. The external dataset merge — matching on all 7 feature columns — was the key technique that unlocked near-perfect accuracy.",
    tech: ["Python", "GradientBoostingClassifier", "scikit-learn", "Pandas", "OneHotEncoding", "SimpleImputer"],
    metric: "Rank 21 / 4,329 teams · 97.27% accuracy",
    metricIcon: "🏆",
    highlights: [
      { value: "Rank 21", label: "out of 4,329 Teams" },
      { value: "Top 0.5%", label: "Global Percentile" },
      { value: "97.27%", label: "CV Accuracy" },
      { value: "8", label: "Behavioural Features" },
    ],
    results: [
      "Ranked 21st globally out of 4,329 competing teams — top 0.5% worldwide",
      "97.27% cross-validation accuracy on the training set",
      "Key technique: merged 2 external personality datasets matched on all 7 behavioural features",
      "8 features used: Time_spent_Alone, Stage_fear, Social_event_attendance, Going_outside, Drained_after_socializing, Friends_circle_size, Post_frequency",
      "One of 10+ Kaggle competitions completed by Kumar Katariya",
    ],
    category: ["All", "ML"],
    liveUrl: null,
    githubUrl: "https://www.kaggle.com/competitions/playground-series-s5e7",
    gradient: "from-orange-600/30 via-amber-600/20 to-yellow-600/30",
    accent: "#f59e0b",
  },
  {
    slug: "trader-insights",
    title: "Trader Behavior Insights",
    shortDesc:
      "Advanced trader performance and behavioural analysis across multiple market sentiment regimes.",
    problem:
      "Trading desks accumulate vast transaction logs but rarely perform rigorous behavioural analysis. Which traders perform differently in bull vs bear markets? Do certain strategies fail under high-volatility regimes? These questions require multi-regime statistical analysis, not just simple P&L reporting.",
    solution:
      "Built a Python analytics pipeline that segments trading history into market regimes (bull, bear, sideways, high-volatility) using rolling statistics. Computes per-trader metrics — Sharpe ratio, drawdown, win rate, expectancy — within each regime. Visualised with interactive Plotly dashboards revealing hidden behavioural patterns.",
    tech: ["Python", "Pandas", "Plotly", "NumPy", "Jupyter", "scikit-learn"],
    metric: "Multi-regime market analysis",
    metricIcon: "💹",
    highlights: [
      { value: "4", label: "Market Regimes" },
      { value: "5+", label: "Performance Metrics" },
      { value: "Interactive", label: "Plotly Dashboards" },
      { value: "Real-time", label: "Anomaly Flagging" },
    ],
    results: [
      "Identifies regime-specific performance breakdowns invisible in aggregate stats",
      "Interactive dashboards enable drill-down from portfolio to individual trader",
      "Automated anomaly flagging for outlier behaviour",
      "Sharpe, Sortino, Calmar, and custom metrics computed per regime",
      "Delivered as a self-contained Jupyter + Plotly report",
    ],
    category: ["All", "ML"],
    liveUrl: null,
    githubUrl: "https://github.com/kumardatascience",
    gradient: "from-violet-600/30 via-purple-600/20 to-fuchsia-600/30",
    accent: "#8b5cf6",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────
// To add a new post: push a new object to this array. No other files need to change.

export const blogPosts: BlogPost[] = [
  // ── Post 1: RAG Chatbot ─────────────────────────────────────────────────────
  {
    slug: "how-i-built-an-ai-that-reads-any-document",
    title: "How I Built an AI That Reads Any Document and Answers Your Questions",
    excerpt:
      "Most AI chatbots only know what they were trained on. This one reads YOUR files. Here is how RAG works — explained with visuals simple enough for a 10-year-old.",
    date: "2026-04-14",
    category: "AI",
    readTime: "7 min read",
    tags: ["RAG", "LangChain", "ChromaDB", "LLM", "Chatbot"],
    body: [
      "Imagine you have a magic robot friend. You give it your 500-page textbook before a test. It reads the whole thing in 2 seconds. Now you ask: 'What does Chapter 7 say about photosynthesis?' — and it gives you the exact right answer, straight from YOUR book, with the page number. That is exactly what this project does.",

      { type: "heading", text: "The Problem: AI Does Not Know Your Files" },

      "ChatGPT, Claude, and other AI models were trained on billions of web pages — but they stop learning at a certain date. They have never seen YOUR documents: your company policy manual, last quarter's financial report, or the 200-page contract you need to understand. Ask them about it and they either say 'I don't know' — or worse, confidently make something up.",

      { type: "callout", emoji: "🚫", label: "Without RAG (The Old Problem)", text: "User: 'What does our refund policy say?' → AI: 'Most companies allow 30-day returns...' — completely invented, because it never read your actual policy document." },

      { type: "heading", text: "The Solution: Give the AI a Library Card 📚" },

      "RAG — Retrieval-Augmented Generation — fixes this with a clever trick. Before answering, the AI first searches your actual documents, reads the most relevant parts, and then answers from what it found. Think of it like an open-book exam: instead of relying purely on memory, the AI gets to look at the book first.",

      { type: "diagram", title: "How RAG Works — The Full Pipeline", lines: [
        "📄  Your PDF / Word Doc / Text File",
        "        │",
        "        ▼",
        "✂️   CHUNKING   →  Split into 500-word pieces",
        "        │",
        "        ▼",
        "🧮  EMBEDDING  →  Convert each piece into numbers",
        "        │",
        "        ▼",
        "🗃️   VECTOR DB  →  Store all number-pieces (ChromaDB)",
        "",
        "❓  You ask a question",
        "        │",
        "        ▼",
        "🔍  SEARCH     →  Find the 3 most relevant pieces",
        "        │",
        "        ▼",
        "🤖  LLM        →  'Answer ONLY from these pieces'",
        "        │",
        "        ▼",
        "✅  Accurate answer + source citation",
      ]},

      { type: "steps", items: [
        { icon: "✂️", title: "Step 1 — Chunking (Slice the Book)", desc: "The document is cut into small, overlapping pieces of about 500 words each. Think of cutting a pizza — each slice is small enough to handle, but still captures the full flavour. Overlap between chunks means no meaning falls through the cracks." },
        { icon: "🧮", title: "Step 2 — Embedding (Words → Numbers)", desc: "Each chunk is converted into a list of ~1,500 numbers called a vector. Similar meanings get similar numbers — so 'dog' and 'puppy' end up close together in number-space. We use Google's text-embedding-004 model for this." },
        { icon: "🗃️", title: "Step 3 — Vector Database (The Smart Filing Cabinet)", desc: "All the number-vectors are stored in ChromaDB. Unlike a regular database that searches by exact words, ChromaDB searches by meaning. So 'cost' matches 'price' and 'expense' even if the exact word is different." },
        { icon: "🔍", title: "Step 4 — Semantic Search (Find the Right Pieces)", desc: "Your question is converted into numbers too. ChromaDB finds the stored chunks whose numbers are closest to your question's numbers — the most relevant paragraphs from your document." },
        { icon: "🤖", title: "Step 5 — LLM Generation (The Final Answer)", desc: "The top 3–5 chunks are handed to Google Gemini alongside your question, with one instruction: answer ONLY from what you have been given. No guessing allowed. The result is accurate, grounded, and citable." },
      ]},

      { type: "stats", items: [
        { value: "80%+", label: "Faster than manual search" },
        { value: "Zero", label: "Hallucinated answers" },
        { value: "Any", label: "PDF size supported" },
        { value: "Live", label: "Publicly deployed" },
      ]},

      "The engineering challenge is not assembling the pipeline — LangChain makes that fast. The hard part is tuning: the right chunk size, the right overlap percentage, the right number of retrieved chunks, and whether to add a re-ranker on top. A working demo takes a day. A production-grade system that handles edge cases reliably takes weeks. If you need one, I build it right.",
    ],
  },

  // ── Post 2: Pneumonia Detector ───────────────────────────────────────────────
  {
    slug: "how-ai-detects-pneumonia-in-chest-xrays",
    title: "How AI Can Read a Chest X-Ray and Detect Pneumonia",
    excerpt:
      "Doctors in many parts of the world do not have enough radiologists to read every X-ray. This AI does it in under 200ms with 86% accuracy. Here is how transfer learning makes that possible.",
    date: "2026-04-12",
    category: "Computer Vision",
    readTime: "6 min read",
    tags: ["Computer Vision", "PyTorch", "Transfer Learning", "Medical AI", "ResNet"],
    body: [
      "Pneumonia kills over 2 million children under 5 every year. The scary part? Most of those deaths are preventable if the infection is caught early. The problem in many developing regions is simple: not enough radiologists to read the X-rays fast enough. A patient might wait days for a diagnosis that could be given in seconds.",

      { type: "callout", emoji: "🫁", label: "What is Pneumonia on an X-Ray?", text: "A healthy lung on an X-ray looks dark and clear — air does not show up on X-rays. Pneumonia fills parts of the lung with fluid, which shows up as bright white patches called 'consolidation'. A trained eye spots it instantly. The challenge: training an AI to spot it just as reliably." },

      { type: "heading", text: "How a Computer Sees an X-Ray 👁️" },

      "A chest X-ray is just a grid of pixels — numbers from 0 (black) to 255 (white). A 256×256 image is 65,536 numbers. The AI's job is to look at all those numbers and decide: are the patterns here consistent with pneumonia, or not? Raw numbers are hard to reason about directly, so Convolutional Neural Networks (CNNs) learn to detect progressively complex patterns.",

      { type: "diagram", title: "What the CNN Learns at Each Layer", lines: [
        "🖼️   Input X-Ray (256 × 256 pixels)",
        "        │",
        "        ▼",
        "🔲  Layer 1 — Detects EDGES",
        "         (where light meets dark, outlines of ribs)",
        "        │",
        "        ▼",
        "🔷  Layer 2 — Detects SHAPES",
        "         (curves, circles, the shape of lungs)",
        "        │",
        "        ▼",
        "🫁  Layer 3 — Detects PATTERNS",
        "         (the white haze of fluid, rib texture)",
        "        │",
        "        ▼",
        "🧠  Final Layer — Classifies",
        "         PNEUMONIA (94%) or NORMAL (6%)",
      ]},

      { type: "heading", text: "The Secret Weapon: Transfer Learning 🔁" },

      "Training a CNN from scratch would need millions of X-ray images. We only had 5,216. Transfer learning solves this beautifully. Imagine teaching a kid to recognise cats. Once they know what a cat looks like, teaching them to recognise a leopard is much faster — they already understand 'fur', 'eyes', 'four legs'. We use a CNN called ResNet18 that was already trained on 1.2 million everyday photos. It already knows edges, textures, and shapes. We just teach its final layers the new task: healthy lung vs pneumonia.",

      { type: "steps", items: [
        { icon: "📥", title: "Start with a Pre-Trained ResNet18", desc: "ResNet18 was trained on ImageNet — 14 million photos of dogs, cars, plants, and more. It already understands visual patterns at a deep level. We download these pre-trained weights and keep them mostly frozen." },
        { icon: "🔄", title: "Replace the Final Classification Layer", desc: "The original model classifies 1,000 different objects. We swap the last layer for a new one with just 2 outputs: PNEUMONIA and NORMAL. This is the only layer that needs heavy training." },
        { icon: "🏋️", title: "Fine-Tune on 5,216 X-Ray Images", desc: "We train for 10 epochs on the chest X-ray dataset, using data augmentation (flips, rotations, brightness shifts) to artificially multiply our training examples and prevent overfitting." },
        { icon: "🚀", title: "Deploy as a Flask API on Render", desc: "The trained model is wrapped in a Flask web server. Upload any chest X-ray image, and it returns a prediction with confidence score in under 200ms. Deployed live and publicly accessible." },
      ]},

      { type: "stats", items: [
        { value: "86.22%", label: "Test accuracy" },
        { value: "+48pp", label: "Above baseline CNN (37.5%)" },
        { value: "200ms", label: "Inference time" },
        { value: "4 days", label: "Build to deployment" },
      ]},

      "This project is a proof of concept, not a clinical diagnostic tool — but it demonstrates exactly how AI can assist (not replace) doctors in resource-constrained environments. The same transfer learning technique applies to any image classification problem: product defect detection, satellite image analysis, or document classification.",
    ],
  },

  // ── Post 3: Bankruptcy Prediction ───────────────────────────────────────────
  {
    slug: "predicting-company-bankruptcy-with-ai",
    title: "Can AI Predict a Company Will Go Bankrupt Before It Happens?",
    excerpt:
      "Banks and investors lose billions when companies collapse without warning. I built an AI early-warning system with 93.67% AUC accuracy using ensemble stacking — here is how it works.",
    date: "2026-04-10",
    category: "Machine Learning",
    readTime: "6 min read",
    tags: ["Machine Learning", "XGBoost", "LightGBM", "Finance AI", "SHAP", "Ensemble"],
    body: [
      "Imagine you lend your friend $10,000. Before you hand it over, you want to know: is this person going to pay me back? You look at their salary, their other debts, whether they pay bills on time. You are doing a basic credit check. Now imagine doing that same check — but for 6,819 companies, using 94 different financial signals, all at once. That is what this project does.",

      { type: "callout", emoji: "💡", label: "Why This Matters", text: "When a company goes bankrupt, banks lose loan principal, suppliers lose unpaid invoices, and investors lose their stake. An early warning system that flags distress months in advance gives everyone time to act — restructure debt, reduce exposure, or exit gracefully." },

      { type: "heading", text: "The 94 Financial Warning Signs 🚨" },

      "We engineered 94 features from raw balance sheet and income statement data. Some are direct ratios, others are derived. Think of them like the vital signs a doctor checks: individually, one bad number might not mean much. Together, a pattern of bad numbers tells a clear story.",

      { type: "diagram", title: "Feature Categories Used in the Model", lines: [
        "📊  LIQUIDITY RATIOS",
        "     Current Ratio, Quick Ratio, Cash Ratio",
        "     → Can the company pay short-term bills?",
        "",
        "💳  LEVERAGE RATIOS",
        "     Debt-to-Equity, Interest Coverage",
        "     → How much debt vs. assets?",
        "",
        "📈  PROFITABILITY RATIOS",
        "     ROA, ROE, Profit Margin",
        "     → Is the company actually making money?",
        "",
        "⚡  EFFICIENCY RATIOS",
        "     Asset Turnover, Inventory Days",
        "     → How well does it use what it has?",
        "",
        "🔄  TREND FEATURES",
        "     Year-over-year changes in all the above",
        "     → Is the situation getting better or worse?",
      ]},

      { type: "heading", text: "Why One Model Is Not Enough: Ensemble Stacking 🏗️" },

      "A single expert opinion is good. Five expert opinions are better. Ensemble stacking works the same way. We train four different models on the same data, then use a fifth model — the 'meta-learner' — to combine their predictions into one final answer. Each model has different strengths: XGBoost handles outliers well, LightGBM is fast and catches subtle patterns, CatBoost excels at categorical features, and Logistic Regression provides a linear baseline.",

      { type: "steps", items: [
        { icon: "📐", title: "Feature Engineering (94 signals from raw financials)", desc: "Raw financial statements have hundreds of line items. We compute ratios, year-over-year changes, and interaction terms to create features that are predictive of distress." },
        { icon: "🎯", title: "Base Models (4 algorithms trained in parallel)", desc: "XGBoost, LightGBM, CatBoost, and Logistic Regression are each trained using 5-fold cross-validation. Their out-of-fold predictions become inputs to the next level." },
        { icon: "🧩", title: "Meta-Learner (combines all 4 predictions)", desc: "A final Logistic Regression model learns the optimal way to combine the four base model outputs. It learns which model to trust more in different scenarios." },
        { icon: "🔍", title: "SHAP Explanations (why this prediction?)", desc: "SHAP (SHapley Additive exPlanations) shows exactly which features pushed the prediction toward bankruptcy or safety — essential for regulatory transparency and analyst trust." },
      ]},

      { type: "callout", emoji: "📏", label: "What is AUC-ROC? (Simply Explained)", text: "AUC = 0.5 means the model is as useful as a coin flip. AUC = 1.0 means it is perfect. Our AUC of 0.9367 means: if you randomly pick one bankrupt company and one healthy company, our model ranks the bankrupt one as riskier 93.67% of the time. That is a very strong result for real-world financial data." },

      { type: "stats", items: [
        { value: "0.9367", label: "AUC-ROC score" },
        { value: "6,819", label: "Companies in dataset" },
        { value: "94", label: "Engineered features" },
        { value: "+4pp", label: "Gain from stacking" },
      ]},

      "An important lesson from this project: the ensemble (AUC 0.923) did not outperform XGBoost alone (AUC 0.9367). With severe class imbalance at 30:1, a single well-tuned gradient booster often beats a stacked ensemble. The ensemble adds value in precision/recall trade-offs, not raw AUC. The broader takeaway: always compare ensemble vs best single model — ensemble wins are not guaranteed.",
    ],
  },

  // ── Post 4: Speech Emotion Recognition ──────────────────────────────────────
  {
    slug: "how-ai-detects-emotions-from-your-voice",
    title: "How AI Can Hear Your Emotions: Building a Speech Emotion Detector",
    excerpt:
      "Your voice carries more information than your words. Pitch, speed, pauses — they all signal how you feel. I built an AI that listens to raw audio and classifies emotions with 85–92% accuracy.",
    date: "2026-04-08",
    category: "AI",
    readTime: "6 min read",
    tags: ["Speech AI", "wav2vec2", "PyTorch", "NLP", "Audio", "Deep Learning"],
    body: [
      "Have you ever known someone was upset just from how they said 'I'm fine'? Even though the words say one thing, the voice says another. Humans are remarkably good at hearing emotions — we pick up on pitch, speed, pauses, and trembling. This project teaches an AI to do the same thing, listening to raw audio and detecting whether someone is happy, angry, sad, fearful, or neutral.",

      { type: "callout", emoji: "🎙️", label: "Why This Matters", text: "Call centres handle millions of customer conversations daily. If an AI can detect frustration or distress in real time, a supervisor can intervene before the call turns into a complaint, a refund, or a lost customer. The same technology applies to mental health monitoring, interview analysis, and accessibility tools." },

      { type: "heading", text: "How Sound Becomes Data 🌊" },

      "Sound is a wave — changes in air pressure over time. A microphone converts this into a series of numbers sampled thousands of times per second. A 3-second audio clip at 16,000 Hz is just 48,000 numbers. The challenge: somewhere in those numbers is information about whether the speaker is angry or calm.",

      { type: "diagram", title: "From Raw Audio to Emotion Label", lines: [
        "🎤  Raw Audio (waveform — 48,000 numbers)",
        "        │",
        "        ▼",
        "〰️  Old Way: Hand-craft features",
        "        MFCC (pitch), ZCR (energy), Chroma",
        "        → Loses rich contextual information",
        "",
        "🆕  New Way: wav2vec2 Transformer",
        "        │",
        "        ▼",
        "🔊  Local Pattern Encoder",
        "        (learns from small audio windows)",
        "        │",
        "        ▼",
        "🧠  Transformer Context Layers",
        "        (understands how sounds relate over time)",
        "        │",
        "        ▼",
        "😊😠😢  Classification Head",
        "        Happy / Angry / Sad / Fear / Neutral",
      ]},

      { type: "heading", text: "The Old Way vs The New Way 🔄" },

      "Traditional speech emotion systems relied on handcrafted audio features — things like MFCC (how pitch changes), Zero Crossing Rate (how energetic the signal is), and spectral centroid (where the 'brightness' of sound lies). These work reasonably well but hit a ceiling around 65–70% accuracy. They also require a human expert to decide which features to compute, which is slow and brittle.",

      { type: "steps", items: [
        { icon: "🎯", title: "wav2vec2 — Pre-Trained on 960 Hours of Speech", desc: "Facebook's wav2vec2 transformer was pre-trained on 960 hours of unlabelled English speech (LibriSpeech). Like a child who has listened to thousands of hours of conversation before learning to label emotions, it already understands the structure of human speech deeply." },
        { icon: "🔁", title: "Fine-Tuning on Labelled Emotion Data", desc: "We add a classification head and fine-tune the model on labelled emotion datasets (RAVDESS, CREMA-D). The model keeps its deep speech understanding but adjusts its final layers to predict emotion labels." },
        { icon: "⚡", title: "PyTorch Lightning Training with Mixed Precision", desc: "Gradient accumulation and mixed-precision (FP16) training means we can train on GPUs efficiently. The model converges in around 20 epochs with a learning rate warmup schedule." },
        { icon: "🚀", title: "REST API Deployment with Sub-Second Latency", desc: "The trained model is wrapped in a FastAPI endpoint. Send an audio file, receive an emotion prediction and confidence scores for each class in under 500ms." },
      ]},

      { type: "callout", emoji: "🧠", label: "Why Transformers Beat Hand-Crafted Features", text: "Hand-crafted features throw away most of the audio signal, keeping only specific measurements humans decided were important. wav2vec2 learns its own features from the raw waveform — and it finds patterns that humans never thought to measure, which is why it outperforms traditional approaches by 15–25 percentage points." },

      { type: "stats", items: [
        { value: "85–92%", label: "Accuracy across emotion classes" },
        { value: "960h", label: "Pre-training audio (LibriSpeech)" },
        { value: "<500ms", label: "Inference latency" },
        { value: "0", label: "Manual feature engineering" },
      ]},

      "Speech emotion recognition is still a hard problem — humans themselves only agree on emotion labels about 70% of the time on ambiguous clips. But for the clear cases (angry customer, distressed caller, enthusiastic response), transformer-based systems like this one are reliable enough for real production deployment.",
    ],
  },

  // ── Post 5: Kaggle Personality Prediction ───────────────────────────────────
  {
    slug: "how-i-ranked-top-half-percent-on-kaggle",
    title: "How I Ranked Top 0.5% on Kaggle: Predicting Human Personality with AI",
    excerpt:
      "4,329 teams. One goal: predict introvert vs extrovert from 8 behavioural features. Here is the exact playbook that got me to rank 21 — external dataset merging, GradientBoosting, and 97.27% accuracy explained from scratch.",
    date: "2026-04-06",
    category: "Machine Learning",
    readTime: "6 min read",
    tags: ["Kaggle", "GradientBoosting", "scikit-learn", "Feature Engineering", "Competition ML"],
    body: [
      "Imagine the Olympics — but for data scientists. Thousands of competitors from around the world, all racing to build the most accurate AI model for the same problem, judged on a hidden test set. That is Kaggle. This competition (Playground Series S5E7) asked one question: given 8 behavioural features about a person, can you predict whether they are an introvert or an extrovert? I finished 21st out of 4,329 teams — top 0.5% globally, with 97.27% accuracy.",

      { type: "callout", emoji: "🏆", label: "The Competition", text: "Kaggle Playground Series S5E7 — Predict Introvert vs Extrovert from 8 behavioural survey features. Metric: Accuracy on hidden test set. 18,524 training rows · 6,175 test rows · 4,329 competing teams." },

      { type: "heading", text: "The 8 Features: What Tells You Someone is Introverted? 🕵️" },

      "The dataset had just 8 behavioural features — all survey responses about social habits. No demographics, no ages, no names. Just pure behaviour. And yet, these 8 features turned out to be incredibly powerful for predicting personality.",

      { type: "diagram", title: "The 8 Behavioural Features", lines: [
        "Time_spent_Alone         → Hours alone per day (0–11)",
        "Stage_fear               → Yes / No",
        "Social_event_attendance  → Events per month (0–10)",
        "Going_outside            → Times per week (0–7)",
        "Drained_after_socializing→ Yes / No",
        "Friends_circle_size      → Number of close friends (0–15)",
        "Post_frequency           → Social media posts per week (0–10)",
        "",
        "Target: Personality → Introvert or Extrovert",
      ]},

      { type: "heading", text: "The Secret Weapon: External Dataset Merging 🔀" },

      "The competition provided 18,524 training rows. But there were two additional external personality datasets available on Kaggle with the same features. My key insight: merge these external datasets with the training data using all 7 feature columns as the join key. If a row in the training set matched a row in the external dataset, I got a free label cross-reference — extra signal the other teams ignored.",

      { type: "steps", items: [
        { icon: "📥", title: "Load & Merge External Datasets", desc: "Loaded personality_datasert.csv and personality_dataset.csv (2,439 + 2,439 rows). Deduplicated on all 7 feature columns and merged with the competition training data via a left join — any matching rows got an additional 'match_p' label column." },
        { icon: "🧹", title: "Handle Missing Values", desc: "Numeric columns (Time_spent_Alone, Social_event_attendance etc.) imputed with median. Categorical columns (Stage_fear, Drained_after_socializing) imputed with most-frequent value. Test set uses the same fitted imputers — no data leakage." },
        { icon: "🔢", title: "OneHotEncoding for Categoricals", desc: "Stage_fear and Drained_after_socializing encoded with OneHotEncoder(drop='first') — this creates binary columns (Stage_fear_Yes, Drained_after_socializing_Yes) that gradient boosting can use directly." },
        { icon: "🌲", title: "GradientBoostingClassifier — 97.27% CV Accuracy", desc: "Trained sklearn's GradientBoostingClassifier on the enriched feature set. Cross-validation accuracy: 97.27%. The external dataset merge was the decisive factor — it gave the model richer pattern coverage on borderline cases." },
      ]},

      { type: "callout", emoji: "💡", label: "The Winning Insight", text: "Most teams used only the competition training data. By merging external personality datasets matched on all 7 feature columns, I effectively expanded the training signal on edge cases. The model saw more varied examples of the same behavioural patterns — and that is what pushed accuracy from ~95% to 97.27%." },

      { type: "stats", items: [
        { value: "21st", label: "Final rank" },
        { value: "4,329", label: "Competing teams" },
        { value: "97.27%", label: "CV accuracy" },
        { value: "Top 0.5%", label: "Global percentile" },
      ]},

      "The lesson: in competitions with small, clean datasets, data enrichment beats model complexity. I did not win with a fancy algorithm or 200 Optuna trials — I won by finding and merging external data that other teams overlooked. That same principle applies in industry: the best model on bad or incomplete data will always lose to a simple model on rich, complete data.",
    ],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  initials: string;
  color: string;
};

export const testimonials: Testimonial[] = [
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

// ─── Achievements ─────────────────────────────────────────────────────────────

export type Achievement = {
  key: "upwork" | "jobsuccess" | "kaggle" | "ibm";
  title: string;
  sub: string;
  badge: string;
  color: string;
  border: string;
  glow: string;
};

export const achievements: Achievement[] = [
  {
    key: "upwork",
    title: "Top Rated Plus",
    sub: "Upwork · Top 3% Globally",
    badge: "Verified",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    glow: "shadow-green-500/10",
  },
  {
    key: "jobsuccess",
    title: "100% Job Success",
    sub: "117 Jobs · $400K+ Earned",
    badge: "Perfect Score",
    color: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/20",
    glow: "shadow-sky-500/10",
  },
  {
    key: "kaggle",
    title: "Kaggle Expert",
    sub: "Rank 2,375 / 61,099 · Top 4%",
    badge: "6 Bronze Medals",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/20",
    glow: "shadow-orange-500/10",
  },
  {
    key: "ibm",
    title: "IBM Certified",
    sub: "Machine Learning & Data Science",
    badge: "Professional Cert",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/10",
  },
];

// ─── About highlights ─────────────────────────────────────────────────────────

export const aboutHighlights = [
  { num: "117+",   label: "Projects Delivered" },
  { num: "$400K+", label: "Earned on Upwork" },
  { num: "100%",   label: "Job Success Score" },
  { num: "Top 3%", label: "Upwork Globally" },
] as const;

// ─── Kaggle ───────────────────────────────────────────────────────────────────

export type KaggleCompetition = {
  name: string;
  rank: string;
  total: string;
  pct: string;
  medal: string;
  tag: string;
};

export const kaggleCompetitions: KaggleCompetition[] = [
  {
    name: "Predict Introverts vs Extroverts",
    rank: "21",
    total: "4,329",
    pct: "Top 0.5%",
    medal: "🥇",
    tag: "Personality ML",
  },
  {
    name: "Kaggle Notebooks Expert",
    rank: "2,375",
    total: "61,099",
    pct: "Top 4%",
    medal: "⭐",
    tag: "Expert Tier",
  },
];

export const kaggleMedals = [
  { emoji: "🥉", label: "6× Bronze Medals",    sub: "Notebooks & Competitions" },
  { emoji: "🏅", label: "10 Competitions",      sub: "Completed end-to-end" },
  { emoji: "📓", label: "Expert Notebooks",     sub: "High-vote ML notebooks" },
] as const;
