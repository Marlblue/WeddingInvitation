"use client";

import { useState } from "react";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionDivider from "./ui/SectionDivider";
import { IoCopyOutline, IoCheckmarkOutline, IoGiftOutline, IoWalletOutline } from "react-icons/io5";

interface BankAccountProps {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  logoUrl?: string;
  delay: number;
}

function BankAccount({ bankName, accountNumber, accountHolder, delay }: BankAccountProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <AnimateOnScroll animation="slideUp" delay={delay}>
      <div className="glass-card p-6 md:p-8 flex flex-col items-center text-center">
        {/* Bank Name / Logo Placeholder */}
        <h4 className="text-xl text-charcoal font-bold font-sans tracking-widest mb-4">
          {bankName}
        </h4>

        {/* Account Details */}
        <p className="text-charcoal/80 text-sm font-sans mb-1">No. Rekening:</p>
        <p className="text-2xl text-terracotta-dark font-sans font-medium mb-2 tracking-wider">
          {accountNumber}
        </p>
        <p className="text-charcoal/80 text-sm font-sans mb-6">
          a.n. {accountHolder}
        </p>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs tracking-[0.1em] uppercase font-sans transition-all duration-300 ${copied
              ? "bg-sage text-white border-transparent"
              : "border border-terracotta/50 text-terracotta hover:bg-terracotta hover:text-white"
            }`}
        >
          {copied ? (
            <>
              <IoCheckmarkOutline size={16} />
              Tersalin!
            </>
          ) : (
            <>
              <IoCopyOutline size={16} />
              Salin Nomor
            </>
          )}
        </button>
      </div>
    </AnimateOnScroll>
  );
}

export default function GiftSection() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section id="gift" className="bg-transparent py-10 md:py-20">
      <div className="section-container">
        <AnimateOnScroll animation="slideUp">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-terracotta/10 flex items-center justify-center">
            <IoGiftOutline className="text-terracotta text-3xl" />
          </div>
          <h2
            className="text-center text-2xl md:text-3xl text-charcoal mb-4"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Wedding Gift
          </h2>
          <p className="text-center text-charcoal/80 text-sm font-sans font-light leading-relaxed max-w-lg mx-auto mb-8 md:mb-12">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </p>
        </AnimateOnScroll>

        {isRevealed ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <BankAccount
              bankName="BCA"
              accountNumber="1234567890"
              accountHolder="Irwansyah"
              delay={0.1}
            />
            <BankAccount
              bankName="MANDIRI"
              accountNumber="0987654321"
              accountHolder="Lia"
              delay={0.2}
            />
          </div>
        ) : (
          <AnimateOnScroll animation="fadeIn" delay={0.2} className="flex justify-center">
            <button
              onClick={() => setIsRevealed(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-terracotta text-white hover:bg-terracotta-dark rounded-full text-sm font-sans tracking-wide transition-all duration-300 shadow-md"
            >
              <IoWalletOutline size={18} />
              Klik Disini
            </button>
          </AnimateOnScroll>
        )}

        {/* Physical Gift Info */}
        <AnimateOnScroll animation="fadeIn" delay={0.4} className="mt-10">
          <div className="glass-card p-6 text-center max-w-xl mx-auto border-dashed border-2">
            <p className="text-charcoal text-sm font-sans font-medium mb-2">
              Kirim Hadiah Fisik
            </p>
            <p className="text-charcoal/80 text-sm font-sans font-light leading-relaxed mb-2">
              Penerima: Irwansyah / Lia (0812-3456-7890)
            </p>
            <p className="text-charcoal/80 text-sm font-sans font-light leading-relaxed">
              [Alamat lengkap pengiriman hadiah, nama jalan, RT/RW, kelurahan, kecamatan, kota, kode pos]
            </p>
          </div>
        </AnimateOnScroll>

        <SectionDivider className="mt-10 md:mt-16" />
      </div>
    </section>
  );
}
