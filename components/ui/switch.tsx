'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SwitchProps {
  title?: string;
  leftLabel?: string;
  rightLabel?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  controlTheme?: boolean;
}

export function Switch({ 
  title,
  leftLabel,
  rightLabel,
  checked = false,
  onChange,
  disabled = false,
  className = "",
  size = 'md',
  controlTheme = false
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode from data-theme
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });
    observer.observe(document.documentElement, { attributes: true });
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setIsDark(currentTheme === "dark");
    
    // If controlTheme is true, sync isChecked with theme
    if (controlTheme) {
      setIsChecked(currentTheme === "dark");
    }
    
    return () => observer.disconnect();
  }, [controlTheme, isChecked]);

  const handleToggle = () => {
    if (!disabled) {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      
      // If controlTheme is true, toggle the theme
      if (controlTheme) {
        const newTheme = newChecked ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
      }
      
      onChange?.(newChecked);
    }
  };

  const sizeClasses = {
    sm: {
      track: 'w-6 h-3 md:w-8 md:h-4',
      thumb: 'w-2 h-2 md:w-3 md:h-3',
      translate: 'translate-x-4'
    },
    md: {
      track: 'w-8 h-4 md:w-12 md:h-6',
      thumb: 'w-3 h-3 md:w-5 md:h-5',
      translate: 'translate-x-6'
    },
    lg: {
      track: 'w-10 h-5 md:w-16 md:h-8',
      thumb: 'w-4 h-4 md:w-7 md:h-7',
      translate: 'translate-x-8'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      {/* Left Label */}
      {leftLabel && (
        <span className="text-xs md:text-sm font-medium text-foreground">
          {leftLabel}
        </span>
      )}

      {/* Toggle Switch */}
      <motion.button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`relative inline-flex ${currentSize.track} rounded-full focus:outline-none ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        {/* Track */}
        <motion.div
          className={`${currentSize.track} rounded-full transition-all`}
          animate={{
            backgroundColor: isChecked
              ? 'var(--foreground)'
              : 'var(--secondary)'
          }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut'
          }}
        />

        {/* Thumb */}
        <motion.span
          className={`${currentSize.thumb} absolute top-0.5 left-0.5 pointer-events-none inline-block rounded-full shadow-lg`}
          animate={{
            x: isChecked ? (size === 'sm' ? 16 : size === 'md' ? 24 : 32) : 0,
            backgroundColor: isDark
              ? (isChecked ? '#000000' : '#ffffff')
              : (isChecked ? '#ffffff' : '#000000')
          }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut'
          }}
        />
      </motion.button>

      {/* Right Label */}
      {rightLabel && (
        <span className="text-xs md:text-sm font-medium text-foreground">
          {rightLabel}
        </span>
      )}
    </div>
  );
}
