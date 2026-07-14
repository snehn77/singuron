"use client";

import { useState, useEffect } from "react";

export function BYOKFlowDiagram() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const totalSteps = 5;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % totalSteps);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const steps = [
    { label: "User pastes API key", phase: "input" },
    { label: "Encrypted with libsodium sealed box", phase: "encrypt" },
    { label: "Stored as ciphertext", phase: "store" },
    { label: "Decrypted in memory at call time", phase: "decrypt" },
    { label: "Proxied to Anthropic, then gone", phase: "proxy" },
  ];

  return (
    <figure className="my-10 border border-ink/10 rounded-lg p-6 bg-white">
      <div className="mb-6">
        <p className="font-semibold text-sm text-ink">BYOK key lifecycle</p>
        <p className="text-xs text-ink/50 mt-1">
          Your key is never stored in plaintext. Encrypted at rest, decrypted only in memory.
        </p>
      </div>

      <div className="relative">
        {/* Flow pipeline */}
        <div className="flex items-center justify-between gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center flex-1">
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 ${
                  i === step
                    ? "bg-accent text-white scale-110 shadow-md"
                    : i < step
                    ? "bg-accent/20 text-accent"
                    : "bg-ink/5 text-ink/30"
                }`}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px mx-2 relative">
                  <div className="absolute inset-0 bg-ink/10" />
                  <div
                    className="absolute inset-y-0 left-0 bg-accent/40 transition-all duration-500"
                    style={{ width: i < step ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Animated key representation */}
        <div className="flex items-center justify-center h-24 relative overflow-hidden rounded-md bg-ink/[0.02] border border-ink/5">
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700`}>
            {step === 0 && (
              <div className="flex items-center gap-2 animate-pulse">
                <span className="font-mono text-sm bg-ink/5 px-3 py-1.5 rounded border border-ink/10">
                  sk-ant-api03-****
                </span>
                <span className="text-xs text-ink/40">→</span>
                <span className="text-xs text-ink/50">TLS</span>
              </div>
            )}
            {step === 1 && (
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-ink/30 line-through">sk-ant-api03-...</span>
                <span className="text-accent">→</span>
                <span className="font-mono text-xs bg-accent/10 text-accent px-3 py-1.5 rounded border border-accent/20">
                  🔒 sealed box
                </span>
              </div>
            )}
            {step === 2 && (
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-ink/40">api_keys.ciphertext</span>
                  <span className="font-mono text-xs bg-ink/5 px-2 py-1 rounded">
                    0x7f3a...b2c1
                  </span>
                </div>
                <span className="text-xs text-ink/30 mt-1">key_hint: "***3ax4"</span>
              </div>
            )}
            {step === 3 && (
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs bg-ink/5 px-2 py-1 rounded text-ink/40">
                  ciphertext
                </span>
                <span className="text-green-600 animate-pulse">→ memory →</span>
                <span className="font-mono text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded border border-green-200">
                  sk-ant-api03-...
                </span>
              </div>
            )}
            {step === 4 && (
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-green-700 bg-green-50 px-2 py-1 rounded">
                  key
                </span>
                <span className="text-xs text-ink/40">→ Anthropic API →</span>
                <span className="text-xs text-ink/50">response</span>
                <span className="text-xs text-red-400 ml-2">then wiped</span>
              </div>
            )}
          </div>
        </div>

        {/* Current step label */}
        <p className="text-center text-sm text-ink/70 mt-4 h-5 transition-opacity duration-300">
          {steps[step].label}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => { setStep(i); setIsPlaying(false); }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                i === step ? "bg-ink/60 scale-125" : "bg-ink/20"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => { setStep(0); setIsPlaying(true); }}
          className="text-xs text-ink/40 hover:text-ink/70 transition-colors flex items-center gap-1 border border-ink/10 rounded-full px-3 py-1"
        >
          ↺ play again
        </button>
      </div>

      <figcaption className="mt-6 text-xs text-ink/50 border-t border-ink/5 pt-4">
        <span className="font-medium text-ink/70">Figure 1:</span> The BYOK key lifecycle.
        The key is transmitted once over TLS, encrypted immediately with a libsodium sealed box,
        and stored only as ciphertext. It is decrypted exclusively in memory at call time, then discarded.
      </figcaption>
    </figure>
  );
}
