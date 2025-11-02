'use client';

import React, { useState, useId } from 'react';

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
  id?: string;
}

export function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  className = '',
  id
}: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id || (label ? generatedId : undefined);
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const actualChecked = checked !== undefined ? checked : isChecked;

  const sizeClasses = {
    sm: {
      checkbox: 'w-3 h-3',
      label: 'text-xs',
      spacing: 'gap-1.5'
    },
    md: {
      checkbox: 'w-4 h-4',
      label: 'text-sm',
      spacing: 'gap-2'
    },
    lg: {
      checkbox: 'w-5 h-5',
      label: 'text-base',
      spacing: 'gap-2.5'
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newChecked = e.target.checked;
      if (checked === undefined) {
        setIsChecked(newChecked);
      }
      onChange?.(newChecked);
    }
  };

  const checkboxElement = (
    <div className="relative inline-flex items-center justify-center">
    <input
      type="checkbox"
      id={checkboxId}
      checked={actualChecked}
      onChange={handleChange}
      disabled={disabled}
      className={`
        ${sizeClasses[size].checkbox}
        peer
        appearance-none
        border border-input
        rounded
        bg-background
        cursor-pointer
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        ${actualChecked ? 'bg-foreground border-foreground' : 'hover:border-foreground/50 hover:bg-muted/20'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    />
  
    {/* Tick Icon */}
    <svg
      className={`
        absolute w-3.5 h-3.5 text-background pointer-events-none transition-transform duration-150
        ${actualChecked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
      `}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  
  );

  if (label) {
    return (
      <label
        htmlFor={id}
        className={`
          flex items-center 
          ${sizeClasses[size].spacing}
          ${sizeClasses[size].label}
          text-foreground
          select-none
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
      >
        {checkboxElement}
        <span>{label}</span>
      </label>
    );
  }

  return (
    <div className={className}>
      {checkboxElement}
    </div>
  );
}

// Checkbox Group for multiple checkboxes
interface CheckboxGroupProps {
  children: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'sm' | 'md' | 'lg';
}

export function CheckboxGroup({
  children,
  className = '',
  orientation = 'vertical',
  spacing = 'md'
}: CheckboxGroupProps) {
  const spacingClasses = {
    sm: orientation === 'horizontal' ? 'gap-3' : 'space-y-2',
    md: orientation === 'horizontal' ? 'gap-4' : 'space-y-3',
    lg: orientation === 'horizontal' ? 'gap-6' : 'space-y-4'
  };

  const orientationClasses = orientation === 'horizontal' ? 'flex flex-wrap' : 'flex flex-col';

  return (
    <div className={`${orientationClasses} ${spacingClasses[spacing]} ${className}`}>
      {children}
    </div>
  );
}

// Preset configurations
export const CheckboxPresets = {
  // Form checkboxes
  form: {
    size: 'md' as const,
    orientation: 'vertical' as const,
    spacing: 'md' as const
  },
  
  // Settings checkboxes
  settings: {
    size: 'sm' as const,
    orientation: 'vertical' as const,
    spacing: 'sm' as const
  },
  
  // Large checkboxes
  large: {
    size: 'lg' as const,
    orientation: 'vertical' as const,
    spacing: 'lg' as const
  }
};
