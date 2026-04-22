import Section from "@/components/ui/Section";

type Phase = {
  id: string;
  number: string;
  name: string;
  window: string;
  lead: string;
  deliverables: string[];
  measurables?: string[];
  capacity?: {
    label: string;
    lines: string[];
  };
  impact?: {
    label: string;
    lines: string[];
  };
};

const phases: Phase[] = [
  {
    id: "fase-1",
    number: "FASE 1",
    name: "Foundation",
    window: "Semanas 1–2",
    lead: "El foundation commercial. Captura inmediata de revenue que actualmente escapa.",
    deliverables: [
      "Voice agent inbound en número dedicado After-Hours (24/7)",
      "Form callback automation: submit → outbound call en <5 min",
      "Dashboard Kivo AI branded para el equipo Istueta",
      "Integración inicial con Salesforce existente",
      "Bilingual agent configurado desde día 1 (detect + switch)",
    ],
    measurables: [
      "Primera llamada en vivo día 7",
      "Sistema completo operativo día 14",
      "Primer reporte de leads capturados día 14",
      "Meeting de review semanal establecido",
    ],
    capacity: {
      label: "Capacidad típica primer mes",
      lines: [
        "~30–60 after-hours leads capturados",
        "~8–15 appointments agendados automáticamente",
        "~$50K–$120K en pipeline recuperado vs status quo",
      ],
    },
  },
  {
    id: "fase-2",
    number: "FASE 2",
    name: "Expansion Digital",
    window: "Semanas 3–4",
    lead: "El website de Istueta se convierte en un closing machine 24/7.",
    deliverables: [
      "Voice widget (mic) embebible en istuetaroofing.com",
      "Chat widget reemplazando ZyraTalk con agent conversacional",
      "Workflows GHL para qualification scoring automático",
      "SMS follow-up bilingüe en cadencia optimizada",
      "Reportes semanales de conversaciones + recomendaciones",
    ],
    measurables: [
      "Widget mic + chat live en website",
      "Todos los canales inbound unificados en dashboard",
      "Primera semana con reporting completo",
    ],
  },
  {
    id: "fase-3",
    number: "FASE 3",
    name: "Multi-Channel Conquest",
    window: "Mes 2",
    lead: "Istueta aparece en cada canal donde sus customers ya están hablando.",
    deliverables: [
      "WhatsApp Business agent entrenado con knowledge total de la empresa (servicios, pricing guidelines, garantías, process, testimonials, case studies) con capacidad completa de agendar citas y dar quotes preliminares",
      "Instagram DM automation para leads que descubren Istueta por contenido social",
      "Facebook Messenger integration para la base hispana older demographic",
      "Bidirectional sync GHL ↔ Salesforce (completa)",
    ],
    impact: {
      label: "Impacto en mercado hispano",
      lines: [
        "WhatsApp es THE platform para hispano-Americans en Miami-Dade.",
        "78%+ usage daily en demographic core de Istueta (homeowners 40–65).",
        "Agent bilingüe nativo en WhatsApp = penetración de mercado que ningún competidor puede ofrecer hoy.",
      ],
    },
  },
  {
    id: "fase-4",
    number: "FASE 4",
    name: "Revenue Recovery + Operational AI",
    window: "Mes 3+",
    lead: "El database dormant se reactiva. La operación back-office se automatiza.",
    deliverables: [
      "Reactivation campaign sobre 5,000+ contactos históricos (voice + SMS + WhatsApp + email sequenced)",
      "Auto-quote generation: post-visita → PDF quote branded en <5 min → auto-send",
      "Post-visit email automation tocando pain points identificados por estimador",
      "Document management: permit applications, insurance claim assistance, warranty registration con GAF/CertainTeed/Ludowici, seasonal maintenance reminders",
      "Hurricane season response templates (pre-activated Junio 1)",
      "A/B testing de voice agent scripts y automation sequences",
      "Monthly strategic review + optimization",
    ],
    impact: {
      label: "Impacto acumulado fase 4",
      lines: [
        "Reactivation conservadora: 5,000 contactos × 5% response × 20% convert = 50 nuevos projects × $18K avg = $900K recovered pipeline en 90 días.",
        "Document automation: ~10 hrs/semana × estimadores × 52 weeks = 520 hrs/año liberadas para closing en lugar de paperwork.",
      ],
    },
  },
];

