
import React from 'react';
import { Button } from './button';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  isLabel?: boolean;
  isWithIcon?: boolean;
  isWithButton?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
  buttonText?: string;
  disabled?: boolean;
}

export function Input({ 
  label, 
  placeholder = "Enter text...", 
  type = "text", 
  isLabel = false, 
  isWithIcon = false, 
  isWithButton = false,
  className = "",
  value,
  onChange,
  onButtonClick,
  buttonText = "Submit",
  disabled = false
}: InputProps) {

  return (
    <div className="w-full">
      {isLabel && label && (
        <label className="block text-sm font-medium text-foreground mb-2">
          {label}
        </label>
      )}
      
      <div className={`flex gap-2 items-center ${isWithButton ? 'flex-col sm:flex-row' : ''}`}>
        <div className="relative flex-1">
          {isWithIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                />
              </svg>
            </div>
          )}
          
          <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`w-full bg-background w-full border font-medium placeholder:font-medium border-secondary rounded-lg text-sm text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:border-secondary/70 focus:ring-secondary/90  transition-all duration-100 ease-in-out shadow-sm focus:shadow-md disabled:opacity-50 disabled:cursor-not-allowed ${
              isWithIcon ? 'pl-8' : 'pl-3'
            } py-2 ${className}`}
          />
        </div>
        
        {isWithButton && (
          <div className="flex-shrink-0">
            <Button
              onClick={onButtonClick}
              className="w-full sm:w-auto  min-h-[36px] min-w-[80px] justify-center"
              bg={true}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
  