export default function Corkscrew({ className = "", size = 64 }: { className?: string; size?: number }) {
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
        @keyframes corkscrewRotate {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
        }
      `}</style>
      <g style={{ animation: "corkscrewRotate 6s ease-in-out infinite", transformOrigin: "32px 12px" }}>
        {/* T-handle */}
        <path
          d="M22 8c-.5-.3-.5-1.5 0-2.5s1.5-1.5 2-1h16c.5-.5 1.5 0 2 1s.5 2.2 0 2.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Shaft */}
        <path
          d="M32 8v14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Spiral / helix */}
        <path
          d="M32 22c-5 2-5 5 0 6s5 3 0 5-5 3.5 0 5.5 5 3 0 5.5-4 3 0 5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tip */}
        <path
          d="M32 54c-.5 1-1 3-.5 4.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Handle grip lines */}
        <path d="M26 6.5h2" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <path d="M30 6.5h2" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <path d="M34 6.5h2" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <path d="M38 6.5h2" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      </g>
    </svg>
  );
}
