'use client';

import React from 'react';
import { Button } from './button';
import { DropdownMenu, DropdownIcons } from './dropdown-menu';

interface ButtonGroupProps {
  children: React.ReactNode;
  variant?: 'default' | 'segmented' | 'attached' | 'spaced' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  disabled?: boolean;
}

interface BorderedButtonGroupProps {
  buttons: Array<{
    label: string;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    variant?: 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
  }>;
  moreOptions?: Array<{
    label: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    divider?: boolean;
  }>;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

interface ButtonGroupItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
}

export function ButtonGroup({ 
  children, 
  variant = 'default', 
  size = 'md', 
  orientation = 'horizontal',
  className = '',
  disabled = false
}: ButtonGroupProps) {
  const baseClasses = 'inline-flex';
  const orientationClasses = orientation === 'vertical' ? 'flex-col' : 'flex-row';
  
  const variantClasses = {
    default: orientation === 'horizontal' ? '[&>*:not(:first-child)]:ml-0 [&>*:not(:last-child)]:mr-0 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child):not(:last-child)]:rounded-none' : '[&>*:not(:first-child)]:mt-0 [&>*:not(:last-child)]:mb-0 [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child):not(:last-child)]:rounded-none',
    segmented: orientation === 'horizontal' ? '[&>*:not(:first-child)]:ml-0 [&>*:not(:last-child)]:mr-0 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child)]:border-l-0' : '[&>*:not(:first-child)]:mt-0 [&>*:not(:last-child)]:mb-0 [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child)]:border-t-0',
    attached: orientation === 'horizontal' ? '[&>*:not(:first-child)]:ml-0 [&>*:not(:last-child)]:mr-0 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:first-child)]:shadow-none' : '[&>*:not(:first-child)]:mt-0 [&>*:not(:last-child)]:mb-0 [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:first-child)]:shadow-none',
    spaced: orientation === 'horizontal' ? 'gap-1 sm:gap-2' : 'gap-1 sm:gap-2',
    bordered: 'border border-border divide-x divide-border rounded-lg overflow-hidden bg-background'
  };

  return (
    <div 
      className={`${baseClasses} ${orientationClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`}
      role="group"
    >
      {children}
    </div>
  );
}

export function ButtonGroupItem({ 
  children, 
  onClick, 
  active = false, 
  disabled = false,
  className = '',
  variant = 'default'
}: ButtonGroupItemProps) {
  const variantClasses = {
    default: active ? 'bg-foreground text-background' : 'bg-transparent text-foreground hover:bg-foreground/10',
    primary: active ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-600 hover:bg-blue-50',
    secondary: active ? 'bg-gray-600 text-white' : 'bg-transparent text-gray-600 hover:bg-gray-50',
    destructive: active ? 'bg-red-600 text-white' : 'bg-transparent text-red-600 hover:bg-red-50',
    outline: active ? 'bg-foreground text-background border-foreground' : 'bg-transparent text-foreground border-border hover:bg-foreground/10',
    ghost: active ? 'bg-foreground/10 text-foreground' : 'bg-transparent text-foreground hover:bg-foreground/10'
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`${variantClasses[variant]} ${active ? 'shadow-sm' : ''} text-xs sm:text-sm px-2 py-1 sm:px-3 rounded-none sm:py-2 ${className}`}
      bg={false}
    >
      {children}
    </Button>
  );
}

