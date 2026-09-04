import fs from "fs/promises";
import path from "path";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  companyName: string;
  service: string;
  budget: string;
  requirement: string;
  status: "new" | "contacted" | "in_discussion" | "won" | "lost" | "archived";
  notes?: string;
  source?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content?: string;
  tags: Array<{ text: string; variant: "dark" | "outline" | "yellow" }>;
  status: "published" | "draft";
  publishedAt: string;
  author: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export interface WorkItem {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  src: string;
  featured: boolean;
  order: number;
}

export interface Subscriber {
  id: string;
  email: string;
  source: string;
  subscribedAt: string;
}

export interface AgencySettings {
  agencyName: string;
  tagline: string;
  notificationEmail: string;
  supportPhone: string;
  address: string;
  currency: string;
  emailAlertsEnabled: boolean;
  maintenanceMode: boolean;
  adminEmail?: string;
  adminPassword?: string;
}

// Database directory
const DB_DIR = path.join(process.cwd(), "src", "data", "db");

async function ensureDbDir() {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
  } catch (error) {
    // Ignore if exists
  }
}

async function readJsonFile<T>(filename: string, fallback: T): Promise<T> {
  await ensureDbDir();
  const filePath = path.join(DB_DIR, filename);
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data) as T;
  } catch {
    await writeJsonFile(filename, fallback);
    return fallback;
  }
}

