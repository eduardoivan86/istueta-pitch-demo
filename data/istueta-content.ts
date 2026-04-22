// placeholder
export const differenceStats: Stat[] = [
  { label: "Years in Business", value: "41", suffix: "years" },
  { label: "Referral Rate", value: "78", suffix: "%" },
  { label: "Roofing Experts", value: "20", suffix: "+" },
  { label: "Average Rating", value: "4.8", suffix: "★" },
];

export const portfolio: PortfolioProject[] = [
  { id: "oceanfront-bay-point-1", title: "Oceanfront Estate - Bay Point", category: "Tile", imageUrl: "/portfolio/oceanfront-bay-point-1.jpg", description: "Custom Ludowici clay tile installation on 12,000 sq ft waterfront estate. Hurricane-rated system." },
  { id: "modern-villa-coral-gables", title: "Modern Villa - Coral Gables", category: "Tile", imageUrl: "/portfolio/modern-villa-coral-gables.jpg", description: "Spanish S-tile roof restoration with copper gutters and custom flashing details." },
  { id: "metal-roof-pinecrest-1", title: "Standing Seam - Pinecrest", category: "Metal", imageUrl: "/portfolio/metal-roof-pinecrest-1.jpg", description: "Aluminum standing seam roof with concealed fasteners. LEED-certified materials." },
  { id: "tile-roof-miami-shores", title: "Mediterranean Home - Miami Shores", category: "Tile", imageUrl: "/portfolio/tile-roof-miami-shores.jpg", description: "Barrel tile installation with structural decking upgrade and enhanced ventilation." },
  { id: "flat-roof-kendall", title: "Modern Flat Roof - Kendall", category: "Flat", imageUrl: "/portfolio/flat-roof-kendall.jpg", description: "TPO membrane flat roof with tapered insulation and 20-year NDL warranty." },
  { id: "clay-tile-palmetto-bay", title: "Clay Tile Estate - Palmetto Bay", category: "Tile", imageUrl: "/portfolio/clay-tile-palmetto-bay.jpg", description: "Hand-set clay tile with custom hip and ridge details. Lifetime craftsmanship warranty." },
  { id: "metal-roof-miami-beach", title: "Coastal Metal - Miami Beach", category: "Metal", imageUrl: "/portfolio/metal-roof-miami-beach.jpg", description: "Saltwater-resistant metal roofing system with impact-rated underlayment." },
  { id: "tile-restoration-key-biscayne", title: "Historic Restoration - Key Biscayne", category: "Tile", imageUrl: "/portfolio/tile-restoration-key-biscayne.jpg", description: "Period-accurate tile restoration on 1920s Mediterranean estate. Custom color matching." },
  { id: "flat-roof-commercial-doral", title: "Commercial Flat - Doral", category: "Flat", imageUrl: "/portfolio/flat-roof-commercial-doral.jpg", description: "45,000 sq ft modified bitumen roof with reflective coating. Energy Star rated." },
  { id: "luxury-tile-fisher-island", title: "Luxury Residence - Fisher Island", category: "Tile", imageUrl: "/portfolio/luxury-tile-fisher-island.jpg", description: "Premium clay tile with copper valleys and custom ventilation. Architect-specified materials." },
  { id: "metal-standing-seam-brickell", title: "Urban Loft - Brickell", category: "Metal", imageUrl: "/portfolio/metal-standing-seam-brickell.jpg", description: "Zinc standing seam roof on modern townhome. Minimal-profile fastening system." },
  { id: "tile-roof-coconut-grove", title: "Tropical Modern - Coconut Grove", category: "Tile", imageUrl: "/portfolio/tile-roof-coconut-grove.jpg", description: "Concrete S-tile with integrated solar mounting system. Hurricane-rated installation." },
];

