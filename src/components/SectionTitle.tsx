import React from 'react';

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {label && (
        <span
          className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-3 ${
            isDark
              ? 'bg-slate-900 border border-slate-700 text-amber-400'
              : 'bg-amber-100 text-amber-800 border border-amber-200/60'
          }`}
        >
          {label}
        </span>
      )}
      <h2 className={`text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3.5 text-sm sm:text-base leading-relaxed max-w-2xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
