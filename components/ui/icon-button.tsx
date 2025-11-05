'use client';

import React from 'react';
import Link from 'next/link';

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  noBg?: boolean; // disable background and hover background
  asLink?: boolean; // render using Next.js Link when href provided (internal)
}

export function IconButton({ 
  children, 
  onClick, 
  href,
  target = '_blank',
  className = "",
  disabled = false,
  size = 'md',
  noBg = false,
  asLink = false,
}: IconButtonProps) {
  const sizeClasses = size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-12 h-12';
  const visual = noBg
    ? 'bg-transparent hover:bg-transparent'
    : 'text-muted-foreground hover:text-foreground hover:bg-muted';
  const baseClasses = `${sizeClasses} flex items-center justify-center rounded-lg ${visual} transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  // If href is provided, render as a Link (internal) or anchor (external)
  if (href) {
    if (asLink) {
      return (
        <Link href={href} className={baseClasses} onClick={onClick as any}>
          {children}
        </Link>
      );
    }
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