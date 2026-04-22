"use client";

import { cn } from "@/lib/utils";
import { Check, X, Minus } from "lucide-react";

interface CompetitorRowProps {
  name: string;
  founded: string;
  positioning: string;
  hasVoiceAI: boolean | "partial";
  hasChatAI: boolean | "partial";
  hasWhatsApp: boolean;
  digitalModernity: "low" | "medium" | "high";
  className?: string;
}

function Badge({ status }: { status: boolean | "partial" }) {
  if (status === true) return <Check className="w-5 h-5 text-emerald-600" />;
  if (status === "partial") return <Minus className="w-5 h-5 text-amber-600" />;
  return <X className="w-5 h-5 text-fg-muted/40" />;
}

export default function CompetitorRow({
  name,
  founded,
  positioning,
  hasVoiceAI,
  hasChatAI,
  hasWhatsApp,
  digitalModernity,
  className,
}: CompetitorRowProps) {
  const modernityColor = {
    low: "text-fg-muted/60",
    medium: "text-amber-600",
    high: "text-emerald-600",
  };

  return (
    <>
      {/* Desktop: table row */}
      <tr className={cn("hidden md:table-row border-b border-border-subtle", className)}>
        <td className="py-4 px-4 text-fg-primary font-medium">{name}</td>
        <td className="py-4 px-4 text-fg-muted text-sm">{founded}</td>
        <td className="py-4 px-4 text-fg-muted text-sm">{positioning}</td>
        <td className="py-4 px-4 text-center"><Badge status={hasVoiceAI} /></td>
        <td className="py-4 px-4 text-center"><Badge status={hasChatAI} /></td>
        <td className="py-4 px-4 text-center"><Badge status={hasWhatsApp} /></td>
        <td className={cn("py-4 px-4 text-sm font-medium capitalize", modernityColor[digitalModernity])}>
          {digitalModernity}
        </td>
      </tr>

      {/* Mobile: card */}
      <div className={cn("md:hidden border border-border-subtle rounded-lg p-4 space-y-3", className)}>
        <div>
          <div className="font-bold text-fg-primary">{name}</div>
          <div className="text-xs text-fg-muted">Founded {founded}</div>
        </div>
        <p className="text-sm text-fg-muted">{positioning}</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Badge status={hasVoiceAI} />
            <span className="text-fg-muted">Voice AI</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge status={hasChatAI} />
            <span className="text-fg-muted">Chat AI</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge status={hasWhatsApp} />
            <span className="text-fg-muted">WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={cn("font-medium capitalize", modernityColor[digitalModernity])}>
              {digitalModernity}
            </span>
            <span className="text-fg-muted">Digital</span>
          </div>
        </div>
      </div>
    </>
  );
}
