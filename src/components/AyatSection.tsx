"use client";

import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionDivider from "./ui/SectionDivider";

export default function AyatSection() {
  return (
    <section id="ayat" className="bg-transparent py-10">
      <div className="section-container text-center">
        <AnimateOnScroll animation="fadeIn">
          <SectionDivider variant="floral" />
        </AnimateOnScroll>

        <AnimateOnScroll animation="slideUp" delay={0.1}>
          <p
            className="text-charcoal/80 text-xs tracking-[0.2em] uppercase font-sans mb-6"
          >
            Bismillahirrahmanirrahim
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scaleIn" delay={0.2}>
          <div className="max-w-lg mx-auto mb-8">
            <p
              className="text-xl leading-relaxed mb-6 text-charcoal/80"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              dir="rtl"
              lang="ar"
            >
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slideUp" delay={0.3}>
          <div className="max-w-md mx-auto">
            <p className="text-charcoal/70 text-sm leading-relaxed font-sans font-light italic mb-4">
              &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
              dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
              kasih dan sayang.&rdquo;
            </p>
            <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-sans font-medium">
              QS. Ar-Rum: 21
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeIn" delay={0.4}>
          <SectionDivider variant="floral" />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
