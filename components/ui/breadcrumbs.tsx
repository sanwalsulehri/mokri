'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
  showHome?: boolean;
  homeIcon?: React.ReactNode;
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}

export function Breadcrumbs({
  items,
  separator,
  className = "",
  showHome = true,
  homeIcon,
  onItemClick
}: BreadcrumbsProps) {
  const defaultSeparator = (
    <svg className="h-3 w-3 md:h-4 md:w-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const defaultHomeIcon = (
    <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );

  const allItems = showHome 
    ? [{ label: 'Home', href: '/', icon: homeIcon || defaultHomeIcon }, ...items]
    : items;

  return (
    <nav className={`flex items-center space-x-1 text-xs md:text-sm ${className}`} aria-label="Breadcrumb">
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1;
        const isClickable = item.href || onItemClick;

        return (
          <React.Fragment key={index}>
            <motion.div
              className={`flex items-center gap-0.5 md:gap-1 ${
                isClickable && !isLast
                  ? 'cursor-pointer hover:text-foreground transition-colors duration-200'
                  : ''
              } ${
                isLast ? 'text-foreground font-medium' : 'text-foreground/60'
              }`}
              onClick={() => {
                if (isClickable && !isLast) {
                  onItemClick?.(item, index);
                }
              }}
            >
              {item.icon && (
                <span className="flex-shrink-0">
                  {item.icon}
                </span>
              )}
              <span className="truncate">
                {item.label}
              </span>
            </motion.div>

            {!isLast && (
              <span className="flex-shrink-0 text-foreground/40">
                {separator || defaultSeparator}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

// Preset breadcrumb configurations
export const BreadcrumbPresets = {
  // File system navigation
  fileSystem: (path: string[]) => [
    { label: 'Documents', icon: (
      <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )},
    ...path.map(segment => ({ label: segment }))
  ],

  // E-commerce navigation
  ecommerce: (category: string, subcategory?: string, product?: string) => [
    { label: 'Shop', icon: (
      <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )},
    { label: category },
    ...(subcategory ? [{ label: subcategory }] : []),
    ...(product ? [{ label: product }] : [])
  ],

  // Admin panel navigation
  admin: (section: string, subsection?: string) => [
    { label: 'Admin', icon: (
      <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )},
    { label: section },
    ...(subsection ? [{ label: subsection }] : [])
  ]
};
