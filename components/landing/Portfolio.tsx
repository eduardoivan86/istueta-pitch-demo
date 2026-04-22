"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Section from "@/components/ui/Section";
import { portfolio } from "@/data/istueta-content";

const EASE = [0.22, 1, 0.36, 1] as const;

type Filter = string;

export default function Portfolio() {
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const filters = useMemo<Filter[]>(() => {
    const unique = Array.from(new Set(portfolio.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  const items = useMemo(
    () =>
      activeFilter === "All"
        ? portfolio
        : portfolio.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const current = lightboxId
    ? portfolio.find((p) => p.id === lightboxId) ?? null
    : null;

  const closeLightbox = useCallback(() => setLightboxId(null), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (lightboxId && !dialog.open) {
      dialog.showModal();
    } else if (!lightboxId && dialog.open) {
      dialog.close();
    }
  }, [lightboxId]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => setLightboxId(null);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  return (
    <Section
      id="portfolio"
      className="bg-stone-950 text-stone-100 border-y border-stone-900/80"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-8 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-amber-500/90">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl leading-[1.02] text-stone-50 md:text-5xl lg:text-6xl">
              Forty-one years of roofs.
              <span className="block italic text-stone-400">
                Built to outlive the weather.
              </span>
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter portfolio by roof type"
          >
            {filters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={[
                    "rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950",
                    isActive
                      ? "border-amber-500 bg-amber-500 text-stone-950"
                      : "border-stone-700 bg-transparent text-stone-300 hover:border-stone-500 hover:text-stone-50",
                  ].join(" ")}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((project, index) => (
              <m.button
                key={project.id}
                type="button"
                layout={!prefersReducedMotion}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{
                  duration: 0.45,
                  ease: EASE,
                  delay: prefersReducedMotion ? 0 : Math.min(index * 0.03, 0.18),
                }}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
                onClick={() => setLightboxId(project.id)}
                aria-label={`Open ${project.title} in lightbox`}
                className="group relative mb-6 inline-block w-full cursor-pointer overflow-hidden rounded-lg border border-stone-800/70 bg-stone-900 text-left align-top [break-inside:avoid] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-800 via-stone-900 to-black">
                      <span className="font-serif text-3xl italic text-stone-500">
                        {project.category}
                      </span>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-transparent opacity-60 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 p-5 md:translate-y-2 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-400">
                      {project.category}
                    </p>
                    <p className="mt-1 font-serif text-lg leading-tight text-stone-50">
                      {project.title}
                    </p>
                  </div>
                </div>
              </m.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={current ? current.title : undefined}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeLightbox();
        }}
        className="m-0 h-full max-h-full w-full max-w-full overflow-y-auto bg-transparent p-0 text-stone-100 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="flex min-h-full w-full items-center justify-center p-4 md:p-10">
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-stone-800 bg-stone-900 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-stone-950/80 text-stone-100 backdrop-blur transition-colors hover:bg-amber-500 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="relative aspect-[4/3] w-full bg-stone-950">
                {current.imageUrl ? (
                  <Image
                    src={current.imageUrl}
                    alt={current.title}
                    fill
                    sizes="(min-width: 1024px) 960px, 100vw"
                    className="object-contain"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-800 via-stone-900 to-black">
                    <span className="font-serif text-5xl italic text-stone-600">
                      {current.category}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-stone-800 p-6 md:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-amber-500">
                  {current.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-tight text-stone-50 md:text-3xl">
                  {current.title}
                </h3>
                {current.description && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-300 md:text-base">
                    {current.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}
