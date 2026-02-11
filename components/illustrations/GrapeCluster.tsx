export default function GrapeCluster({ className = "", size = 64 }: { className?: string; size?: number }) {
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
        @keyframes grapeSway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1.5deg); }
          75% { transform: rotate(-1.5deg); }
        }
      `}</style>
      <g style={{ animation: "grapeSway 5s ease-in-out infinite", transformOrigin: "32px 8px" }}>
        {/* Stem */}
        <path
          d="M32 5c0 0-.5 4-1 7s.5 4 1 5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Small leaf at top */}
        <path
          d="M32 8c2-2 5-2.5 7-1.5s1 3-1 4-4 .5-5-.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Grapes - row 1 */}
        <circle cx="28" cy="22" r="4.2" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="36" cy="22" r="4.2" stroke="currentColor" strokeWidth="1.1" />
        {/* Row 2 */}
        <circle cx="24" cy="30" r="4.2" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="32" cy="29" r="4.2" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="40" cy="30" r="4.2" stroke="currentColor" strokeWidth="1.1" />
        {/* Row 3 */}
        <circle cx="27" cy="38" r="4.2" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="36" cy="38" r="4.2" stroke="currentColor" strokeWidth="1.1" />
        {/* Row 4 */}
        <circle cx="24" cy="46" r="4" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="32" cy="46.5" r="4" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="39" cy="46" r="4" stroke="currentColor" strokeWidth="1.1" />
        {/* Bottom */}
        <circle cx="28" cy="53" r="3.5" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="36" cy="53" r="3.5" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="32" cy="59" r="3" stroke="currentColor" strokeWidth="1" />
      </g>
    </svg>
  );
}
