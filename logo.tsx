export default function Logo({ className = "w-auto h-12" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 600 700" 
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="cyberGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="45%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#00F5A0" />
        </linearGradient>

        <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ISOTIPO "S" CIRCUITO */}
      <g transform="translate(150, 60)" filter="url(#subtleGlow)">
        <path 
          d="M 210,65 L 145,25 L 90,60 L 90,105 L 170,150 L 170,185 L 105,225 L 45,185" 
          stroke="url(#cyberGrad)" 
          strokeWidth="18" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M 65,40 L 140,-5 L 235,50 L 235,115 L 160,160" 
          stroke="url(#cyberGrad)" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M 240,210 L 165,255 L 70,200 L 70,135 L 145,90" 
          stroke="url(#cyberGrad)" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle cx="210" cy="65" r="9" fill="url(#cyberGrad)" />
        <circle cx="45" cy="185" r="9" fill="url(#cyberGrad)" />
        <circle cx="65" cy="40" r="7" fill="url(#cyberGrad)" />
        <circle cx="240" cy="210" r="7" fill="url(#cyberGrad)" />
        <circle cx="40" cy="95" r="6" fill="url(#cyberGrad)" />
        <circle cx="265" cy="155" r="6" fill="url(#cyberGrad)" />
        <path d="M 40,95 L 60,95" stroke="url(#cyberGrad)" strokeWidth="6" strokeLinecap="round" />
        <path d="M 265,155 L 245,155" stroke="url(#cyberGrad)" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* TIPOGRAFÍA */}
      <g textAnchor="middle">
        <text 
          x="300" 
          y="475" 
          fill="#FFFFFF" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="64" 
          fontWeight="900" 
          letterSpacing="6"
        >
          SHURIAN
        </text>
        <text 
          x="300" 
          y="555" 
          fill="url(#cyberGrad)" 
          fontFamily="'JetBrains Mono', monospace" 
          fontSize="46" 
          fontWeight="700" 
          letterSpacing="10"
        >
          [LABS]
        </text>
      </g>
    </svg>
  );
}