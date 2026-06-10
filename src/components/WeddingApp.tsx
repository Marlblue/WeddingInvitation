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
    // Smooth scroll to the next section after opening
    setTimeout(() => {
      document.getElementById("ayat")?.scrollIntoView({ behavior: "smooth" });
    }, 500);
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
    <main className="min-h-screen bg-cream selection:bg-terracotta-light selection:text-charcoal relative">
      {/* 
        Hero Section always visible initially.
        When opened, it acts as the top section of the page.
      */}
      <HeroSection guestName={guestName} onOpen={handleOpen} />

      {/* Background Texture & Birds */}
      <AnimatePresence>
        {isOpen && <BackgroundDecorations />}
      </AnimatePresence>

      {/* Main Content Sections - Revealed after click */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
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
          <>
            <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
            <BottomNav />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
