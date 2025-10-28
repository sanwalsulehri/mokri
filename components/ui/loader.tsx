'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'outline';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export function Loader({
  size = 'md',
  variant = 'spinner',
  color = 'primary',
  className = ''
}: LoaderProps) {
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          spinner: 'w-4 h-4',
          dots: 'w-2 h-2',
          pulse: 'w-3 h-3',
          bars: 'w-1 h-4',
          outline: 'w-4 h-4'
        };
      case 'lg':
        return {
          spinner: 'w-8 h-8',
          dots: 'w-3 h-3',
          pulse: 'w-6 h-6',
          bars: 'w-2 h-8',
          outline: 'w-8 h-8'
        };
      default: // md
        return {
          spinner: 'w-6 h-6',
          dots: 'w-2.5 h-2.5',
          pulse: 'w-4 h-4',
          bars: 'w-1.5 h-6',
          outline: 'w-6 h-6'
        };
    }
  };

  const getColorStyles = () => {
    switch (color) {
      case 'secondary':
        return 'text-gray-500';
      case 'accent':
        return 'text-blue-500';
      default: // primary
        return 'text-foreground';
    }
  };

  const sizeStyles = getSizeStyles();
  const colorStyles = getColorStyles();

  const renderSpinner = () => (
    <motion.div
      className={`${sizeStyles.spinner} ${colorStyles} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </motion.div>
  );

  const renderDots = () => (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${sizeStyles.dots} ${colorStyles} rounded-full bg-current`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <motion.div
      className={`${sizeStyles.pulse} ${colorStyles} ${className} rounded-full bg-current`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  const renderBars = () => (
    <div className={`flex space-x-1 items-end h-6 ${className}`}>
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className={`${sizeStyles.bars} ${colorStyles} bg-current`}
          animate={{
            height: ['25%', '100%', '25%']
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  const renderOutline = () => (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeStyles.outline} border-2 border-current border-t-transparent rounded-full animate-spin`}></div>
    </div>
  );

  switch (variant) {
    case 'dots':
      return renderDots();
    case 'pulse':
      return renderPulse();
    case 'bars':
      return renderBars();
    case 'outline':
      return renderOutline();
    default:
      return renderSpinner();
  }
}

// Loader presets for common use cases
export const LoaderPresets = {
  smallSpinner: {
    size: 'sm' as const,
    variant: 'spinner' as const,
    color: 'primary' as const
  },
  mediumDots: {
    size: 'md' as const,
    variant: 'dots' as const,
    color: 'primary' as const
  },
  largePulse: {
    size: 'lg' as const,
    variant: 'pulse' as const,
    color: 'primary' as const
  },
  accentBars: {
    size: 'md' as const,
    variant: 'bars' as const,
    color: 'accent' as const
  },
  outlineLoader: {
    size: 'md' as const,
    variant: 'outline' as const,
    color: 'primary' as const
  }
};
