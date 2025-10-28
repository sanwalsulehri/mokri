'use client';

import React from 'react';

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  "aria-label"?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function IconButton({
  children,
  onClick,
  className = "",
  size = 'md',
  disabled = false,
  type = 'button',
  ...rest
}: IconButtonProps) {
  const sizeClasses: Record<NonNullable<IconButtonProps['size']>, string> = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-10 w-10'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${sizeClasses[size]} inline-flex items-center justify-center rounded-lg text-foreground bg-transparent hover:bg-foreground/10 transition-all duration-200 ease-in-out focus:outline-none ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}


