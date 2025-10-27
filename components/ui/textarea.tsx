
import React from 'react';
import { Button } from './button';

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  isLabel?: boolean;
  isWithButton?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onButtonClick?: () => void;
  buttonText?: string;
  disabled?: boolean;
  rows?: number;
  maxLength?: number;
}

export function TextArea({ 
  label, 
  placeholder = "Enter your message...", 
  isLabel = false, 
  isWithButton = false,
  className = "",
  value,
  onChange,
  onButtonClick,
  buttonText = "Submit",
  disabled = false,
  rows = 4,
  maxLength
}: TextAreaProps) {

  return (
    <div className="w-full">
      {isLabel && label && (
        <label className="block text-sm font-medium text-foreground mb-2">
          {label}
        </label>
      )}
      
      <div className="flex flex-col gap-3">
        <div className="relative">
          <textarea 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            rows={rows}
            maxLength={maxLength}
            className={`w-full bg-background border font-medium placeholder:font-medium border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-3 focus:ring-ring focus:border-focusborder focus:ring-offset-[.2px] transition-all duration-300 ease-out shadow hover:border-border disabled:opacity-50 disabled:cursor-not-allowed resize-none px-3 py-2.5 ${className}`}
          />
        </div>
        
        {isWithButton && (
          <div className="flex justify-end">
            <Button
              onClick={onButtonClick}
              bg={true}
              size="md"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
  