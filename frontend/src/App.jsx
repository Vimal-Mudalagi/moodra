import React, { useState } from "react";
import MoodGrid from "./components/MoodGrid";
import VibeCard from "./components/VibeCard";
import FloatingCat from "./components/FloatingCat";
import useVibe from "./hooks/useVibe";

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const { loading, vibe, fetchVibe } = useVibe();

  const handleSelect = (mood) => {
    setSelectedMood(mood);
    fetchVibe(mood);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d12] text-offwhite font-playfair relative">
      <header className="pt-16 pb-6 w-full flex flex-col items-center">
        <h1 className="text-7xl font-playfair text-center tracking-wider drop-shadow-lg mb-2" style={{letterSpacing: '0.08em'}}>MOODRA</h1>
        <div className="text-lg font-playfair text-offwhite/60 text-center mb-8 tracking-wide" style={{letterSpacing: '0.08em'}}>what frequency are you on?</div>
        <div className="w-full flex justify-center">
          <AnimatedStar loading={loading} />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full flex justify-center mt-6 mb-2">
          <MoodGrid
            onSelect={handleSelect}
            selectedMood={selectedMood}
            loading={loading}
          />
        </div>
        {loading && (
          <div className="mt-10 text-xl font-playfair text-offwhite/80 animate-pulse-opacity tracking-wide">
            reading your frequency...
          </div>
        )}
        <VibeCard vibe={vibe} />
      </main>
      <footer className="footer text-center text-base font-playfair text-offwhite/40">
        made with ♥ by Vimal
      </footer>
    </div>
  );
}

// Subtle animated star instead of cat
function AnimatedStar({ loading }) {
  return (
    <div className="flex justify-center items-center w-full mb-6">
      <div className="relative flex justify-center items-center">
        <svg
          viewBox="0 0 120 120"
          width="90"
          height="90"
          className={loading ? "star-bob-fast star-rotate" : "star-bob"}
          style={{ filter: 'drop-shadow(0 0 32px #ffe06688) drop-shadow(0 0 64px #ffe06644)' }}
        >
          <g>
            <polygon points="60,10 70,45 110,45 78,70 90,110 60,88 30,110 42,70 10,45 50,45" fill="#ffe066" opacity="0.92" />
          </g>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full w-[120px] h-[120px] bg-gradient-to-br from-amber-200/30 via-amber-400/10 to-lilac/10 blur-2xl opacity-60 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
