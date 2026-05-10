import { BarChart3, Target, Cross } from 'lucide-react';

export const HERO_DATA = {
  name: "Irtza Ahmad",
  titles: ["AI Developer", "Trading Bot Engineer", "AI Automation Specialist"],
  description: "I build intelligent systems, AI-powered trading bots, automation tools, and futuristic applications that merge software engineering with machine intelligence."
};

export const ABOUT_DATA = {
  role: "AI Developer",
  education: "BS Electronics and Computing student at COMSATS University Lahore",
  description: "Passionate about vibe coding, AI systems, automation, and futuristic interfaces.",
  stats: [
    { label: "Major Projects", value: "4" },
    { label: "Focus", value: "AI Trading Systems" },
    { label: "Expertise", value: "Automation Solutions" },
    { label: "Domain", value: "Full Stack AI Dev" }
  ]
};

export const PROJECTS_DATA = [
  {
    id: "binance-ai",
    title: "AI Crypto Trading Bot",
    description: "An advanced AI-powered cryptocurrency trading bot designed for Binance. The system uses machine learning, technical indicators, predictive analytics, and real-time market analysis to automate intelligent trading decisions.",
    features: [
      "Live Binance API integration",
      "AI-driven trade execution",
      "Technical indicators (RSI, MACD, EMA, Stochastic)",
      "Real-time charts",
      "Automated risk management",
      "Backtesting engine",
      "Trade analytics dashboard",
      "Smart entry and exit logic"
    ],
    tags: ["Python", "Machine Learning", "Binance API", "Data Analytics"],
    icon: BarChart3
  },
  {
    id: "forex-ai",
    title: "Forex AI Trading Bot",
    description: "An intelligent forex trading automation system built for MetaTrader 5 that predicts market trends using AI models and executes trades with advanced strategy optimization.",
    features: [
      "MetaTrader 5 integration",
      "Forex trend prediction",
      "AI pattern recognition",
      "Automated execution",
      "Risk-to-reward optimization",
      "Performance analytics",
      "Real-time forex monitoring"
    ],
    tags: ["C++", "MetaTrader 5", "AI Patterns", "Automation"],
    icon: Target
  },
  {
    id: "ace-club",
    title: "Ace Club",
    description: "A modern self-improvement and productivity application focused on helping users improve discipline, consistency, mindset, habits, and personal growth through AI-assisted guidance and tracking systems.",
    features: [
      "Habit tracking",
      "Goal systems",
      "Productivity analytics",
      "Self-improvement dashboard",
      "AI-powered recommendations",
      "Motivational progress tracking",
      "Community and accountability systems"
    ],
    tags: ["React Native", "AI Guidance", "Productivity"],
    icon: Target // Will use Target or similar
  },
  {
    id: "first-opinion",
    title: "First Opinion",
    description: "An Uber-style emergency healthcare platform that connects patients with nearby doctors for urgent medical assistance. Designed especially for smaller emergency situations requiring immediate consultation and rapid response.",
    features: [
      "Real-time doctor matching",
      "Live location tracking",
      "Emergency request system",
      "In-app communication",
      "Fast response interface",
      "Doctor availability system",
      "Smart healthcare routing"
    ],
    tags: ["React", "Geolocation", "Healthcare", "Real-time"],
    icon: Cross
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Self-Employed AI Developer",
    period: "2025 – Present",
    items: [
      "AI automation projects",
      "Predictive analytics systems",
      "Data processing automation",
      "Machine learning development",
      "Visualization systems",
      "AI research and optimization"
    ]
  }
];

export const EDUCATION_DATA = [
  {
    institution: "COMSATS University Lahore",
    degree: "BS Electronics and Computing"
  },
  {
    institution: "Beaconhouse College Program",
    degree: "A Levels"
  },
  {
    institution: "Beaconhouse School System",
    degree: "O Levels"
  }
];

export const SKILLS_DATA = [
  "Python",
  "C++",
  "AI/ML",
  "React",
  "Three.js",
  "Machine Learning",
  "Automation",
  "Trading Systems",
  "Data Analytics",
  "API Integration",
  "Prompt Engineering",
  "AI-Assisted Development"
];
