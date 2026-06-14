"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoMusicalNotes } from "react-icons/io5";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    audioRef.current = new Audio("/music/background.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          if (error.name !== "AbortError") {
            console.error("Audio playback failed:", error);
          }
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  if (!isMounted) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={onToggle}
      className={`absolute bottom-20 right-4 md:bottom-24 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-colors border pointer-events-auto ${
        isPlaying
          ? "bg-terracotta text-white border-terracotta shadow-terracotta/30"
          : "bg-white/80 text-charcoal border-white/40 backdrop-blur-sm"
      }`}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      <IoMusicalNotes size={20} className={isPlaying ? "animate-pulse" : ""} />
    </motion.button>
  );
}
