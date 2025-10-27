
import React from 'react';
import { Button } from './button';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  isLabel?: boolean;
  isWithIcon?: boolean;
  customIcon?: React.ReactNode;
  isWithButton?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
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
  customIcon,
  isWithButton = false,
  className = "",
  value,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
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
              {customIcon ? (
                <div className="h-4 w-4 text-foreground/60">
                  {customIcon}
                </div>
              ) : (
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
              )}
            </div>
          )}
          
          <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            disabled={disabled}
            className={`w-full bg-background border font-medium placeholder:font-medium border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-1 focus:border-secondary/50 transition-all duration-300 ease-out shadow hover:border-border/80 disabled:opacity-50 disabled:cursor-not-allowed ${
              isWithIcon ? 'pl-8' : 'pl-3'
            } py-2.5 ${className}`}
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
  