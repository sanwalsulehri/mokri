'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface ProgressBarProps {
  value?: number; // 0-100
  max?: number; // default 100
  size?: 'sm' | 'md' | 'lg';
  type?: 'linear' | 'scroll';
  color?: string; // progress bar color
  backgroundColor?: string; // background color
  showLabel?: boolean;
  label?: string;
  showPercentage?: boolean;
  animated?: boolean;
  striped?: boolean;
  scrollProgress?: boolean; // enable scroll tracking
  className?: string;
}

export function ProgressBar({
  value = 0,
  max = 100,
  size = 'sm',
  type = 'linear',
  color,
  backgroundColor,
  showLabel = false,
  label,
  showPercentage = false,
  animated = false,
  striped = false,
  scrollProgress = false,
  className = ''
}: ProgressBarProps) {
  const [scrollValue, setScrollValue] = useState(0);
  
  // Track scroll progress if scrollProgress is enabled
  useEffect(() => {
    if (scrollProgress) {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollValue(Math.min(Math.max(scrollPercent, 0), 100));
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollProgress]);

  const currentValue = scrollProgress ? scrollValue : value;
  const percentage = Math.min(Math.max((currentValue / max) * 100, 0), 100);

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'h-4',
          text: 'text-xs',
          label: 'text-xs'
        };
      case 'lg':
        return {
          container: 'h-8',
          text: 'text-base',
          label: 'text-base'
        };
      default: // md
        return {
          container: 'h-6',
          text: 'text-sm',
          label: 'text-sm'
        };
    }
  };

  const sizeStyles = getSizeStyles();
  
  // Helper function to get color class or style
  const getColorStyle = (colorValue: string | undefined) => {
    if (!colorValue) return { className: 'bg-foreground' };
    
    // Check if it's a hex color
    if (colorValue.startsWith('#')) {
      return { backgroundColor: colorValue };
    }
    
    // Check if it's a Tailwind color name
    const tailwindColors: { [key: string]: string } = {
      'primary': 'bg-primary',
      'secondary': 'bg-secondary', 
      'accent': 'bg-accent',
      'foreground': 'bg-foreground',
      'background': 'bg-background',
      'muted': 'bg-muted',
      'success': 'bg-green-500',
      'warning': 'bg-yellow-500',
      'error': 'bg-red-500',
      'info': 'bg-blue-500'
    };
    
    if (tailwindColors[colorValue]) {
      return { className: tailwindColors[colorValue] };
    }
    
    // Default to hex if not recognized
    return { backgroundColor: colorValue };
  };

  // Helper function to get background color class or style
  const getBackgroundColorStyle = (colorValue: string | undefined) => {
    if (!colorValue) return { className: 'bg-muted' };
    
    // Check if it's a hex color
    if (colorValue.startsWith('#')) {
      return { backgroundColor: colorValue };
    }
    
    // Check if it's a Tailwind color name
    const tailwindBgColors: { [key: string]: string } = {
      'primary': 'bg-blue-200',
      'secondary': 'bg-gray-200', 
      'accent': 'bg-purple-200',
      'foreground': 'bg-gray-800',
      'background': 'bg-white',
      'muted': 'bg-gray-100',
      'success': 'bg-green-100',
      'warning': 'bg-yellow-100',
      'error': 'bg-red-100',
      'info': 'bg-blue-100'
    };
    
    if (tailwindBgColors[colorValue]) {
      return { className: tailwindBgColors[colorValue] };
    }
    
    // Default to hex if not recognized
    return { backgroundColor: colorValue };
  };

  // Helper function to get text color class or style
  const getTextColorStyle = (colorValue: string | undefined) => {
    if (!colorValue) return { className: 'text-foreground' };
    
    // Check if it's a hex color
    if (colorValue.startsWith('#')) {
      return { color: colorValue };
    }
    
    // Check if it's a Tailwind color name
    const tailwindTextColors: { [key: string]: string } = {
      'primary': 'text-primary',
      'secondary': 'text-secondary', 
      'accent': 'text-accent',
      'foreground': 'text-foreground',
      'background': 'text-background',
      'muted': 'text-muted',
      'success': 'text-green-600',
      'warning': 'text-yellow-600',
      'error': 'text-red-600',
      'info': 'text-blue-600'
    };
    
    if (tailwindTextColors[colorValue]) {
      return { className: tailwindTextColors[colorValue] };
    }
    
    // Default to hex if not recognized
    return { color: colorValue };
  };

  const progressClasses = `
    ${sizeStyles.container}
    ${striped ? 'bg-stripes' : ''}
    ${animated ? 'animate-pulse' : ''}
  `.trim();

  // Scroll Progress Bar
  const renderScroll = () => {
    const colorStyle = getColorStyle(color);
    const bgColorStyle = getBackgroundColorStyle(backgroundColor);
    
    return (
      <div className={`fixed top-0 left-0 w-full z-50 ${className}`}>
        <div 
          className={`w-full h-2 ${bgColorStyle.className}`}
          style={bgColorStyle.backgroundColor ? { backgroundColor: bgColorStyle.backgroundColor } : {}}
        >
          <motion.div
            className={`h-full ${colorStyle.className}`}
            style={colorStyle.backgroundColor ? { backgroundColor: colorStyle.backgroundColor } : {}}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ 
              duration: 0.1, 
              ease: "easeOut"
            }}
          />
        </div>
      </div>
    );
  };



  // Linear Progress Bar (default)
  const renderLinear = () => {
    const colorStyle = getColorStyle(color);
    const bgColorStyle = getBackgroundColorStyle(backgroundColor);
    const textColorStyle = getTextColorStyle(color);
    
    return (
      <div className={`w-full ${className}`}>
        {/* Label and Percentage */}
        {(showLabel || showPercentage) && (
          <div className="flex justify-between items-center mb-2">
            {showLabel && (
              <span className={`${sizeStyles.label} font-medium text-foreground`}>
                {label || 'Progress'}
              </span>
            )}
            {showPercentage && (
              <span 
                className={`${sizeStyles.text} ${textColorStyle.className}`}
                style={textColorStyle.color ? { color: textColorStyle.color } : {}}
              >
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        )}

        {/* Progress Bar Container */}
        <div 
          className={`w-full rounded-full overflow-hidden ${sizeStyles.container} shadow-inner ${bgColorStyle.className}`}
          style={bgColorStyle.backgroundColor ? { backgroundColor: bgColorStyle.backgroundColor } : {}}
        >
          <motion.div
            className={`${progressClasses} h-full rounded-full shadow-sm ${colorStyle.className}`}
            style={colorStyle.backgroundColor ? { backgroundColor: colorStyle.backgroundColor } : {}}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              type: "tween"
            }}
          />
        </div>

        {/* Value Display */}
        {!showPercentage && (
          <div className="flex justify-between items-center mt-1">
            <span className={`${sizeStyles.text} text-foreground/70`}>
              {value}
            </span>
            <span className={`${sizeStyles.text} text-foreground/70`}>
              {max}
            </span>
          </div>
        )}
      </div>
    );
  };

  // Render based on type
  switch (type) {
    case 'scroll':
      return renderScroll();
    default:
      return renderLinear();
  }
}

// Progress Bar presets for common use cases
export const ProgressBarPresets = {
  upload: {
    variant: 'default' as const,
    showLabel: true,
    label: 'Upload Progress',
    showPercentage: true,
    animated: true
  },
  download: {
    variant: 'success' as const,
    showLabel: true,
    label: 'Download Progress',
    showPercentage: true
  },
  error: {
    variant: 'error' as const,
    showLabel: true,
    label: 'Error Progress',
    showPercentage: true
  }
};
