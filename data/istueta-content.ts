import type { Service, PortfolioProject, Testimonial, Stat, InvestmentLineItem, PhaseStep } from "@/types/istueta";

// ============================================================================
// LANDING TAB CONTENT
// ============================================================================

export const hero = {
  headline: "We Build the Homes You've Imagined",
  subheadline: "High-end residential remodeling in South Florida. Kitchens, bathrooms, and full home renovations built to last.",
  cta: "Start Your Project",
  secondaryCta: "View Our Work",
  backgroundImage: "/istueta-hero.jpg",
};

export const trustBand = {
  yearsInBusiness: "15+",
  projectsCompleted: "200+",
  certifications: ["Licensed & Insured", "BBB Accredited"],
};

export const services: Service[] = [
  {
    id: "kitchen",
    title: "Kitchen Remodeling",
    description: "Custom cabinetry, stone countertops, and modern appliances. We handle permitting, plumbing, and electrical.",
  },
  {
    id: "bathroom",
    title: "Bathroom Renovation",
    description: "Tile work, vanities, walk-in showers, and soaking tubs. Waterproofing and code compliance included.",
  },
  {
    id: "home",
    title: "Whole Home Remodeling",
    description: "Full structural updates, layout changes, and finish work. One point of contact from design to final walkthrough.",
  },
  {
    id: "exterior",
    title: "Outdoor Living",
    description: "Covered patios, outdoor kitchens, and pool decks. Built for Florida weather.",
  },
];

export const portfolio: PortfolioProject[] = [
  {
    id: "modern-kitchen-coral-gables",
    title: "Modern Kitchen - Coral Gables",
    category: "Kitchen",
    description: "Complete kitchen renovation with custom Italian cabinetry and quartzite island.",
  },
  {
    id: "master-bath-parkland",
    title: "Master Bath - Parkland",
    category: "Bathroom",
    description: "Spa-style bathroom with walk-in shower, freestanding tub, and heated floors.",
  },
  {
    id: "whole-home-weston",
    title: "Whole Home - Weston",
    category: "Full Remodel",
    description: "8,000 sq ft home renovation including kitchen, baths, flooring, and exterior updates.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "client-1",
    author: "Maria Rodriguez",
    role: "Homeowner, Parkland",
    content: "Our kitchen renovation came in on time and within budget. The team was professional and cleaned up every day.",
    rating: 5,
  },
  {
    id: "client-2",
    author: "David Thompson",
    role: "Homeowner, Coral Springs",
    content: "We've worked with several contractors over the years. Istueta was the first to deliver exactly what they promised.",
    rating: 5,
  },
];

export const landingStats: Stat[] = [
  { label: "Years in Business", value: "15", suffix: "+" },
  { label: "Projects Completed", value: "200", suffix: "+" },
  { label: "Client Satisfaction", value: "98", suffix: "%" },
];

export const voiceOrb = {
  label: "Habla con nuestra IA",
  fallbackMessage: "Demo de voz en vivo en el pitch",
  permissionDeniedMessage: "Permite el micrófono para hablar",
  title: "Pregunta lo que quieras sobre tu proyecto",
  subtitle: "Nuestra IA está lista para responder",
};

// ============================================================================
// PROPOSAL TAB CONTENT
// ============================================================================

export const proposalHero = {
  clientName: "Thompson Residence",
  projectType: "Master Bathroom Renovation",
  location: "Parkland, FL",
  date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
};

export const panorama = {
  title: "South Florida Luxury Remodeling Market",
  description: "Homeowners in Broward and Palm Beach counties are investing in renovations that increase property value and improve quality of life.",
  marketStats: [
    { label: "Avg. Kitchen ROI", value: "68", suffix: "%" }, // {/* TBD: verify with research */}
    { label: "Avg. Bath ROI", value: "62", suffix: "%" }, // {/* TBD: verify with research */}
    { label: "South FL Home Values", value: "$485k", suffix: "" }, // {/* TBD: verify with research */}
  ],
};

export const estadoActual = {
  title: "Current State",
  problems: [
    "Outdated fixtures and finishes from the 1990s",
    "Poor lighting and ventilation",
    "Inefficient layout that wastes space",
    "Worn tile and grout that's difficult to clean",
  ],
  impact: "These issues reduce your home's value and make daily routines frustrating.",
};

export const inversion: InvestmentLineItem[] = [
  { id: "demo", description: "Demolition & disposal", amount: "[MONTO A DEFINIR]" },
  { id: "plumbing", description: "Plumbing updates & fixtures", amount: "[MONTO A DEFINIR]" },
  { id: "electrical", description: "Electrical & lighting", amount: "[MONTO A DEFINIR]" },
  { id: "tile", description: "Tile & waterproofing", amount: "[MONTO A DEFINIR]" },
  { id: "vanity", description: "Custom vanity & countertops", amount: "[MONTO A DEFINIR]" },
  { id: "shower", description: "Walk-in shower system", amount: "[MONTO A DEFINIR]" },
  { id: "permits", description: "Permits & inspections", amount: "[MONTO A DEFINIR]" },
  { id: "total", description: "TOTAL INVESTMENT", amount: "[MONTO A DEFINIR]" },
];

export const elPlan: PhaseStep[] = [
  {
    id: "design",
    title: "Design & Permitting",
    description: "Finalize selections, obtain permits, order materials",
    duration: "2 weeks",
  },
  {
    id: "demo",
    title: "Demolition",
    description: "Remove existing fixtures, tile, and cabinets",
    duration: "2 days",
  },
  {
    id: "rough",
    title: "Rough-In",
    description: "Plumbing, electrical, framing, waterproofing",
    duration: "1 week",
  },
  {
    id: "finish",
    title: "Finish Work",
    description: "Tile, vanity, shower, fixtures, paint",
    duration: "2 weeks",
  },
  {
    id: "final",
    title: "Final Inspection & Walkthrough",
    description: "Code inspection, punch list, project handoff",
    duration: "2 days",
  },
];
