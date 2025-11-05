'use client';

import React from 'react';
import { useTheme } from '../../components/theme-provider';
import { Switch } from './switch';
import { IconButton } from './icon-button';

export interface ThemeToggleProps {
  variant?: 'button' | 'switch';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  lightIcon?: React.ReactNode;
  darkIcon?: React.ReactNode;
  leftLabel?: string;
  rightLabel?: string;
}

export function ThemeToggle({
  variant = 'button',
  size = 'md',
  className = '',
  lightIcon,
  darkIcon,
  leftLabel,
  rightLabel,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  if (variant === 'switch') {
    return (
      <Switch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        size={size}
        className={className}
        leftLabel={leftLabel}
        rightLabel={rightLabel}
        controlTheme={true}
      />
    );
  }

  return (
    <IconButton onClick={toggleTheme} className={className} aria-label="Toggle theme" size="sm" noBg>
      {theme === 'light'
        ? lightIcon || (
            <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        : darkIcon || (
            <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
    </IconButton>
  );
}

export default ThemeToggle;


