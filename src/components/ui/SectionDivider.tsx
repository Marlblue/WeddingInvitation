"use client";

interface SectionDividerProps {
  className?: string;
  variant?: "default" | "floral" | "simple";
}

export default function SectionDivider({
  className = "",
  variant = "default",
}: SectionDividerProps) {
  if (variant === "simple") {
    return (
      <div className={`flex items-center justify-center py-6 ${className}`}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-terracotta/50" />
        <div className="mx-3 w-1.5 h-1.5 rounded-full bg-terracotta/60" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-terracotta/50" />
      </div>
    );
  }

  if (variant === "floral") {
    return (
      <div className={`flex items-center justify-center py-8 ${className}`}>
        <svg
          width="200"
          height="30"
          viewBox="0 0 200 30"
          fill="none"
          className="text-terracotta"
        >
          <path
            d="M0 15 Q25 0, 50 15 Q75 30, 100 15 Q125 0, 150 15 Q175 30, 200 15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          <circle cx="100" cy="15" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="70" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="130" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <svg
        width="280"
        height="24"
        viewBox="0 0 280 24"
        fill="none"
        className="text-terracotta"
      >
        <line
          x1="0"
          y1="12"
          x2="90"
          y2="12"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <line
          x1="190"
          y1="12"
          x2="280"
          y2="12"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
        {/* Center ornament */}
        <path
          d="M110 12 Q120 2, 130 8 Q135 3, 140 12 Q135 21, 130 16 Q120 22, 110 12Z"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M170 12 Q160 2, 150 8 Q145 3, 140 12 Q145 21, 150 16 Q160 22, 170 12Z"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
        <circle cx="140" cy="12" r="2" fill="currentColor" opacity="0.5" />
        {/* Small diamonds */}
        <path
          d="M95 12 L100 9 L105 12 L100 15Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M175 12 L180 9 L185 12 L180 15Z"
          fill="currentColor"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
