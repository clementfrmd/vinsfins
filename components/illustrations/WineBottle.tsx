export default function WineBottle({ className = "", size = 64 }: { className?: string; size?: number }) {
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
        @keyframes shimmer {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.4; }
        }
      `}</style>
      {/* Neck */}
      <path
        d="M29 6c-.3 0-1 .5-1 1.5v8c-.2 1-2.5 3-3.5 6s-1.2 4-1.2 6v25c0 3 1.5 5.5 5.5 5.8h5.5c4-.3 5.5-2.8 5.5-5.8V27.5c0-2-.2-3-1.2-6s-3.3-5-3.5-6v-8c0-1-.7-1.5-1-1.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Label area */}
      <rect
        x="24.5"
        y="33"
        width="15"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 1.5"
        opacity="0.5"
      />
      {/* Liquid shimmer */}
      <path
        d="M25.5 38c2 1.2 5 .8 6.5 0s4.5-1 6.5 0"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.3"
        style={{ animation: "shimmer 5s ease-in-out infinite" }}
      />
      <path
        d="M25.5 42c3 1 4.5-.5 6.5-0.3s3.5 1.3 6.5.3"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.2"
        style={{ animation: "shimmer 5s ease-in-out 1.5s infinite" }}
      />
      {/* Cork top */}
      <path
        d="M29.5 6h5c.3 0 .5-.3.5-.8V3c0-.5-.3-1-.8-1h-4.4c-.5 0-.8.5-.8 1v2.2c0 .5.2.8.5.8z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
