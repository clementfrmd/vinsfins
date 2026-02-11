export default function WineStain({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <style>{`
        @keyframes stainPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.55; }
        }
      `}</style>
      {/* Outer ring - wobbly circle */}
      <path
        d="M32 6c7 .5 13 3 17 7s6.5 10 6 17-.5 13-4 17.5-9 7-16.5 7.5-13.5-1.5-18-5.5S9 41 8.5 34s1-14 5-18.5S25 6.5 32 6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
        style={{ animation: "stainPulse 5s ease-in-out infinite" }}
      />
      {/* Inner ring */}
      <path
        d="M32 10c5.5.5 10.5 2.5 14 6s5 8.5 4.5 14-1.5 10.5-4.5 14-8 5.5-13.5 6-11-1-15-4.5-6-8.5-5.5-14 2-10.5 5.5-14S26.5 10.5 32 10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.25"
        style={{ animation: "stainPulse 5s ease-in-out 0.8s infinite" }}
      />
      {/* Splatter dots */}
      <circle cx="52" cy="18" r="1.5" stroke="currentColor" strokeWidth="0.7" opacity="0.25"
        style={{ animation: "stainPulse 5s ease-in-out 1.5s infinite" }} />
      <circle cx="14" cy="50" r="1" stroke="currentColor" strokeWidth="0.6" opacity="0.2"
        style={{ animation: "stainPulse 5s ease-in-out 2s infinite" }} />
      <circle cx="48" cy="48" r="0.8" stroke="currentColor" strokeWidth="0.5" opacity="0.2"
        style={{ animation: "stainPulse 5s ease-in-out 1s infinite" }} />
    </svg>
  );
}
