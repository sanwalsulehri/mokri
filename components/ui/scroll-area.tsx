'use client';

import React, { useState, useRef, useEffect } from 'react';

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  maxHeight?: string;
  title?: string;
  showBorder?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function ScrollArea({
  children,
  className = '',
  maxHeight = 'max-h-48',
  title,
  showBorder = true,
  size = 'md'
}: ScrollAreaProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: {
      title: 'px-2 py-1.5 text-xs sm:text-sm',
      item: 'px-2 py-1.5 text-xs sm:text-sm',
      maxHeight: 'max-h-32 sm:max-h-40'
    },
    md: {
      title: 'px-3 py-2 text-sm sm:text-base',
      item: 'px-3 py-2 text-sm sm:text-base',
      maxHeight: 'max-h-48 sm:max-h-56'
    },
    lg: {
      title: 'px-4 py-2.5 text-base sm:text-lg',
      item: 'px-4 py-2.5 text-base sm:text-lg',
      maxHeight: 'max-h-64 sm:max-h-72'
    }
  };

  const currentMaxHeight = maxHeight === 'max-h-48' ? sizeClasses[size].maxHeight : maxHeight;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsScrolled(scrollRef.current.scrollTop > 0);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={scrollRef}
        className={`
          ${currentMaxHeight} overflow-y-auto
          ${showBorder ? 'border border-border rounded-lg' : ''}
          rounded-lg
        `}
      >
        {title && (
          <div className={`${sizeClasses[size].title} text-foreground border-b border-border sticky top-0 bg-background z-10 font-semibold`}>
            {title}
          </div>
        )}
        <div>
          {React.Children.map(children, (child, index) => (
            <div key={index} className={`${sizeClasses[size].item} hover:bg-muted/30 transition-colors ${index > 0 ? 'border-t border-border' : ''}`}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Preset configurations
export const ScrollAreaPresets = {
  small: {
    size: 'sm' as const,
    maxHeight: 'max-h-32 sm:max-h-40',
    showBorder: true
  },
  medium: {
    size: 'md' as const,
    maxHeight: 'max-h-48 sm:max-h-56',
    showBorder: true
  },
  large: {
    size: 'lg' as const,
    maxHeight: 'max-h-64 sm:max-h-72',
    showBorder: true
  }
};
