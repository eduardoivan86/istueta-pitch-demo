"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import VoiceOrb from "./VoiceOrb";
import ContactForm from "./ContactForm";
import { hero } from "@/data/istueta-content";

export default function Hero() {
  return (
    <Section className="bg-gradient-to-b from-stone-50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            {hero.headline}
          </h1>
          <p className="text-xl text-stone-800 mb-8">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg">{hero.cta}</Button>
            <Button size="lg" variant="secondary">{hero.secondaryCta}</Button>
          </div>
          <VoiceOrb />
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
