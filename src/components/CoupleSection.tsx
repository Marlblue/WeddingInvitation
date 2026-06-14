"use client";

import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionDivider from "./ui/SectionDivider";
import { FaInstagram } from "react-icons/fa";

interface ProfileProps {
  name: string;
  fullName: string;
  parentInfo: string;
  instagram?: string;
  delay: number;
}

function Profile({ name, fullName, parentInfo, instagram, delay }: ProfileProps) {
  return (
    <AnimateOnScroll animation="slideUp" delay={delay} className="flex flex-col items-center text-center">
      {/* Name */}
      <h3
        className="text-2xl md:text-3xl text-charcoal mb-2"
        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
      >
        {fullName}
      </h3>

      {/* Parent info */}
      <p className="text-charcoal/80 text-sm font-sans font-light leading-relaxed max-w-[220px]">
        {parentInfo}
      </p>

      {/* Instagram */}
      {instagram && (
        <a
          href={`https://instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-3 text-terracotta hover:text-terracotta-dark transition-colors text-sm font-sans"
        >
          <FaInstagram size={14} />
          @{instagram}
        </a>
      )}
    </AnimateOnScroll>
  );
}

export default function CoupleSection() {
  return (
    <section id="couple" className="bg-transparent py-10 md:py-20">
      <div className="section-container">
        <AnimateOnScroll animation="slideUp">
          <h2
            className="text-center text-2xl md:text-3xl text-charcoal mb-4"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Pasangan Mempelai
          </h2>
          <p className="text-center text-charcoal/80 text-sm font-sans font-light mb-8 md:mb-12 max-w-lg mx-auto leading-relaxed">
            Maha Suci Allah yang telah menautkan dua hati dalam ikatan suci pernikahan. Mempelai pria dan wanita yang berbahagia:
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          {/* Groom */}
          <Profile
            name="Irwansyah"
            fullName="Irwansyah"
            parentInfo="Putra dari Bapak [Nama Ayah] & Ibu [Nama Ibu]"
            instagram="irwnsyh_005"
            delay={0.1}
          />

          {/* Separator */}
          <AnimateOnScroll animation="scaleIn" delay={0.3}>
            <div className="flex items-center justify-center">
              <span
                className="text-4xl md:text-5xl text-terracotta/70 italic"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                &amp;
              </span>
            </div>
          </AnimateOnScroll>

          {/* Bride */}
          <Profile
            name="Lia"
            fullName="Lia"
            parentInfo="Putri dari Bapak [Nama Ayah] & Ibu [Nama Ibu]"
            instagram="liafrhny28"
            delay={0.2}
          />
        </div>

        <SectionDivider className="mt-12" />
      </div>
    </section>
  );
}
