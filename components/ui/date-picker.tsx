'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from './calendar';

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  showToday?: boolean;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Select a date...",
  className = '',
  size = 'sm',
  disabled = false,
  minDate,
  maxDate,
  showToday = true
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: {
      trigger: 'text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2'
    },
    md: {
      trigger: 'text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3'
    },
    lg: {
      trigger: 'text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4'
    }
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  };

  const formatDisplayDate = (date: Date | null) => {
    if (!date) return placeholder;
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (datePickerRef.current && !datePickerRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    // Use a small delay to ensure the calendar is rendered
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }, 10);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={datePickerRef}>
      {/* Trigger Button */}
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full flex items-center justify-between
          ${sizeClasses[size].trigger}
          bg-background border border-border rounded-lg
          text-foreground placeholder:text-muted-foreground
          hover:border-border/80 hover:shadow-sm
          focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-1 focus:shadow-md
          transition-all duration-200 ease-out shadow-sm
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <span className={`${selectedDate ? 'text-foreground' : 'text-muted-foreground'}`}>
          {formatDisplayDate(selectedDate)}
        </span>
        
        {/* Down Arrow Icon */}
        <svg 
          className={`w-4 h-4 text-foreground/60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Calendar Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-[9999] left-1/2 -translate-x-1/2 mt-1"
          >
            <Calendar
              selectedDate={selectedDate || undefined}
              onDateSelect={handleDateSelect}
              size={size}
              showToday={showToday}
              disabledDates={minDate || maxDate ? [minDate, maxDate].filter(Boolean) as Date[] : []}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Preset configurations
export const DatePickerPresets = {
  small: {
    size: 'sm' as const,
    showToday: true
  },
  medium: {
    size: 'md' as const,
    showToday: true
  },
  large: {
    size: 'lg' as const,
    showToday: true
  }
};
