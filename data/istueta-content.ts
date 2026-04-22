import type {
  Service,
  PortfolioProject,
  Testimonial,
  Stat,
  ProcessStep,
  ServiceArea,
  MarketStat,
  HurricaneStat,
  Competitor,
  PainStat,
  CompareRow,
  Phase,
  Capability,
  CaseStudy,
  ProjectionScenario,
  PricingTier,
  ROIRow,
  FAQItem,
  PhaseDeliverable,
} from "@/types/istueta";

// ============================================================================
// BANNED PHRASES — DO NOT USE (grep target for Phase 2 QA)
// ============================================================================
/*
BANNED_PHRASES = [
  "premium quality", "elegant design", "superior craftsmanship", "world-class",
  "industry-leading", "best-in-class", "trusted partner", "unparalleled",
  "game-changer", "revolutionary", "cutting-edge", "next-generation"
]
*/

// ============================================================================
// KIVO DIFFERENTIATOR — APPEARS TWICE IN PROPOSAL
// ============================================================================
export const differentiatorText = `Most voice agent services sell you a generic SaaS, hand you a dashboard, and disappear. You end up with a toy that talks but doesn't actually solve your business problems. No connection to your real systems, no understanding of your workflows, no one on the other end when something breaks.

Kivo is the opposite: we learn your business before we build the agent, we wire it into the tools you actually use, and we operate it every week. The agent talks and closes — because it was built to.`;

// ============================================================================
// LANDING TAB CONTENT
// ============================================================================

export const hero = {
  eyebrow: "ISTUETA ROOFING · SINCE 1985",
  headline: "Your last roof.",
  headlineItalic: "Built to outlive the house.",
  subheadline: "41 years installing roofs that define South Florida homes. Family-owned. Factory-certified. Miami-proud.",
  stats: ["41 YEARS", "20+ EXPERTS", "78% REFERRAL RATE", "4.8★ AVG"],
  cta: "Talk to our roof expert",
  secondaryCta: "Schedule consultation",
};

export const voiceOrb = {
  eyebrow: "A REAL CONVERSATION. NOT A CHATBOT.",
  name: "Maria",
  role: "Our senior roofing expert. Live. 24/7.",
  features: [
    "English & Español (automatic language detection)",
    "Answers in under 30 seconds",
    "Books your consultation",
    "Works weekends, holidays, hurricanes",
  ],
  caption: "This is a real Kivo agent. Not a recording.",
};

export const trustBand = {
  certifications: ["LUDOWICI TILE", "GAF", "CERTAINTEED", "FL LICENSE CCC054759"],
  ratings: [
    { platform: "Facebook", rating: 4.8 },
    { platform: "Guild Quality", rating: 4.4 },
    { platform: "Houzz", rating: 4.3 },
  ],
};

export const services: Service[] = [
  { id: "installation", number: "01", title: "Installation", description: "Tile, metal, flat — roofs designed to handle South Florida's worst." },
  { id: "repair", number: "02", title: "Repair", description: "Storm damage, leaks, emergency response." },
  { id: "maintenance", number: "03", title: "Maintenance", description: "Regular care extends roof lifespan." },
  { id: "new-construction", number: "04", title: "New Construction", description: "From blueprint to completion." },
];

export const differenceStats: Stat[] = [
  { label: "years", value: "41", description: "Of craftsmanship that outlasts hurricanes, humidity, and Miami summers." },
  { label: "referrals", value: "78%", description: "Of projects from referrals. We don't advertise. Our roofs do." },
  { label: "experts", value: "20+", description: "Factory-certified experts. Every install passes through trained hands." },
  { label: "rating", value: "4.8★", description: "Average rating across Facebook, Guild Quality, and Houzz." },
];

