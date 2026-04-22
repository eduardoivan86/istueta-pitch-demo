/**
 * Vapi SDK client wrapper with graceful error handling
 * Dynamic import pattern - do NOT import at module level (SSR crash risk)
 */

export type VapiEventType = "call-start" | "call-end" | "speech-start" | "speech-end" | "error";
export type VapiEventHandler = (event?: any) => void;

export class VapiClientWrapper {
  private vapiInstance: any = null;
  private isInitialized = false;

  async initialize(agentId: string): Promise<boolean> {
    try {
      // Dynamic import to avoid SSR issues
      const { default: Vapi } = await import("@vapi-ai/web");

      this.vapiInstance = new Vapi(agentId);
      this.isInitialized = true;
      return true;
    } catch (error) {
      console.error("[VapiClient] Initialization failed:", error);
      return false;
    }
  }

  on(event: VapiEventType, handler: VapiEventHandler) {
    if (!this.isInitialized || !this.vapiInstance) {
      console.warn("[VapiClient] Cannot attach event handler - not initialized");
      return;
    }

    try {
      this.vapiInstance.on(event, handler);
    } catch (error) {
      console.error(`[VapiClient] Failed to attach ${event} handler:`, error);
    }
  }

  async start(): Promise<boolean> {
    if (!this.isInitialized || !this.vapiInstance) {
      console.error("[VapiClient] Cannot start - not initialized");
      return false;
    }

    try {
      await this.vapiInstance.start();
      return true;
    } catch (error) {
      console.error("[VapiClient] Start failed:", error);
      return false;
    }
  }

  async stop() {
    if (!this.isInitialized || !this.vapiInstance) {
      return;
    }

    try {
      await this.vapiInstance.stop();
    } catch (error) {
      console.error("[VapiClient] Stop failed:", error);
    }
  }

  cleanup() {
    if (this.vapiInstance) {
      try {
        this.vapiInstance.removeAllListeners();
      } catch (error) {
        console.error("[VapiClient] Cleanup failed:", error);
      }
    }
    this.vapiInstance = null;
    this.isInitialized = false;
  }
}
