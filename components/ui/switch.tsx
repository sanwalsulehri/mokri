
'use client';

import React, { useState } from 'react';
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
}

export function Switch({ 
  title,
  leftLabel,
  rightLabel,
  checked = false,
  onChange,
  disabled = false,
  className = "",
  size = 'md'
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (!disabled) {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onChange?.(newChecked);
    }
  };

  const sizeClasses = {
    sm: {
      track: 'w-8 h-4',
      thumb: 'w-3 h-3',
      translate: 'translate-x-4'
    },
    md: {
      track: 'w-12 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-6'
    },
    lg: {
      track: 'w-16 h-8',
      thumb: 'w-7 h-7',
      translate: 'translate-x-8'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Left Label */}
      {leftLabel && (
        <span className="text-sm font-medium text-foreground">
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
        <motion.div
          className={`${currentSize.track} rounded-full transition-colors duration-300 ${
            isChecked 
              ? 'bg-foreground' 
              : 'bg-gray-800 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-300'
          }`}
          animate={{
            backgroundColor: isChecked ? 'var(--foreground)' : 'var(--secondary)'
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        />
        <motion.span
          className={`${currentSize.thumb} absolute top-0.5 left-0.5 pointer-events-none inline-block rounded-full bg-background shadow-lg`}
          animate={{
            x: isChecked ? (size === 'sm' ? 16 : size === 'md' ? 23 : 31) : 0
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut"
          }}
        />
      </motion.button>

      {/* Right Label */}
      {rightLabel && (
        <span className="text-sm font-medium text-foreground">
          {rightLabel}
        </span>
      )}
    </div>
  );
}
  