export const portfolio: PortfolioProject[] = [
  { id: "oceanfront-bay-point-1", title: "Oceanfront Home - Bay Point", category: "Tile", imageUrl: "/portfolio/oceanfront-bay-point-1.jpg", description: "Creaton Futura tile on oceanfront property" },
  { id: "oceanfront-bay-point-2", title: "Oceanfront Home - Bay Point", category: "Tile", imageUrl: "/portfolio/oceanfront-bay-point-2.jpg", description: "Creaton Futura tile installation" },
  { id: "metal-roof-pinecrest-1", title: "Metal Roof - Pinecrest", category: "Metal", imageUrl: "/portfolio/metal-roof-pinecrest-1.jpg", description: "Mill finish standing seam metal roof" },
  { id: "metal-roof-kendall-1", title: "Metal Roof - East Kendall", category: "Metal", imageUrl: "/portfolio/metal-roof-kendall-1.jpg", description: "Standing seam metal roof mansard brown" },
  { id: "metal-roof-kendall-2", title: "Metal Roof - East Kendall", category: "Metal", imageUrl: "/portfolio/metal-roof-kendall-2.jpg", description: "Standing seam metal roof detail" },
  { id: "waterfront-las-olas", title: "Waterfront Home - Las Olas", category: "Tile", imageUrl: "/portfolio/waterfront-las-olas.jpg", description: "Concrete tile on Riviera Isles property" },
  { id: "aerial-view-1", title: "Residential Project", category: "Tile", imageUrl: "/portfolio/aerial-view-1.jpg", description: "Aerial view of completed installation" },
  { id: "aerial-view-2", title: "Residential Project", category: "Tile", imageUrl: "/portfolio/aerial-view-2.jpg", description: "Drone photography of tile roof" },
  { id: "residential-project-1", title: "Residential Project", category: "Tile", imageUrl: "/portfolio/residential-project-1.jpg", description: "Premium tile installation" },
  { id: "residential-project-2", title: "Residential Project", category: "Tile", imageUrl: "/portfolio/residential-project-2.jpg", description: "Custom tile roofing" },
  { id: "residential-project-3", title: "Residential Project", category: "Tile", imageUrl: "/portfolio/residential-project-3.jpg", description: "Complete roof replacement" },
  { id: "residential-project-4", title: "Residential Project", category: "Flat", imageUrl: "/portfolio/residential-project-4.jpg", description: "Flat roof installation" },
];

export const processSteps: ProcessStep[] = [
  { id: "01", number: "01", title: "CONSULTATION" },
  { id: "02", number: "02", title: "SHOWROOM" },
  { id: "03", number: "03", title: "CUSTOM SOLUTION" },
  { id: "04", number: "04", title: "INSTALL" },
  { id: "05", number: "05", title: "ENJOY" },
  { id: "06", number: "06", title: "MAINTAIN" },
];

export const testimonials: Testimonial[] = [
  { id: "aguirre", author: "The Aguirre Family", role: "Miami Shores", content: "Everybody has commented on this roof, this looks fabulous.", rating: 5 },
  { id: "reed", author: "The Reed Family", role: "Palmetto Bay", content: "On a rating of 1 to 10, I give my experience a 10.", rating: 5 },
  { id: "de-la-viesca", author: "The de la Viesca Family", role: "Pinecrest", content: "I would refer Istueta Roofing to my friends and family.", rating: 5 },
  { id: "pawley", author: "The Pawley Family", role: "Coral Gables", content: "It's the perfect experience. They went above and beyond the call of duty.", rating: 5 },
];

export const serviceAreas: ServiceArea[] = [
  { name: "Miami" }, { name: "Miami Shores" }, { name: "Coral Gables" }, { name: "Pinecrest" },
  { name: "Palmetto Bay" }, { name: "Kendall" }, { name: "Bay Point" }, { name: "Miami-Dade County" },
];

export const footerContent = {
  companyName: "ISTUETA ROOFING",
  address: "7501 NW 7TH ST, Miami, FL 33126",
  phone: "(305) 671-9190",
  license: "FL License: CCC054759",
  copyright: "© 2026 · Concept design by Kivo AI",
};

// ============================================================================
// PROPOSAL TAB CONTENT
// ============================================================================

