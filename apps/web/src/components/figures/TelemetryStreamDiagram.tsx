"use client";

import { useState, useEffect } from "react";

export function TelemetryStreamDiagram() {
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTime((prev) => (prev + 1) % 100);
    }, 80);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const events = [
    { type: "agent.run.started", offset: 5, width: 2, color: "bg-blue-400" },
    { type: "agent.run.completed", offset: 30, width: 2, color: "bg-green-400" },
    { type: "agent.run.started", offset: 45, width: 2, color: "bg-blue-400" },
    { type: "agent.run.error", offset: 60, width: 2, color: "bg-red-400" },
    { type: "agent.run.started", offset: 70, width: 2, color: "bg-blue-400" },
    { type: "agent.run.completed", offset: 90, width: 2, color: "bg-green-400" },
  ];

  const hostedEvents = events.filter((_, i) => i < 4);
  const desktopEvents = events.filter((_, i) => i >= 4);

  return (
    <figure className="my-10 border border-ink/10 rounded-lg p-6 bg-white">
      <div className="mb-6">
        <p className="font-semibold text-sm text-ink">Universal telemetry pipeline</p>
        <p className="text-xs text-ink/50 mt-1">
          One event schema across all surfaces. Hosted emits server-side; desktop batches from a local queue.
        </p>
      </div>

      <div className="space-y-4">
        {/* Hosted stream */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-ink/50 w-16 text-right font-medium">hosted</span>
          <div className="flex-1 h-8 bg-blue-50 rounded relative overflow-hidden border border-blue-100">
            {/* Scrolling indicator */}
            <div
              className="absolute top-0 bottom-0 w-px bg-ink/20 transition-none"
              style={{ left: `${time}%` }}
            />
            {/* Events */}
            {hostedEvents.map((evt, i) => (
              <div
                key={i}
                className={`absolute top-1.5 bottom-1.5 rounded-sm transition-opacity duration-200 ${evt.color} ${
                  time > evt.offset ? "opacity-100" : "opacity-20"
                }`}
                style={{ left: `${evt.offset}%`, width: `${evt.width}%` }}
                title={evt.type}
              />
            ))}
            {/* Continuous fill showing activity */}
            <div
              className="absolute top-2 bottom-2 left-[5%] bg-blue-200/50 rounded-sm"
              style={{ width: `${Math.min(time - 5, 25)}%`, opacity: time > 5 ? 0.5 : 0 }}
            />
            <div
              className="absolute top-2 bottom-2 left-[45%] bg-blue-200/50 rounded-sm"
              style={{ width: `${Math.max(0, Math.min(time - 45, 15))}%`, opacity: time > 45 ? 0.5 : 0 }}
            />
          </div>
        </div>

        {/* Desktop stream */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-ink/50 w-16 text-right font-medium">desktop</span>
          <div className="flex-1 h-8 bg-amber-50 rounded relative overflow-hidden border border-amber-100">
            <div
              className="absolute top-0 bottom-0 w-px bg-ink/20 transition-none"
              style={{ left: `${time}%` }}
            />
            {desktopEvents.map((evt, i) => (
              <div
                key={i}
                className={`absolute top-1.5 bottom-1.5 rounded-sm transition-opacity duration-200 ${evt.color} ${
                  time > evt.offset ? "opacity-100" : "opacity-20"
                }`}
                style={{ left: `${evt.offset}%`, width: `${evt.width}%` }}
                title={evt.type}
              />
            ))}
            {/* Queued batch indicator */}
            <div
              className="absolute top-2 bottom-2 left-[70%] bg-amber-200/50 rounded-sm"
              style={{ width: `${Math.max(0, Math.min(time - 70, 20))}%`, opacity: time > 70 ? 0.5 : 0 }}
            />
          </div>
        </div>

        {/* Merged events table */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-ink/50 w-16 text-right font-medium">events</span>
          <div className="flex-1 h-8 bg-ink/[0.03] rounded relative overflow-hidden border border-ink/10">
            <div
              className="absolute top-0 bottom-0 w-px bg-ink/20 transition-none"
              style={{ left: `${time}%` }}
            />
            {events.map((evt, i) => (
              <div
                key={i}
                className={`absolute top-1.5 bottom-1.5 rounded-sm transition-opacity duration-200 ${evt.color} ${
                  time > evt.offset + 3 ? "opacity-100" : "opacity-0"
                }`}
                style={{ left: `${evt.offset}%`, width: `${evt.width}%` }}
                title={evt.type}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 text-[10px] text-ink/50">
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-sm bg-blue-400" />
          <span>started</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-sm bg-green-400" />
          <span>completed</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-sm bg-red-400" />
          <span>error</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => { setTime(0); setIsPlaying(true); }}
          className="text-xs text-ink/40 hover:text-ink/70 transition-colors flex items-center gap-1 border border-ink/10 rounded-full px-3 py-1"
        >
          ↺ play again
        </button>
      </div>

      <figcaption className="mt-6 text-xs text-ink/50 border-t border-ink/5 pt-4">
        <span className="font-medium text-ink/70">Figure 3:</span> Both hosted and desktop surfaces
        emit to the same <code className="text-[11px] bg-ink/5 px-1 rounded">POST /v1/events</code> endpoint.
        The schema is identical; only the emission timing differs. Desktop events queue locally and batch-upload.
        All events merge into the same partitioned table for unified analytics.
      </figcaption>
    </figure>
  );
}
