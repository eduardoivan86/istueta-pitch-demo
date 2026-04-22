import Section from "@/components/ui/Section";
import CompetitorTable from "@/components/proposal/CompetitorTable";

type PainStat = {
  value: string;
  label: string;
  source: string;
};

const painStats: PainStat[] = [
  {
    value: "27–62%",
    label: "calls perdidos · industry average home services",
    source: "Invoca + PCN 2026 Study",
  },
  {
    value: "$500–$1,200",
    label: "por call perdido · revenue impact home services",
    source: "Dialzara, 2025",
  },
  {
    value: "$48K/yr",
    label: "bilingual receptionist Miami · costo humano actual",
    source: "Kivo internal benchmark",
  },
  {
    value: "<30 seg",
    label: "response time target · 391% más conversión",
    source: "Estatehub Benchmark 2026",
  },
  {
    value: "85%",
    label: "no vuelve a llamar si primera no fue contestada",
    source: "Dialzara, 2025",
  },
  {
    value: "78%",
    label: "compra al primer responder · customers home services",
    source: "Kivo · usekivo.ai",
  },
  {
    value: "5 min → 80%",
    label: "qualification odds caen 80% después de 5 minutos",
    source: "Kivo · usekivo.ai",
  },
  {
    value: "79%",
    label: "roofing contractors no usa AI en 2026",
    source: "ServiceTitan State of Industry 2026",
  },
];

const compareToday: string[] = [
  "Call center offshore que no responde en <5 minutos",
  "27–62% de calls perdidos según datos reales de industry",
  "Formulario web → email que nadie revisa fines de semana",
  "ZyraTalk chatbot captura info pero NO agenda citas",
  "Instagram DMs sin respuesta automática (lead bleed al mercado hispano)",
  "WhatsApp inexistente (el canal #1 para homeowners 40-65 hispanos)",
  "5,000+ contactos históricos dormant sin reactivación",
  "Spanish calls manejadas manualmente por quien esté disponible",
  "After-hours leads = competidores directos ganan",
  "Sin visibilidad unificada de todos los canales",
  "Documentation (quotes, permits, warranties) 100% manual",
  "Follow-up post-visita inconsistente o inexistente",
  "Sin preparación para hurricane season spike (300–400% volume)",
];

const compareKivo: string[] = [
  "Voice agent responde en <30 segundos, 24/7, bilingüe nativo",
  "0 calls perdidos — every lead captured, qualified, or escalated",
  "Form submit → outbound call automático en <5 minutos",
  "Cita agendada directamente en calendar de Salesforce",
  "Instagram DMs respondidos en tiempo real con tono Istueta",
  "WhatsApp Business agent entrenado con knowledge completo empresa",
  "Campaña de reactivación sobre los 5,000 contactos históricos",
  "Bilingüe nativo — detecta idioma en primera palabra",
  "Hurricane-ready: scale elástico para emergency response",
  "Dashboard único Kivo AI: voice + chat + WhatsApp + IG + forms",
  "Auto-quote generation + PDF delivery automática post-consulta",
  "Post-visit email automation con pain points personalizados",
  "Document management: permits, warranties, insurance claims",
];

