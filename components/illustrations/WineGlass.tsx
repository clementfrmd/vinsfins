export default function WineGlass({ className = "", size = 64 }: { className?: string; size?: number }) {
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
        @keyframes swirl {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(1.5px); }
          75% { transform: translateX(-1.5px); }
        }
        @keyframes wineWave {
          0%, 100% { d: path("M20 30c3-1.5 7-1 10.5 0s8 1.5 11.5 0"); }
          50% { d: path("M20 30c3 1.5 7 1 10.5 0s8-1.5 11.5 0"); }
        }
      `}</style>
      {/* Bowl */}
      <path
        d="M17 10c-.5 0-1 .3-1 1 0 8 3 14 7.5 18.5L27 33v16"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47 10c.5 0 1 .3 1 1 0 8-3 14-7.5 18.5L37 33v16"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Rim */}
      <path
        d="M17 10h30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Base */}
      <path
        d="M22 52c0 .5.5 1.5 2 2h16c1.5-.5 2-1.5 2-2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M27 49v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M37 49v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Wine surface */}
      <path
        d="M20 30c3-1.5 7-1 10.5 0s8 1.5 11.5 0"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
        style={{ animation: "swirl 6s ease-in-out infinite" }}
      />
      {/* Swirl lines inside wine */}
      <g style={{ animation: "swirl 7s ease-in-out infinite" }} opacity="0.25">
        <path d="M25 33c2-1 4 1 6 0" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
        <path d="M28 36c2.5-.8 4 .8 5.5 0" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}
