# 💍 Wedding Invitation — Irwan & Aulia

> A modern, animated digital wedding invitation web app built with **Next.js 16**, **Framer Motion**, and **Supabase**. Designed mobile-first with an elegant terracotta & cream aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer)
![Supabase](https://img.shields.io/badge/Supabase-2-3FCF8E?logo=supabase)

---

## ✨ Overview

A fully responsive digital wedding invitation designed as a **single-page application** optimized for mobile (max-width 480px) with a beautiful desktop fallback. The app features smooth page transitions, scroll-triggered animations, real-time RSVP with guest messages, and a background music player — delivering a premium experience that replaces traditional printed invitations.

🔗 **Live Demo:** [irwansyah-lia.vercel.app](https://irwansyah-lia.vercel.app/)

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| 🎬 **Animated Cover** | Full-screen hero with Ken Burns zoom effect and slide-up reveal transition |
| 📖 **Quran Verse** | Islamic verse section with elegant typography |
| 💑 **Couple Profile** | Bride & groom profiles with photo cards |
| 📅 **Event Details** | Akad Nikah & Resepsi cards with Google Maps integration |
| ⏳ **Live Countdown** | Real-time countdown timer to the wedding date |
| 💕 **Love Story** | Timeline of the couple's journey |
| 🖼️ **Photo Gallery** | Image gallery with lightbox viewer |
| 🎁 **Digital Gift** | Bank transfer details with one-click copy to clipboard |
| 📝 **RSVP & Wishes** | Real-time guest RSVP form with message feed (powered by Supabase) |
| 🎵 **Music Player** | Floating background music toggle |
| 🧭 **Bottom Navigation** | Sticky bottom nav for quick section jumping |
| 👤 **Personalized Guest Name** | Dynamic guest name via URL query parameter (`?to=Nama+Tamu`) |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) + Custom CSS |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (Ionicons) |
| **Backend/DB** | [Supabase](https://supabase.com/) (PostgreSQL + REST API) |
| **Fonts** | Google Fonts — Playfair Display, Inter, Great Vibes |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens, animations, glass-card effects
│   ├── layout.tsx           # Root layout with fonts, SEO metadata, OG tags
│   └── page.tsx             # Entry point
│
├── components/
│   ├── WeddingApp.tsx       # Main orchestrator — cover/reveal logic, music state
│   ├── HeroSection.tsx      # Full-screen cover with guest name & CTA
│   ├── AyatSection.tsx      # Quran verse display
│   ├── CoupleSection.tsx    # Bride & groom profiles
│   ├── EventSection.tsx     # Akad & Resepsi event cards + Maps links
│   ├── CountdownSection.tsx # Live countdown timer
│   ├── LoveStorySection.tsx # Couple's timeline
│   ├── GallerySection.tsx   # Photo gallery grid
│   ├── GiftSection.tsx      # Bank transfer + physical gift info
│   ├── RSVPSection.tsx      # RSVP form + real-time message feed
│   ├── FooterSection.tsx    # Footer with credits
│   ├── MusicPlayer.tsx      # Floating music toggle button
│   ├── BottomNav.tsx        # Sticky bottom navigation bar
│   ├── BackgroundDecorations.tsx  # Subtle background ornaments
│   └── ui/
│       ├── AnimateOnScroll.tsx    # Scroll-triggered animation wrapper
│       ├── Lightbox.tsx           # Full-screen image viewer
│       └── SectionDivider.tsx     # Decorative section separator
│
└── lib/
    └── supabase.ts          # Supabase client + RSVP CRUD functions

public/
├── gallery/                 # Pre-wedding photo gallery images
├── images/                  # Bride, groom, and couple profile photos
├── music/                   # Background music audio file
└── video/                   # Video assets
```

---

## 🎨 Design System

The app uses a carefully curated **warm terracotta** color palette:

| Token | Color | Hex |
|-------|-------|-----|
| `cream` | ![#FDFBF9](https://via.placeholder.com/12/FDFBF9/FDFBF9) | `#FDFBF9` |
| `ivory` | ![#FAF8F5](https://via.placeholder.com/12/FAF8F5/FAF8F5) | `#FAF8F5` |
| `champagne` | ![#F2EBE5](https://via.placeholder.com/12/F2EBE5/F2EBE5) | `#F2EBE5` |
| `terracotta` | ![#B3543D](https://via.placeholder.com/12/B3543D/B3543D) | `#B3543D` |
| `terracotta-light` | ![#D47B65](https://via.placeholder.com/12/D47B65/D47B65) | `#D47B65` |
| `terracotta-dark` | ![#8C3E2B](https://via.placeholder.com/12/8C3E2B/8C3E2B) | `#8C3E2B` |
| `sage` | ![#7A8B76](https://via.placeholder.com/12/7A8B76/7A8B76) | `#7A8B76` |
| `charcoal` | ![#2D2D2D](https://via.placeholder.com/12/2D2D2D/2D2D2D) | `#2D2D2D` |

### Typography
- **Display:** Great Vibes (cursive headings)
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### UI Components
- **Glass Cards** — frosted glass effect with `backdrop-filter: blur(12px)`
- **Scroll Animations** — intersection observer + Framer Motion
- **Custom Scrollbar** — themed with terracotta accent

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **yarn**
- **Supabase** account (for RSVP feature)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/wedding-invitation.git
cd wedding-invitation

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Setup

Create a table named `rsvp_responses` in your Supabase project:

```sql
CREATE TABLE rsvp_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nama_tamu TEXT NOT NULL,
  kehadiran TEXT NOT NULL CHECK (kehadiran IN ('hadir', 'tidak_hadir')),
  ucapan TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE rsvp_responses ENABLE ROW LEVEL SECURITY;

-- Allow public insert and read
CREATE POLICY "Allow public insert" ON rsvp_responses FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read" ON rsvp_responses FOR SELECT USING (true);
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Tip:** Test with a guest name by visiting:
```
http://localhost:3000?to=John+Doe
```

---

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/wedding-invitation)

1. Push your code to GitHub
2. Import the repo on [Vercel](https://vercel.com)
3. Add environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
4. Deploy 🚀

---

## 📱 Responsive Design

The app is built **mobile-first** with a max-width of **480px** container:

- **Mobile** — Full native-like experience with touch-friendly interactions
- **Tablet/Desktop** — Centered card layout with blurred background photo backdrop and subtle shadow borders

---

## 📄 License

This project was built as a freelance client project. All couple-specific content (photos, names, details) belongs to the respective client.

The codebase structure and technical implementation can be used as a reference or template.

---

<p align="center">
  Built with ❤️ using Next.js, Framer Motion & Supabase
</p>