export const proposalHero = {
  metadata: "K · ISTUETA ROOFING · Propuesta de Crecimiento Estratégico · Abril 2026",
  locationBadge: "🏠 Miami, FL   📅 Q2 2026 Launch",
  headline: "Sells like your best closer.\n24/7. Bilingüe. For 41 years of craft.",
  subheadline: "Istueta Roofing construye 78% de sus proyectos por referidos — un número que marca liderazgo absoluto en South Florida. Pero el 22% restante, los leads que llegan vía web, Instagram, WhatsApp, o después de hora, están escapando a competidores que responden en 30 segundos. Este documento explica exactamente por qué, cuánto está costando, y cómo Kivo AI puede cerrar esa brecha antes del próximo ciclo de huracanes.",
  pillars: ["Every appointment booked.", "Every quote sent.", "Every dormant lead reactivated."],
  badges: ["🇺🇸🇪🇸 Bilingüe nativo", "⭐ 4.8/5 rating", "🏆 41 años", "🔨 CertainTeed + GAF + Ludowici", "🌀 Hurricane-ready"],
  scrollIndicator: "Ver el estudio completo ↓",
};

export const differentiatorSupporting = "We build, train, and operate the agent for you. You watch the results land.";

export const panoramaHeadline = "El mercado existe. El tamaño sorprende.\nY está cambiando más rápido de lo que la industria admite.";

export const panoramaStats: MarketStat[] = [
  { value: "$6.7B", label: "mercado", description: "Roofing contractors en Florida 2026", source: "IBISWorld, 2026" },
  { value: "2.75M", label: "habitantes", description: "Miami-Dade County 2026 proyectado", source: "US Census, ACS 2024" },
  { value: "69.3%", label: "hispano", description: "Miami-Dade racial/ethnic makeup", source: "US Census, 2024" },
  { value: "~80%", label: "re-roofing", description: "De la demanda anual en Florida", source: "Mordor Intelligence, 2026" },
];

export const panoramaContext = "Florida tiene 8,228 roofing contractors compitiendo en un mercado de $6.7B que crece 2.2% anual. Pero el mercado no es homogéneo — South Florida (Miami-Dade + Broward + Palm Beach) concentra los proyectos premium por combinación de aging housing stock, exposición a huracanes, y concentración de high-net-worth homes.\n\nDentro de ese mercado, Miami-Dade tiene una particularidad que cambia la ecuación: 69.3% hispano, 66% habla español en casa (Beacon Council), y es el condado hispano-mayoritario más grande del país. La comunicación bilingüe no es feature — es supervivencia comercial.";

export const hurricaneStats: HurricaneStat[] = [
  { value: "$30B+", description: "en roof-related insurance claims en US 2024 (duplicó vs 2023)" },
  { value: "27", description: "huracanes promedio por década en Florida" },
  { value: "30%", description: "del revenue anual de South Florida roofers se concentra en hurricane season" },
  { value: "50-100%", description: "premium pricing durante emergency repairs" },
];

export const panoramaClosing = "El premio está en la mesa. La pregunta es quién lo captura.";

export const estadoActualHeadline = "Istueta tiene el mejor heritage positioning del mercado premium. Y el peor digital presence del Tier 1.";

export const estadoActualIntro = "Analizamos la competencia directa de Istueta en el corredor premium (Coral Gables, Pinecrest, Miami Shores, Palmetto Bay, Bay Point, Kendall). Comparamos sitios web, tiempo de respuesta, capacidad bilingüe, presencia multicanal, y tecnología operacional. Los hallazgos definen exactamente dónde está la ventana competitiva — y cuánto tiempo queda abierta.";

export const competitors: Competitor[] = [
  { name: "Istueta Roofing", founded: "1985", positioning: "Premium heritage", voiceAI: false, chatAI: false, whatsapp: false, digitalModernity: "outdated" },
  { name: "Earl W. Johnston", founded: "1952", positioning: "Heritage dominant", voiceAI: false, chatAI: false, whatsapp: false, digitalModernity: "outdated" },
  { name: "Roofer Mike Inc", founded: "~1995", positioning: "Premium service", voiceAI: false, chatAI: false, whatsapp: false, digitalModernity: "average" },
  { name: "Perkins Roofing", founded: "1980", positioning: "Premium residential", voiceAI: false, chatAI: false, whatsapp: false, digitalModernity: "average" },
  { name: "T&S Roofing Systems", founded: "2004", positioning: "Modern premium", voiceAI: false, chatAI: false, whatsapp: false, digitalModernity: "modern" },
  { name: "Best Roofing", founded: "1978", positioning: "295 employees, volume", voiceAI: false, chatAI: false, whatsapp: false, digitalModernity: "modern" },
  { name: "A&E Brothers", founded: "2006", positioning: "13K+ clients volume", voiceAI: false, chatAI: false, whatsapp: false, digitalModernity: "modern" },
  { name: "T&E Roofing", founded: "Recent", positioning: "Residential modern", voiceAI: false, chatAI: false, whatsapp: false, digitalModernity: "modern" },
  { name: "iRoof Florida", founded: "Recent", positioning: "Modern Coral Gables", voiceAI: false, chatAI: false, whatsapp: false, digitalModernity: "modern" },
];

