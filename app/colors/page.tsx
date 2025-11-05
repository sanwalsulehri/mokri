"use client";

import React, { useEffect, useState } from "react";
import Container from "../../components/ui/container";
import { Navbar } from "../../components/navbar";
import { Footer, FooterPresets } from "../../components/footer";
import { IconButton } from "../../components/ui/icon-button";
import { DropDown } from "../../components/ui/dropdown";

const SAFE_BG_CLASSES = [
  // neutral
  "bg-neutral-50","bg-neutral-100","bg-neutral-200","bg-neutral-300","bg-neutral-400","bg-neutral-500","bg-neutral-600","bg-neutral-700","bg-neutral-800","bg-neutral-900","bg-neutral-950",
  // stone
  "bg-stone-50","bg-stone-100","bg-stone-200","bg-stone-300","bg-stone-400","bg-stone-500","bg-stone-600","bg-stone-700","bg-stone-800","bg-stone-900","bg-stone-950",
  // zinc
  "bg-zinc-50","bg-zinc-100","bg-zinc-200","bg-zinc-300","bg-zinc-400","bg-zinc-500","bg-zinc-600","bg-zinc-700","bg-zinc-800","bg-zinc-900","bg-zinc-950",
  // slate
  "bg-slate-50","bg-slate-100","bg-slate-200","bg-slate-300","bg-slate-400","bg-slate-500","bg-slate-600","bg-slate-700","bg-slate-800","bg-slate-900","bg-slate-950",
  // gray
  "bg-gray-50","bg-gray-100","bg-gray-200","bg-gray-300","bg-gray-400","bg-gray-500","bg-gray-600","bg-gray-700","bg-gray-800","bg-gray-900","bg-gray-950",
  // reds
  "bg-red-50","bg-red-100","bg-red-200","bg-red-300","bg-red-400","bg-red-500","bg-red-600","bg-red-700","bg-red-800","bg-red-900","bg-red-950",
  "bg-orange-50","bg-orange-100","bg-orange-200","bg-orange-300","bg-orange-400","bg-orange-500","bg-orange-600","bg-orange-700","bg-orange-800","bg-orange-900","bg-orange-950",
  "bg-amber-50","bg-amber-100","bg-amber-200","bg-amber-300","bg-amber-400","bg-amber-500","bg-amber-600","bg-amber-700","bg-amber-800","bg-amber-900","bg-amber-950",
  "bg-yellow-50","bg-yellow-100","bg-yellow-200","bg-yellow-300","bg-yellow-400","bg-yellow-500","bg-yellow-600","bg-yellow-700","bg-yellow-800","bg-yellow-900","bg-yellow-950",
  "bg-lime-50","bg-lime-100","bg-lime-200","bg-lime-300","bg-lime-400","bg-lime-500","bg-lime-600","bg-lime-700","bg-lime-800","bg-lime-900","bg-lime-950",
  "bg-green-50","bg-green-100","bg-green-200","bg-green-300","bg-green-400","bg-green-500","bg-green-600","bg-green-700","bg-green-800","bg-green-900","bg-green-950",
  "bg-emerald-50","bg-emerald-100","bg-emerald-200","bg-emerald-300","bg-emerald-400","bg-emerald-500","bg-emerald-600","bg-emerald-700","bg-emerald-800","bg-emerald-900","bg-emerald-950",
  "bg-teal-50","bg-teal-100","bg-teal-200","bg-teal-300","bg-teal-400","bg-teal-500","bg-teal-600","bg-teal-700","bg-teal-800","bg-teal-900","bg-teal-950",
  "bg-cyan-50","bg-cyan-100","bg-cyan-200","bg-cyan-300","bg-cyan-400","bg-cyan-500","bg-cyan-600","bg-cyan-700","bg-cyan-800","bg-cyan-900","bg-cyan-950",
  "bg-sky-50","bg-sky-100","bg-sky-200","bg-sky-300","bg-sky-400","bg-sky-500","bg-sky-600","bg-sky-700","bg-sky-800","bg-sky-900","bg-sky-950",
  "bg-blue-50","bg-blue-100","bg-blue-200","bg-blue-300","bg-blue-400","bg-blue-500","bg-blue-600","bg-blue-700","bg-blue-800","bg-blue-900","bg-blue-950",
  "bg-indigo-50","bg-indigo-100","bg-indigo-200","bg-indigo-300","bg-indigo-400","bg-indigo-500","bg-indigo-600","bg-indigo-700","bg-indigo-800","bg-indigo-900","bg-indigo-950",
  "bg-violet-50","bg-violet-100","bg-violet-200","bg-violet-300","bg-violet-400","bg-violet-500","bg-violet-600","bg-violet-700","bg-violet-800","bg-violet-900","bg-violet-950",
  "bg-purple-50","bg-purple-100","bg-purple-200","bg-purple-300","bg-purple-400","bg-purple-500","bg-purple-600","bg-purple-700","bg-purple-800","bg-purple-900","bg-purple-950",
  "bg-fuchsia-50","bg-fuchsia-100","bg-fuchsia-200","bg-fuchsia-300","bg-fuchsia-400","bg-fuchsia-500","bg-fuchsia-600","bg-fuchsia-700","bg-fuchsia-800","bg-fuchsia-900","bg-fuchsia-950",
  "bg-pink-50","bg-pink-100","bg-pink-200","bg-pink-300","bg-pink-400","bg-pink-500","bg-pink-600","bg-pink-700","bg-pink-800","bg-pink-900","bg-pink-950",
  "bg-rose-50","bg-rose-100","bg-rose-200","bg-rose-300","bg-rose-400","bg-rose-500","bg-rose-600","bg-rose-700","bg-rose-800","bg-rose-900","bg-rose-950",
];

