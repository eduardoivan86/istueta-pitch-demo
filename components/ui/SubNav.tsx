"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SubNavProps {
  sections: { id: string; label: string }[];
  className?: string;
}

export default function SubNav({ sections, className }: SubNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={cn("sticky top-0 z-10 bg-bg-darker border-b border-border-subtle", className)}>
      <div className="container mx-auto px-4">
        <div className="flex gap-6 overflow-x-auto">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "py-4 px-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                activeSection === id
                  ? "border-accent-copper text-accent-copper"
                  : "border-transparent text-fg-muted hover:text-fg-primary"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