function TimelineCard({ phase }: { phase: Phase }) {
  return (
    <article className="border border-[color:var(--border-subtle)] bg-[color:var(--charcoal)]/60 backdrop-blur-[2px] p-8 md:p-10 rounded-sm">
      <header className="mb-6">
        <div className="font-mono text-[11px] tracking-[0.24em] text-[color:var(--copper)] mb-3 flex items-center gap-3">
          <span aria-hidden className="h-px flex-1 bg-[color:var(--copper)]/40 max-w-[80px]" />
          <span>
            {phase.number} · {phase.name}
          </span>
          <span aria-hidden className="h-px flex-1 bg-[color:var(--copper)]/40" />
        </div>
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h3 className="font-serif text-3xl md:text-4xl text-[color:var(--cream)] leading-tight">
            {phase.name}
          </h3>
          <span className="text-sm uppercase tracking-[0.2em] text-[color:var(--cream-muted)]/60">
            {phase.window}
          </span>
        </div>
        <p className="mt-4 text-[color:var(--cream-muted)] text-base md:text-lg italic max-w-2xl">
          {phase.lead}
        </p>
      </header>

      <ul className="space-y-3 mb-8">
        {phase.deliverables.map((item, i) => (
          <li key={i} className="flex gap-3 text-[color:var(--cream)]/90 text-[15px] leading-relaxed">
            <span aria-hidden className="text-[color:var(--copper)] font-mono mt-[2px] shrink-0">
              →
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {phase.measurables && (
        <div className="mb-8">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--cream-muted)]/70 mb-3">
            Entregables medibles
          </div>
          <ul className="space-y-2">
            {phase.measurables.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-[color:var(--cream-muted)] text-sm leading-relaxed"
              >
                <span aria-hidden className="text-[color:var(--cream-muted)]/50 shrink-0">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {phase.capacity && (
        <div className="border-l-2 border-[color:var(--copper)] bg-[color:var(--copper)]/5 px-5 py-4 rounded-r-sm">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--copper)] mb-2">
            {phase.capacity.label}
          </div>
          <ul className="space-y-1">
            {phase.capacity.lines.map((line, i) => (
              <li
                key={i}
                className="text-[color:var(--cream)] text-[15px] leading-relaxed"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}

      {phase.impact && (
        <div className="border-l-2 border-[color:var(--terracotta)] bg-[color:var(--terracotta)]/5 px-5 py-4 rounded-r-sm">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--terracotta)] mb-2">
            {phase.impact.label}
          </div>
          <ul className="space-y-2">
            {phase.impact.lines.map((line, i) => (
              <li
                key={i}
                className="text-[color:var(--cream)] text-[15px] leading-relaxed"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function ElPlan() {
  return (
    <Section
      id="plan"
      className="bg-[color:var(--charcoal-darker)] text-[color:var(--cream)]"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--copper)] mb-6">
          💡 EL PLAN
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--cream)] mb-8 max-w-4xl">
          Un sistema operativo comercial completo.
          <br className="hidden md:block" />
          <span className="text-[color:var(--cream-muted)] italic">
            {" "}
            Implementado en fases.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-[color:var(--cream-muted)] leading-relaxed max-w-3xl mb-16">
          Kivo no es una herramienta. Es una plataforma de agentes comerciales
          operada por un equipo, construida a medida del negocio de cada
          operador. Voice AI es el entry point — la pieza que demuestra
          capacidad técnica y captura revenue inmediato. Pero la visión completa
          es un business operando con agentes inteligentes en cada punto de
          contacto con el cliente, desde el primer &ldquo;hola&rdquo; hasta el
          follow-up post-garantía 5 años después.
        </p>

        <div className="space-y-8 md:space-y-10">
          {phases.map((phase) => (
            <TimelineCard key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </Section>
  );
}