type CopyFormat = "tailwind" | "hex" | "rgba";

export default function PublicColorsPage() {
  const families = [
    "neutral","stone","zinc","slate","gray",
    "red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose",
  ];
  const shades = ["50","100","200","300","400","500","600","700","800","900","950"];

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [rowFormat, setRowFormat] = useState<Record<string, CopyFormat>>({});
  useEffect(() => {
    if (!copiedKey) return;
    const id = setTimeout(() => setCopiedKey(null), 1200);
    return () => clearTimeout(id);
  }, [copiedKey]);

  const parseRgb = (rgb: string): [number, number, number] | null => {
    const nums = rgb.match(/\d+\.?\d*/g);
    if (!nums || nums.length < 3) return null;
    return [Number(nums[0]), Number(nums[1]), Number(nums[2])];
  };

  const rgbToHex = (rgb: string) => {
    const parsed = parseRgb(rgb);
    if (!parsed) return rgb;
    const [r, g, b] = parsed;
    const toHex = (n: number) => n.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const getComputedBg = (bgClass: string) => {
    const el = document.createElement("div");
    el.className = `${bgClass}`;
    el.style.position = "absolute";
    el.style.left = "-9999px";
    el.style.top = "-9999px";
    document.body.appendChild(el);
    const color = getComputedStyle(el).backgroundColor;
    document.body.removeChild(el);
    return color;
  };

  const copy = async (key: string, bgClass: string, fmt: CopyFormat) => {
    try {
      let value = key;
      if (fmt !== "tailwind") {
        const rgb = getComputedBg(bgClass);
        if (fmt === "hex") {
          value = rgbToHex(rgb);
        } else {
          const parsed = parseRgb(rgb);
          value = parsed ? `rgba(${parsed[0]}, ${parsed[1]}, ${parsed[2]}, 1)` : rgb;
        }
      }
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
    } catch {}
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-16" />
      <div className="w-full px-4">
        <div className="space-y-8">
          <header className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Color Palette</h1>
            <p className="text-foreground/70 max-w-3xl">
              Complete Tailwind color palette. Each swatch displays its class name
              for quick copy. Labels are placed outside the color blocks, so every
              shade is clearly visible in both light and dark themes.
            </p>
          </header>

          {families.map((family) => (
            <section key={family} className="space-y-3 w-full">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold capitalize">{family}</h2>
                <div className="w-32">
                  <DropDown
                    value={rowFormat[family] ?? "tailwind"}
                    onChange={(v) => setRowFormat((prev) => ({ ...prev, [family]: v as CopyFormat }))}
                    options={[
                      { label: 'tailwind', value: 'tailwind' },
                      { label: 'hex', value: 'hex' },
                      { label: 'rgba', value: 'rgba' },
                    ]}
                    className="text-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 w-full sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-4">
                {shades.map((shade, idx) => {
                  const bg = `bg-${family}-${shade}`;
                  const key = `${family}-${shade}`;
                  const iconClass = idx < Math.ceil(shades.length / 2) ? "text-black" : "text-white";
                  const fmt = rowFormat[family] ?? "tailwind";
                  const displayLabel = key; // e.g., lime-600
                  return (
                    <button
                      key={shade}
                      type="button"
                      onClick={() => copy(key, bg, fmt)}
                      className="group relative w-full rounded-xl border border-border overflow-hidden bg-background text-left"
                    >
                      <div className={`${bg} h-32`} />
                      {/* Copy control - top-right, shows on card hover */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <IconButton noBg size="sm" className={iconClass} onClick={(e) => { if (e) { e.preventDefault(); e.stopPropagation(); } copy(key, bg, rowFormat[family] ?? "tailwind"); }}>
                          {copiedKey === key ? (
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          ) : (
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                          )}
                        </IconButton>
                      </div>
                      {/* Labels on neutral background for readability */}
                      <div className="px-3 py-2 text-xs text-foreground/80 flex items-center justify-between">
                        <span>{shade}</span>
                        <code className="px-1 py-0.5 bg-muted rounded">{displayLabel}</code>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        {/* Hidden safelist to ensure Tailwind emits all bg classes */}
        <div className="hidden">
          {SAFE_BG_CLASSES.map((c) => (
            <div key={c} className={c} />
          ))}
        </div>
      </div>
      <Footer {...FooterPresets.minimal} />
    </div>
  );
}


