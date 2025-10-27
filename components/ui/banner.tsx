'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';

export interface BannerProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  children?: React.ReactNode;
  headerStyle?: boolean;
}

export function Banner({
  title,
  description,
  variant = 'default',
  size = 'md',
  dismissible = false,
  onDismiss,
  action,
  className = '',
  children,
  headerStyle = false
}: BannerProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          container: 'bg-muted border-border text-foreground',
          icon: 'text-foreground',
          iconBg: '',
          cross: 'text-foreground/70'
        };
      case 'warning':
        return {
          container: 'bg-muted border-border text-foreground',
          icon: 'text-foreground',
          iconBg: '',
          cross: 'text-foreground/70'
        };
      case 'error':
        return {
          container: 'bg-muted border-border text-red-600',
          icon: 'text-red-600',
          iconBg: '',
          cross: 'text-red-600'
        };
      case 'info':
        return {
          container: 'bg-muted border-border text-foreground',
          icon: 'text-foreground',
          iconBg: '',
          cross: 'text-foreground/70'
        };
      case 'gradient':
        return {
          container: 'bg-muted border-border text-foreground',
          icon: 'text-foreground',
          iconBg: '',
          cross: 'text-foreground/70'
        };
      default:
        return {
          container: 'bg-muted border-border text-foreground',
          icon: 'text-foreground',
          iconBg: '',
          cross: 'text-foreground/70'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'px-3 py-1.5 md:px-4 md:py-2',
          icon: 'w-3 h-3 md:w-4 md:h-4',
          iconContainer: 'w-5 h-5 md:w-6 md:h-6',
          title: 'text-xs md:text-sm font-semibold',
          description: 'text-xs md:text-sm opacity-90',
          gap: 'gap-1.5 md:gap-2'
        };
      case 'lg':
        return {
          container: 'px-4 py-3 md:px-4 md:py-4',
          icon: 'w-4 h-4 md:w-5 md:h-5',
          iconContainer: 'w-6 h-6 md:w-8 md:h-8',
          title: 'text-base md:text-lg font-semibold',
          description: 'text-sm md:text-base opacity-90',
          gap: 'gap-2 md:gap-3'
        };
      default: // md
        return {
          container: 'px-4 py-2.5 md:px-5 md:py-3',
          icon: 'w-3 h-3 md:w-4 md:h-4',
          iconContainer: 'w-5 h-5 md:w-6 md:h-6',
          title: 'text-sm md:text-base font-semibold',
          description: 'text-xs md:text-sm opacity-90',
          gap: 'gap-1.5 md:gap-2'
        };
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return (
          <svg className={sizeStyles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className={sizeStyles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'error':
        return (
          <svg className={sizeStyles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'info':
        return (
          <svg className={sizeStyles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6h.01M18 14a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6h.01" />
          </svg>
        );
      default:
        return (
          <svg className={sizeStyles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`
        ${headerStyle ? 'border-b-0' : 'border rounded-lg'}
        ${variantStyles.container}
        ${headerStyle ? 'p-3 md:p-4' : sizeStyles.container}
        ${className}
      `}
    >
      <div className={`flex items-start ${sizeStyles.gap}`}>
        {/* Icon */}
        <div className={`flex-shrink-0 ${sizeStyles.iconContainer} rounded-full  ${variantStyles.icon} mt-1`}>
          {getIcon()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h3 className={`${sizeStyles.title}`}>
              {title}
            </h3>
          )}
          {description && (
            <p className={`${sizeStyles.description}`}>
              {description}
            </p>
          )}
          {children && (
            <div className="mt-2">
              {children}
            </div>
          )}
          {action && (
            <div className="mt-2 md:mt-3">
              <button
                onClick={action.onClick}
                className="text-xs px-2 py-1 md:px-3 md:py-1 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded border border-border transition-colors duration-200"
              >
                {action.label}
              </button>
            </div>
          )}
        </div>

        {/* Dismiss button */}
        {dismissible && onDismiss && (
          <button
            onClick={onDismiss}
            className={`
              flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded flex items-center justify-center
              ${variantStyles.cross} opacity-60 hover:opacity-100 hover:bg-foreground/10
              transition-all duration-200
            `}
          >
            <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  );
}

// Banner presets for common use cases
export const BannerPresets = {
  announcement: {
    variant: 'info' as const,
    title: 'New Feature Available',
    description: 'Check out our latest updates and improvements.',
    action: {
      label: 'Learn More',
      onClick: () => console.log('Learn more clicked')
    }
  },
  maintenance: {
    variant: 'warning' as const,
    title: 'Scheduled Maintenance',
    description: 'We will be performing maintenance on Sunday from 2-4 AM EST.',
    dismissible: true
  },
  success: {
    variant: 'success' as const,
    title: 'Changes Saved',
    description: 'Your changes have been successfully saved.',
    dismissible: true
  },
  error: {
    variant: 'error' as const,
    title: 'Something went wrong',
    description: 'Please try again or contact support if the problem persists.',
    action: {
      label: 'Retry',
      onClick: () => console.log('Retry clicked')
    },
    dismissible: true
  }
};