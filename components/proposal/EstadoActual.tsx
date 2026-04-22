import Section from "@/components/ui/Section";
import { estadoActual } from "@/data/istueta-content";

export default function EstadoActual() {
  return (
    <Section className="bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">{estadoActual.title}</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 mb-8">
            {estadoActual.problems.map((problem, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-amber-600 font-bold">×</span>
                <span className="text-stone-800">{problem}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-stone-900 font-medium bg-stone-100 p-6 rounded-lg border-l-4 border-amber-600">
            {estadoActual.impact}
          </p>
        </div>
      </div>
    </Section>
  );
}