export const processSteps = [
  { id: "consultation", number: "01", title: "CONSULTATION", description: "Free roof inspection and detailed estimate. We measure, photograph, and explain exactly what you need." },
  { id: "showroom", number: "02", title: "SHOWROOM", description: "Visit our tile showroom to see materials in person. Touch samples. Compare colors. Get manufacturer specs." },
  { id: "custom-solution", number: "03", title: "CUSTOM SOLUTION", description: "Engineered roofing system designed for your home. Building permits. Material selection. Timeline." },
  { id: "install", number: "04", title: "INSTALL", description: "Factory-certified installation by our in-house crew. Daily updates. Clean jobsite. On-time completion." },
  { id: "enjoy", number: "05", title: "ENJOY", description: "Final walkthrough and warranty registration. Lifetime craftsmanship warranty. Maintenance plan options." },
  { id: "maintain", number: "06", title: "MAINTAIN", description: "Annual inspections available. Emergency repair service. We're here for the life of your roof." },
];

export const testimonials: Testimonial[] = [
  { id: "aguirre", author: "Aguirre Family", role: "Coral Gables", content: "We had three estimates. Istueta wasn't the cheapest, but they were the only ones who took the time to explain what we actually needed. Five years later, the roof still looks perfect.", rating: 5 },
  { id: "reed", author: "Reed Family", role: "Pinecrest", content: "Our tile roof survived Hurricane Irma without a single leak. Istueta installed it in 2015 and it's still as solid as day one. Worth every penny.", rating: 5 },
  { id: "de-la-viesca", author: "de la Viesca Family", role: "Key Biscayne", content: "They rebuilt our entire roof after a leak destroyed two rooms. The crew was respectful, the work was clean, and they finished on schedule. We've already referred them to two neighbors.", rating: 5 },
  { id: "pawley", author: "Pawley Family", role: "Miami Shores", content: "Istueta re-roofed our 1940s home with custom clay tile. They matched the original style perfectly. This is a family that cares about their craft.", rating: 5 },
];

export const serviceAreas: ServiceArea[] = [
  { city: "Miami", coverage: "All neighborhoods" },
  { city: "Miami Shores" },
  { city: "Coral Gables" },
  { city: "Pinecrest" },
  { city: "Palmetto Bay" },
  { city: "Kendall" },
  { city: "Bay Point" },
  { city: "Miami-Dade County", coverage: "Full coverage" },
];

export const footerContent = {
  address: "Miami, FL",
  phone: "(305) 555-ROOF",
  license: "FL License CCC054759",
  copyright: "© 2026 Istueta Roofing. 41 years of excellence.",
};

// ============================================================================
// PROPOSAL TAB CONTENT
// ============================================================================

export const proposalHero = {
  metadata: { company: "K · ISTUETA ROOFING", title: "Propuesta de Crecimiento Estratégico", date: "Abril 2026" },
  badges: ["CONFIDENCIAL", "ESTRATÉGICO", "ACCIONABLE"],
  headline: "Sells like your best closer. 24/7. Bilingüe. For 41 years of craft.",
  subheadline: "You built a reputation one roof at a time. Now build a revenue engine that never stops working — while you focus on what you do best: installing the finest roofs in South Florida.",
  pillars: ["Every appointment booked", "Every quote sent", "Every dormant lead reactivated"],
};

export const panoramaStats: MarketStat[] = [
  { value: "$6.7B", label: "South Florida roofing market (2025)", source: "IBISWorld Industry Report 23816" },
  { value: "2.75M", label: "Housing units in Miami-Dade + Broward", source: "US Census Bureau, 2023" },
  { value: "69.3%", label: "Owner-occupied homes (high replacement intent)", source: "US Census Bureau, Housing Units" },
  { value: "~80%", label: "Roofing jobs sourced from word-of-mouth or referrals", source: "Mordor Intelligence, Roofing Market Analysis" },
];

export const hurricaneStats: HurricaneStat[] = [
  { value: "$30B+", label: "Insurance claims from FL hurricanes (2017-2023)", description: "Majority roof-related damage" },
  { value: "27", label: "Named storms per decade hitting South FL (2010-2020)" },
  { value: "30%", label: "Of annual roofing revenue comes post-hurricane" },
  { value: "50-100%", label: "Premium increase during storm-driven demand spikes" },
];

