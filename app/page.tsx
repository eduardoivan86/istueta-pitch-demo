import { Suspense } from "react";
import SiteHeader from "@/components/shell/SiteHeader";
import TabShell from "@/components/shell/TabShell";
import TabSyncProvider from "@/components/shell/TabSyncProvider";
import TabShellSkeleton from "@/components/shell/TabShellSkeleton";
import LandingTab from "@/components/landing/LandingTab";
import ProposalTab from "@/components/proposal/ProposalTab";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <Suspense fallback={<TabShellSkeleton />}>
        <TabSyncProvider>
          <TabShell landingTab={<LandingTab />} proposalTab={<ProposalTab />} />
        </TabSyncProvider>
      </Suspense>
    </div>
  );
}
