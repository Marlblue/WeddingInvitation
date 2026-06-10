"use client";

import { useState, useEffect } from "react";
import AnimateOnScroll from "./ui/AnimateOnScroll";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft | null {
  const target = new Date("2026-06-27T08:00:00+07:00").getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

interface CountdownBoxProps {
  value: number;
  label: string;
}

function CountdownBox({ value, label }: CountdownBoxProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card w-18 h-18 md:w-22 md:h-22 flex items-center justify-center mb-2 relative overflow-hidden">
        <span
          className="text-3xl md:text-4xl text-charcoal flip-number font-medium"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-charcoal/70 text-[10px] md:text-xs tracking-[0.15em] uppercase font-sans">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <section id="countdown" className="bg-transparent py-16 md:py-20">
        <div className="section-container text-center">
          <div className="h-32" />
        </div>
      </section>
    );
  }

  return (
    <section id="countdown" className="bg-transparent py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--terracotta) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="section-container text-center relative z-10">
        <AnimateOnScroll animation="slideUp">
          <h2
            className="text-2xl md:text-3xl text-charcoal mb-2"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Menghitung Hari
          </h2>
          <p className="text-charcoal/70 text-sm font-sans font-light mb-10">
            Jumat, 27 Juni 2026
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scaleIn" delay={0.2}>
          {timeLeft ? (
            <div className="flex items-center justify-center gap-3 md:gap-5">
              <CountdownBox value={timeLeft.days} label="Hari" />
              <span className="text-terracotta text-2xl md:text-3xl font-light mt-[-20px]">:</span>
              <CountdownBox value={timeLeft.hours} label="Jam" />
              <span className="text-terracotta text-2xl md:text-3xl font-light mt-[-20px]">:</span>
              <CountdownBox value={timeLeft.minutes} label="Menit" />
              <span className="text-terracotta text-2xl md:text-3xl font-light mt-[-20px]">:</span>
              <CountdownBox value={timeLeft.seconds} label="Detik" />
            </div>
          ) : (
            <div className="py-8">
              <p
                className="text-2xl md:text-3xl text-charcoal mb-2"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Hari Bahagia Telah Tiba!
              </p>
              <p className="text-3xl">🎊</p>
            </div>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