export const competitorInsight = "🔑 Insight crítico: Ninguno de los 9 competidores directos de Istueta tiene voice AI, chat AI, ni automatización multicanal funcional en 2026. Este es el momento exacto de salto — la ventana competitiva se cierra cuando el primer Tier 1 implemente. Best Roofing (295 empleados, el más capitalizado) es la amenaza no obvia.";

export const painStatsHeadline = "Cuánto cuesta el status quo hoy:";

export const painStats: PainStat[] = [
  { value: "27-62%", label: "calls perdidos", description: "Industry average en home services", source: "Invoca + PCN 2026 Study" },
  { value: "$500-$1,200", label: "por call perdido", description: "Revenue impact en home services", source: "Dialzara, 2025" },
  { value: "$48K / yr", label: "bilingual receptionist Miami", description: "Costo actual de soluciones humanas", source: "Kivo internal benchmark" },
  { value: "<30 seg", label: "response time target", description: "Para capturar 391% más conversión", source: "Estatehub Benchmark 2026" },
  { value: "85%", label: "no vuelve a llamar", description: "Si primera llamada no es contestada", source: "Dialzara, 2025" },
  { value: "78%", label: "compra al primer responder", description: "De customers en home services", source: "Kivo — usekivo.ai" },
  { value: "5 min", label: "drops 80%", description: "Qualification odds caen 80% después de 5 minutos sin respuesta", source: "Kivo — usekivo.ai" },
  { value: "79%", label: "no usa AI", description: "Roofing contractors en 2026", source: "ServiceTitan State of Industry 2026" },
];

export const hiddenCostModel = "Modelo conservador para Istueta:\n\n• ~150 inbound leads/mes (estimate para empresa 41 años + 78% referrals)\n• 27% miss rate = 40.5 leads perdidos/mes\n• 5% close rate sobre leads respondidos (industry avg roofing)\n• $18,000 avg project value (mezcla premium tile/metal + repairs)\n\nRevenue escapando conservador: $36,450/mes = $437,400/año\n\nModelo realista con multiplicador de referrals:\n(cada cliente contento refiere 2-3 más según industry data)\n\nRevenue escapando realista: $800,000 - $1,200,000/año";

export const compareTodayRows: CompareRow[] = [
  { text: "Call center offshore que no responde en <5 minutos", isPositive: false },
  { text: "27-62% de calls perdidos según datos reales de industry", isPositive: false },
  { text: "Formulario web → email que nadie revisa fines de semana", isPositive: false },
  { text: "ZyraTalk chatbot captura info pero NO agenda citas", isPositive: false },
  { text: "Instagram DMs sin respuesta automática (lead bleed al mercado hispano)", isPositive: false },
  { text: "WhatsApp inexistente (el canal #1 para homeowners 40-65 hispanos)", isPositive: false },
  { text: "5,000+ contactos históricos dormant sin reactivación", isPositive: false },
  { text: "Spanish calls manejadas manualmente por quien esté disponible", isPositive: false },
  { text: "After-hours leads = competidores directos ganan", isPositive: false },
  { text: "Sin visibilidad unificada de todos los canales", isPositive: false },
  { text: "Documentation (quotes, permits, warranties) 100% manual", isPositive: false },
  { text: "Follow-up post-visita inconsistente o inexistente", isPositive: false },
  { text: "Sin preparación para hurricane season spike (300-400% volume)", isPositive: false },
];

