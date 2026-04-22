import type { Stat as StatType } from "@/types/istueta";

interface StatProps extends StatType {
  className?: string;
}

export default function Stat({ label, value, suffix, className }: StatProps) {
  return (
    <div className={className}>
      <div className="text-4xl md:text-5xl font-serif font-bold text-accent">
        {value}{suffix}
      </div>
      <div className="text-sm md:text-base text-stone-800 mt-2">{label}</div>
    </div>
  );
}