export const competitors: Competitor[] = [
  { name: "Istueta Roofing", founded: "1985", positioning: "High-end tile, metal, and flat roofing. Family-owned. Factory-certified.", hasVoiceAI: false, hasChatAI: false, hasWhatsApp: false, digitalModernity: "low" },
  { name: "Earl W. Johnston Roofing", founded: "1955", positioning: "Established brand. Tile specialists. Strong Coral Gables presence.", hasVoiceAI: false, hasChatAI: false, hasWhatsApp: false, digitalModernity: "low" },
  { name: "Roofer Mike", founded: "2006", positioning: "Volume-focused. Aggressive digital ads. Lower-end market.", hasVoiceAI: false, hasChatAI: "partial", hasWhatsApp: false, digitalModernity: "medium" },
  { name: "Perkins Roofing", founded: "1978", positioning: "Commercial and residential. Strong insurance relationships.", hasVoiceAI: false, hasChatAI: false, hasWhatsApp: false, digitalModernity: "low" },
  { name: "T&S Roofing", founded: "1989", positioning: "Mid-market residential. Heavy Google Ads spend.", hasVoiceAI: false, hasChatAI: false, hasWhatsApp: false, digitalModernity: "medium" },
  { name: "Best Roofing", founded: "1970", positioning: "Legacy brand. Aging owner. Limited online presence.", hasVoiceAI: false, hasChatAI: false, hasWhatsApp: false, digitalModernity: "low" },
  { name: "A&E Brothers Roofing", founded: "2012", positioning: "Budget-friendly. Fast turnaround. High churn.", hasVoiceAI: false, hasChatAI: false, hasWhatsApp: false, digitalModernity: "low" },
  { name: "iRoof Florida", founded: "2018", positioning: "Tech-forward branding. Online booking. Venture-backed.", hasVoiceAI: false, hasChatAI: true, hasWhatsApp: false, digitalModernity: "high" },
  { name: "T&E Roofing", founded: "1995", positioning: "Tile and metal specialists. Strong referral network.", hasVoiceAI: false, hasChatAI: false, hasWhatsApp: false, digitalModernity: "low" },
];

export const painStats: PainStat[] = [
  { value: "27-62%", label: "Of inbound leads never get called back", source: "Harvard Business Review, Lead Response Study" },
  { value: "$500-$1200", label: "Cost per roofing lead (Google Ads, South FL)", source: "WordStream Industry Benchmarks 2024" },
  { value: "$48K/year", label: "Average salary for a full-time receptionist in Miami", source: "Bureau of Labor Statistics, Miami MSA" },
  { value: "<30s", label: "Window to answer a call before voicemail (and lost sale)", source: "InsideSales.com, Speed-to-Lead Study" },
  { value: "85%", label: "Of customers choose the first roofer who responds", source: "Roofing Contractor Magazine Survey" },
  { value: "78%", label: "Of your jobs come from referrals — but only 12% get immediate follow-up", source: "Industry avg + Istueta internal estimate" },
  { value: "5min→80%", label: "Leads that wait 5+ minutes have 80% lower close rate", source: "Velocify Lead Response Report" },
  { value: "79%", label: "Of Spanish-speaking homeowners prefer initial contact in Spanish", source: "Pew Research Hispanic Trends" },
];

export const compareTodayRows: CompareRow[] = [
  { text: "Calls during install? Straight to voicemail." },
  { text: "Weekend emergency? They'll call someone else Monday." },
  { text: "After-hours leak? Gone to your competitor by morning." },
  { text: "Spanish-speaking homeowner? Waits for callback. Or doesn't." },
  { text: "Referral calls at 8pm? Lost." },
  { text: "Follow-up on old estimate? Forgotten in the CRM." },
  { text: "Hurricane-driven demand spike? Overwhelmed phone lines." },
  { text: "Quote requests during vacation? Missed revenue." },
  { text: "Your crew is on 3 roofs. Your phone rings 14 times. You answer none." },
  { text: "Lead asks: 'Do you do tile?' You're on a ladder. They hang up." },
  { text: "Customer calls Friday at 6pm. You call back Monday at 9am. They already booked." },
  { text: "$800/lead from Google Ads. 40% never get a callback. $320/lead burned." },
  { text: "Every missed call is a roof you didn't install." },
];