export const compareKivoRows: CompareRow[] = [
  { text: "Voice agent responde en <30 segundos, 24/7, bilingüe nativo", isPositive: true },
  { text: "0 calls perdidos — every lead captured, qualified, or escalated", isPositive: true },
  { text: "Form submit → outbound call automático en <5 minutos", isPositive: true },
  { text: "Cita agendada directamente en calendar de Salesforce", isPositive: true },
  { text: "Instagram DMs respondidos en tiempo real con tono Istueta", isPositive: true },
  { text: "WhatsApp Business agent entrenado con knowledge completo empresa", isPositive: true },
  { text: "Campaña de reactivación sobre los 5,000 contactos históricos", isPositive: true },
  { text: "Bilingüe nativo — detecta idioma en primera palabra", isPositive: true },
  { text: "Hurricane-ready: scale elástico para emergency response", isPositive: true },
  { text: "Dashboard único Kivo AI: voice + chat + WhatsApp + IG + forms", isPositive: true },
  { text: "Auto-quote generation + PDF delivery automática post-consulta", isPositive: true },
  { text: "Post-visit email automation con pain points personalizados", isPositive: true },
  { text: "Document management: permits, warranties, insurance claims", isPositive: true },
];

export const planHeadline = "Un sistema operativo comercial completo. Implementado en fases.";

export const planIntro = "Kivo no es una herramienta. Es una plataforma de agentes comerciales operada por un equipo, construida a medida del negocio de cada operador. Voice AI es el entry point — la pieza que demuestra capacidad técnica y captura revenue inmediato. Pero la visión completa es un business operando con agentes inteligentes en cada punto de contacto con el cliente, desde el primer \"hola\" hasta el follow-up post-garantía 5 años después.";

export const phases: Phase[] = [
  { number: 1, title: "Foundation", duration: "Semanas 1-2", description: "El foundation commercial. Captura inmediata de revenue que actualmente escapa.", deliverables: [{ text: "Voice agent inbound en número dedicado After-Hours (24/7)" }, { text: "Form callback automation: submit → outbound call en <5 min" }, { text: "Dashboard Kivo AI branded para el equipo Istueta" }, { text: "Integración inicial con Salesforce existente" }, { text: "Bilingual agent configurado desde día 1 (detect + switch)" }], capacity: "~30-60 after-hours leads capturados · ~8-15 appointments agendados automáticamente · ~$50K-$120K en pipeline recuperado vs status quo" },
  { number: 2, title: "Expansion Digital", duration: "Semanas 3-4", description: "El website de Istueta se convierte en un closing machine 24/7.", deliverables: [{ text: "Voice widget (mic) embebible en istuetaroofing.com" }, { text: "Chat widget reemplazando ZyraTalk con agent conversacional" }, { text: "Workflows GHL para qualification scoring automático" }, { text: "SMS follow-up bilingüe en cadencia optimizada" }, { text: "Reportes semanales de conversaciones + recomendaciones" }] },
  { number: 3, title: "Multi-Channel Conquest", duration: "Mes 2", description: "Istueta aparece en cada canal donde sus customers YA están hablando.", deliverables: [{ text: "WhatsApp Business agent entrenado con knowledge total de la empresa" }, { text: "Instagram DM automation para leads que descubren Istueta por contenido social" }, { text: "Facebook Messenger integration para la base hispana older demographic" }, { text: "Bidirectional sync GHL ↔ Salesforce (completa)" }], capacity: "WhatsApp es THE platform para hispano-Americans en Miami-Dade. 78%+ usage daily en demographic core de Istueta (homeowners 40-65)." },
  { number: 4, title: "Revenue Recovery + Operational AI", duration: "Mes 3+", description: "El database dormant se reactiva. La operación back-office se automatiza.", deliverables: [{ text: "Reactivation campaign sobre 5,000+ contactos históricos" }, { text: "Auto-quote generation: post-visita → PDF quote branded en <5 min → auto-send" }, { text: "Post-visit email automation tocando pain points identificados por estimador" }, { text: "Document management automation: permits, insurance claims, warranties" }, { text: "Hurricane season response templates (pre-activated June 1)" }, { text: "A/B testing de voice agent scripts y automation sequences" }, { text: "Monthly strategic review + optimization" }], capacity: "Reactivation conservadora: 5,000 contactos × 5% response × 20% convert = 50 nuevos projects × $18K avg = $900K recovered pipeline en 90 días" },
];

