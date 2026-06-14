"use client";

import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionDivider from "./ui/SectionDivider";
import { IoCalendarOutline, IoTimeOutline, IoLocationOutline, IoMapOutline } from "react-icons/io5";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  delay: number;
}

function EventCard({ title, date, time, venue, address, mapsUrl, delay }: EventCardProps) {
  return (
    <AnimateOnScroll animation="slideUp" delay={delay}>
      <div className="glass-card p-6 md:p-8 text-center hover:shadow-lg transition-shadow duration-300">
        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-terracotta/10 flex items-center justify-center">
          <IoCalendarOutline className="text-terracotta text-2xl" />
        </div>

        {/* Title */}
        <h3
          className="text-xl md:text-2xl text-charcoal mb-4"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
        >
          {title}
        </h3>

        <div className="w-12 h-px bg-terracotta/30 mx-auto mb-4" />

        {/* Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-center gap-2 text-charcoal/70">
            <IoCalendarOutline className="text-terracotta text-sm flex-shrink-0" />
            <span className="text-sm font-sans">{date}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-charcoal/70">
            <IoTimeOutline className="text-terracotta text-sm flex-shrink-0" />
            <span className="text-sm font-sans">{time}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-charcoal/70">
            <IoLocationOutline className="text-terracotta text-sm flex-shrink-0" />
            <span className="text-sm font-sans font-medium">{venue}</span>
          </div>
          <p className="text-charcoal/70 text-xs font-sans leading-relaxed px-2">
            {address}
          </p>
        </div>

        {/* Maps Button */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-terracotta text-white hover:bg-terracotta-dark rounded-full text-xs tracking-[0.1em] uppercase font-sans transition-all duration-300 shadow-md"
        >
          <IoMapOutline size={14} />
          Lihat Lokasi
        </a>
      </div>
    </AnimateOnScroll>
  );
}

export default function EventSection() {
  return (
    <section id="event" className="bg-transparent py-10 md:py-20">
      <div className="section-container">
        <AnimateOnScroll animation="slideUp">
          <h2
            className="text-center text-2xl md:text-3xl text-charcoal mb-4"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Momen Bahagia
          </h2>
          <p className="text-center text-charcoal/80 text-sm font-sans font-light mb-8 md:mb-12 max-w-lg mx-auto leading-relaxed">
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada acara pernikahan kami:
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <EventCard
            title="Akad Nikah"
            date="Minggu, 28 Juni 2026"
            time="10:00 — Selesai"
            venue="lapangan tower 25 tangerang"
            address="Tangerang, RT.002/RW.003, Parung Serab, Kec. Ciledug, Kota Tangerang, Banten 15153"
            mapsUrl="https://maps.app.goo.gl/BB5kc48J6vACuNFs6"
            delay={0.1}
          />
          <EventCard
            title="Resepsi"
            date="Minggu, 28 Juni 2026"
            time="10:00 — Selesai"
            venue="lapangan tower 25 tangerang"
            address="Tangerang, RT.002/RW.003, Parung Serab, Kec. Ciledug, Kota Tangerang, Banten 15153"
            mapsUrl="https://maps.app.goo.gl/BB5kc48J6vACuNFs6"
            delay={0.2}
          />
        </div>

        <SectionDivider className="mt-8 md:mt-12" />
      </div>
    </section>
  );
}
