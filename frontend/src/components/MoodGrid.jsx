import React from "react";

const MOODS = [
  { emoji: "🌧", label: "Melancholic", color: "#6c7a89" },
  { emoji: "☁️", label: "Numb", color: "#bfc2c7" },
  { emoji: "🔥", label: "Rage", color: "#ff6a3d" },
  { emoji: "🌊", label: "Restless", color: "#3da9fc" },
  { emoji: "🌙", label: "Dreamy", color: "#bfa3ff" },
  { emoji: "🌸", label: "Tender", color: "#ffd6e0" },
  { emoji: "⚡", label: "Electric", color: "#ffe066" },
  { emoji: "😶", label: "Empty", color: "#d1d5db" },
  { emoji: "🍂", label: "Nostalgic", color: "#eab676" },
  { emoji: "🌀", label: "Chaotic", color: "#a3a3ff" },
];

export default function MoodGrid({ onSelect, selectedMood, loading }) {
  return (
    <div className="grid grid-cols-5 gap-6 w-full max-w-4xl mx-auto mt-4 mb-2 px-2">
      {MOODS.map((mood, idx) => {
        const isActive = selectedMood === mood.label;
        return (
          <button
            key={mood.label}
            disabled={loading}
            onClick={() => onSelect(mood.label)}
            className={`relative flex flex-col items-center justify-center h-20 px-3 py-1 rounded-full backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-200 font-playfair text-base text-offwhite shadow-md focus:outline-none select-none
              ${isActive ? `border-[2px] border-[${mood.color}] shadow-[0_0_16px_4px_${mood.color}40] animate-pulse` : ''}
              hover:scale-105 hover:shadow-[0_0_16px_4px_${mood.color}40] hover:border-[${mood.color}]`}
            style={{
              boxShadow: isActive
                ? `0 0 24px 8px ${mood.color}40`
                : undefined,
              borderColor: isActive ? mood.color : undefined,
            }}
          >
            <span className="text-2xl mb-1">{mood.emoji}</span>
            <span className="text-xs tracking-wide" style={{ color: mood.color }}>{mood.label}</span>
          </button>
        );
      })}
    </div>
  );
}
