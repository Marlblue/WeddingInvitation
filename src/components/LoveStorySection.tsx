"use client";

import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionDivider from "./ui/SectionDivider";
import { IoHeartOutline } from "react-icons/io5";

const milestones = [
  {
    year: "2020",
    title: "Awal Bertemu",
    description:
      "Pertemuan pertama yang tak terduga menjadi awal dari kisah indah kami. Takdir mempertemukan kami di saat yang tepat.",
    icon: "✨",
  },
  {
    year: "2022",
    title: "Komitmen",
    description:
      "Setelah mengenal lebih dalam, kami memantapkan hati untuk menjalani hari-hari bersama dengan penuh kasih sayang.",
    icon: "💕",
  },
  {
    year: "2025",
    title: "Lamaran",
    description:
      "Dengan restu keluarga, kami melangkah ke jenjang yang lebih serius. Sebuah janji untuk masa depan bersama.",
    icon: "💍",
  },
  {
    year: "2026",
    title: "Menuju Pelaminan",
    description:
      "Alhamdulillah, kami siap melangkah ke pelaminan dan memulai babak baru kehidupan bersama dalam ikatan suci.",
    icon: "🕌",
  },
];

export default function LoveStorySection() {
  return (
    <section id="love-story" className="bg-transparent py-16 md:py-20">
      <div className="section-container">
        <AnimateOnScroll animation="slideUp">
          <h2
            className="text-center text-2xl md:text-3xl text-charcoal mb-4"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Kisah Kasih Kami
          </h2>
          <p className="text-center text-charcoal/80 text-sm font-sans font-light mb-12 max-w-lg mx-auto leading-relaxed">
            Dan dari segala hal yang mempertemukan kami, kami percaya bahwa takdir telah menuliskan cerita yang tak mungkin tertukar.
          </p>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative max-w-md mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-terracotta/20 via-terracotta/40 to-terracotta/20 md:transform md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <AnimateOnScroll
              key={milestone.year}
              animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
              delay={index * 0.15}
              className={`relative flex items-start gap-4 mb-10 last:mb-0 ${
                /* On desktop, alternate left/right */
                ""
              }`}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-cream border-2 border-terracotta/40 flex items-center justify-center text-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2 shadow-sm">
                {milestone.icon}
              </div>

              {/* Content card */}
              <div
                className={`glass-card p-5 flex-1 md:w-[calc(50%-40px)] ${
                  index % 2 === 0
                    ? "md:mr-auto md:ml-0 md:pr-6"
                    : "md:ml-auto md:mr-0 md:pl-6"
                }`}
              >
                <span className="text-terracotta text-xs tracking-[0.2em] uppercase font-sans font-medium">
                  {milestone.year}
                </span>
                <h4
                  className="text-lg text-charcoal mt-1 mb-2"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {milestone.title}
                </h4>
                <p className="text-charcoal/80 text-sm font-sans font-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}

          {/* End heart */}
          <AnimateOnScroll animation="scaleIn" delay={0.6}>
            <div className="relative z-10 w-10 h-10 mx-auto mt-4 rounded-full bg-terracotta/10 flex items-center justify-center md:ml-[calc(50%-20px)] border border-terracotta/20">
              <IoHeartOutline className="text-terracotta" />
            </div>
          </AnimateOnScroll>
        </div>

        <SectionDivider className="mt-12" />
      </div>
    </section>
  );
}
