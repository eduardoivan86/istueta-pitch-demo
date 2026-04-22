"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-4 flex items-center justify-between gap-4 text-left hover:bg-bg-darker/50 transition-colors"
      >
        <span className="font-medium text-fg-primary">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-accent-copper transition-transform shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-6 text-sm text-fg-muted leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("divide-y divide-border-subtle", className)}>
      {items.map((item, i) => (
        <AccordionItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
