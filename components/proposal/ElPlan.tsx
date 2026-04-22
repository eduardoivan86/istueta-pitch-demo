import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { elPlan } from "@/data/istueta-content";

export default function ElPlan() {
  return (
    <Section className="bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Project Timeline</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {elPlan.map((phase, idx) => (
              <div key={phase.id} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  {idx < elPlan.length - 1 && <div className="w-0.5 flex-1 bg-stone-300 mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                    <Badge variant="default">{phase.duration}</Badge>
                  </div>
                  <p className="text-stone-700">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
