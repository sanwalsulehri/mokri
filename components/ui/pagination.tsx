'use client';

import React from 'react';
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
  disabled = false
}: PaginationProps) {
  
  // Calculate visible page range
  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const sizeClasses = {
    sm: {
      button: 'px-2 py-1 text-xs min-w-[28px] h-7',
      icon: 'h-3 w-3',
      gap: 'gap-1'
    },
    md: {
      button: 'px-3 py-2 text-sm min-w-[36px] h-9',
      icon: 'h-4 w-4',
      gap: 'gap-2'
    },
    lg: {
      button: 'px-4 py-3 text-base min-w-[44px] h-11',
      icon: 'h-5 w-5',
      gap: 'gap-3'
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

    return (
      <motion.button
        key={page}
        onClick={() => handlePageChange(page)}
        disabled={isDisabled}
        className={`
          ${currentSize.button}
          ${isActive ? currentVariant.active : currentVariant.button}
          ${isDisabled ? currentVariant.disabled : 'cursor-pointer'}
          flex items-center justify-center font-medium
          focus:outline-none focus:ring-2 focus:ring-foreground/20
        `}
        whileHover={!isDisabled ? { scale: 1.05 } : {}}
        whileTap={!isDisabled ? { scale: 0.95 } : {}}
        transition={{ duration: 0.1 }}
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
          ${currentVariant.button}
          ${disabled ? currentVariant.disabled : 'cursor-pointer'}
          flex items-center justify-center font-medium
          focus:outline-none focus:ring-2 focus:ring-foreground/20
        `}
        whileHover={!disabled ? { scale: 1.05 } : {}}
        whileTap={!disabled ? { scale: 0.95 } : {}}
        transition={{ duration: 0.1 }}
        aria-label={label}
      >
        {icon}
      </motion.button>
    );
  };

  if (totalPages <= 1) return null;

  return (
    <div className={`${currentVariant.container} ${currentSize.gap} ${className}`}>
      {/* First Page */}
      {showFirstLast && !isFirstPage && (
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
          {/* Show ellipsis at start if needed */}
          {visiblePages[0] > 1 && (
            <>
              {renderPageButton(1)}
              {visiblePages[0] > 2 && (
                <span className={`${currentSize.button} flex items-center justify-center text-foreground/60`}>
                  ...
                </span>
              )}
            </>
          )}

          {/* Visible page numbers */}
          {visiblePages.map(page => renderPageButton(page, page === currentPage))}

          {/* Show ellipsis at end if needed */}
          {visiblePages[visiblePages.length - 1] < totalPages && (
            <>
              {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                <span className={`${currentSize.button} flex items-center justify-center text-foreground/60`}>
                  ...
                </span>
              )}
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

      {/* Last Page */}
      {showFirstLast && !isLastPage && (
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
