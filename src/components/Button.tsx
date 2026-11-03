import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  iconPosition = 'right',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none rounded-none';

  const sizeClasses = {
    sm: 'text-[10px] sm:text-xs px-4 py-2 gap-1.5',
    md: 'text-xs px-6 py-3 gap-2',
    lg: 'text-xs sm:text-sm px-8 py-3.5 sm:py-4 gap-2.5',
  };

  const variantClasses = {
    // Dark slate editorial primary
    primary: 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-900 shadow-xs hover:shadow',
    // Warm amber accent with high contrast
    accent: 'bg-amber-500 hover:bg-amber-400 text-slate-950 border border-amber-500 shadow-xs hover:shadow',
    // Editorial outline with crisp borders
    outline: 'bg-transparent hover:bg-slate-100 text-slate-900 border border-slate-300 hover:border-slate-400',
    // Editorial secondary light slate block
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200',
    // Ghost
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!isLoading && icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};
