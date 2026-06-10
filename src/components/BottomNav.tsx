"use client";

import { motion } from "framer-motion";
import { HiHome, HiHeart, HiCalendarDays, HiPhoto, HiEnvelopeOpen } from "react-icons/hi2";

export default function BottomNav() {
  const navItems = [
    { id: "hero", icon: HiHome, label: "Home", href: "#" },
    { id: "couple", icon: HiHeart, label: "Couple", href: "#couple" },
    { id: "event", icon: HiCalendarDays, label: "Event", href: "#event" },
    { id: "gallery", icon: HiPhoto, label: "Gallery", href: "#gallery" },
    { id: "rsvp", icon: HiEnvelopeOpen, label: "Wishes", href: "#rsvp" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-white/90 backdrop-blur-md border border-terracotta/20 shadow-lg rounded-full px-6 py-3 flex justify-between items-center"
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="flex flex-col items-center gap-1 text-terracotta-dark hover:text-terracotta transition-colors group"
        >
          <item.icon className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
          <span className="text-[9px] font-medium font-sans uppercase tracking-wider">{item.label}</span>
        </a>
      ))}
    </motion.nav>
  );
}
