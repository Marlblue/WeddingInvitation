"use client";

import { useState, useEffect } from "react";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import { submitRSVP, fetchRSVPResponses, type RSVPResponse } from "@/lib/supabase";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir">("hadir");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");
  
  const [feed, setFeed] = useState<RSVPResponse[]>([]);
  const [isLoadingFeed, setIsLoadingFeed] = useState(true);

  // Stats
  const countHadir = feed.filter((r) => r.kehadiran === "hadir").length;
  const countTidakHadir = feed.length - countHadir;

  useEffect(() => {
    loadFeed();
  }, []);

  const loadFeed = async () => {
    try {
      setIsLoadingFeed(true);
      const data = await fetchRSVPResponses();
      setFeed(data);
    } catch (err) {
      console.error("Error loading RSVP feed:", err);
    } finally {
      setIsLoadingFeed(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name.trim().length < 2) {
      setError("Nama minimal 2 karakter");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");
      
      await submitRSVP({
        nama_tamu: name.trim(),
        kehadiran: attendance,
        ucapan: message.trim() || "Selamat menempuh hidup baru!",
      });

      setSubmitSuccess(true);
      // Reset form
      setName("");
      setMessage("");
      setAttendance("hadir");
      
      // Reload feed to show new entry
      await loadFeed();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
      
    } catch (err) {
      console.error("Error submitting RSVP:", err);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="bg-transparent py-16 md:py-20">
      <div className="section-container">
        <AnimateOnScroll animation="slideUp">
          <h2
            className="text-center text-2xl md:text-3xl text-charcoal mb-2"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            RSVP & Ucapan
          </h2>
          <p className="text-center text-charcoal/70 text-sm font-sans font-light mb-12">
            Kehadiran dan doa restu Anda sangat berarti bagi kami
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <AnimateOnScroll animation="slideRight" delay={0.1}>
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-sans font-medium text-charcoal mb-6">
                Konfirmasi Kehadiran
              </h3>
              
              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <IoCheckmarkCircleOutline className="text-sage text-5xl mb-4" />
                  <p className="text-charcoal font-sans font-medium">Terima Kasih!</p>
                  <p className="text-charcoal/80 text-sm mt-2">
                    Konfirmasi dan ucapan Anda telah berhasil dikirim.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 text-terracotta hover:text-terracotta-dark text-sm underline"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-sans text-charcoal/80 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-white/50 border border-terracotta/30 rounded-lg focus:outline-none focus:border-terracotta transition-colors font-sans text-charcoal"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans text-charcoal/80 mb-2">
                      Kehadiran *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="attendance"
                          value="hadir"
                          checked={attendance === "hadir"}
                          onChange={() => setAttendance("hadir")}
                          className="w-4 h-4 text-terracotta focus:ring-terracotta border-gray-300"
                        />
                        <span className="text-sm font-sans text-charcoal/80">Hadir</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="attendance"
                          value="tidak_hadir"
                          checked={attendance === "tidak_hadir"}
                          onChange={() => setAttendance("tidak_hadir")}
                          className="w-4 h-4 text-terracotta focus:ring-terracotta border-gray-300"
                        />
                        <span className="text-sm font-sans text-charcoal/80">Maaf, Tidak Hadir</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-sans text-charcoal/80 mb-2">
                      Ucapan & Doa
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/50 border border-terracotta/30 rounded-lg focus:outline-none focus:border-terracotta transition-colors font-sans text-charcoal resize-none"
                      placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm font-sans">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-terracotta hover:bg-terracotta-dark text-white rounded-lg font-sans font-medium tracking-wide transition-colors disabled:opacity-70 flex items-center justify-center shadow-md"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full" />
                    ) : (
                      "Kirim Ucapan"
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimateOnScroll>

          {/* Feed */}
          <AnimateOnScroll animation="slideLeft" delay={0.2}>
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-sans font-medium text-charcoal">
                  Ucapan & Doa
                </h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-sage/20 text-sage rounded-full text-xs font-sans font-medium">
                    {countHadir} Hadir
                  </span>
                  <span className="px-3 py-1 bg-charcoal/10 text-charcoal/80 rounded-full text-xs font-sans font-medium">
                    {countTidakHadir} Absen
                  </span>
                </div>
              </div>

              <div className="glass-card flex-1 p-2 md:p-4 overflow-hidden flex flex-col max-h-[500px]">
                {isLoadingFeed ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="animate-spin w-8 h-8 border-3 border-terracotta/20 border-t-terracotta rounded-full" />
                  </div>
                ) : feed.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center text-center p-6">
                    <p className="text-charcoal/70 text-sm font-sans italic">
                      Belum ada ucapan. Jadilah yang pertama memberikan ucapan!
                    </p>
                  </div>
                ) : (
                  <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar p-2">
                    {feed.map((item) => (
                      <div key={item.id} className="bg-white/60 p-4 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-sans font-medium text-charcoal text-sm">
                            {item.nama_tamu}
                          </h4>
                          <span
                            className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                              item.kehadiran === "hadir"
                                ? "bg-sage/10 text-sage"
                                : "bg-charcoal/5 text-charcoal/80"
                            }`}
                          >
                            {item.kehadiran === "hadir" ? "Hadir" : "Absen"}
                          </span>
                        </div>
                        <p className="text-charcoal/70 text-sm font-sans font-light leading-relaxed">
                          {item.ucapan}
                        </p>
                        <p className="text-charcoal/80 text-[10px] font-sans mt-3">
                          {new Date(item.created_at).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
