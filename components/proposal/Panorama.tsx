import Section from "@/components/ui/Section";

type MarketStat = {
  value: string;
  label: string;
  description: string;
  source: string;
};

type HurricaneStat = {
  value: string;
  label: string;
};

const panoramaStats: MarketStat[] = [
  {
    value: "$6.7B",
    label: "mercado",
    description: "Roofing contractors en Florida 2026",
    source: "IBISWorld, 2026",
  },
  {
    value: "2.75M",
    label: "habitantes",
    description: "Miami-Dade County 2026 proyectado",
    source: "US Census, ACS 2024",
  },
  {
    value: "69.3%",
    label: "hispano",
    description: "Miami-Dade racial/ethnic makeup",
    source: "US Census, 2024",
  },
  {
    value: "~80%",
    label: "re-roofing",
    description: "De la demanda anual en Florida",
    source: "Mordor Intelligence, 2026",
  },
];

const hurricaneStats: HurricaneStat[] = [
  {
    value: "$30B+",
    label: "en roof-related insurance claims en US 2024 (duplicó vs 2023)",
  },
  {
    value: "27",
    label: "huracanes promedio por década en Florida",
  },
  {
    value: "30%",
    label: "del revenue anual de South Florida roofers concentrado en hurricane season",
  },
  {
    value: "50–100%",
    label: "premium pricing durante emergency repairs",
  },
];

export default function Panorama() {
  return (
    <Section
      id="panorama"
      className="bg-cream text-charcoal-darker"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-sans text-[0.75rem] tracking-[0.22em] uppercase text-terracotta mb-6">
          🎯 Panorama
        </p>

        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-charcoal-darker mb-16 md:mb-20 max-w-5xl">
          El mercado existe.
          <br />
          El tamaño sorprende.
          <br />
          <span className="italic text-copper">
            Y está cambiando más rápido de lo que la industria admite.
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-8 mb-16 md:mb-20">
          {panoramaStats.map((stat) => (
            <figure
              key={stat.value}
              className="border-t border-charcoal-darker/20 pt-5"
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl leading-none text-charcoal-darker">
                {stat.value}
              </div>
              <figcaption className="mt-3 font-sans">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-copper">
                  {stat.label}
                </div>
                <p className="mt-2 text-sm leading-snug text-charcoal-darker/80">
                  {stat.description}
                </p>
                <cite className="mt-3 block text-[0.7rem] not-italic text-charcoal-darker/55">
                  {stat.source}
                </cite>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="max-w-3xl mb-16 md:mb-20 space-y-6 font-sans text-base md:text-lg leading-relaxed text-charcoal-darker/85">
          <p>
            Florida tiene <strong className="text-charcoal-darker">8,228 roofing contractors</strong>{" "}
            compitiendo en un mercado de $6.7B que crece 2.2% anual. Pero el mercado no es
            homogéneo — South Florida (Miami-Dade + Broward + Palm Beach) concentra los
            proyectos premium por combinación de aging housing stock, exposición a huracanes,
            y concentración de high-net-worth homes.
          </p>
          <p>
            Dentro de ese mercado, Miami-Dade tiene una particularidad que cambia la ecuación:
            69.3% hispano, 66% habla español en casa (Beacon Council), y es el condado
            hispano-mayoritario más grande del país. La comunicación bilingüe no es feature —
            es supervivencia comercial.
          </p>
        </div>

        <div className="border-t border-charcoal-darker/15 pt-10 md:pt-14 mb-16">
          <p className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-terracotta mb-8">
            🌀 Hurricane economics
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            {hurricaneStats.map((stat) => (
              <div key={stat.value} className="flex items-baseline gap-5">
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl leading-none text-copper min-w-[6rem]">
                  {stat.value}
                </div>
                <p className="font-sans text-sm md:text-base leading-snug text-charcoal-darker/85">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-snug text-charcoal-darker max-w-3xl">
          El premio está en la mesa.
          <br />
          <strong className="not-italic font-semibold text-copper">
            La pregunta es quién lo captura.
          </strong>
        </p>
      </div>
    </Section>
  );
}
