'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  variant?: 'default' | 'bordered' | 'minimal' | 'card';
  size?: 'sm' | 'md' | 'lg';
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  className?: string;
  onToggle?: (itemId: string, isOpen: boolean) => void;
}

export function Accordion({
  items,
  variant = 'default',
  size = 'md',
  allowMultiple = false,
  defaultOpenItems = [],
  className = '',
  onToggle
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpenItems));

  const toggleItem = (itemId: string) => {
    const item = items.find(item => item.id === itemId);
    if (item?.disabled) return;

    setOpenItems(prev => {
      const newSet = new Set(prev);
      
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
        onToggle?.(itemId, false);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(itemId);
        onToggle?.(itemId, true);
      }
      
      return newSet;
    });
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'px-3 py-2 md:px-4 md:py-3',
          title: 'text-xs md:text-sm',
          content: 'text-xs md:text-sm',
          icon: 'w-3 h-3 md:w-4 md:h-4',
          gap: 'gap-2 md:gap-3'
        };
      case 'md':
        return {
          container: 'px-4 py-3 md:px-5 md:py-4',
          title: 'text-sm md:text-base',
          content: 'text-xs md:text-sm',
          icon: 'w-4 h-4 md:w-5 md:h-5',
          gap: 'gap-3 md:gap-4'
        };
      case 'lg':
        return {
          container: 'px-5 py-4 md:px-6 md:py-5',
          title: 'text-base md:text-lg',
          content: 'text-sm md:text-base',
          icon: 'w-5 h-5 md:w-6 md:h-6',
          gap: 'gap-4 md:gap-5'
        };
      default:
        return {
          container: 'px-4 py-3 md:px-5 md:py-4',
          title: 'text-sm md:text-base',
          content: 'text-xs md:text-sm',
          icon: 'w-4 h-4 md:w-5 md:h-5',
          gap: 'gap-3 md:gap-4'
        };
    }
  };

  const getVariantClasses = () => {
    return {
      container: 'space-y-0',
      item: 'border-b border-border last:border-b-0',
      header: '',
      content: 'bg-transparent'
    };
  };

  const sizeClasses = getSizeClasses();
  const variantClasses = getVariantClasses();

  return (
    <div className={`${variantClasses.container} ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id);
        const isDisabled = item.disabled;

        return (
          <div key={item.id} className={variantClasses.item}>
            {/* Header */}
            <motion.button
              onClick={() => toggleItem(item.id)}
              disabled={isDisabled}
              className={`
                w-full flex items-center justify-between px-4 py-2 md:px-5 md:py-3
                ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <div className={`flex items-center ${sizeClasses.gap} flex-1 text-left`}>
                {item.icon && (
                  <span className={`flex-shrink-0 ${sizeClasses.icon} text-foreground/70`}>
                    {item.icon}
                  </span>
                )}
                <span className={`${sizeClasses.title} font-medium text-foreground`}>
                  {item.title}
                </span>
              </div>
              
              {/* Chevron Icon */}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`flex-shrink-0 ${sizeClasses.icon} text-foreground/60`}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.button>

            {/* Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className={`px-4 pb-2 md:px-5 md:pb-3  ${sizeClasses.content} text-foreground/70 ${variantClasses.content}`}>
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// Preset configurations for common use cases
export const AccordionPresets = {
  // FAQ Accordion
  faq: {
    variant: 'bordered' as const,
    size: 'md' as const,
    allowMultiple: true
  },

  // Navigation Accordion
  navigation: {
    variant: 'minimal' as const,
    size: 'sm' as const,
    allowMultiple: true
  },

  // Card Accordion
  card: {
    variant: 'card' as const,
    size: 'md' as const,
    allowMultiple: false
  },

  // Simple Accordion
  simple: {
    variant: 'default' as const,
    size: 'md' as const,
    allowMultiple: false
  }
};

// Common icons for accordion items
export const AccordionIcons = {
  Question: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Info: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Document: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  User: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
};
