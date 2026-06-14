"use client";

import { useState } from "react";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionDivider from "./ui/SectionDivider";
import Lightbox from "./ui/Lightbox";
import { IoImageOutline } from "react-icons/io5";

// Placeholder images
const galleryImages = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
];

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="bg-transparent py-10">
      <div className="section-container">
        <AnimateOnScroll animation="slideUp">
          <h2
            className="text-center text-2xl text-charcoal mb-2"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Galeri
          </h2>
          <p className="text-center text-charcoal/70 text-sm font-sans font-light mb-8">
            Momen bahagia kami
          </p>
        </AnimateOnScroll>

        {/* Photo Grid */}
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          {galleryImages.map((src, index) => (
            <AnimateOnScroll
              key={index}
              animation="scaleIn"
              delay={index * 0.1}
            >
              <div
                className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer bg-terracotta/10"
                onClick={() => openLightbox(index)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder styling if image not found yet
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                    target.parentElement!.innerHTML = '<div class="text-terracotta/40 flex flex-col items-center"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></div>';
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <IoImageOutline size={20} />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <SectionDivider className="mt-10" />
      </div>

      <Lightbox
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
}
