import Section from "@/components/ui/Section";
import { services } from "@/data/istueta-content";

export default function Services() {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">What We Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-6 border border-stone-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-stone-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
