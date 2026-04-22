"use client";

import { AnimatePresence, m } from "framer-motion";
import { useTabSync } from "./TabSyncProvider";
import type { ReactNode } from "react";

interface TabShellProps {
  landingTab: ReactNode;
  proposalTab: ReactNode;
}

export default function TabShell({ landingTab, proposalTab }: TabShellProps) {
  const { activeTab, setActiveTab } = useTabSync();

  return (
    <div className="flex-1">
      <div className="border-b border-stone-200 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("landing")}
              className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "landing"
                  ? "border-accent text-accent"
                  : "border-transparent text-stone-600 hover:text-stone-900"
              }`}
            >
              Landing
            </button>
            <button
              onClick={() => setActiveTab("proposal")}
              className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "proposal"
                  ? "border-accent text-accent"
                  : "border-transparent text-stone-600 hover:text-stone-900"
              }`}
            >
              Proposal
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <m.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {activeTab === "landing" ? landingTab : proposalTab}
        </m.div>
      </AnimatePresence>
    </div>
  );
}