export const capabilitiesHeadline = "Eight capabilities. One platform.\nOperada por nosotros, reportando a ustedes.";

export const capabilitiesIntro = "Cuando pensamos en \"AI para home services,\" la mayoría piensa en voice agents. Pero la realidad operacional de una empresa de 20+ personas como Istueta es que el voice agent resuelve un dolor específico — capturar leads — mientras el resto de la operación sigue funcionando con procesos manuales que consumen horas productivas cada día.\n\nKivo construye sistemas de agentes inteligentes para cada punto de fricción. Modular. Activable cuando Istueta está listo para absorber cada pieza.";

export const capabilities: Capability[] = [
  { number: "01", title: "VOICE", subtitle: "Voice that actually sounds human.", description: "Inbound en <30 segundos. Dos agentes nativos — American English y Latin Spanish. Never a robot." },
  { number: "02", title: "CHAT", subtitle: "Every channel, one brain.", description: "Web widget, WhatsApp, Instagram, SMS, Messenger. Mismo agente. Mismo knowledge." },
  { number: "03", title: "LANGUAGES", subtitle: "Native, not translated.", description: "Detecta idioma en la primera palabra. Switches sin preguntar. Para Miami-Dade (69.3% hispano, 66% spanish-at-home): supervivencia comercial." },
  { number: "04", title: "AUTOMATIONS", subtitle: "Follow-ups that never forget.", description: "Post-visit emails tocando pain points específicos del homeowner. Nurture sequences por temperatura del lead. Re-engagement automático." },
  { number: "05", title: "INVENTORY", subtitle: "Knows what's actually in stock.", description: "Check en tiempo real de inventory de Ludowici, GAF, CertainTeed tiles antes de quote. Supplier orders automation cuando quote confirmed." },
  { number: "06", title: "TRIGGERS", subtitle: "Campaigns that react in real time.", description: "Hurricane season arriba → activate emergency response templates. Dormant contacts → reactivation campaign automática. Seasonal maintenance reminders a past clients." },
  { number: "07", title: "INTEGRATIONS", subtitle: "Lives inside your stack.", description: "Salesforce, Outlook, WhatsApp Business, Instagram, SMS, Email, Zapier, Make, Webhooks, REST API. Cada call, mensaje, cita loggea back to Salesforce en tiempo real. Tu data donde siempre estuvo." },
  { number: "08", title: "MANAGED", subtitle: "You never touch a dashboard.", description: "Nosotros operamos el agente cada semana. Training continuo. Weekly reporting. Monthly optimization review. You watch the results land." },
];

export const capabilitiesClosing = "Esto no es roadmap teórico — es modular. Cada pieza se activa cuando Istueta está lista para absorberla, operando sobre la foundation construida en Fase 1.";

export const differentiator2Supporting = "Por eso Harvey Windows, JP Medical Center, Dental Care of Deerfield Beach, y Lumber Plus siguen operando con nosotros — no porque la tecnología sea perfecta, sino porque alguien es accountable por el outcome cada semana.\n\nWe are not the cheapest. We are the ones who actually deliver.";

export const casesHeadline = "Operators already running Kivo across South Florida.";

export const cases: CaseStudy[] = [
  { id: "harvey", company: "HARVEY BY RENEWAL BY ANDERSEN", industry: "Windows & Doors · South Florida", pain: "After-hours y weekend leads muriendo antes de response.", solution: "Voice agent answers cada inquiry en <30 segundos, qualifies, y books in-home estimates.", results: ["127 after-hours leads recovered", "14 deals closed", "$47K new pipeline"], quote: "Kivo doesn't let opportunities slip through. It even handles the follow-ups our team used to forget.", quoteAuthor: "Harvey Lee, Design Consultant", featured: true },
  { id: "jp-medical", company: "JP MEDICAL CENTER", industry: "Healthcare · Bilingual patient base Miami-Dade", results: ["22% reduction no-shows", "34 after-hours bookings/mes"] },
  { id: "dental-care", company: "DENTAL CARE OF DEERFIELD BEACH", industry: "Dental", results: ["18 new patients booked after-hours/mes", "19% no-show reduction"] },
  { id: "lumber-plus", company: "LUMBER PLUS", industry: "Building Materials", results: ["42 project leads escalated/mes", "$31K cross-sell captured"] },
];