export const compareKivoRows: CompareRow[] = [
  { text: "Calls during install? Kivo answers. Books the consult.", isPositive: true },
  { text: "Weekend emergency? Kivo triages. Sends your on-call crew.", isPositive: true },
  { text: "After-hours leak? Quote sent in 90 seconds. Appointment booked.", isPositive: true },
  { text: "Spanish-speaking homeowner? Kivo responds in Spanish. Instantly.", isPositive: true },
  { text: "Referral calls at 8pm? Captured. Qualified. Scheduled.", isPositive: true },
  { text: "Follow-up on old estimate? Kivo reactivates. Sends updated quote.", isPositive: true },
  { text: "Hurricane spike? Kivo scales infinitely. No busy signal.", isPositive: true },
  { text: "Vacation? Kivo runs the front desk. You get the jobs when you're back.", isPositive: true },
  { text: "Your crew installs 3 roofs. Kivo books the next 5.", isPositive: true },
  { text: "'Do you do tile?' Kivo answers with your certifications, photos, and availability.", isPositive: true },
  { text: "Lead calls Friday 6pm. Kivo books them Saturday 10am. Done.", isPositive: true },
  { text: "$800/lead from Google Ads. 95% get instant response. $40/lead wasted.", isPositive: true },
  { text: "Every answered call is a roof you could install.", isPositive: true },
];

export const phases: Phase[] = [
  { number: 1, name: "Foundation", duration: "Weeks 1-2", deliverables: ["Voice agent live on your business line", "Trained on Istueta services, pricing, process", "English + Spanish fluency", "Appointment booking integrated with your calendar", "Lead capture + CRM sync"], typicalCapacity: "Handles 100% of inbound calls. Books consultations. Captures every lead." },
  { number: 2, name: "Expansion", duration: "Weeks 3-6", deliverables: ["Chat widget on website", "WhatsApp business integration", "Automated quote follow-ups", "Dormant lead reactivation campaigns", "Custom triggers (e.g., 'roof over 15 years old' → send maintenance offer)"], typicalCapacity: "Reactivates 20-40 dormant leads/month. Converts 15-25% to jobs." },
  { number: 3, name: "Multi-Channel", duration: "Weeks 7-10", deliverables: ["SMS campaigns for hurricane prep offers", "Referral incentive automation", "Post-job review requests", "Warranty/maintenance reminders", "Seasonal campaigns (hurricane season, insurance renewal season)"], typicalCapacity: "Generates 30-50 new conversations/month from existing customer base." },
  { number: 4, name: "Revenue Recovery", duration: "Weeks 11-12", deliverables: ["Recovery campaigns for lost estimates", "Competitive win-back offers", "Upsell triggers (e.g., repair → full replacement)", "Annual revenue impact report"], typicalCapacity: "Recovers 10-20% of previously lost opportunities. Avg $120K-$250K/year." },
];

export const capabilities: Capability[] = [
  { number: "01", title: "VOICE", description: "Answers every call in under 3 seconds. Books appointments. Sends quotes. Speaks English and Spanish fluently. Sounds human because it is — trained on 41 years of your expertise." },
  { number: "02", title: "CHAT", description: "Website chat widget that doesn't feel like a bot. Answers roof questions. Shares portfolio examples. Schedules showroom visits. Captures emails and phone numbers." },
  { number: "03", title: "LANGUAGES", description: "Fluent English and Spanish. Auto-detects language preference. Responds in the customer's language instantly. No awkward handoffs." },
  { number: "04", title: "AUTOMATIONS", description: "Follow-ups. Appointment reminders. Quote expirations. Maintenance reminders. Referral requests. Hurricane prep offers. Runs 24/7 without your input." },
  { number: "05", title: "INVENTORY", description: "Knows what you install. Ludowici tile. GAF shingles. Metal roofing. Flat systems. Explains materials, warranties, and lead times like your best salesperson." },
  { number: "06", title: "TRIGGERS", description: "Custom rules that fire automatically. 'Roof over 20 years old' → send replacement quote. 'Hurricane season starts' → send prep checklist. You set it once. It runs forever." },
  { number: "07", title: "INTEGRATIONS", description: "Syncs with your CRM, calendar, email, and phone system. Logs every call. Updates every lead. Sends daily summaries. Works with the tools you already use." },
  { number: "08", title: "MANAGED", description: "Kivo handles updates, training, and optimization. You don't manage the agent — you just see the results. New service? New pricing? We update it in 24 hours." },
];

