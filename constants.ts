import { PlatformData, StatData, ScenarioData, StrategyPillar, RoadmapPhase } from './types.ts';

export const BLOCK_RATES: StatData[] = [
  { name: 'GPTBot (OpenAI)', value: 35.7, color: '#ef4444' },
  { name: 'CCBot (Common Crawl)', value: 22.1, color: '#f59e0b' },
  { name: 'Google-Extended', value: 13.6, color: '#38bdf8' },
  { name: 'ChatGPT-User', value: 12.7, color: '#ef4444' },
  { name: 'ClaudeBot', value: 8, color: '#a855f7' }, // Averaged 5-10%
];

export const PLATFORMS: PlatformData[] = [
  // Retail
  {
    id: 'amazon',
    name: 'Amazon',
    category: 'Retail',
    status: 'blocked',
    description: 'Actively blocking almost all major AI crawlers via robots.txt.',
    iconName: 'ShoppingCart',
    details: ['Blocks GPTBot, ClaudeBot, Google Mariner', 'Protecting $56B ad business', 'Building internal "Rufus" AI']
  },
  {
    id: 'walmart',
    name: 'Walmart',
    category: 'Retail',
    status: 'accessible',
    description: 'No AI blocks implemented currently.',
    iconName: 'Store',
    details: ['Competitive advantage for visibility', 'Inventory accessible to AI']
  },
  {
    id: 'ebay',
    name: 'eBay',
    category: 'Retail',
    status: 'accessible',
    description: 'Open access for crawlers.',
    iconName: 'Tag',
    details: ['Listings visible to AI', 'Competitive advantage vs Amazon']
  },
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'Retail',
    status: 'restricted',
    description: 'Conditional restrictions with a policy framework.',
    iconName: 'ShoppingBag',
    details: ['Requires human review for agents', 'Partnering with Perplexity']
  },
  {
    id: 'target',
    name: 'Target',
    category: 'Retail',
    status: 'accessible',
    description: 'Has not joined Amazon\'s aggressive blocking strategy.',
    iconName: 'Target',
    details: ['Listings discoverable', 'No documented blocks']
  },
  {
    id: 'etsy',
    name: 'Etsy',
    category: 'Retail',
    status: 'restricted',
    description: 'Decentralized policies; individual shops may block.',
    iconName: 'Gem',
    details: ['Varies by shop policy', 'Platform itself does not blanket block']
  },

  // Social
  {
    id: 'reddit',
    name: 'Reddit',
    category: 'Social',
    status: 'restricted',
    description: 'API-only access. Paid agreements required.',
    iconName: 'MessageSquare',
    details: ['Exclusive deals with Google/OpenAI', 'Blocks Archive.org']
  },
  {
    id: 'facebook',
    name: 'Facebook',
    category: 'Social',
    status: 'restricted',
    description: 'Public posts used for Meta AI; external access blocked.',
    iconName: 'Facebook',
    details: ['Marketplace inaccessible', 'Login walls prevent scraping']
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'Social',
    status: 'restricted',
    description: 'Shopping features and posts largely inaccessible.',
    iconName: 'Instagram',
    details: ['Visual content protected', 'Requires auth for most data']
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    category: 'Social',
    status: 'restricted',
    description: 'High API fees and aggressive anti-scraping.',
    iconName: 'Twitter',
    details: ['Grok trains on user posts', 'Rate limits for externals']
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'Social',
    status: 'blocked',
    description: 'Highly restricted web scraping and API access.',
    iconName: 'Video',
    details: ['Video content protected', 'Research API limited']
  },
  {
    id: 'youtube',
    name: 'YouTube',
    category: 'Social',
    status: 'restricted',
    description: 'Combats scraping; preferential access for Google.',
    iconName: 'Youtube',
    details: ['Transcripts often inaccessible', 'Review videos hard to parse']
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    category: 'Social',
    status: 'restricted',
    description: 'User data used for LinkedIn AI; external crawlers blocked.',
    iconName: 'Linkedin',
    details: ['Link previews allowed', 'Login wall for content']
  },

  // Media
  {
    id: 'nyt',
    name: 'NY Times',
    category: 'Media',
    status: 'blocked',
    description: 'Aggressive blocking of OpenAI and Google.',
    iconName: 'Newspaper',
    details: ['Blocks GPTBot & Google-Extended', 'Suing OpenAI']
  },
  {
    id: 'wsj',
    name: 'Wall Street Journal',
    category: 'Media',
    status: 'blocked',
    description: 'Hard paywall and strict crawler blocking.',
    iconName: 'FileText',
    details: ['Blocks OpenAI, Anthropic, Google', 'Content inaccessible']
  },
  {
    id: 'cnn',
    name: 'CNN',
    category: 'Media',
    status: 'blocked',
    description: 'Blocks major AI crawlers to protect content.',
    iconName: 'Tv',
    details: ['Blocks GPTBot, ChatGPT-User']
  },
  {
    id: 'reuters',
    name: 'Reuters',
    category: 'Media',
    status: 'blocked',
    description: 'Blocks crawlers; has licensing deal with OpenAI.',
    iconName: 'Globe',
    details: ['Blocks GPTBot', 'Partnered with OpenAI']
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    category: 'Media',
    status: 'blocked',
    description: 'Strict blocking and hard paywalls on financial news.',
    iconName: 'BarChart3',
    details: ['Multiple AI bots blocked', 'Financial data protected']
  },
  {
    id: 'wired',
    name: 'Wired',
    category: 'Media',
    status: 'blocked',
    description: 'Blocks OpenAI crawlers and OAI-SearchBot.',
    iconName: 'Cpu',
    details: ['Part of Condé Nast', 'Blocks search bots']
  },

  // Finance
  {
    id: 'robinhood',
    name: 'Robinhood',
    category: 'Finance',
    status: 'blocked',
    description: 'Trading data and accounts strictly protected.',
    iconName: 'TrendingUp',
    details: ['Security focused blocking', 'Real-time data restricted']
  },
  
  // Services / Tech
  {
    id: 'netflix',
    name: 'Netflix',
    category: 'Services',
    status: 'blocked',
    description: 'Content library behind auth; no recommendations.',
    iconName: 'Film',
    details: ['Catalog invisible to crawlers', 'Cannot check real-time availability']
  },
  {
    id: 'spotify',
    name: 'Spotify',
    category: 'Services',
    status: 'restricted',
    description: 'Restricted metadata; battling AI music generation.',
    iconName: 'Music',
    details: ['Catalog metadata limited', 'Personalized data private']
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare Sites',
    category: 'Tech',
    status: 'blocked',
    description: 'Default "block AI" switch for millions of sites.',
    iconName: 'Cloud',
    details: ['Affects 20% of web traffic', 'Pay-per-crawl model emerging']
  }
];

