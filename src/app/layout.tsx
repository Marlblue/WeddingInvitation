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
  title: "The Wedding of Irwansyah & Lia — 27 Juni 2026",
  description:
    "Kami mengundang Anda untuk merayakan hari bahagia pernikahan Irwansyah & Lia pada Jumat, 27 Juni 2026.",
  openGraph: {
    title: "The Wedding of Irwansyah & Lia",
    description: "Jumat, 27 Juni 2026",
    type: "website",
    locale: "id_ID",
    url: "https://irwansyah-lia.vercel.app/",
    siteName: "The Wedding of Irwansyah & Lia",
    images: [
      {
        url: "https://irwansyah-lia.vercel.app/images/couple.webp",
        width: 1200,
        height: 630,
        alt: "The Wedding of Irwansyah & Lia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Irwansyah & Lia",
    description: "Jumat, 27 Juni 2026",
    images: ["https://irwansyah-lia.vercel.app/images/2.jpeg"],
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
      <body className="antialiased overflow-x-hidden max-w-full">{children}</body>
    </html>
  );
}
