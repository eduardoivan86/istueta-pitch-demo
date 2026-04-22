import Section from "@/components/ui/Section";
import { testimonials } from "@/data/istueta-content";

export default function Testimonials() {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-stone-50 rounded-lg">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-amber-600">★</span>
                ))}
              </div>
              <p className="text-stone-800 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-stone-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
