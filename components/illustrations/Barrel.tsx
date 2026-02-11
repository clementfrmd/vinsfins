export default function Barrel({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Barrel body */}
      <path
        d="M14 16c-2 4-3 10-3 16s1 12 3 16"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M50 16c2 4 3 10 3 16s-1 12-3 16"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Top ellipse */}
      <ellipse
        cx="32"
        cy="16"
        rx="18"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      {/* Bottom ellipse */}
      <ellipse
        cx="32"
        cy="48"
        rx="18"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      {/* Metal bands */}
      <ellipse
        cx="32"
        cy="24"
        rx="19.5"
        ry="4"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <ellipse
        cx="32"
        cy="40"
        rx="19.5"
        ry="4"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
      {/* Bung hole */}
      <ellipse
        cx="32"
        cy="32"
        rx="2.5"
        ry="1.8"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.6"
      />
      {/* Wood grain hints */}
      <path d="M24 18v28" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.2" />
      <path d="M32 14v36" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.2" />
      <path d="M40 18v28" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}
