"use client";

import { motion } from "framer-motion";
import { HiOutlineEnvelopeOpen } from "react-icons/hi2";

interface HeroSectionProps {
  guestName: string;
  onOpen: () => void;
}

export default function HeroSection({ guestName, onOpen }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('gallery/2.jpeg')" }}
      />

      {/* Overlay to darken image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-between w-full h-full p-8 text-center text-white">

        {/* Top Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 drop-shadow-md"
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 font-sans font-medium text-white/90">
            The Wedding Of
          </p>
          <h1
            className="text-4xl md:text-5xl mb-4 text-white drop-shadow-lg"
            style={{ fontFamily: "var(--font-great-vibes), cursive" }}
          >
            Irwan & Aulia
          </h1>
        </motion.div>

        {/* Bottom Guest Info & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full max-w-sm mb-12 flex flex-col items-center gap-6"
        >
          <div className="flex flex-col items-center text-center w-full drop-shadow-md">
            <p className="text-xs uppercase tracking-widest text-white/90 mb-2 font-medium">
              Kepada Yth,
            </p>
            <p className="text-2xl font-bold font-sans text-white">
              {guestName}
            </p>
          </div>

          <button
            onClick={onOpen}
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-terracotta text-white rounded-full font-sans tracking-widest text-sm uppercase transition-all duration-300 hover:bg-terracotta-dark hover:scale-105 active:scale-95 shadow-lg"
          >
            <HiOutlineEnvelopeOpen className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            <span>Buka Undangan</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
