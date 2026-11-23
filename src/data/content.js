export const featuredProjects = [
  {
    eyebrow: 'Financial AI · Responsible AI',
    title: 'Transaction Risk Intelligence Copilot',
    description:
      'An explainable transaction-risk prototype that prioritizes unusual banking activity using behavioral features, anomaly detection, transparent rules, and optional GenAI investigation summaries.',
    highlights: [
      'Behavior-aware 0–100 review-priority score',
      'Isolation Forest + transparent risk indicators',
      'Human-in-the-loop design with optional local Qwen summaries'
    ],
    tech: ['Python', 'Isolation Forest', 'Streamlit', 'Qwen', 'Responsible AI'],
    accent: 'coral',
    visual: 'risk',
    github: 'https://github.com/hinaloza15/transaction-risk-intelligence-copilot',
    live: ''
  },
  {
    eyebrow: 'GraphRAG · Retrieval Systems',
    title: 'GraphRAG for Claims Processing',
    description:
      'A graph-first retrieval system for noisy workers’ compensation claim histories, comparing Baseline RAG, GraphRAG, and Hybrid RAG on the same evidence-retrieval benchmark.',
    highlights: [
      'Qwen3 query planning + Neo4j graph traversal',
      'BGE-M3 semantic reranking and evidence provenance',
      '30-question benchmark across factual, timeline, conflict, entity, and provenance tasks'
    ],
    tech: ['GraphRAG', 'Neo4j', 'Qwen3', 'BGE-M3', 'Python'],
    accent: 'violet',
    visual: 'graph',
    github: 'https://github.com/hinaloza15/gallagher-bassett-graphrag',
    live: ''
  },
  {
    eyebrow: 'Business Analytics · Tableau',
    title: 'JetBlue On-Time Performance Analytics',
    description:
      'A business analytics project using a full year of U.S. airline performance data to benchmark JetBlue, understand delay drivers, and turn operational patterns into clear recommendations.',
    highlights: [
      'Analyzed 12 months of BTS on-time performance data',
      'Benchmarked JetBlue against Delta and American on shared markets',
      'Built interactive Tableau views for delays, routes, cancellations, and on-time performance'
    ],
    tech: ['Tableau', 'Python', 'Pandas', 'Data Visualization', 'Business Analytics'],
    accent: 'cyan',
    visual: 'analytics',
    github: '',
    live: ''
  }];

export const experiences = [
  {
    role: 'Application Developer - Graduate Assistant',
    company: 'University of Illinois Chicago',
    period: 'September 2025 — Present',
    details: [
      'Build reporting and workflow tools across finance and administrative operations using SQL, Excel, Tableau, and automation.',
      'Create datasets, reconciliations, and decision-support reporting for budget and operational stakeholders.'
    ]
  },
  {
    role: 'Data Engineer Intern',
    company: 'Seyon Solutions',
    period: 'February 2025 — September 2025',
    details: [
      'Built and maintained REST-based integrations across 100+ source systems and cloud data workflows.',
      'Worked with AWS S3, Redshift, SQL optimization, Agile delivery, and technical documentation.'
    ]
  },
  {
    role: 'IT Intern',
    company: 'Illinois Tollway',
    period: 'June 2024 - October 2024',
    details: [
      'Supported ServiceNow workflows, process improvement, testing, and technical documentation.',
      'Collaborated in Agile ceremonies and cross-functional IT delivery.'
    ]
  }
];

export const education = [
  {
    school: 'University of Illinois Chicago',
    degree: 'MS, Business Analytics',
    period: 'Expected Graduation: Spring 2027',
    note: 'Focus: analytics, AI systems, data visualization, and business decision support'
  },
  {
    school: 'University of Illinois Chicago',
    degree: 'BS, Computer Science',
    period: 'Graduated 2024',
    note: 'Software Engineering concentration with coursework across systems, NLP, and software development'
  }
];

export const moreProjects = [
  {
    title: 'StayMate',
    copy: 'Airbnb-style full-stack application with authentication, image upload, and booking flows.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/hinaloza15/staymate',
    live: 'https://nomadstay.live'
  },
  {
    title: 'TradeView',
    copy: 'Trading dashboard prototype with interactive charts and simulated market data.',
    tags: ['React', 'Chart.js', 'Express'],
    github: 'https://github.com/hinaloza15/TradeView',
    live: 'https://tradeview.live'
  },
  {
    title: 'AI Meeting Assistant',
    copy: 'In-progress assistant concept for meeting summarization, action-item extraction, and scheduling support.',
    tags: ['GenAI', 'Automation', 'Product Design'],
    github: '',
    live: ''
  }
];

export const skills = {
  'AI & ML': ['Python', 'scikit-learn', 'CatBoost', 'Transformers', 'SHAP', 'RAG'],
  'GenAI & Retrieval': ['Qwen', 'Neo4j', 'BGE-M3', 'FAISS', 'Ollama', 'GraphRAG'],
  'Data & BI': ['SQL', 'Pandas', 'Tableau', 'Excel', 'Redshift', 'PostgreSQL'],
  Engineering: ['React', 'Node.js', 'REST APIs', 'Git', 'AWS', 'Docker']
};
