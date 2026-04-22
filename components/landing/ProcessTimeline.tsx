"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Section from "@/components/ui/Section";

const EASE = [0.22, 1, 0.36, 1] as const;

type Step = {
  number: string;
  label: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    label: "Consultation",
    description:
      "On-site inspection and honest read of what your roof actually needs.",
  },
  {
    number: "02",
    label: "Showroom",
    description:
      "Walk samples of tile, metal, and flat systems with a senior expert.",
  },
  {
    number: "03",
    label: "Custom Solution",
    description:
      "Tailored plan, transparent quote, and permit path for your home.",
  },
  {
    number: "04",
    label: "Install",
    description:
      "Factory-certified crews install the system — clean site, on schedule.",
  },
  {
    number: "05",
    label: "Enjoy",
    description:
      "Final walkthrough and a roof designed to outlive the house under it.",
  },
  {
    number: "06",
    label: "Maintain",
    description:
      "Seasonal check-ins and post-hurricane inspections keep it honest.",
  },
];

export default function ProcessTimeline() {
  const prefersReducedMotion = useReducedMotion();

  const desktopRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: desktopProgress } = useScroll({
    target: desktopRef,
    offset: ["start 75%", "end 45%"],
  });

  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileRef,
    offset: ["start 75%", "end 55%"],
  });

  const desktopScaleX = useTransform(desktopProgress, [0, 1], [0, 1]);
  const mobileScaleY = useTransform(mobileProgress, [0, 1], [0, 1]);

  return (
    <Section
      id="process"
      className="bg-stone-100 text-stone-900 border-y border-stone-200"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-amber-700">
            The Process
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] text-stone-950 md:text-5xl lg:text-6xl">
            From first look to last inspection.
            <span className="block italic text-stone-500">
              Six steps. No surprises.
            </span>
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div
          ref={desktopRef}
          className="relative hidden md:block"
          aria-hidden={false}
        >
          <div className="relative pt-8 pb-4">
            <div className="absolute left-[8%] right-[8%] top-[calc(2rem+1.5rem)] h-px bg-stone-300/80" />
            <m.div
              className="absolute left-[8%] right-[8%] top-[calc(2rem+1.5rem)] h-[2px] origin-left bg-amber-600"
              style={{ scaleX: prefersReducedMotion ? 1 : desktopScaleX }}
            />

            <ol className="grid grid-cols-6 gap-4 lg:gap-6">
              {steps.map((step, index) => (
                <m.li
                  key={step.number}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    ease: EASE,
                    delay: prefersReducedMotion ? 0 : index * 0.06,
                  }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-stone-100 shadow-[0_0_0_6px_rgb(245_245_244)]">
                    <span className="h-2 w-2 rounded-full bg-amber-600" />
                  </div>
                  <p className="font-serif text-5xl leading-none text-stone-900 lg:text-6xl">
                    {step.number}
                  </p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-700">
                    {step.label}
                  </p>
                  <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-stone-600">
                    {step.description}
                  </p>
                </m.li>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div ref={mobileRef} className="relative md:hidden">
          <div className="absolute bottom-4 left-6 top-4 w-px bg-stone-300" />
          <m.div
            className="absolute bottom-4 left-6 top-4 w-[2px] origin-top bg-amber-600"
            style={{ scaleY: prefersReducedMotion ? 1 : mobileScaleY }}
          />

          <ol className="relative space-y-14">
            {steps.map((step, index) => (
              <m.li
                key={step.number}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: EASE,
                  delay: prefersReducedMotion ? 0 : index * 0.04,
                }}
                className="relative pl-16"
              >
                <span
                  className="absolute left-6 top-2 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full border border-stone-300 bg-stone-100"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-600" />
                </span>
                <p className="font-serif text-5xl leading-none text-stone-900">
                  {step.number}
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-700">
                  {step.label}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-600">
                  {step.description}
                </p>
              </m.li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
