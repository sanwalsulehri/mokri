'use client';

import React from 'react';
import { Radio } from './radio';

interface RadioCardProps {
  name: string;
  value: string;
  label: string;
  description?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export function RadioCard({ 
  name, 
  value, 
  label, 
  description,
  checked = false, 
  onChange, 
  disabled = false, 
  className = ""
}: RadioCardProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div 
      className={`
        relative border rounded-lg p-4 cursor-pointer transition-all duration-200
        ${checked 
          ? 'border-foreground bg-muted shadow-sm' 
          : 'border-border hover:border-foreground hover:bg-muted/50'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      onClick={() => !disabled && onChange && onChange(value)}
    >
      <div className="flex items-start gap-3">
        <div className="relative mt-1">
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="w-4 h-4 text-foreground bg-background border border-border rounded-full focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 checked:bg-foreground checked:border-foreground transition-all duration-200 opacity-0 absolute"
          />
          <div className={`w-4 h-4 border border-border rounded-full flex items-center justify-center transition-all duration-200 ${
            checked ? 'border-foreground bg-foreground' : 'bg-background'
          }`}>
            {checked && (
              <svg className="w-2 h-2 text-background" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-foreground mb-1">
            {label}
          </div>
          {description && (
            <div className="text-xs text-muted-foreground">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
