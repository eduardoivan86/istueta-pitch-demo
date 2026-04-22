type DigitalModernity = "outdated" | "average" | "modern";

type Competitor = {
  name: string;
  founded: string;
  positioning: string;
  voiceAI: boolean;
  chatAI: boolean;
  whatsApp: boolean;
  digitalModernity: DigitalModernity;
  isIstueta?: boolean;
};

const competitors: Competitor[] = [
  {
    name: "Istueta Roofing",
    founded: "1985",
    positioning: "Premium heritage",
    voiceAI: false,
    chatAI: false,
    whatsApp: false,
    digitalModernity: "outdated",
    isIstueta: true,
  },
  {
    name: "Earl W. Johnston",
    founded: "1952",
    positioning: "Heritage dominant",
    voiceAI: false,
    chatAI: false,
    whatsApp: false,
    digitalModernity: "outdated",
  },
  {
    name: "Roofer Mike Inc",
    founded: "~1995",
    positioning: "Premium service",
    voiceAI: false,
    chatAI: false,
    whatsApp: false,
    digitalModernity: "average",
  },
  {
    name: "Perkins Roofing",
    founded: "1980",
    positioning: "Premium residential",
    voiceAI: false,
    chatAI: false,
    whatsApp: false,
    digitalModernity: "average",
  },
  {
    name: "T&S Roofing Systems",
    founded: "2004",
    positioning: "Modern premium",
    voiceAI: false,
    chatAI: false,
    whatsApp: false,
    digitalModernity: "modern",
  },
  {
    name: "Best Roofing",
    founded: "1978",
    positioning: "295 employees · volume",
    voiceAI: false,
    chatAI: false,
    whatsApp: false,
    digitalModernity: "modern",
  },
  {
    name: "A&E Brothers",
    founded: "2006",
    positioning: "13K+ clients · volume",
    voiceAI: false,
    chatAI: false,
    whatsApp: false,
    digitalModernity: "modern",
  },
  {
    name: "T&E Roofing",
    founded: "Recent",
    positioning: "Residential modern",
    voiceAI: false,
    chatAI: false,
    whatsApp: false,
    digitalModernity: "modern",
  },
  {
    name: "iRoof Florida",
    founded: "Recent",
    positioning: "Modern Coral Gables",
    voiceAI: false,
    chatAI: false,
    whatsApp: false,
    digitalModernity: "modern",
  },
];

const modernityLabel: Record<DigitalModernity, string> = {
  outdated: "Outdated",
  average: "Average",
  modern: "Modern",
};

const modernityDot: Record<DigitalModernity, string> = {
  outdated: "bg-red-500/80",
  average: "bg-amber-400",
  modern: "bg-emerald-500",
};

function NoBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 font-sans text-[0.7rem] tracking-wide uppercase text-red-300">
      No
    </span>
  );
}

function YesBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-sans text-[0.7rem] tracking-wide uppercase text-emerald-300">
      Sí
    </span>
  );
}

function Capability({ value }: { value: boolean }) {
  return value ? <YesBadge /> : <NoBadge />;
}

