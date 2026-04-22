"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { TabType } from "@/types/istueta";

interface TabSyncContextValue {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TabSyncContext = createContext<TabSyncContextValue | null>(null);

export function useTabSync() {
  const context = useContext(TabSyncContext);
  if (!context) {
    throw new Error("useTabSync must be used within TabSyncProvider");
  }
  return context;
}

interface TabSyncProviderProps {
  children: ReactNode;
}

export default function TabSyncProvider({ children }: TabSyncProviderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTabState] = useState<TabType>("landing");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "landing" || tabParam === "proposal") {
      setActiveTabState(tabParam);
    }
  }, [searchParams]);

  const setActiveTab = (tab: TabType) => {
    setActiveTabState(tab);
    router.push(`?tab=${tab}`, { scroll: false });
  };

  return (
    <TabSyncContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabSyncContext.Provider>
  );
}
