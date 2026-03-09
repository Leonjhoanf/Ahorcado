import React from 'react';

interface Props {
  maxAttempts: number;
  failedAttempts: number;
}

export const HangmanVisual: React.FC<Props> = ({ maxAttempts, failedAttempts }) => {
  const remaining = maxAttempts - failedAttempts;
  const p = failedAttempts / maxAttempts;
  
  return (
    <div className="flex flex-col items-center space-y-6 my-6">
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <svg 
          viewBox="0 0 300 300" 
          className="w-full h-full stroke-slate-800 dark:stroke-slate-200 fill-none transition-all duration-500" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Gallows (Always visible) */}
          <line x1="40" y1="280" x2="140" y2="280" />
          <line x1="90" y1="280" x2="90" y2="20" />
          <line x1="90" y1="20" x2="200" y2="20" />
          <line x1="200" y1="20" x2="200" y2="50" />

          {/* Head */}
          {p > 0 && <circle cx="200" cy="80" r="30" className="animate-in fade-in zoom-in duration-300" />}

          {/* Body */}
          {p >= 0.25 && <line x1="200" y1="110" x2="200" y2="190" className="animate-in fade-in duration-300" />}

          {/* Left Arm */}
          {p >= 0.375 && <line x1="200" y1="130" x2="150" y2="170" className="animate-in fade-in duration-300" />}

          {/* Right Arm */}
          {p >= 0.5 && <line x1="200" y1="130" x2="250" y2="170" className="animate-in fade-in duration-300" />}

          {/* Left Leg */}
          {p >= 0.625 && <line x1="200" y1="190" x2="160" y2="260" className="animate-in fade-in duration-300" />}

          {/* Right Leg */}
          {p >= 0.75 && <line x1="200" y1="190" x2="240" y2="260" className="animate-in fade-in duration-300" />}

          {/* Face (Normal / Dead) */}
          {p >= 1 ? (
            <g className="animate-in fade-in duration-300 stroke-[4px]">
              {/* Dead Eyes */}
              <line x1="185" y1="70" x2="195" y2="80" />
              <line x1="195" y1="70" x2="185" y2="80" />
              <line x1="205" y1="70" x2="215" y2="80" />
              <line x1="215" y1="70" x2="205" y2="80" />
              {/* Sad Mouth */}
              <path d="M 185 95 Q 200 85 215 95" />
            </g>
          ) : p > 0 ? (
            <g className="animate-in fade-in duration-300">
              {/* Normal Eyes */}
              <circle cx="190" cy="75" r="3" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
              <circle cx="210" cy="75" r="3" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
              {/* Neutral/Worried Mouth */}
              <line x1="192" y1="92" x2="208" y2="92" strokeWidth="4" />
            </g>
          ) : null}
        </svg>
      </div>
      <p className="text-lg font-medium opacity-80">
        {remaining} {remaining === 1 ? 'intento restante' : 'intentos restantes'}
      </p>
    </div>
  );
};