export const cases: CaseStudy[] = [
  { clientName: "Harvey Windows (Renewal by Andersen dealer)", industry: "Residential window replacement", challenge: "High-end product ($15K-$40K jobs) but every call during install goes to voicemail. Lost 35-50% of inbound leads.", solution: "Kivo voice agent answers 100% of calls. Books in-home consultations. Speaks English + Spanish. Sends brochures instantly.", results: ["93% call answer rate (up from 52%)", "41% increase in booked consultations", "$340K additional revenue in first 90 days", "Agent now handles after-hours and weekend leads autonomously"] },
  { clientName: "JP Medical Center", industry: "Healthcare", challenge: "Bilingual patient base. Receptionist overwhelmed. 22% of calls abandoned.", solution: "Kivo voice agent for appointment booking, insurance verification, and FAQs.", results: ["Call abandonment dropped to 3%", "18% increase in appointment bookings", "Spanish-speaking patients now get instant service"] },
  { clientName: "Dental Care Deerfield", industry: "Dental practice", challenge: "After-hours calls go to voicemail. Emergency patients call competitors.", solution: "Kivo 24/7 voice agent. Triages emergencies. Books appointments.", results: ["32% increase in emergency bookings", "After-hours revenue up $87K/year", "Patient satisfaction score improved 29%"] },
  { clientName: "Lumber Plus Miami", industry: "Building materials", challenge: "Contractors call during jobsite visits. Need quotes fast or they buy elsewhere.", solution: "Kivo answers calls, sends quotes, checks inventory, schedules pickups.", results: ["Quote turnaround time: 12min → 90sec", "23% increase in same-day orders", "$520K additional revenue/year"] },
];

export const projectionIstueta: ProjectionScenario[] = [
  { name: "Conservative", description: "Kivo answers 90% of inbound calls. Converts at current close rate.", monthlyLeads: 15, conversionRate: 0.35, avgJobValue: 12000, annualRevenue: 756000 },
  { name: "Realistic", description: "Kivo + dormant lead reactivation + after-hours capture.", monthlyLeads: 22, conversionRate: 0.4, avgJobValue: 12000, annualRevenue: 1267200 },
  { name: "Optimistic", description: "Full multi-channel deployment + hurricane season campaigns.", monthlyLeads: 30, conversionRate: 0.45, avgJobValue: 12500, annualRevenue: 2025000 },
];

export const pricingTiers: PricingTier[] = [
  { name: "Foundation", setupPrice: 3500, monthlyPrice: 2500, features: ["Voice agent on business line", "English + Spanish", "Appointment booking", "Lead capture + CRM sync", "Call logs and transcripts", "Email/SMS notifications", "Standard support"], cta: "Start with Foundation" },
  { name: "Growth", setupPrice: 5000, monthlyPrice: 3000, recommended: true, features: ["Everything in Foundation", "Website chat widget", "WhatsApp integration", "Automated follow-ups", "Dormant lead reactivation", "Custom triggers (5 included)", "Monthly performance reports", "Priority support"], cta: "Choose Growth (Recommended)" },
  { name: "Complete", setupPrice: 7500, monthlyPrice: 3500, features: ["Everything in Growth", "SMS campaigns", "Referral automation", "Review requests", "Warranty/maintenance reminders", "Seasonal campaigns", "Unlimited custom triggers", "Dedicated account manager", "Quarterly strategy sessions"], cta: "Go Complete" },
];

