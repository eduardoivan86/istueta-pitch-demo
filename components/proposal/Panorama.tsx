import Section from "@/components/ui/Section";
import Stat from "@/components/ui/Stat";
import { panorama } from "@/data/istueta-content";

export default function Panorama() {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-6">{panorama.title}</h2>
        <p className="text-xl text-stone-800 text-center mb-12 max-w-3xl mx-auto">
          {panorama.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {panorama.marketStats.map((stat, idx) => (
            <Stat key={idx} {...stat} className="text-center" />
          ))}
        </div>
        <p className="text-xs text-stone-500 text-center mt-8">
          {/* TBD: verify with research */}
          Market data is illustrative and subject to verification.
        </p>
      </div>
    </Section>
  );
}