// Bordered Button Group with Dropdown
export function BorderedButtonGroup({ 
  buttons, 
  moreOptions = [], 
  size = 'md', 
  className = '',
  disabled = false
}: BorderedButtonGroupProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 sm:px-3 sm:py-[6px] text-xs sm:text-sm',
    md: 'px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base',
    lg: 'px-4 py-2.5 sm:px-6 sm:py-3 text-base sm:text-lg'
  };


  const getButtonVariantClasses = (variant: string, active: boolean) => {
    const baseClasses = {
      default: active ? 'bg-foreground text-background' : 'bg-muted/50 text-foreground hover:bg-muted/70',
      primary: active ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-600 hover:bg-blue-50',
      secondary: active ? 'bg-gray-600 text-white' : 'bg-transparent text-gray-600 hover:bg-gray-50',
      destructive: active ? 'bg-red-600 text-white' : 'bg-transparent text-red-600 hover:bg-red-50',
      outline: active ? 'bg-foreground text-background border-foreground' : 'bg-transparent text-foreground border-border hover:bg-foreground/10',
      ghost: active ? 'bg-foreground/10 text-foreground' : 'bg-transparent text-foreground hover:bg-foreground/10'
    };
    return baseClasses[variant as keyof typeof baseClasses] || baseClasses.default;
  };

  return (
    <div className={`inline-flex border border-border rounded-lg bg-background ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`}>
      {/* Main buttons */}
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          disabled={button.disabled || disabled}
            className={`
              ${sizeClasses[size]} 
              flex items-center justify-center gap-1 sm:gap-2 
              cursor-pointer leading-tight 
              font-medium transition-all duration-200 ease-in-out 
              focus:outline-none
              ${getButtonVariantClasses(button.variant || 'default', button.active || false)}
              ${button.active ? 'shadow-sm' : ''}
              ${button.disabled || disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
              ${index > 0 ? 'border-l border-border' : ''}
              ${index === 0 ? 'rounded-l-lg overflow-hidden' : ''}
              ${index === buttons.length - 1 && moreOptions.length === 0 ? 'rounded-r-lg overflow-hidden' : ''}
              ${index === buttons.length - 1 && moreOptions.length > 0 ? 'border-r border-border' : ''}
            `}
        >
          {button.label}
        </button>
      ))}
      
      {/* More options dropdown */}
      {moreOptions.length > 0 && (
        <DropdownMenu
          trigger={
            <button
              className={`
                ${sizeClasses[size]} 
                flex items-center justify-center gap-1
                cursor-pointer leading-tight 
                font-medium transition-all duration-200 ease-in-out 
                focus:outline-none
                bg-muted/50 text-foreground hover:bg-muted/70
                border-l border-border rounded-r-lg overflow-hidden
                ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
              `}
            >
              <span className="hidden sm:inline">More</span>
              <span className="sm:hidden text-xs">...</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          }
          options={moreOptions.map(option => ({
            label: option.label,
            value: option.label.toLowerCase().replace(/\s+/g, '-'),
            icon: option.icon,
            onClick: option.onClick,
            disabled: option.disabled,
            divider: option.divider
          }))}
          align="right"
        />
      )}
    </div>
  );
}

// Preset configurations for common use cases
export const ButtonGroupPresets = {
  // Segmented control for filters
  filter: {
    variant: 'segmented' as const,
    size: 'sm' as const,
    orientation: 'horizontal' as const
  },
  
  // Toolbar buttons
  toolbar: {
    variant: 'attached' as const,
    size: 'md' as const,
    orientation: 'horizontal' as const
  },
  
  // Action buttons with spacing
  actions: {
    variant: 'spaced' as const,
    size: 'md' as const,
    orientation: 'horizontal' as const
  },
  
  // Vertical navigation
  vertical: {
    variant: 'default' as const,
    size: 'md' as const,
    orientation: 'vertical' as const
  },
  
  // Small segmented control
  smallSegmented: {
    variant: 'segmented' as const,
    size: 'sm' as const,
    orientation: 'horizontal' as const
  },
  
  // Large action group
  largeActions: {
    variant: 'spaced' as const,
    size: 'lg' as const,
    orientation: 'horizontal' as const
  }
};

// Common button group configurations
export const ButtonGroupConfigs = {
  // File operations
  fileOperations: [
    { label: 'New', variant: 'primary' as const },
    { label: 'Open', variant: 'default' as const },
    { label: 'Save', variant: 'default' as const },
    { label: 'Export', variant: 'secondary' as const }
  ],
  
  // View modes
  viewModes: [
    { label: 'Grid', variant: 'default' as const },
    { label: 'List', variant: 'default' as const },
    { label: 'Card', variant: 'default' as const }
  ],
  
  // Sort options
  sortOptions: [
    { label: 'Name', variant: 'default' as const },
    { label: 'Date', variant: 'default' as const },
    { label: 'Size', variant: 'default' as const },
    { label: 'Type', variant: 'default' as const }
  ],
  
  // Status filters
  statusFilters: [
    { label: 'All', variant: 'default' as const },
    { label: 'Active', variant: 'default' as const },
    { label: 'Pending', variant: 'default' as const },
    { label: 'Completed', variant: 'default' as const }
  ]
};