export const roiModel: ROIRow[] = [
  { label: "Missed call recovery", currentCost: "$432K/year lost", withKivo: "$43K/year lost (90% capture)", savings: "$389K/year" },
  { label: "After-hours leads", currentCost: "$0 (all lost)", withKivo: "$180K/year captured", savings: "$180K/year" },
  { label: "Dormant lead reactivation", currentCost: "$0 (manual, inconsistent)", withKivo: "$95K/year", savings: "$95K/year" },
  { label: "Staff cost (receptionist)", currentCost: "$48K/year", withKivo: "$36K/year (Growth tier)", savings: "$12K/year" },
  { label: "Total annual impact", currentCost: "", withKivo: "", savings: "$676K/year" },
  { label: "Break-even timeline", currentCost: "", withKivo: "Month 1 (first recovered job covers setup + 2 months)" },
];

export const pilotClause = \`Start with a 30-day pilot on the Foundation tier. If Kivo doesn't book at least 5 qualified appointments in the first 30 days, we refund 100% of your setup fee. No questions. No fine print. We're confident because we've done this for contractors just like you.\`;

export const faqs: FAQItem[] = [
  { question: "Does this replace my staff?", answer: "No. Kivo handles repetitive tasks — answering calls, booking appointments, sending quotes, following up on leads. Your team focuses on selling, installing, and building relationships. Think of Kivo as your 24/7 front desk, not a replacement for your people." },
  { question: "How long does setup take?", answer: "2 weeks for Foundation, 4-6 weeks for Growth or Complete. We handle everything: call forwarding, CRM integration, agent training. You give us your services, pricing, and process. We build the agent. You approve it. Then it goes live." },
  { question: "What if a customer asks something the agent doesn't know?", answer: "Kivo escalates to you instantly. It knows when to hand off. Complex engineering questions? Custom material requests? Kivo says: 'Let me connect you with our lead estimator' and sends you a notification. You stay in control." },
  { question: "Can I update pricing or services myself?", answer: "On Growth and Complete tiers, yes — you get a dashboard. On Foundation, submit updates to us and we push them live within 24 hours. No dev work required." },
  { question: "Does it actually sound human?", answer: "Listen to the demo in the Landing tab. Kivo uses Vapi's latest voice models, trained on real roofing conversations. It doesn't sound like Siri. It sounds like Maria — because it is." },
  { question: "What happens during a hurricane?", answer: "Kivo scales infinitely. When call volume spikes 10x, Kivo handles it. No busy signals. No voicemail. Every lead captured. Every emergency triaged. You focus on the roofs. Kivo handles the phones." },
  { question: "How do I know it's working?", answer: "Daily email summaries. Weekly performance reports. Real-time dashboard (Growth and Complete tiers). You see: calls answered, appointments booked, quotes sent, revenue attributed. Full transparency." },
  { question: "What if I want to cancel?", answer: "Monthly billing. No long-term contract. Cancel anytime with 30 days' notice. We're confident you won't — but the option is there." },
];

export const proximosPasos = [
  { step: "01", title: "SIGN", description: "Choose your tier. Sign the agreement. Pay setup fee." },
  { step: "02", title: "DISCOVERY", description: "30-minute kickoff call. We learn your services, pricing, process, and tone. You approve the agent script." },
  { step: "03", title: "LIVE", description: "Agent goes live. You start capturing every lead. We monitor performance and optimize for 90 days." },
];

export const hurricaneSeasonCallout = {
  text: "Hurricane season starts June 1.",
  subtext: "The roofers who answer first get the jobs. Let's make sure that's you.",
};

export const proposalFooterContent = {
  brandLine: "Kivo · Commercial-agent platform for businesses that close on the phone",
  contact: "Eduardo Collazos · eduardoivan86@gmail.com · (954) 804-8855",
  family: "Built by Kivo Studio — the same team behind Harvey Windows, JP Medical, and Lumber Plus agents.",
};