function Modernity({ level }: { level: DigitalModernity }) {
  return (
    <span className="inline-flex items-center gap-2 font-sans text-[0.8rem] text-cream/80">
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full ${modernityDot[level]}`}
      />
      {modernityLabel[level]}
    </span>
  );
}

export default function CompetitorTable() {
  return (
    <div className="mt-6">
      <p className="font-sans text-sm text-cream/60 mb-6 max-w-2xl">
        Comparación con los 9 competidores directos de Istueta en el corredor premium
        (Coral Gables, Pinecrest, Miami Shores, Palmetto Bay, Bay Point, Kendall).
      </p>

      {/* Desktop semantic table */}
      <div className="hidden md:block overflow-hidden rounded-sm border border-cream/10">
        <table className="w-full border-collapse font-sans text-sm">
          <caption className="sr-only">
            9 competidores directos de Istueta Roofing en South Florida premium
          </caption>
          <thead>
            <tr className="bg-cream/[0.04] text-[0.7rem] tracking-[0.16em] uppercase text-cream/55">
              <th scope="col" className="text-left font-medium py-4 px-5">Empresa</th>
              <th scope="col" className="text-left font-medium py-4 px-3">Fundada</th>
              <th scope="col" className="text-left font-medium py-4 px-3">Posicionamiento</th>
              <th scope="col" className="text-left font-medium py-4 px-3">Voice AI</th>
              <th scope="col" className="text-left font-medium py-4 px-3">Chat AI</th>
              <th scope="col" className="text-left font-medium py-4 px-3">WhatsApp</th>
              <th scope="col" className="text-left font-medium py-4 px-5">Digital Modernity</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c) => (
              <tr
                key={c.name}
                className={`border-t border-cream/10 transition-colors duration-200 hover:bg-copper/[0.06] ${
                  c.isIstueta ? "bg-copper/[0.08]" : ""
                }`}
              >
                <th
                  scope="row"
                  className={`text-left py-5 px-5 font-serif text-base leading-snug ${
                    c.isIstueta ? "text-copper" : "text-cream"
                  }`}
                >
                  {c.name}
                  {c.isIstueta && (
                    <span className="ml-2 align-middle inline-block rounded-full border border-copper/40 px-2 py-0.5 text-[0.6rem] tracking-[0.18em] uppercase text-copper">
                      Tú
                    </span>
                  )}
                </th>
                <td className="py-5 px-3 text-cream/75 font-mono text-[0.8rem]">{c.founded}</td>
                <td className="py-5 px-3 text-cream/85 leading-snug max-w-[14rem]">
                  {c.positioning}
                </td>
                <td className="py-5 px-3"><Capability value={c.voiceAI} /></td>
                <td className="py-5 px-3"><Capability value={c.chatAI} /></td>
                <td className="py-5 px-3"><Capability value={c.whatsApp} /></td>
                <td className="py-5 px-5"><Modernity level={c.digitalModernity} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <ul className="md:hidden space-y-4">
        {competitors.map((c) => (
          <li
            key={c.name}
            className={`rounded-sm border p-5 ${
              c.isIstueta
                ? "border-copper/40 bg-copper/[0.06]"
                : "border-cream/10 bg-cream/[0.02]"
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3
                className={`font-serif text-lg leading-snug ${
                  c.isIstueta ? "text-copper" : "text-cream"
                }`}
              >
                {c.name}
                {c.isIstueta && (
                  <span className="ml-2 inline-block rounded-full border border-copper/40 px-2 py-0.5 align-middle text-[0.6rem] tracking-[0.18em] uppercase text-copper">
                    Tú
                  </span>
                )}
              </h3>
              <span className="font-mono text-[0.75rem] text-cream/55 mt-1.5 shrink-0">
                {c.founded}
              </span>
            </div>
            <p className="font-sans text-sm text-cream/70 mb-4">{c.positioning}</p>
            <dl className="grid grid-cols-2 gap-y-3 gap-x-4 font-sans text-[0.8rem]">
              <dt className="text-cream/50 text-[0.7rem] tracking-[0.14em] uppercase">Voice AI</dt>
              <dd><Capability value={c.voiceAI} /></dd>
              <dt className="text-cream/50 text-[0.7rem] tracking-[0.14em] uppercase">Chat AI</dt>
              <dd><Capability value={c.chatAI} /></dd>
              <dt className="text-cream/50 text-[0.7rem] tracking-[0.14em] uppercase">WhatsApp</dt>
              <dd><Capability value={c.whatsApp} /></dd>
              <dt className="text-cream/50 text-[0.7rem] tracking-[0.14em] uppercase">Digital</dt>
              <dd><Modernity level={c.digitalModernity} /></dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
