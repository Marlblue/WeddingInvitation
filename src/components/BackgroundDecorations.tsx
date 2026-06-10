"use client";

import { motion } from "framer-motion";

// Simple bird SVG paths
const Bird1 = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-10 h-10 text-terracotta/20 opacity-60">
    <path
      d="M20,50 Q40,30 50,50 Q60,30 80,50 Q60,60 50,50 Q40,60 20,50 Z"
      fill="currentColor"
    />
  </svg>
);

const Bird2 = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12 text-terracotta/10 opacity-50">
    <path
      d="M10,40 Q30,20 50,40 Q70,20 90,40 Q70,50 50,40 Q30,50 10,40 Z"
      fill="currentColor"
    />
  </svg>
);

export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