async function writeJsonFile<T>(filename: string, data: T): Promise<void> {
  await ensureDbDir();
  const filePath = path.join(DB_DIR, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Default Seed Data
const DEFAULT_LEADS: Lead[] = [
  {
    id: "lead-1",
    name: "Vikram Malhotra",
    email: "vikram@apexcloud.io",
    phone: "9876543210",
    countryCode: "+91",
    companyName: "ApexCloud Technologies",
    service: "SEO · AEO · GEO (Search Dominance)",
    budget: "$10,000 - $25,000",
    requirement: "We are scaling our B2B SaaS platform across the US and APAC. Need programmatic SEO architecture and generative engine optimization (GEO) to dominate top search intent keywords.",
    status: "in_discussion",
    notes: "Followed up on Feb 28. Shared proposal outline. Client requested meeting for next Tuesday.",
    source: "Website Contact Form",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "lead-2",
    name: "Elena Rostova",
    email: "elena@luminafashion.com",
    phone: "44712345678",
    countryCode: "+44",
    companyName: "Lumina Luxury D2C",
    service: "High-Performance Website / Web App",
    budget: "$25,000 - $50,000+",
    requirement: "Rebuilding our global luxury ecommerce presence. We want Next.js headless architecture, sub-second load times, and custom 3D product interactions.",
    status: "new",
    notes: "High priority lead. Need to send initial audit report.",
    source: "Organic Search",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "lead-3",
    name: "Aman Sharma",
    email: "aman@finpulse.in",
    phone: "9988776655",
    countryCode: "+91",
    companyName: "FinPulse Payments",
    service: "Performance Marketing & Paid Ads",
    budget: "$5,000 - $10,000",
    requirement: "Looking for full-funnel performance marketing and paid growth strategy on Meta & Google Ads to acquire KYC-verified merchants.",
    status: "won",
    notes: "Contract signed! Onboarding started for March sprint.",
    source: "Referral",
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "lead-4",
    name: "David Chen",
    email: "david@synthwave.ai",
    phone: "14155552671",
    countryCode: "+1",
    companyName: "Synthwave AI",
    service: "UI/UX & Brand Identity Systems",
    budget: "$10,000 - $25,000",
    requirement: "Need complete brand identity, design tokens, and web app UI kit for our Series A generative AI assistant.",
    status: "contacted",
    notes: "Intro call completed. Preparing design sprint pitch deck.",
    source: "Twitter / X",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

const DEFAULT_BLOGS: BlogPost[] = [
  {
    id: "article-1",
    slug: "modern-search-infrastructure-10x-organic-revenue",
    title: "How modern search infrastructure drives 10x organic revenue.",
    category: "Search Systems",
    readTime: "4 min read",
    image: "/image1.png",
    excerpt: "Exploring the shift from traditional keyword targeting to algorithmic semantic authority and programmatic search systems.",
    content: "Modern search engines prioritize topical authority, performance metrics, and programmatic architecture. Here is how high-growth startups capitalize on modern search pipelines to generate enduring organic revenue.",
    tags: [
      { text: "STRATEGY", variant: "dark" },
      { text: "GROWTH", variant: "yellow" },
    ],
    status: "published",
    publishedAt: "2026-02-15T10:00:00.000Z",
    author: "Owlio Growth Labs",
  },
  {
    id: "article-2",
    slug: "headless-commerce-vs-monolithic-builds",
    title: "Why headless commerce platforms outperform traditional monolithic builds.",
    category: "Digital Strategy",
    readTime: "5 min read",
    image: "/image2.png",
    excerpt: "A deep dive into decoupled frontends, Next.js commerce pipelines, and conversion rate optimizations.",
    content: "Speed is currency in digital commerce. Decoupling the frontend from backend ERPs unlocks unprecedented flexibility and sub-second load times.",
    tags: [
      { text: "TECH", variant: "outline" },
      { text: "PLATFORMS", variant: "dark" },
    ],
    status: "published",
    publishedAt: "2026-02-18T12:00:00.000Z",
    author: "Owlio Engineering",
  },
  {
    id: "article-3",
    slug: "science-of-high-conversion-digital-experiences-2026",
    title: "The science of high-conversion digital experiences in 2026.",
    category: "Conversion Engineering",
    readTime: "6 min read",
    image: "/image3.png",
    excerpt: "Analyzing cognitive friction, visual hierarchy, and micro-interactions that drive user commitment.",
    content: "Conversion engineering combines behavioral psychology with rapid page feedback loops. Understanding cognitive load allows us to design effortless conversion pathways.",
    tags: [
      { text: "D2C", variant: "yellow" },
      { text: "CONVERSION", variant: "outline" },
    ],
    status: "published",
    publishedAt: "2026-02-22T08:30:00.000Z",
    author: "Design & UX Lab",
  },
  {
    id: "article-4",
    slug: "building-scalable-ai-search-systems",
    title: "Building scalable AI search systems that outpace algorithmic shifts.",
    category: "AI & Search Systems",
    readTime: "4 min read",
    image: "/image4.png",
    excerpt: "How Generative Engine Optimization (GEO) and structured answer engines are reshaping organic discovery.",
    content: "With LLM-driven search experiences, traditional meta tags are no longer sufficient. Learn how structured knowledge graphs and entity authority lead search engine indexes.",
    tags: [
      { text: "AI & ML", variant: "dark" },
      { text: "SEARCH", variant: "yellow" },
    ],
    status: "published",
    publishedAt: "2026-02-27T14:00:00.000Z",
    author: "AI Research Group",
  },
];

const DEFAULT_WORK_ITEMS: WorkItem[] = [
  {
    id: "creative1",
    name: "Smokey Lounge",
    category: "HOSPITALITY & DINING",
    headline: "Culinary Elegance Under The Stars",
    description: "End-to-end launch branding and experiential digital campaign for Smokey's flagship rooftop lounge.",
    src: "/creative1.png",
    featured: true,
    order: 1,
  },
  {
    id: "creative2",
    name: "PM GatiShakti",
    category: "PUBLIC SECTOR & POLICY",
    headline: "National Logistics Policy Launch",
    description: "Omnichannel digital rollout and media broadcast for the National Logistics Policy with NICDC.",
    src: "/creative2.png",
    featured: true,
    order: 2,
  },
  {
    id: "creative3",
    name: "The Sell Campaign",
    category: "ADVERTISING & COPY",
    headline: "The More You Tell, The More You Sell",
    description: "High-conversion retro print and performance copy strategy driving 4.2x ROAS in omnichannel retail.",
    src: "/creative3.png",
    featured: true,
    order: 3,
  },
  {
    id: "creative4",
    name: "Pasta Delizioso",
    category: "FOOD & GOURMET",
    headline: "Alfredo Panne Chicken Gourmet",
    description: "Visual identity and mouth-watering performance creative campaign for artisanal gourmet dining.",
    src: "/creative4.png",
    featured: true,
    order: 4,
  },
  {
    id: "creative5",
    name: "Let's Do Lunch",
    category: "EDITORIAL & CAFE",
    headline: "Vintage Editorial Dining Campaign",
    description: "Atmospheric newspaper-style creative concept and localized activation for urban cafes.",
    src: "/creative5.png",
    featured: true,
    order: 5,
  },
  {
    id: "creative6",
    name: "Berry Basil Lady",
    category: "BEVERAGE & MIXOLOGY",
    headline: "Signature Drink Deserves Attention",
    description: "Craft cocktail digital visual campaign that generated 1.2M+ organic impressions.",
    src: "/creative6.png",
    featured: true,
    order: 6,
  },
  {
    id: "creative7",
    name: "Weekend Personality",
    category: "EXPERIENTIAL & NIGHTLIFE",
    headline: "Your Weekend Personality Lives Here",
    description: "Vibrant personality-led social campaign for leading nightlife and weekend destinations.",
    src: "/creative7.png",
    featured: true,
    order: 7,
  },
];

const DEFAULT_SUBSCRIBERS: Subscriber[] = [
  {
    id: "sub-1",
    email: "sarah.jenkins@growthventures.co",
    source: "Blog Footer Newsletter",
    subscribedAt: "2026-02-25T11:20:00.000Z",
  },
  {
    id: "sub-2",
    email: "karthik.r@techscale.dev",
    source: "Homepage Newsletter CTA",
    subscribedAt: "2026-02-27T16:45:00.000Z",
  },
  {
    id: "sub-3",
    email: "marcus.vance@solardigital.io",
    source: "Insights Page",
    subscribedAt: "2026-03-01T09:10:00.000Z",
  },
];

const DEFAULT_SETTINGS: AgencySettings = {
  agencyName: "Owlio Works",
  tagline: "A Global SEO & Growth Engine for Startups",
  notificationEmail: process.env.EMAIL_TO || "owlioworks@gmail.com",
  supportPhone: "+91 98765 43210",
  address: "Saket, New Delhi, India",
  currency: "USD ($)",
  emailAlertsEnabled: true,
  maintenanceMode: false,
};

// Database API Methods
export async function getLeads(): Promise<Lead[]> {
  return await readJsonFile<Lead[]>("leads.json", DEFAULT_LEADS);
}

export async function saveLead(leadData: Omit<Lead, "id" | "createdAt" | "updatedAt"> & { id?: string }): Promise<Lead> {
  const leads = await getLeads();
  const now = new Date().toISOString();
  
  if (leadData.id) {
    const idx = leads.findIndex((l) => l.id === leadData.id);
    if (idx !== -1) {
      leads[idx] = {
        ...leads[idx],
        ...leadData,
        updatedAt: now,
      };
      await writeJsonFile("leads.json", leads);
      return leads[idx];
    }
  }

  const newLead: Lead = {
    ...leadData,
    id: leadData.id || `lead-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    status: leadData.status || "new",
    createdAt: now,
    updatedAt: now,
  };

  leads.unshift(newLead);
  await writeJsonFile("leads.json", leads);
  return newLead;
}

export async function updateLeadStatus(id: string, status: Lead["status"], notes?: string): Promise<Lead | null> {
  const leads = await getLeads();
  const idx = leads.findIndex((l) => l.id === id);
  if (idx === -1) return null;

  leads[idx].status = status;
  if (notes !== undefined) leads[idx].notes = notes;
  leads[idx].updatedAt = new Date().toISOString();

  await writeJsonFile("leads.json", leads);
  return leads[idx];
}

export async function deleteLead(id: string): Promise<boolean> {
  const leads = await getLeads();
  const filtered = leads.filter((l) => l.id !== id);
  if (filtered.length === leads.length) return false;
  await writeJsonFile("leads.json", filtered);
  return true;
}

// Blog Posts API
export async function getBlogs(): Promise<BlogPost[]> {
  return await readJsonFile<BlogPost[]>("blogs.json", DEFAULT_BLOGS);
}

export async function saveBlog(blogData: Omit<BlogPost, "id"> & { id?: string }): Promise<BlogPost> {
  const blogs = await getBlogs();
  if (blogData.id) {
    const idx = blogs.findIndex((b) => b.id === blogData.id);
    if (idx !== -1) {
      blogs[idx] = { ...blogs[idx], ...blogData };
      await writeJsonFile("blogs.json", blogs);
      return blogs[idx];
    }
  }

  const newBlog: BlogPost = {
    ...blogData,
    id: blogData.id || `article-${Date.now()}`,
    publishedAt: blogData.publishedAt || new Date().toISOString(),
  };
  blogs.unshift(newBlog);
  await writeJsonFile("blogs.json", blogs);
  return newBlog;
}

export async function deleteBlog(id: string): Promise<boolean> {
  const blogs = await getBlogs();
  const filtered = blogs.filter((b) => b.id !== id);
  if (filtered.length === blogs.length) return false;
  await writeJsonFile("blogs.json", filtered);
  return true;
}

// Work Portfolio API
export async function getWorkItems(): Promise<WorkItem[]> {
  return await readJsonFile<WorkItem[]>("work.json", DEFAULT_WORK_ITEMS);
}

export async function saveWorkItem(itemData: Omit<WorkItem, "id"> & { id?: string }): Promise<WorkItem> {
  const items = await getWorkItems();
  if (itemData.id) {
    const idx = items.findIndex((w) => w.id === itemData.id);
    if (idx !== -1) {
      items[idx] = { ...items[idx], ...itemData };
      await writeJsonFile("work.json", items);
      return items[idx];
    }
  }

  const newItem: WorkItem = {
    ...itemData,
    id: itemData.id || `creative${items.length + 1}`,
    order: itemData.order || items.length + 1,
  };
  items.push(newItem);
  await writeJsonFile("work.json", items);
  return newItem;
}

export async function deleteWorkItem(id: string): Promise<boolean> {
  const items = await getWorkItems();
  const filtered = items.filter((w) => w.id !== id);
  if (filtered.length === items.length) return false;
  await writeJsonFile("work.json", filtered);
  return true;
}

// Subscribers API
export async function getSubscribers(): Promise<Subscriber[]> {
  return await readJsonFile<Subscriber[]>("subscribers.json", DEFAULT_SUBSCRIBERS);
}

export async function saveSubscriber(email: string, source: string = "Website"): Promise<Subscriber> {
  const subscribers = await getSubscribers();
  const existing = subscribers.find((s) => s.email.toLowerCase() === email.toLowerCase());
  if (existing) return existing;

  const newSub: Subscriber = {
    id: `sub-${Date.now()}`,
    email,
    source,
    subscribedAt: new Date().toISOString(),
  };
  subscribers.unshift(newSub);
  await writeJsonFile("subscribers.json", subscribers);
  return newSub;
}

export async function deleteSubscriber(id: string): Promise<boolean> {
  const subscribers = await getSubscribers();
  const filtered = subscribers.filter((s) => s.id !== id);
  if (filtered.length === subscribers.length) return false;
  await writeJsonFile("subscribers.json", filtered);
  return true;
}

// Settings API
export async function getSettings(): Promise<AgencySettings> {
  return await readJsonFile<AgencySettings>("settings.json", DEFAULT_SETTINGS);
}

export async function saveSettings(settings: Partial<AgencySettings>): Promise<AgencySettings> {
  const current = await getSettings();
  const updated = { ...current, ...settings };
  await writeJsonFile("settings.json", updated);
  return updated;
}
