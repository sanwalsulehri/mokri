
import React from 'react';

interface SelectProps {
  label?: string;
  placeholder?: string;
  isLabel?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export function Select({ 
  label, 
  placeholder = "Select an option...", 
  isLabel = false, 
  className = "",
  value,
  onChange,
  disabled = false,
  children
}: SelectProps) {

  return (
    <div className="w-full">
      {isLabel && label && (
        <label className="block text-sm font-medium text-foreground mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        <select 
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full bg-background border font-medium border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-3 focus:ring-ring focus:border-focusborder focus:ring-offset-[.2px] transition-all duration-300 ease-out shadow hover:border-border disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2.5 appearance-none ${className}`}
        >
          <option value="" disabled>{placeholder}</option>
          {children}
        </select>
        
        {/* Custom arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg 
            className="h-4 w-4 text-foreground/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
  
