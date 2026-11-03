import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showTagline = false,
  className = '',
}) => {
  const isDark = variant === 'dark'; // dark logo for light background

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Editorial Architectural Square Mark */}
      <div className={`w-8 h-8 ${isDark ? 'bg-slate-900' : 'bg-slate-800 border border-slate-700'} flex items-center justify-center transition-transform duration-200 group-hover:scale-105`}>
        <div className="w-4 h-4 border-t-2 border-r-2 border-amber-500" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center text-xl font-black tracking-tighter">
          <span className={isDark ? 'text-slate-900' : 'text-white'}>
            SKY
          </span>
          <span className="text-amber-600">
            BUILD
          </span>
        </div>
        {showTagline && (
          <span className={`text-[9px] tracking-[0.2em] uppercase font-bold ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
            Building With Purpose
          </span>
        )}
      </div>
    </Link>
  );
};
