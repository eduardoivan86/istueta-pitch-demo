export type TabType = "landing" | "proposal";

// ============================================================================
// LANDING TAB TYPES
// ============================================================================

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: "Tile" | "Metal" | "Flat";
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating?: number;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description?: string;
}

export interface ServiceArea {
  name: string;
}

// ============================================================================
// PROPOSAL TAB TYPES
// ============================================================================

export interface MarketStat {
  value: string;
  label: string;
  description: string;
  source: string;
}

export interface HurricaneStat {
  value: string;
  description: string;
}

export interface Competitor {
  name: string;
  founded: string;
  positioning: string;
  voiceAI: boolean;
  chatAI: boolean;
  whatsapp: boolean;
  digitalModernity: "outdated" | "average" | "modern";
}

export interface PainStat {
  value: string;
  label: string;
  description: string;
  source: string;
}

export interface CompareRow {
  text: string;
  isPositive?: boolean;
}

export interface Phase {
  number: number;
  title: string;
  duration: string;
  description: string;
  deliverables: PhaseDeliverable[];
  capacity?: string;
}

export interface PhaseDeliverable {
  text: string;
}

export interface Capability {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  pain?: string;
  solution?: string;
  results?: string[];
  quote?: string;
  quoteAuthor?: string;
  featured?: boolean;
}

export interface ProjectionScenario {
  label: string;
  leads?: string;
  appointments?: string;
  pipeline: string;
  timeframe?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  setupPrice: string;
  monthlyPrice: string;
  recommended?: boolean;
  features: string[];
  cta: string;
}

export interface ROIRow {
  label: string;
  current?: string;
  withKivo?: string;
  savings?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterColumn {
  title?: string;
  items: string[];
}
