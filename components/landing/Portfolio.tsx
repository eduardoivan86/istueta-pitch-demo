import Section from "@/components/ui/Section";
import Placeholder from "@/components/ui/Placeholder";
import { portfolio } from "@/data/istueta-content";

export default function Portfolio() {
  return (
    <Section className="bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((project) => (
            <div key={project.id} className="bg-background rounded-lg overflow-hidden shadow-sm">
              <Placeholder text={project.category} height="h-48" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-stone-700 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
