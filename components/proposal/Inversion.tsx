import Section from "@/components/ui/Section";
import { inversion } from "@/data/istueta-content";

export default function Inversion() {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Investment Breakdown</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-background border border-stone-200 rounded-lg overflow-hidden">
            {inversion.map((item) => (
              <div
                key={item.id}
                className={`flex justify-between p-4 ${
                  item.id === "total" ? "bg-stone-100 border-t-2 border-stone-300 font-bold" : "border-b border-stone-200"
                }`}
              >
                <span className={item.id === "total" ? "text-lg" : ""}>{item.description}</span>
                <span className={item.id === "total" ? "text-lg text-accent" : "text-stone-800"}>{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
