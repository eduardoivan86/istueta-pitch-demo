import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { trustBand, landingStats } from "@/data/istueta-content";
import Stat from "@/components/ui/Stat";

export default function TrustBand() {
  return (
    <Section className="bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {landingStats.map((stat, idx) => (
            <Stat key={idx} {...stat} className="text-center" />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {trustBand.certifications.map((cert, idx) => (
            <Badge key={idx}>{cert}</Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
