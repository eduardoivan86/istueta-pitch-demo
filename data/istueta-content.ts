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

