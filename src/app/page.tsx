import { Suspense } from "react";
import WeddingApp from "@/components/WeddingApp";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <div className="animate-pulse-gold w-16 h-16 rounded-full border-2 border-gold" />
        </div>
      }
    >
      <WeddingApp />
    </Suspense>
  );
}
