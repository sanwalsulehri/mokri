'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'minimal';
  icon?: React.ReactNode;
  disabled?: boolean;
}

export function Collapsible({
  title,
  children,
  defaultOpen = false,
  className = '',
  size = 'md',
  variant = 'default',
  icon,
  disabled = false
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const sizeClasses = {
    sm: {
      container: 'text-sm',
      title: 'text-sm font-medium',
      content: 'text-xs',
      padding: 'p-3',
      icon: 'w-4 h-4'
    },
    md: {
      container: 'text-base',
      title: 'text-base font-semibold',
      content: 'text-sm',
      padding: 'p-4',
      icon: 'w-5 h-5'
    },
    lg: {
      container: 'text-lg',
      title: 'text-lg font-semibold',
      content: 'text-base',
      padding: 'p-6',
      icon: 'w-6 h-6'
    }
  };

  const variantClasses = {
    default: 'bg-background border border-border rounded-lg shadow-sm',
    bordered: 'bg-background border-2 border-border rounded-lg',
    minimal: 'bg-transparent'
  };

  const toggleCollapsible = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {/* Header */}
      <button
        onClick={toggleCollapsible}
        disabled={disabled}
        className={`
          w-full flex items-center justify-between
          ${sizeClasses[size].padding}
          ${sizeClasses[size].title}
          text-foreground
          transition-colors duration-200
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-muted/50 cursor-pointer'}
          ${variant !== 'minimal' ? 'rounded-t-lg' : ''}
          ${!isOpen && variant !== 'minimal' ? 'rounded-b-lg' : ''}
        `}
      >
        <div className="flex items-center gap-2">
          {icon && (
            <span className={`${sizeClasses[size].icon} text-foreground/70`}>
              {icon}
            </span>
          )}
          <span>{title}</span>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={`${sizeClasses[size].icon} text-foreground/70`}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
            }}
            className="overflow-hidden"
          >
            <motion.div
              className={`
                ${sizeClasses[size].padding}
                ${sizeClasses[size].content}
                text-foreground/80
                ${variant !== 'minimal' ? 'border-t border-border bg-muted/20' : ''}
                ${variant !== 'minimal' ? 'rounded-b-lg' : ''}
              `}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Collapsible Group for multiple collapsibles
interface CollapsibleGroupProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg';
  allowMultiple?: boolean;
}

export function CollapsibleGroup({
  children,
  className = '',
  spacing = 'md',
  allowMultiple = true
}: CollapsibleGroupProps) {
  const spacingClasses = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6'
  };

  return (
    <div className={`${spacingClasses[spacing]} ${className}`}>
      {children}
    </div>
  );
}

// Preset configurations
export const CollapsiblePresets = {
  // FAQ style collapsible
  faq: {
    variant: 'bordered' as const,
    size: 'md' as const
  },
  
  // Settings panel style
  settings: {
    variant: 'default' as const,
    size: 'sm' as const
  },
  
  // Documentation style
  docs: {
    variant: 'minimal' as const,
    size: 'md' as const
  },
  
  // Large content panels
  panels: {
    variant: 'bordered' as const,
    size: 'lg' as const
  }
};

// Common icons for collapsibles
export const CollapsibleIcons = {
  Settings: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  
  Info: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  
  Help: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  
  Document: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  
  Code: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  
  Chevron: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
};
