'use client';

import React from 'react';

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function IconButton({ 
  children, 
  onClick, 
  href,
  target = '_blank',
  className = "",
  disabled = false,
  size = 'md'
}: IconButtonProps) {
  const baseClasses = `
    ${size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-12 h-12'} flex items-center justify-center rounded-lg
    text-muted-foreground hover:text-foreground hover:bg-muted
    transition-colors duration-200 cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `;

  // If href is provided, render as a link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as a button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}