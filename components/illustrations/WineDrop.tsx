export default function WineDrop({ className = "", size = 64 }: { className?: string; size?: number }) {
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
        @keyframes ripple1 {
          0% { r: 8; opacity: 0.4; }
          100% { r: 22; opacity: 0; }
        }
        @keyframes ripple2 {
          0% { r: 8; opacity: 0.3; }
          100% { r: 18; opacity: 0; }
        }
        @keyframes dropFall {
          0%, 60% { transform: translateY(0); opacity: 1; }
          80% { transform: translateY(4px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      {/* Ripple rings */}
      <ellipse
        cx="32"
        cy="46"
        rx="8"
        ry="3"
        stroke="currentColor"
        strokeWidth="0.8"
        style={{ animation: "ripple1 4s ease-out infinite" }}
      />
      <ellipse
        cx="32"
        cy="46"
        rx="8"
        ry="3"
        stroke="currentColor"
        strokeWidth="0.6"
        style={{ animation: "ripple2 4s ease-out 1.5s infinite" }}
      />
      {/* Drop */}
      <g style={{ animation: "dropFall 4s ease-in-out infinite" }}>
        <path
          d="M32 10c-.5 0-3 8-6 14s-5 10-5 14c0 6 4.5 11 11 11s11-5 11-11c0-4-2-8-5-14S32.5 10 32 10z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Highlight */}
        <path
          d="M28 32c-1 2-1.5 4-1 6"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.35"
        />
      </g>
    </svg>
  );
}
