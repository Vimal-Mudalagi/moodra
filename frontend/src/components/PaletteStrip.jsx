import React from "react";

export default function PaletteStrip({ palette }) {
  return (
    <div className="flex gap-3 mb-2">
      {palette.map((color, idx) => (
        <span
          key={idx}
          className="w-10 h-10 rounded-full shadow-lg"
          style={{
            background: color,
            boxShadow: `0 0 16px 4px ${color}80`,
            border: `2px solid ${color}40`,
            filter: "brightness(1.1)"
          }}
        />
      ))}
    </div>
  );
}