export const PUBLISHER_BLOCK_LIST = [
    "The New York Times", "The Wall Street Journal", "CNN", "Reuters", "Wired", "The New Yorker", "Vogue", "Bloomberg", "USA Today", "PCMag"
];

export const SCENARIOS: ScenarioData[] = [
  {
    title: "The Invisible Brand",
    status: "danger",
    description: "The majority of mid-market brands today. Essentially non-existent in AI recommendations.",
    characteristics: [
      "Blocked by robots.txt or Cloudflare",
      "Missing Schema markup",
      "Low presence on AI-readable review sites",
      "Generic content without E-E-A-T signals"
    ],
    outcome: "Market share erodes as competitors capture zero-click searches."
  },
  {
    title: "Visible but Ignored",
    status: "warning",
    description: "Brands that appear in search but are deprioritized by agents.",
    characteristics: [
      "Outdated pricing/inventory data",
      "Mentioned without strong sentiment",
      "Lacks 'Topical Authority' on key subjects",
      " overshadowed by competitors with better PR"
    ],
    outcome: "Mentioned as 'secondary options' but rarely converting."
  },
  {
    title: "The AI-Ready Winner",
    status: "success",
    description: "A small group of first-movers capturing the 'Agentic' advantage.",
    characteristics: [
      "Syndicates real-time data via APIs",
      "High 'Topical Authority' content pillars",
      "Active review management across platforms",
      "Direct integrations (OpenAI/Shopify)"
    ],
    outcome: "Dominates recommendations and maintains pricing power."
  }
];

