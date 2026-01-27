export function ZelligePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="zellige"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          {/* 8-pointed star pattern inspired by Moroccan zellige */}
          <path
            d="M30 0 L35 15 L50 15 L38 25 L42 40 L30 32 L18 40 L22 25 L10 15 L25 15 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.15"
          />
          <circle
            cx="30"
            cy="30"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.1"
          />
          <path
            d="M0 30 L10 30 M50 30 L60 30 M30 0 L30 10 M30 50 L30 60"
            stroke="currentColor"
            strokeWidth="0.3"
            opacity="0.08"
          />
          <rect
            x="0"
            y="0"
            width="60"
            height="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            opacity="0.05"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zellige)" />
    </svg>
  );
}
