import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "dark" | "darker" | "cream" | "hero";
}

const toneStyles = {
  dark: "bg-bg-dark text-fg-primary",
  darker: "bg-bg-darker text-fg-primary",
  cream: "bg-bg-cream text-foreground",
  hero: "bg-bg-dark text-fg-primary",
};

export default function Section({ children, className, id, tone }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone && toneStyles[tone],
        className
      )}
    >
      {children}
    </section>
  );
}
