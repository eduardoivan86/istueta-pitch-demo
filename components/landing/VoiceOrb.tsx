"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff } from "lucide-react";
import { voiceOrb } from "@/data/istueta-content";
import { VapiClientWrapper } from "@/lib/vapi-client";

type OrbMode = "idle" | "active" | "listening" | "static";

export default function VoiceOrb() {
  const [mode, setMode] = useState<OrbMode>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const vapiClientRef = useRef<VapiClientWrapper | null>(null);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    // Prevent double initialization in React StrictMode
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const agentId = process.env.NEXT_PUBLIC_VAPI_AGENT_ID;

    if (!agentId) {
      console.error("[VoiceOrb] NEXT_PUBLIC_VAPI_AGENT_ID not configured");
      setMode("static");
      setErrorMessage(voiceOrb.fallbackMessage);
      return;
    }

    // Dynamic import inside useEffect - avoid SSR crash
    const initVapi = async () => {
      try {
        const client = new VapiClientWrapper();
        const success = await client.initialize(agentId);

        if (!success) {
          setMode("static");
          setErrorMessage(voiceOrb.fallbackMessage);
          return;
        }

        vapiClientRef.current = client;

        // Event handlers
        client.on("call-start", () => {
          console.log("[VoiceOrb] Call started");
          setMode("active");
        });

        client.on("call-end", () => {
          console.log("[VoiceOrb] Call ended");
          setMode("idle");
        });

        client.on("speech-start", () => {
          console.log("[VoiceOrb] Speech detected");
          setMode("listening");
        });

        client.on("speech-end", () => {
          console.log("[VoiceOrb] Speech ended");
          setMode("active");
        });

        client.on("error", (error: any) => {
          console.error("[VoiceOrb] Vapi error:", error);
          setMode("static");
          setErrorMessage(voiceOrb.fallbackMessage);
        });
      } catch (error) {
        console.error("[VoiceOrb] Initialization error:", error);
        setMode("static");
        setErrorMessage(voiceOrb.fallbackMessage);
      }
    };

    initVapi();

    // Cleanup on unmount
    return () => {
      if (vapiClientRef.current) {
        vapiClientRef.current.cleanup();
      }
    };
  }, []);

  const handleOrbClick = async () => {
    if (mode === "static") {
      return; // Do nothing in static mode
    }

    if (!vapiClientRef.current) {
      setMode("static");
      setErrorMessage(voiceOrb.fallbackMessage);
      return;
    }

    if (mode === "idle") {
      // Request mic permission and start call
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach((track) => track.stop()); // Release immediately

        setMode("active");
        const success = await vapiClientRef.current.start();

        if (!success) {
          setMode("static");
          setErrorMessage(voiceOrb.fallbackMessage);
        }
      } catch (error: any) {
        console.error("[VoiceOrb] Microphone permission denied:", error);
        setMode("static");
        setErrorMessage(voiceOrb.permissionDeniedMessage);
      }
    } else if (mode === "active" || mode === "listening") {
      // Stop ongoing call
      await vapiClientRef.current.stop();
      setMode("idle");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 py-12">
      {/* Orb container */}
      <div className="relative flex items-center justify-center">
        {/* Pulsing glow rings */}
        {mode !== "static" && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-teal)] to-blue-400 opacity-20 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ width: 200, height: 200 }}
          />
        )}

        {/* Main orb */}
        <motion.button
          onClick={handleOrbClick}
          disabled={mode === "static"}
          className={`
            relative z-10 flex h-32 w-32 items-center justify-center rounded-full
            ${
              mode === "static"
                ? "bg-gradient-to-br from-gray-600 to-gray-700 cursor-not-allowed"
                : "bg-gradient-to-br from-[var(--accent-teal)] to-blue-500"
            }
            shadow-lg shadow-blue-500/50
            transition-all duration-300
            ${mode !== "static" ? "hover:shadow-xl hover:shadow-blue-500/70 active:scale-95" : ""}
            ${mode === "listening" ? "ring-4 ring-blue-400 ring-offset-4 ring-offset-black" : ""}
          `}
          animate={{
            scale: mode === "idle" ? [1, 1.05, 1] : 1,
            opacity: mode === "idle" ? [1, 0.9, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: mode === "idle" ? Infinity : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-label={voiceOrb.label}
        >
          {mode === "static" ? (
            <MicOff className="h-12 w-12 text-white/50" />
          ) : (
            <Mic
              className={`
                h-12 w-12 text-white
                transition-transform duration-300
                ${mode === "listening" ? "scale-110" : ""}
              `}
            />
          )}
        </motion.button>
      </div>

      {/* Label */}
      <p className="text-lg font-medium text-white/90">
        {errorMessage || voiceOrb.label}
      </p>

      {/* Status indicator */}
      {mode === "active" && !errorMessage && (
        <p className="text-sm text-white/60">Conectando...</p>
      )}
      {mode === "listening" && (
        <motion.p
          className="text-sm text-blue-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Escuchando...
        </motion.p>
      )}
    </div>
  );
}
