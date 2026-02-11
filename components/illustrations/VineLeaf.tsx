export default function VineLeaf({ className = "", size = 64 }: { className?: string; size?: number }) {
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
        @keyframes leafWave {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(2deg) scale(1.01); }
          66% { transform: rotate(-1.5deg) scale(0.99); }
        }
      `}</style>
      <g style={{ animation: "leafWave 7s ease-in-out infinite", transformOrigin: "32px 52px" }}>
        {/* Stem */}
        <path
          d="M32 52c0-3 1-6 .5-8s-2-3-1-6 2-5 .5-8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Main leaf shape - 5 lobes */}
        <path
          d="M32 30c-3-5-8-8-14-9-2 0-4 1-4 3s2 5 5 7c-3 0-6 2-6 5s3 4 6 4c-2 2-3 5-1 7s5 1 8-1c1 3 3 5 6 5s5-2 6-5c3 2 6 3 8 1s1-5-1-7c3 0 6-1 6-4s-3-5-6-5c3-2 5-5 5-7s-2-3-4-3c-6 1-11 4-14 9z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Veins */}
        <path d="M32 30v12" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
        <path d="M32 33c-4 3-7 5-10 5.5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.35" />
        <path d="M32 33c4 3 7 5 10 5.5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.35" />
        <path d="M32 36c-3 2-5 5-6 8" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
        <path d="M32 36c3 2 5 5 6 8" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
        {/* Tendril */}
        <path
          d="M34 52c2 2 4 3 5 2.5s1-2-.5-4-3-2-4.5-1"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}