export const STRATEGY_PILLARS: StrategyPillar[] = [
  {
    id: "measure",
    title: "Measure AI Visibility",
    iconName: "Activity",
    summary: "You cannot optimize what you don't measure. Traditional SEO tools are blind to AI.",
    actions: [
      "Audit your 'AIR Score' (AI Recommendation Score).",
      "Benchmark sentiment against competitors.",
      "Identify visibility gaps across buyer intents."
    ],
    tools: ["Kip AIR", "Relixir AI", "Profound", "Evertune"]
  },
  {
    id: "geo",
    title: "Generative Engine Optimization (GEO)",
    iconName: "Zap",
    summary: "Shift from keyword stuffing to E-E-A-T (Experience, Expertise, Authoritativeness, Trust).",
    actions: [
      "Create deep 'Content Pillars' (3000+ words) on core topics.",
      "Implement robust Schema.org markup for Products and FAQs.",
      "Focus on semantic depth over keyword density."
    ],
    tools: ["Schema.org", "Clearscope", "Surfer SEO"]
  },
  {
    id: "syndicate",
    title: "Data Syndication",
    iconName: "Share2",
    summary: "If your site is blocked, your data must live elsewhere to be seen.",
    actions: [
      "Push data to Amazon, Walmart, and Marketplaces.",
      "Ensure real-time sync for pricing and inventory.",
      "Use Product Information Management (PIM) systems."
    ],
    tools: ["Syndigo", "Feedonomics", "Distributor Data Solutions"]
  },
  {
    id: "direct",
    title: "First-Party Data Moat",
    iconName: "Database",
    summary: "As the web fragments, direct customer relationships become your only safe harbor.",
    actions: [
      "Build proprietary email lists and loyalty programs.",
      "Develop 'Brand Agents' for direct customer service.",
      "Collect zero-party data (preferences) directly."
    ],
    tools: ["Salesforce", "HubSpot", "Klaviyo"]
  },
  {
    id: "agentic",
    title: "Agentic Readiness",
    iconName: "Bot",
    summary: "Prepare for autonomous AI agents that research and buy on behalf of consumers.",
    actions: [
        "Deploy agent-ready APIs for inventory and pricing.",
        "Enable agent-to-agent transaction capabilities.",
        "Explore proprietary brand agents for direct engagement."
    ],
    tools: ["BigCommerce", "Shopify", "Mirakl"]
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    duration: "Weeks 1-4",
    title: "Audit & Assessment",
    goals: ["Contract AI measurement tool (e.g., Kip AIR)", "Audit Schema markup", "Check robot.txt block status"]
  },
  {
    phase: "Phase 2",
    duration: "Weeks 5-12",
    title: "Foundation Building",
    goals: ["Implement robust Schema", "Setup Data Syndication feeds", "Launch initial Content Pillars"]
  },
  {
    phase: "Phase 3",
    duration: "Weeks 13-24",
    title: "Momentum",
    goals: ["Scale review generation", "Expand content to video/social", "Monitor competitive sentiment"]
  },
  {
    phase: "Phase 4",
    duration: "Months 6+",
    title: "Scale & Advanced",
    goals: ["Build proprietary Brand Agent", "Direct API integrations", "Advanced predictive personalization"]
  }
];