export type TabType = "landing" | "proposal";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  imageUrl?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface InvestmentLineItem {
  id: string;
  description: string;
  amount: string;
}

export interface PhaseStep {
  id: string;
  title: string;
  description: string;
  duration: string;
}
