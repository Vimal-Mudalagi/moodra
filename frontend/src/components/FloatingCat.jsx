import React from "react";

export default function FloatingCat({ loading }) {
  return (
    <div className="fixed bottom-6 left-6 z-50" style={{ width: 80, height: 80 }}>
      <svg
        viewBox="0 0 80 80"
        width="80"
        height="80"
        className={
          loading
            ? "cat-bob-fast cat-rotate"
            : "cat-bob"
        }
      >
        {/* Cat body */}
        <ellipse cx="40" cy="50" rx="24" ry="18" fill="#22223b" />
        {/* Cat head */}
        <ellipse cx="40" cy="32" rx="16" ry="14" fill="#22223b" />
        {/* Cat ears */}
        <polygon points="28,22 32,10 36,22" fill="#22223b" />
        <polygon points="44,22 48,10 52,22" fill="#22223b" />
        {/* Headphones */}
        <ellipse cx="40" cy="32" rx="18" ry="16" fill="none" stroke="#ffe066" strokeWidth="3" />
        <rect x="22" y="28" width="6" height="8" rx="2" fill="#ffe066" />
        <rect x="52" y="28" width="6" height="8" rx="2" fill="#ffe066" />
        {/* Cat face */}
        <ellipse cx="36" cy="34" rx="2" ry="2" fill="#fff" />
        <ellipse cx="44" cy="34" rx="2" ry="2" fill="#fff" />
        <path d="M38 38 Q40 40 42 38" stroke="#fff" strokeWidth="2" fill="none" />
        {/* Whiskers */}
        <path d="M32 36 Q28 38 32 40" stroke="#fff" strokeWidth="1" fill="none" />
        <path d="M48 36 Q52 38 48 40" stroke="#fff" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}