export const projectionIstueta: ProjectionScenario[] = [
  { label: "Conservador", timeframe: "Fase 1 solo, primeros 30 días", leads: "60-90 after-hours leads recovered", appointments: "8-12 appointments agendados", pipeline: "$140K-$220K pipeline recovered" },
  { label: "Realista", timeframe: "Fases 1-2, primeros 60 días", leads: "150-200 total leads capturados (voice + web widgets + form callback)", appointments: "25-35 appointments agendados", pipeline: "$450K-$630K pipeline recovered" },
  { label: "Fase completa", timeframe: "todos los canales + automations, mes 3-6", pipeline: "Annualized pipeline recovery: $1.5M - $2.4M · Operational efficiency: 10+ hrs/semana liberadas · Customer experience: Industry-leading response time" },
];

export const inversionHeadline = "Tres formas de empezar. Un solo objetivo:\nROI positivo desde el mes 1.";

export const pricingTiers: PricingTier[] = [
  { id: "foundation", name: "FOUNDATION", subtitle: "Para arrancar capturando revenue", setupPrice: "$3,500", monthlyPrice: "$2,500", features: ["Voice agent inbound 24/7", "Form callback automation", "Dashboard Kivo AI branded", "Salesforce integration inicial", "Bilingual nativo desde día 1", "Weekly reporting + optimization", "Voice minutes hasta 1,500/mes"], cta: "Empezar con Foundation" },
  { id: "growth", name: "GROWTH", subtitle: "Donde la mayoría empieza. Scale completo sin over-commit.", setupPrice: "$5,000", monthlyPrice: "$3,000", features: ["Todo lo de Foundation", "Voice widget en website", "Chat widget (reemplaza ZyraTalk)", "SMS follow-up automation", "Instagram DMs automation", "Qualification scoring workflows", "Voice minutes hasta 3,000/mes"], recommended: true, cta: "Empezar con Growth" },
  { id: "complete", name: "COMPLETE", subtitle: "La operación completa. Ownership total del mercado.", setupPrice: "$7,500", monthlyPrice: "$3,500", features: ["Todo lo de Growth", "WhatsApp Business integration", "Salesforce bidirectional sync", "Reactivation campaign (5K+ db)", "Auto-quote generation system", "Post-visit email automation", "Document management automation", "Voice minutes hasta 5,000/mes"], cta: "Empezar con Complete" },
];

export const roiProjection = "ROI Projection — basado en modelo conservador:\n\nCurrent monthly cost actual (estimate):\n• Call center Colombia: $4,000-$6,000\n• ZyraTalk: ~$300-500\n• Revenue perdido por missed calls: ~$36,450\n• Cost equivalente de bilingual receptionist Miami: $48K/año = $4K/mes\n• TOTAL exposure: ~$41,000/mes en cost + lost revenue\n\nWith Kivo Growth ($3,000/mo):\n• Current communication cost: eliminated o reduced\n• Revenue recovered: ~$36,450/mes (conservador)\n• Net monthly impact: +$36K a P&L\n\nBreak-even: Mes 1 (primera semana con appointments capturados)\nAnnualized impact (conservador): +$430K/año\nAnnualized impact (realista): +$800K-$1.2M/año";

export const pilotClause = "🎯 Primer Mes Pilot\n\nPrimeros 30 días son período piloto. Si no vemos impacto medible, ajustamos scope o pueden salir sin penalty. Nuestro compromiso no es \"vender software.\" Es que Istueta vea ROI positivo cada mes.";

export const kivoStudioMention = "📌 ¿Modernizar el website completo?\n\nSi en algún momento Istueta decide rehacer istuetaroofing.com completo, Kivo Studio (nuestra división de branding + web + SEO + ads + content) puede liderar ese proyecto. El concept design que ven en el Tab 1 es una previsualización de nuestro work quality.\n\nkivo.ai/studio";

export const faqHeadline = "Las respuestas honestas.";

