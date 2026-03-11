import React from "react";
import PaletteStrip from "./PaletteStrip";

export default function VibeCard({ vibe }) {
  if (!vibe) return null;
  const song = vibe.song;
  return (
    <div
      className="fade-in-slide-up mt-10 mx-auto max-w-xl w-full rounded-xl border border-white/10 p-8 shadow-lg"
      style={{
        background: `linear-gradient(135deg, ${vibe.palette[0]}24 0%, ${vibe.palette[1]}24 50%, ${vibe.palette[2]}24 100%)`,
      }}
    >
      <PaletteStrip palette={vibe.palette} />
      <div className="mt-6 mb-2 text-2xl italic font-playfair text-white">
        {vibe.song_era}
      </div>
      <div className="mb-4 text-xs font-spacemono text-white/60">
        {vibe.weather}
      </div>
      <blockquote className="border-l-4 pl-4 border-amber-400 text-lg font-spacemono text-white mb-4">
        {vibe.life_advice}
      </blockquote>
      <div className="flex items-center mb-2">
        <span className="mr-2 text-amber-300 text-lg">✦</span>
        <span className="font-spacemono text-white">{vibe.spirit_object}</span>
      </div>
      <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-spacemono text-sm mb-4">
        {vibe.vibe_score}
      </span>
      <div className="mt-6 text-center text-xs font-spacemono text-white/40">
        {vibe.secret_message}
      </div>
      {/* Embedded Last.fm player and song info */}
      {song && song.url && (
        <div className="mt-8 flex flex-col items-center">
          <div className="mb-1 text-sm font-spacemono text-white/60">soundtrack for this vibe:</div>
          <a
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-1 rounded bg-white/10 text-white/80 font-spacemono text-xs hover:bg-amber-400/20 transition mb-1"
          >
            {song.title} — {song.artist}
          </a>
        </div>
      )}
    </div>
  );
}
