'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'default' | 'dots' | 'numbers' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  className?: string;
  disabled?: boolean;
  withBorder?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'default',
  size = 'md',
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = "",
  disabled = false,
  withBorder = true
}: PaginationProps) {
  
  // Responsive state for window width
  const [windowWidth, setWindowWidth] = useState(1024); // Default to desktop

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate visible page range with responsive behavior
  const getVisiblePages = () => {
    // Mobile: Always show max 3 pages, desktop: show more
    const maxPages = windowWidth < 768 ? 3 : maxVisiblePages;
    
    // If total pages <= maxPages, show all pages
    if (totalPages <= maxPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // For more pages, show maxPages with ellipsis
    if (currentPage <= Math.floor(maxPages / 2) + 1) {
      return Array.from({ length: maxPages }, (_, i) => i + 1);
    }
    
    if (currentPage >= totalPages - Math.floor(maxPages / 2)) {
      return Array.from({ length: maxPages }, (_, i) => totalPages - maxPages + i + 1);
    }
    
    // Show current page centered
    const start = currentPage - Math.floor(maxPages / 2);
    return Array.from({ length: maxPages }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const sizeClasses = {
    sm: {
      button: 'px-2 py-1 text-xs min-w-[24px] h-6 md:min-w-[28px] md:h-7',
      icon: 'h-3 w-3',
      gap: 'gap-1'
    },
    md: {
      button: 'px-2 py-1 text-xs min-w-[28px] h-7 md:px-3 md:py-2 md:text-sm md:min-w-[36px] md:h-9',
      icon: 'h-3 w-3 md:h-4 md:w-4',
      gap: 'gap-1 md:gap-2'
    },
    lg: {
      button: 'px-3 py-2 text-sm min-w-[32px] h-8 md:px-4 md:py-3 md:text-base md:min-w-[44px] md:h-11',
      icon: 'h-4 w-4 md:h-5 md:w-5',
      gap: 'gap-2 md:gap-3'
    }
  };

  const variantClasses = {
    default: {
      button: 'rounded-md border border-border bg-background hover:bg-foreground/5 transition-colors',
      active: 'bg-foreground text-background border-foreground',
      disabled: 'opacity-50 cursor-not-allowed',
      container: 'flex items-center justify-center'
    },
    dots: {
      button: 'rounded-full w-2 h-2 bg-foreground/20 hover:bg-foreground/40 transition-colors',
      active: 'bg-foreground',
      disabled: 'opacity-30 cursor-not-allowed',
      container: 'flex items-center justify-center'
    },
    numbers: {
      button: 'rounded-md border border-border bg-background hover:bg-foreground/5 transition-colors',
      active: 'bg-foreground text-background border-foreground',
      disabled: 'opacity-50 cursor-not-allowed',
      container: 'flex items-center justify-center'
    },
    minimal: {
      button: 'rounded-md border border-border bg-background hover:bg-foreground/5 transition-colors',
      active: 'bg-foreground text-background border-foreground',
      disabled: 'opacity-50 cursor-not-allowed',
      container: 'flex items-center justify-center'
    }
  };

  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];

  const handlePageChange = (page: number) => {
    if (!disabled && page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageButton = (page: number, isActive: boolean = false) => {
    const isDisabled = disabled || (page === currentPage && !isActive);
    
    if (variant === 'dots') {
      return (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={isDisabled}
          className={`
            ${currentSize.button}
            ${isActive ? currentVariant.active : currentVariant.button}
            ${isDisabled ? currentVariant.disabled : 'cursor-pointer'}
          `}
        />
      );
    }

    // Build button styles based on withBorder prop
    const buttonStyles = withBorder 
      ? `${currentVariant.button}`
      : isActive 
        ? 'rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors'
        : 'rounded-md bg-transparent hover:bg-foreground/5 transition-colors';

    return (
      <motion.button
        key={page}
        onClick={() => handlePageChange(page)}
        disabled={isDisabled}
        className={`
          ${currentSize.button}
          ${isActive ? currentVariant.active : buttonStyles}
          ${isDisabled ? currentVariant.disabled : 'cursor-pointer'}
          flex items-center justify-center font-medium
          focus:outline-none focus:ring-2 focus:ring-foreground/20
        `}
      >
        {page}
      </motion.button>
    );
  };

  const renderIconButton = (onClick: () => void, icon: React.ReactNode, disabled: boolean, label: string) => {
    if (variant === 'dots') return null;

    return (
      <motion.button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`
          ${currentSize.button}
          rounded-md border border-border bg-background hover:bg-foreground/5 transition-colors
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          flex items-center justify-center font-medium
          focus:outline-none focus:ring-2 focus:ring-foreground/20
        `}
        aria-label={label}
      >
        {icon}
      </motion.button>
    );
  };

  if (totalPages <= 1) return null;

  return (
    <div className={`${currentVariant.container} ${currentSize.gap} ${className}`}>
      {/* First Page - Hide on mobile */}
      {showFirstLast && !isFirstPage && windowWidth >= 768 && (
        <>
          {renderIconButton(
            () => handlePageChange(1),
            (
              <svg className={currentSize.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            ),
            disabled,
            "Go to first page"
          )}
        </>
      )}

      {/* Previous Page */}
      {showPrevNext && (
        <>
          {renderIconButton(
            () => handlePageChange(currentPage - 1),
            (
              <svg className={currentSize.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            ),
            disabled || isFirstPage,
            "Go to previous page"
          )}
        </>
      )}

      {/* Page Numbers */}
      {variant !== 'dots' && (
        <>
          {/* Show first page + ellipsis if needed */}
          {totalPages > (windowWidth < 768 ? 3 : maxVisiblePages) && visiblePages[0] > 1 && (
            <>
              {renderPageButton(1)}
              <div className={`${currentSize.button} flex items-center justify-center`}>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-foreground/40"></div>
                  <div className="w-1 h-1 rounded-full bg-foreground/40"></div>
                  <div className="w-1 h-1 rounded-full bg-foreground/40"></div>
                </div>
              </div>
            </>
          )}

          {/* Visible page numbers */}
          {visiblePages.map(page => renderPageButton(page, page === currentPage))}

          {/* Show ellipsis + last page if needed */}
          {totalPages > (windowWidth < 768 ? 3 : maxVisiblePages) && visiblePages[visiblePages.length - 1] < totalPages && (
            <>
              <div className={`${currentSize.button} flex items-center justify-center`}>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-foreground/40"></div>
                  <div className="w-1 h-1 rounded-full bg-foreground/40"></div>
                  <div className="w-1 h-1 rounded-full bg-foreground/40"></div>
                </div>
              </div>
              {renderPageButton(totalPages)}
            </>
          )}
        </>
      )}

      {/* Dots variant - show all pages as dots */}
      {variant === 'dots' && (
        <>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => 
            renderPageButton(page, page === currentPage)
          )}
        </>
      )}

      {/* Next Page */}
      {showPrevNext && (
        <>
          {renderIconButton(
            () => handlePageChange(currentPage + 1),
            (
              <svg className={currentSize.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            ),
            disabled || isLastPage,
            "Go to next page"
          )}
        </>
      )}

      {/* Last Page - Hide on mobile */}
      {showFirstLast && !isLastPage && windowWidth >= 768 && (
        <>
          {renderIconButton(
            () => handlePageChange(totalPages),
            (
              <svg className={currentSize.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            ),
            disabled,
            "Go to last page"
          )}
        </>
      )}
    </div>
  );
}

// Preset configurations for common use cases
export const PaginationPresets = {
  // Simple pagination for basic use cases
  simple: {
    showFirstLast: false,
    showPrevNext: true,
    maxVisiblePages: 3,
    variant: 'default' as const
  },

  // Full-featured pagination
  full: {
    showFirstLast: true,
    showPrevNext: true,
    maxVisiblePages: 5,
    variant: 'default' as const
  },

  // Minimal pagination
  minimal: {
    showFirstLast: false,
    showPrevNext: true,
    maxVisiblePages: 3,
    variant: 'minimal' as const
  },

  // Dots pagination for carousels/sliders
  dots: {
    showFirstLast: false,
    showPrevNext: false,
    maxVisiblePages: 10,
    variant: 'dots' as const
  },

  // Numbers only pagination
  numbers: {
    showFirstLast: false,
    showPrevNext: false,
    maxVisiblePages: 7,
    variant: 'numbers' as const
  }
};
