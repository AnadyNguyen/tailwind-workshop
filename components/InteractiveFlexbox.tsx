"use client";

import { useState } from "react";
import Image from "next/image";

type FlexDirection = "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse";
type JustifyContent = "justify-start" | "justify-center" | "justify-end" | "justify-between";
type AlignItems = "items-start" | "items-center" | "items-end" | "items-between";

function ButtonGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</span>
      <div className="flex flex-wrap gap-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`rounded px-3 py-1 font-mono text-sm transition-colors ${
              value === opt ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function InteractiveFlexbox() {
  const [direction, setDirection] = useState<FlexDirection>("flex-row");
  const [justify, setJustify] = useState<JustifyContent>("justify-start");
  const [align, setAlign] = useState<AlignItems>("items-start");

  const classString = `flex ${direction} ${justify} ${align}`;

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Controls */}
      <div className="flex flex-wrap gap-6 rounded-xl border-2 border-gray-200 bg-gray-50 p-4">
        <ButtonGroup
          label="Direction"
          options={["flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse"] as FlexDirection[]}
          value={direction}
          onChange={setDirection}
        />
        <ButtonGroup
          label="Justify Content"
          options={["justify-start", "justify-center", "justify-end", "justify-between"] as JustifyContent[]}
          value={justify}
          onChange={setJustify}
        />
        <ButtonGroup
          label="Align Items"
          options={["items-start", "items-center", "items-end", "items-between"] as AlignItems[]}
          value={align}
          onChange={setAlign}
        />
      </div>

      {/* Class display */}
      <p className="font-mono text-lg font-semibold tracking-tight">{classString}</p>

      {/* Flexbox preview */}
      <div className="rounded-xl border-4 border-black p-4">
        <div className={`${classString} min-h-[40rem] w-full gap-4`}>
          {/* Image A */}
          <div className="relative h-40 w-48 shrink-0 overflow-hidden rounded-lg border-2 border-black transition-all duration-300">
            <Image
              src="/lessons/4/stefan-stefancik-unsplash.jpg"
              alt="Mountain landscape"
              fill
              className="object-cover"
            />
          </div>

          {/* Caption A */}
          <p className="max-w-[12rem] shrink-0 rounded-lg border-2 border-black bg-white p-3 font-sans text-base transition-all duration-300">
            Caption A
          </p>

          {/* Image B */}
          <div className="relative h-40 w-48 shrink-0 overflow-hidden rounded-lg border-2 border-black transition-all duration-300">
            <Image src="/lessons/4/frank-mckenna-unsplash.jpg" alt="Sunset over water" fill className="object-cover" />
          </div>

          {/* Caption B */}
          <p className="max-w-[12rem] shrink-0 rounded-lg border-2 border-black bg-white p-3 font-sans text-base transition-all duration-300">
            Caption B
          </p>
        </div>
      </div>
    </div>
  );
}
