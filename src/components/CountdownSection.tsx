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
  const target = new Date("2026-06-28T10:00:00+07:00").getTime();
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
      <div className="glass-card w-14 h-14 flex items-center justify-center mb-1 relative overflow-hidden">
        <span
          className="text-2xl text-charcoal flip-number font-medium"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-charcoal/70 text-[9px] tracking-[0.1em] uppercase font-sans">
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
      <section id="countdown" className="bg-transparent py-10">
        <div className="section-container text-center">
          <div className="h-32" />
        </div>
      </section>
    );
  }

  return (
    <section id="countdown" className="bg-transparent py-10 relative overflow-hidden">
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
            className="text-2xl text-charcoal mb-2"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Menghitung Hari
          </h2>
          <p className="text-charcoal/70 text-sm font-sans font-light mb-10">
            Minggu, 28 Juni 2026
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scaleIn" delay={0.2}>
          {timeLeft ? (
            <div className="flex items-center justify-center gap-2">
              <CountdownBox value={timeLeft.days} label="Hari" />
              <span className="text-terracotta text-xl font-light mt-[-12px]">:</span>
              <CountdownBox value={timeLeft.hours} label="Jam" />
              <span className="text-terracotta text-xl font-light mt-[-12px]">:</span>
              <CountdownBox value={timeLeft.minutes} label="Menit" />
              <span className="text-terracotta text-xl font-light mt-[-12px]">:</span>
              <CountdownBox value={timeLeft.seconds} label="Detik" />
            </div>
          ) : (
            <div className="py-8">
              <p
                className="text-2xl text-charcoal mb-2"
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
