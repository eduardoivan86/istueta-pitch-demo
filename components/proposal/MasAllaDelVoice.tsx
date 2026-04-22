import Section from "@/components/ui/Section";

type Capability = {
  number: string;
  label: string;
  title: string;
  body: string;
};

const capabilities: Capability[] = [
  {
    number: "01",
    label: "VOICE",
    title: "Voice that actually sounds human.",
    body: "Inbound en <30 segundos. Dos agentes nativos — American English y Latin Spanish. Never a robot.",
  },
  {
    number: "02",
    label: "CHAT",
    title: "Every channel, one brain.",
    body: "Web widget, WhatsApp, Instagram, SMS, Messenger. Mismo agente. Mismo knowledge.",
  },
  {
    number: "03",
    label: "LANGUAGES",
    title: "Native, not translated.",
    body: "Detecta idioma en la primera palabra. Switches sin preguntar. Para Miami-Dade (69.3% hispano, 66% spanish-at-home): supervivencia comercial.",
  },
  {
    number: "04",
    label: "AUTOMATIONS",
    title: "Follow-ups that never forget.",
    body: "Post-visit emails tocando pain points específicos del homeowner. Nurture sequences por temperatura del lead. Re-engagement automático.",
  },
  {
    number: "05",
    label: "INVENTORY",
    title: "Knows what's actually in stock.",
    body: "Check en tiempo real de inventory de Ludowici, GAF, CertainTeed tiles antes de quote. Supplier orders automation cuando quote confirmed.",
  },
  {
    number: "06",
    label: "TRIGGERS",
    title: "Campaigns that react in real time.",
    body: "Hurricane season arriba → activate emergency response templates. Dormant contacts → reactivation campaign automática. Seasonal maintenance reminders a past clients.",
  },
  {
    number: "07",
    label: "INTEGRATIONS",
    title: "Lives inside your stack.",
    body: "Salesforce, Outlook, WhatsApp Business, Instagram, SMS, Email, Zapier, Make, Webhooks, REST API. Cada call, mensaje, cita loggea back to Salesforce en tiempo real. Tu data donde siempre estuvo.",
  },
  {
    number: "08",
    label: "MANAGED",
    title: "You never touch a dashboard.",
    body: "Nosotros operamos el agente cada semana. Training continuo. Weekly reporting. Monthly optimization review. You watch the results land.",
  },
];

function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="group relative border border-[color:var(--border-subtle)] bg-[color:var(--charcoal-darker)]/40 hover:bg-[color:var(--charcoal-darker)]/80 transition-colors duration-500 p-6 md:p-7 rounded-sm flex flex-col h-full">
      <div className="font-mono text-[11px] tracking-[0.24em] text-[color:var(--copper)] mb-5">
        {capability.number} / {capability.label}
      </div>
      <h3 className="font-serif text-[22px] md:text-2xl leading-[1.2] text-[color:var(--cream)] mb-3 text-balance">
        {capability.title}
      </h3>
      <p className="text-[14px] leading-relaxed text-[color:var(--cream-muted)]">
        {capability.body}
      </p>
      <span
        aria-hidden
        className="absolute left-0 top-0 h-px w-0 bg-[color:var(--copper)] transition-all duration-500 group-hover:w-full"
      />
    </article>
  );
}

export default function MasAllaDelVoice() {
  return (
    <Section
      id="roadmap"
      className="bg-[color:var(--charcoal)] text-[color:var(--cream)]"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--copper)] mb-6">
          🚀 MÁS ALLÁ DEL VOICE
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--cream)] mb-8 max-w-4xl text-balance">
          Eight capabilities. One platform.
          <br className="hidden md:block" />
          <span className="text-[color:var(--cream-muted)] italic">
            {" "}
            Operada por nosotros, reportando a ustedes.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-[color:var(--cream-muted)] leading-relaxed max-w-3xl mb-14">
          Cuando pensamos en &ldquo;AI para home services,&rdquo; la mayoría
          piensa en voice agents. Pero la realidad operacional de una empresa de
          20+ personas como Istueta es que el voice agent resuelve un dolor
          específico — capturar leads — mientras el resto de la operación sigue
          funcionando con procesos manuales que consumen horas productivas cada
          día. Kivo construye sistemas de agentes inteligentes para cada punto
          de fricción. Modular. Activable cuando Istueta está listo para
          absorber cada pieza.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.number} capability={capability} />
          ))}
        </div>

        <p className="mt-14 md:mt-16 text-base md:text-lg text-[color:var(--cream-muted)] leading-relaxed max-w-3xl">
          Esto no es roadmap teórico — es modular. Cada pieza se activa cuando
          Istueta está lista para absorberla, operando sobre la foundation
          construida en Fase 1.
        </p>
      </div>
    </Section>
  );
}
