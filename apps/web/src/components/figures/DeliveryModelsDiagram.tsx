"use client";

import { useState, useEffect } from "react";

export function DeliveryModelsDiagram() {
  const [activeModel, setActiveModel] = useState<"hosted" | "desktop">("hosted");
  const [dataFlowStep, setDataFlowStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setDataFlowStep((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, [isPlaying, activeModel]);

  const hostedSteps = [
    "User sends prompt from browser",
    "Gateway decrypts key, proxies to Anthropic",
    "Response streamed back to browser",
    "Telemetry emitted (metadata only)",
  ];

  const desktopSteps = [
    "Agent runs locally on your machine",
    "Auth via device token (no session credentials)",
    "Telemetry queued locally in SQLite",
    "Batch uploaded when online (backoff on failure)",
  ];

  const steps = activeModel === "hosted" ? hostedSteps : desktopSteps;

  return (
    <figure className="my-10 border border-ink/10 rounded-lg p-6 bg-white">
      <div className="mb-6">
        <p className="font-semibold text-sm text-ink">Two delivery models, one platform</p>
        <p className="text-xs text-ink/50 mt-1">
          Both surfaces share the same telemetry pipeline and security model.
        </p>
      </div>

      {/* Model toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setActiveModel("hosted"); setDataFlowStep(0); setIsPlaying(true); }}
          className={`px-4 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
            activeModel === "hosted"
              ? "bg-ink text-cream"
              : "bg-ink/5 text-ink/50 hover:bg-ink/10"
          }`}
        >
          Hosted
        </button>
        <button
          onClick={() => { setActiveModel("desktop"); setDataFlowStep(0); setIsPlaying(true); }}
          className={`px-4 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
            activeModel === "desktop"
              ? "bg-ink text-cream"
              : "bg-ink/5 text-ink/50 hover:bg-ink/10"
          }`}
        >
          Desktop
        </button>
      </div>

      {/* Architecture diagram */}
      <div className="relative bg-ink/[0.02] border border-ink/5 rounded-md p-6 min-h-[200px]">
        {activeModel === "hosted" ? (
          <div className="flex items-center justify-between gap-4">
            {/* Browser */}
            <div className={`flex flex-col items-center gap-2 transition-all duration-500 ${
              dataFlowStep === 0 ? "scale-105" : "scale-100"
            }`}>
              <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${
                dataFlowStep === 0 ? "border-accent bg-accent/5" : "border-ink/10 bg-white"
              }`}>
                <span className="text-2xl">🌐</span>
              </div>
              <span className="text-[11px] text-ink/50 font-medium">Browser</span>
            </div>

            {/* Arrow 1 */}
            <div className="flex-1 relative h-6">
              <div className="absolute inset-y-2.5 inset-x-0 bg-ink/10 rounded-full" />
              <div
                className="absolute inset-y-2.5 left-0 bg-accent/50 rounded-full transition-all duration-700"
                style={{ width: dataFlowStep >= 1 ? "100%" : "0%" }}
              />
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-ink/40">
                TLS
              </span>
            </div>

            {/* Gateway */}
            <div className={`flex flex-col items-center gap-2 transition-all duration-500 ${
              dataFlowStep === 1 ? "scale-105" : "scale-100"
            }`}>
              <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${
                dataFlowStep === 1 ? "border-accent bg-accent/5" : "border-ink/10 bg-white"
              }`}>
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-[11px] text-ink/50 font-medium">Gateway</span>
            </div>

            {/* Arrow 2 */}
            <div className="flex-1 relative h-6">
              <div className="absolute inset-y-2.5 inset-x-0 bg-ink/10 rounded-full" />
              <div
                className="absolute inset-y-2.5 left-0 bg-green-400/50 rounded-full transition-all duration-700"
                style={{ width: dataFlowStep >= 2 ? "100%" : "0%" }}
              />
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-ink/40">
                user key
              </span>
            </div>

            {/* Anthropic */}
            <div className={`flex flex-col items-center gap-2 transition-all duration-500 ${
              dataFlowStep === 2 ? "scale-105" : "scale-100"
            }`}>
              <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${
                dataFlowStep === 2 ? "border-green-400 bg-green-50" : "border-ink/10 bg-white"
              }`}>
                <span className="text-2xl">🤖</span>
              </div>
              <span className="text-[11px] text-ink/50 font-medium">Anthropic</span>
            </div>

            {/* Telemetry indicator */}
            <div className={`absolute bottom-3 right-3 flex items-center gap-1.5 transition-all duration-500 ${
              dataFlowStep === 3 ? "opacity-100" : "opacity-0"
            }`}>
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] text-ink/40">telemetry</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            {/* Desktop App */}
            <div className={`flex flex-col items-center gap-2 transition-all duration-500 ${
              dataFlowStep === 0 ? "scale-105" : "scale-100"
            }`}>
              <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${
                dataFlowStep === 0 ? "border-accent bg-accent/5" : "border-ink/10 bg-white"
              }`}>
                <span className="text-2xl">💻</span>
              </div>
              <span className="text-[11px] text-ink/50 font-medium">Desktop App</span>
            </div>

            {/* Arrow 1 */}
            <div className="flex-1 relative h-6">
              <div className="absolute inset-y-2.5 inset-x-0 bg-ink/10 rounded-full" />
              <div
                className="absolute inset-y-2.5 left-0 bg-accent/50 rounded-full transition-all duration-700"
                style={{ width: dataFlowStep >= 1 ? "100%" : "0%" }}
              />
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-ink/40">
                device token
              </span>
            </div>

            {/* Auth Server */}
            <div className={`flex flex-col items-center gap-2 transition-all duration-500 ${
              dataFlowStep === 1 ? "scale-105" : "scale-100"
            }`}>
              <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${
                dataFlowStep === 1 ? "border-accent bg-accent/5" : "border-ink/10 bg-white"
              }`}>
                <span className="text-2xl">🔑</span>
              </div>
              <span className="text-[11px] text-ink/50 font-medium">Auth</span>
            </div>

            {/* SQLite queue */}
            <div className={`flex flex-col items-center gap-2 transition-all duration-500 ${
              dataFlowStep === 2 ? "scale-105" : "scale-100"
            }`}>
              <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${
                dataFlowStep === 2 ? "border-amber-400 bg-amber-50" : "border-ink/10 bg-white"
              }`}>
                <span className="text-2xl">📦</span>
              </div>
              <span className="text-[11px] text-ink/50 font-medium">SQLite Queue</span>
            </div>

            {/* Arrow 2 */}
            <div className="flex-1 relative h-6">
              <div className="absolute inset-y-2.5 inset-x-0 bg-ink/10 rounded-full" />
              <div
                className="absolute inset-y-2.5 left-0 bg-amber-400/50 rounded-full transition-all duration-700"
                style={{ width: dataFlowStep >= 3 ? "100%" : "0%" }}
              />
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-ink/40">
                batch
              </span>
            </div>

            {/* Telemetry API */}
            <div className={`flex flex-col items-center gap-2 transition-all duration-500 ${
              dataFlowStep === 3 ? "scale-105" : "scale-100"
            }`}>
              <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${
                dataFlowStep === 3 ? "border-green-400 bg-green-50" : "border-ink/10 bg-white"
              }`}>
                <span className="text-2xl">📡</span>
              </div>
              <span className="text-[11px] text-ink/50 font-medium">Events API</span>
            </div>
          </div>
        )}
      </div>

      {/* Step indicator */}
      <p className="text-center text-sm text-ink/70 mt-4 h-5">
        {steps[dataFlowStep]}
      </p>

      {/* Dot controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDataFlowStep(i); setIsPlaying(false); }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                i === dataFlowStep ? "bg-ink/60 scale-125" : "bg-ink/20"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => { setDataFlowStep(0); setIsPlaying(true); }}
          className="text-xs text-ink/40 hover:text-ink/70 transition-colors flex items-center gap-1 border border-ink/10 rounded-full px-3 py-1"
        >
          ↺ play again
        </button>
      </div>

      <figcaption className="mt-6 text-xs text-ink/50 border-t border-ink/5 pt-4">
        <span className="font-medium text-ink/70">Figure 2:</span>{" "}
        {activeModel === "hosted"
          ? "Hosted agents proxy through the gateway. The user's key is decrypted in memory, used for a single Anthropic call, then discarded. Telemetry captures metadata only."
          : "Desktop agents run locally. They authenticate via revocable device tokens and queue telemetry events in SQLite for batch upload when online. Offline sessions are never lost."}
      </figcaption>
    </figure>
  );
}
