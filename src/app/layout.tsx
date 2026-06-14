import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Wedding of Irwansyah & Lia — 28 Juni 2026",
  description:
    "Kami mengundang Anda untuk merayakan hari bahagia pernikahan Irwansyah & Lia pada Minggu, 28 Juni 2026.",
  openGraph: {
    title: "The Wedding of Irwansyah & Lia",
    description: "Minggu, 28 Juni 2026",
    type: "website",
    locale: "id_ID",
    url: "https://irwansyah-lia.vercel.app/",
    siteName: "The Wedding of Irwansyah & Lia",
    images: [
      {
        url: "https://irwansyah-lia.vercel.app/gallery/2.jpeg",
        width: 1200,
        height: 800,
        alt: "The Wedding of Irwansyah & Lia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Irwansyah & Lia",
    description: "Minggu, 28 Juni 2026",
    images: ["https://irwansyah-lia.vercel.app/gallery/2.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} overflow-x-hidden`}>
      <body className="antialiased overflow-x-hidden min-h-screen flex justify-center bg-cream">
        {/* Beautiful desktop background */}
        <div className="fixed inset-0 z-[-1] hidden md:block bg-gradient-to-br from-cream via-champagne to-cream">
          <div className="absolute inset-0 bg-[url('/gallery/2.jpeg')] bg-cover bg-center blur-[12px] opacity-20 scale-105" />
          <div className="absolute inset-0 bg-terracotta/5 mix-blend-multiply" />
        </div>

        <div className="w-full max-w-[480px] bg-cream min-h-[100dvh] shadow-[0_0_60px_rgba(0,0,0,0.15)] relative overflow-x-hidden md:border-x border-terracotta/10">
          {children}
        </div>
      </body>
    </html>
  );
}