export const faqs: FAQItem[] = [
  { id: "different", question: "¿Cómo es diferente de otros voice agent services?", answer: "Honest answer — most voice agent services sell you a generic SaaS, hand you a dashboard, and disappear. You end up with a toy that talks but doesn't actually solve your business problems. No connection to your real systems, no understanding of your workflows, no one on the other end when something breaks. Kivo is the opposite: we learn your business before we build the agent, we wire it into the tools you actually use, and we operate it every week. The agent talks and closes — because it was built to." },
  { id: "zyratalk", question: "¿Qué pasa si ya intentamos AI antes y no funcionó? (ZyraTalk)", answer: "Probablemente intentaron un chatbot disfrazado de AI. Kivo es diferente — no les entregamos software y esperamos que funcione. Construimos el agent alrededor de su proceso de ventas real, lo entrenamos en sus prices, warranties, y calendar reales, y lo operamos para ustedes cada semana. Si han sido quemados antes, los primeros 30 días muestran por qué esto es diferente." },
  { id: "salesforce", question: "¿Y si ya tenemos Salesforce y no queremos cambiar?", answer: "Perfecto — no reemplazamos, operamos dentro de él. Kivo se integra con Salesforce, HubSpot, Pipedrive, Google Calendar, Outlook, y más. Cada llamada, mensaje, y appointment loggea back to su CRM en tiempo real. Su data se queda donde está. El agent solo hace que trabaje más duro." },
  { id: "timeline", question: "¿Cuánto tiempo hasta estar live?", answer: "La mayoría de nuestros agents están respondiendo llamadas reales en 7 días. Integraciones complejas con Salesforce pueden tomar hasta 2 semanas." },
  { id: "spanish", question: "¿Habla español de verdad?", answer: "Sí. Detecta el idioma del caller en la primera palabra y switches sin preguntar. Cada agent es bilingüe by default. American English + Latin Spanish neutral — no accent forzado. Para Miami-Dade es non-negotiable." },
  { id: "failure", question: "¿Qué pasa si falla una llamada?", answer: "Cada llamada es transcribed y tagged. Ustedes definen las reglas de qué se escala a humano. Kivo silently transfers — no awkward hand-off." },
  { id: "hurricane", question: "¿Y el mercado de hurricane season — puede manejar el spike?", answer: "Scale elástico. Durante hurricane season, el volumen puede multiplicarse 300-400%. Kivo no se rompe. Seasonal templates pre-configured activan automáticamente junio 1 cada año." },
  { id: "reactivation", question: "¿Qué pasa con los 5,000+ contactos históricos?", answer: "Esos son revenue escondiendo en plain sight. Kivo puede deployar una campaña de reactivación multi-channel (voice + SMS + WhatsApp + email) tuneada al history de cada contacto. Revenue que ya era de ustedes, finalmente recuperado." },
];

export const proximosPasos = {
  headline: "Your next customer is trying to reach you right now.",
  intro: "Tres pasos para comenzar esta semana:",
  steps: [
    { number: "01", title: "SIGN", description: "Contrato firmado → kick-off call al día siguiente." },
    { number: "02", title: "DISCOVERY (Semana 1)", description: "Nuestro team aprende Istueta: servicios, pricing guidelines, process, warranties, case studies por neighborhood, tono de marca, objeciones comunes. Construimos el agent alrededor de Istueta — no al revés." },
    { number: "03", title: "LIVE (Día 7)", description: "Primera llamada real cerrada. Día 14: sistema completo operando. Día 21: primer reporte de pipeline impact." },
  ],
  urgency: "Hurricane season arranca Junio 1. Tenemos 6 semanas para estar listos.",
  cta: { text: "Hablar con Eduardo", email: "eduardo@usekivo.ai" },
};

export const proposalFooterContent = {
  companyName: "Kivo",
  tagline: "Commercial-agent platform for businesses done losing leads.",
  copyright: "© 2026 · Kivo AI · Propuesta confidencial para Istueta Roofing",
  contact: "Contact: Eduardo Collazos · eduardo@usekivo.ai · usekivo.ai",
  family: "Also part of the Kivo family: Kivo Studio (branding · web · SEO · ads · content)",
};
