"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// Components
import HeroSection from "./HeroSection";
import AyatSection from "./AyatSection";
import CoupleSection from "./CoupleSection";
import EventSection from "./EventSection";
import CountdownSection from "./CountdownSection";
import LoveStorySection from "./LoveStorySection";
import GallerySection from "./GallerySection";
import GiftSection from "./GiftSection";
import RSVPSection from "./RSVPSection";
import FooterSection from "./FooterSection";
import MusicPlayer from "./MusicPlayer";
import BottomNav from "./BottomNav";
import BackgroundDecorations from "./BackgroundDecorations";

export default function WeddingApp() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get("to");
  
  // Format guest name: replace '+' and '%20' with space (handled automatically by URLSearchParams usually, but good to be safe)
  const guestName = guestNameParam 
    ? guestNameParam.replace(/\+/g, " ") 
    : "Tamu Undangan";

  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  // Lock body scroll when closed
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <main className="min-h-screen bg-cream selection:bg-terracotta-light selection:text-charcoal relative overflow-x-hidden">
      {/* 
        Hero Section acts as the cover.
        When opened, it slides up and disappears.
      */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="cover"
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex justify-center bg-[#1a1a1a]"
          >
            <div className="w-full max-w-[480px] h-[100dvh] relative bg-cream shadow-2xl">
              <HeroSection guestName={guestName} onOpen={handleOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Texture & Birds */}
      <AnimatePresence>
        {isOpen && <BackgroundDecorations />}
      </AnimatePresence>

      {/* Main Content Sections - Revealed after click */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            className="relative z-20"
          >
            <AyatSection />
            <CoupleSection />
            <EventSection />
            <CountdownSection />
            <LoveStorySection />
            <GallerySection />
            <GiftSection />
            <RSVPSection />
            <FooterSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Music Player & Bottom Nav */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 pointer-events-none flex justify-center">
            <div className="w-full max-w-[480px] h-full relative pointer-events-none">
              <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
              <BottomNav />
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
