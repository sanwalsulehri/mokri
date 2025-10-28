'use client';

import React from 'react';

interface RadioProps {
  name: string;
  value: string;
  label?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Radio({ 
  name, 
  value, 
  label, 
  checked = false, 
  onChange, 
  disabled = false, 
  className = "",
  size = 'md'
}: RadioProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <label className={`flex items-center gap-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={`${sizeClasses[size]} bg-background border border-border rounded-full  transition-all duration-200`}
      />
      {label && (
        <span className={`${textSizeClasses[size]} text-foreground`}>
          {label}
        </span>
      )}
    </label>
  );
}
