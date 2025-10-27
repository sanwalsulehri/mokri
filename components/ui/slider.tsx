'use client';

import React, { useState, useRef, useCallback } from 'react';

interface SliderProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function Slider({
  value: controlledValue,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  className = '',
  size = 'md',
  disabled = false
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const sizeClasses = {
    sm: {
      track: 'h-1 sm:h-1.5',
      thumb: 'w-3 h-3 sm:w-3.5 sm:h-3.5',
      thumbOffset: 'top-1/2 -translate-y-1/2 -translate-x-1/2'
    },
    md: {
      track: 'h-1.5 sm:h-2',
      thumb: 'w-3.5 h-3.5 sm:w-4 sm:h-4',
      thumbOffset: 'top-1/2 -translate-y-1/2 -translate-x-1/2'
    },
    lg: {
      track: 'h-2 sm:h-3',
      thumb: 'w-4 h-4 sm:w-5 sm:h-5',
      thumbOffset: 'top-1/2 -translate-y-1/2 -translate-x-1/2'
    }
  };

  const percentage = ((currentValue - min) / (max - min)) * 100;

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (disabled) return;
    
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Prevent default to avoid text selection
    e.preventDefault();

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const newValue = min + (percentage / 100) * (max - min);
      const steppedValue = Math.round(newValue / step) * step;
      const clampedValue = Math.max(min, Math.min(max, steppedValue));

      if (!isControlled) {
        setInternalValue(clampedValue);
      }
      onChange?.(clampedValue);
    };

    const handleMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('selectstart', preventDefault);
    };

    const preventDefault = (e: Event) => e.preventDefault();

    // Prevent text selection during drag
    document.addEventListener('selectstart', preventDefault);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Handle initial click
    handleMouseMove(e.nativeEvent);
  }, [disabled, min, max, step, isControlled, onChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (disabled) return;

    let newValue = currentValue;
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        newValue = Math.max(min, currentValue - step);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        newValue = Math.min(max, currentValue + step);
        break;
      case 'Home':
        e.preventDefault();
        newValue = min;
        break;
      case 'End':
        e.preventDefault();
        newValue = max;
        break;
      default:
        return;
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  }, [disabled, currentValue, min, max, step, isControlled, onChange]);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={sliderRef}
        className={`
          relative ${sizeClasses[size].track}
          bg-muted rounded-full cursor-pointer
          transition-all duration-300 ease-out
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-muted/80'}
        `}
        onMouseDown={handleMouseDown}
      >
        {/* Filled track */}
        <div
          className="absolute left-0 top-0 h-full bg-foreground rounded-full transition-all duration-200 ease-out"
          style={{ width: `${percentage}%` }}
        />
        
        {/* Thumb */}
        <div
          className={`
            absolute ${sizeClasses[size].thumbOffset}
            ${sizeClasses[size].thumb}
            bg-background border-2 border-foreground rounded-full
            cursor-pointer transition-all duration-150 ease-out
            hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-foreground/20
            active:scale-105
            ${disabled ? 'cursor-not-allowed' : ''}
          `}
          style={{ 
            left: `${percentage}%`,
            transition: 'left 0.1s ease-out, box-shadow 0.2s ease-out'
          }}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

// Preset configurations
export const SliderPresets = {
  small: {
    size: 'sm' as const,
    min: 0,
    max: 100,
    step: 1
  },
  medium: {
    size: 'md' as const,
    min: 0,
    max: 100,
    step: 1
  },
  large: {
    size: 'lg' as const,
    min: 0,
    max: 100,
    step: 1
  }
};
