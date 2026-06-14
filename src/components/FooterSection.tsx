"use client";

import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionDivider from "./ui/SectionDivider";

export default function FooterSection() {
  return (
    <footer id="footer" className="bg-charcoal text-cream py-16 pb-24 md:py-32 md:pb-32 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent opacity-50" />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/couple.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/80" />

      <div className="section-container relative z-10 text-center max-w-2xl">
        <AnimateOnScroll animation="slideUp">
          <SectionDivider variant="simple" className="mb-10 opacity-50" />

          <p className="text-cream/90 text-sm md:text-base font-sans font-light leading-relaxed mb-12 italic">
            "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami. Atas kehadiran dan doa restunya, kami ucapkan terima kasih."
          </p>

          <p className="text-terracotta text-xs tracking-[0.2em] uppercase font-sans mb-4">
            Teriring doa dan kasih,
          </p>

          <h2
            className="text-4xl md:text-6xl text-white mb-16 drop-shadow-md"
            style={{ fontFamily: "var(--font-great-vibes), cursive" }}
          >
            Irwansyah &amp; Aulia
          </h2>

          <SectionDivider variant="simple" className="mt-10 opacity-50" />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeIn" delay={0.4}>
          <div className="mt-20 flex flex-col items-center justify-center">
            <p className="text-cream/40 text-[10px] uppercase tracking-widest font-sans mb-2">
              Created with ❤️ for
            </p>
            <p className="text-terracotta/70 text-xs font-sans">
              The Wedding of Irwansyah &amp; Lia
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}
