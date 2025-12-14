import React from 'react';

interface LogoProps {
  className?: string;
  isDarkText?: boolean; // true면 검은 글씨(흰 배경용), false면 흰 글씨(어두운 배경용)
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", isDarkText = false }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 240 56" 
      className={className}
      aria-label="Vietnam On-Line Lab Logo"
      fill="none"
    >
      {/* Logo Mark (Icon) */}
      <g>
        {/* Red Shield/Box with Gradient */}
        <rect x="0" y="2" width="52" height="52" rx="12" fill="url(#vnGradient)" />
        <defs>
          <linearGradient id="vnGradient" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#EA4335" />
            <stop offset="1" stopColor="#C5221F" />
          </linearGradient>
        </defs>
        
        {/* Tech Circuit Lines */}
        <path d="M26 8V16" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 40V48" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 28H16" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M36 28H44" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
        
        {/* Center Star */}
        <path 
          d="M26 19L28.35 24.5H34.5L29.7 28.5L31.5 34.5L26 31L20.5 34.5L22.3 28.5L17.5 24.5H23.65L26 19Z" 
          fill="#FFFF00" 
        />
        
        {/* Deco Dots */}
        <circle cx="26" cy="8" r="1.5" fill="white" fillOpacity="0.8" />
        <circle cx="26" cy="48" r="1.5" fill="white" fillOpacity="0.8" />
        <circle cx="8" cy="28" r="1.5" fill="white" fillOpacity="0.8" />
        <circle cx="44" cy="28" r="1.5" fill="white" fillOpacity="0.8" />
      </g>

      {/* Text Group */}
      <g transform="translate(64, 0)">
        <text 
          x="0" 
          y="24" 
          fontFamily="'Noto Sans KR', sans-serif" 
          fontWeight="900" 
          fontSize="22" 
          fill={isDarkText ? "#0f172a" : "#ffffff"} 
          letterSpacing="-0.03em"
        >
          VIETNAM
        </text>
        <text 
          x="0" 
          y="46" 
          fontFamily="'Noto Sans KR', sans-serif" 
          fontWeight="700" 
          fontSize="15" 
          fill="#f97316" 
          letterSpacing="0.05em"
        >
          ON-LINE LAB
        </text>
      </g>
    </svg>
  );
};

export default Logo;