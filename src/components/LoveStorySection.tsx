"use client";

import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionDivider from "./ui/SectionDivider";
import { IoHeartOutline } from "react-icons/io5";

const milestones = [
  {
    title: "Awal Bertemu",
    description:
      "Pertemuan pertama yang tak terduga menjadi awal dari kisah indah kami. Takdir mempertemukan kami di saat yang tepat.",
    icon: "✨",
  },
  {
    title: "Komitmen",
    description:
      "Setelah mengenal lebih dalam, kami memantapkan hati untuk menjalani hari-hari bersama dengan penuh kasih sayang.",
    icon: "💕",
  },
  {
    title: "Lamaran",
    description:
      "Dengan restu keluarga, kami melangkah ke jenjang yang lebih serius. Sebuah janji untuk masa depan bersama.",
    icon: "💍",
  },
  {
    title: "Menuju Pelaminan",
    description:
      "Alhamdulillah, kami siap melangkah ke pelaminan dan memulai babak baru kehidupan bersama dalam ikatan suci.",
    icon: "🕌",
  },
];

export default function LoveStorySection() {
  return (
    <section id="love-story" className="bg-transparent py-10">
      <div className="section-container">
        <AnimateOnScroll animation="slideUp">
          <h2
            className="text-center text-2xl text-charcoal mb-4"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Kisah Kasih Kami
          </h2>
          <p className="text-center text-charcoal/80 text-sm font-sans font-light mb-8 max-w-lg mx-auto leading-relaxed">
            Dan dari segala hal yang mempertemukan kami, kami percaya bahwa takdir telah menuliskan cerita yang tak mungkin tertukar.
          </p>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative max-w-md mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-terracotta/20 via-terracotta/40 to-terracotta/20" />

          {milestones.map((milestone, index) => (
            <AnimateOnScroll
              key={index}
              animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
              delay={index * 0.15}
              className={`relative flex items-start gap-4 mb-6 last:mb-0 ${
                /* On desktop, alternate left/right */
                ""
                }`}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-cream border-2 border-terracotta/40 flex items-center justify-center text-lg shadow-sm">
                {milestone.icon}
              </div>

              {/* Content card */}
              <div
                className={`glass-card p-5 flex-1 ${index % 2 === 0
                  ? "md:mr-auto"
                  : "md:ml-auto"
                  }`}
              >

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
            <div className="relative z-10 w-10 h-10 mx-auto mt-4 rounded-full bg-terracotta/10 flex items-center justify-center border border-terracotta/20">
              <IoHeartOutline className="text-terracotta" />
            </div>
          </AnimateOnScroll>
        </div>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
