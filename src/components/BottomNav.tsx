"use client";

import { motion } from "framer-motion";
import { HiHome, HiHeart, HiCalendarDays, HiPhoto, HiEnvelopeOpen } from "react-icons/hi2";
import { useState, useEffect } from "react";

export default function BottomNav() {
  const [active, setActive] = useState("hero");

  const navItems = [
    { id: "hero", icon: HiHome, label: "Home", href: "#" },
    { id: "couple", icon: HiHeart, label: "Couple", href: "#couple" },
    { id: "event", icon: HiCalendarDays, label: "Event", href: "#event" },
    { id: "gallery", icon: HiPhoto, label: "Gallery", href: "#gallery" },
    { id: "rsvp", icon: HiEnvelopeOpen, label: "Wishes", href: "#rsvp" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        if (item.href === "#") return { id: "hero", top: 0 };
        const el = document.querySelector(item.href) as HTMLElement;
        return {
          id: item.id,
          top: el ? el.offsetTop - 300 : 0,
        };
      });

      const scrollPosition = window.scrollY;
      
      let currentActive = "hero";
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].top) {
          currentActive = sections[i].id;
          break;
        }
      }
      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActive(id);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm md:max-w-md lg:max-w-lg bg-white/90 backdrop-blur-md border border-terracotta/20 shadow-xl rounded-full px-1.5 py-1.5 md:px-6 md:py-3 flex justify-between items-center"
    >
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleClick(e, item.href, item.id)}
            className={`relative flex flex-col items-center justify-center p-2 rounded-full transition-colors z-10 flex-1 ${
              isActive ? "text-white" : "text-terracotta-dark hover:text-terracotta"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-terracotta rounded-full -z-10 shadow-md"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1"
            >
              <item.icon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold font-sans uppercase tracking-wider">
                {item.label}
              </span>
            </motion.div>
          </a>
        );
      })}
    </motion.nav>
  );
}