export default function EstadoActual() {
  return (
    <Section
      id="estado-actual"
      className="bg-charcoal-darker text-cream"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-sans text-[0.75rem] tracking-[0.22em] uppercase text-terracotta mb-6">
          ⚠️ Estado Actual
        </p>

        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-cream mb-10 max-w-5xl">
          Istueta tiene el mejor{" "}
          <span className="italic text-copper">heritage positioning</span>{" "}
          del mercado premium.
          <br />
          Y el peor{" "}
          <span className="italic text-terracotta">digital presence</span> del Tier 1.
        </h2>

        <p className="font-sans text-base md:text-lg leading-relaxed text-cream/80 max-w-3xl mb-12">
          Analizamos la competencia directa de Istueta en el corredor premium
          (Coral Gables, Pinecrest, Miami Shores, Palmetto Bay, Bay Point, Kendall).
          Comparamos sitios web, tiempo de respuesta, capacidad bilingüe, presencia
          multicanal, y tecnología operacional. Los hallazgos definen exactamente
          dónde está la ventana competitiva — y cuánto tiempo queda abierta.
        </p>

        <CompetitorTable />

        <aside
          role="note"
          className="mt-14 border-l-2 border-amber-400 bg-amber-400/[0.06] pl-6 pr-6 py-6 max-w-4xl"
        >
          <p className="font-sans text-base md:text-lg leading-relaxed text-cream/90">
            <span className="font-semibold text-amber-300">🔑 Insight crítico:</span>{" "}
            Ninguno de los 9 competidores directos de Istueta tiene voice AI, chat AI,
            ni automatización multicanal funcional en 2026. Este es el momento exacto
            de salto — la ventana competitiva se cierra cuando el primer Tier 1
            implemente. <strong className="text-cream">Best Roofing</strong> (295
            empleados, el más capitalizado) es la amenaza no obvia.
          </p>
        </aside>

        <div className="mt-20">
          <h3 className="font-serif text-2xl md:text-4xl leading-tight text-cream mb-10 max-w-3xl">
            Cuánto cuesta el status quo hoy:
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {painStats.map((stat) => (
              <figure
                key={stat.value}
                className="border-t border-cream/15 pt-4"
              >
                <div className="font-serif text-2xl md:text-3xl lg:text-4xl leading-none text-copper">
                  {stat.value}
                </div>
                <figcaption className="mt-3 font-sans">
                  <p className="text-[0.85rem] leading-snug text-cream/85">
                    {stat.label}
                  </p>
                  <cite className="mt-3 block text-[0.65rem] not-italic text-cream/45">
                    {stat.source}
                  </cite>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-terracotta mb-6">
            💸 Hidden cost calculation
          </p>

          <div className="rounded-sm border border-cream/10 bg-cream/[0.03] p-6 md:p-8 font-mono text-[0.82rem] md:text-sm leading-relaxed text-cream/85 max-w-3xl">
            <div className="mb-6">
              <div className="text-cream/55 mb-3"># Modelo conservador para Istueta</div>
              <div>
                150 <span className="text-cream/50">leads/mes</span> ×{" "}
                <span className="text-terracotta">27%</span>{" "}
                <span className="text-cream/50">miss</span> ×{" "}
                <span className="text-terracotta">5%</span>{" "}
                <span className="text-cream/50">close</span> ×{" "}
                <span className="text-cream">$18,000</span>{" "}
                <span className="text-cream/50">avg project</span>
              </div>
              <div className="mt-3 text-copper text-base md:text-lg">
                = $36,450 / mes → $437,400 / año escapando
              </div>
            </div>
            <div className="pt-5 border-t border-cream/10">
              <div className="text-cream/55 mb-3"># Modelo realista (con referral multiplier)</div>
              <div className="text-copper text-base md:text-lg">
                = $800,000 – $1,200,000 / año
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-terracotta mb-8">
            ⚖️ Hoy vs Con Kivo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <h4 className="font-serif text-xl md:text-2xl text-red-300 mb-5">
                Hoy
              </h4>
              <ul className="space-y-3">
                {compareToday.map((row) => (
                  <li
                    key={row}
                    className="flex items-start gap-3 font-sans text-sm md:text-base leading-snug text-cream/85"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"
                    />
                    <span>{row}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl md:text-2xl text-emerald-300 mb-5">
                Con Kivo
              </h4>
              <ul className="space-y-3">
                {compareKivo.map((row) => (
                  <li
                    key={row}
                    className="flex items-start gap-3 font-sans text-sm md:text-base leading-snug text-cream/85"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                    />
                    <span>{row}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
