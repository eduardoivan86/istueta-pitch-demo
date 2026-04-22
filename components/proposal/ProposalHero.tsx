import Section from "@/components/ui/Section";
import { proposalHero } from "@/data/istueta-content";

export default function ProposalHero() {
  return (
    <Section className="bg-gradient-to-b from-stone-50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            {proposalHero.clientName}
          </h1>
          <p className="text-2xl text-stone-800 mb-2">{proposalHero.projectType}</p>
          <p className="text-lg text-stone-600 mb-1">{proposalHero.location}</p>
          <p className="text-sm text-stone-500">{proposalHero.date}</p>
        </div>
      </div>
    </Section>
  );
}
