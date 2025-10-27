'use client';

import React, { useState, useRef, useEffect } from 'react';

interface InputOTPProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  autoFocus?: boolean;
}

export function InputOTP({
  length = 6,
  value = '',
  onChange,
  className = '',
  size = 'md',
  disabled = false,
  autoFocus = true
}: InputOTPProps) {
  const [otp, setOtp] = useState<string[]>(() => {
    const initialOtp = value.split('').slice(0, length);
    return Array.from({ length }, (_, i) => initialOtp[i] || '');
  });
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const sizeClasses = {
    sm: {
      input: 'w-6 h-6 sm:w-8 sm:h-8 text-xs sm:text-sm',
      gap: 'gap-0 sm:gap-1',
      separator: 'mx-1 sm:mx-2'
    },
    md: {
      input: 'w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base',
      gap: 'gap-0 sm:gap-1',
      separator: 'mx-1 sm:mx-2'
    },
    lg: {
      input: 'w-10 h-10 sm:w-12 sm:h-12 text-base sm:text-lg',
      gap: 'gap-0 sm:gap-1',
      separator: 'mx-1 sm:mx-2'
    }
  };

  const handleChange = (index: number, inputValue: string) => {
    if (disabled) return;

    // Only allow single digit
    const digit = inputValue.slice(-1);
    if (digit && !/^\d$/.test(digit)) return;

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Call onChange with the complete OTP string
    const otpString = newOtp.join('');
    onChange?.(otpString);

    // Auto-focus next input if current is filled
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (disabled) return;

    // Handle backspace
    if (e.key === 'Backspace') {
      if (otp[index]) {
        // If current input has value, clear it
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        onChange?.(newOtp.join(''));
      } else if (index > 0) {
        // If current input is empty, go to previous input
        inputRefs.current[index - 1]?.focus();
      }
    }

    // Handle arrow keys
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Handle paste
    if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      navigator.clipboard.readText().then(text => {
        const digits = text.replace(/\D/g, '').slice(0, length);
        const newOtp = Array.from({ length }, (_, i) => digits[i] || '');
        setOtp(newOtp);
        onChange?.(digits);
        
        // Focus the last filled input or the first empty one
        const lastFilledIndex = digits.length - 1;
        const focusIndex = lastFilledIndex < length - 1 ? lastFilledIndex + 1 : lastFilledIndex;
        inputRefs.current[focusIndex]?.focus();
      });
    }
  };

  const handleFocus = (index: number) => {
    if (disabled) return;
    // Select all text when focusing
    inputRefs.current[index]?.select();
  };

  // Auto-focus first input on mount
  useEffect(() => {
    if (autoFocus && !disabled) {
      inputRefs.current[0]?.focus();
    }
  }, [autoFocus, disabled]);

  // Update internal state when value prop changes
  useEffect(() => {
    if (value !== otp.join('')) {
      const newOtp = value.split('').slice(0, length);
      setOtp(Array.from({ length }, (_, i) => newOtp[i] || ''));
    }
  }, [value, length]);

  // Group inputs into groups of 3
  const groups = [];
  for (let i = 0; i < length; i += 3) {
    groups.push(Array.from({ length: Math.min(3, length - i) }, (_, j) => i + j));
  }

  return (
    <div className={`flex items-center ${sizeClasses[size].gap} ${className}`}>
      {groups.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          <div className={`flex ${sizeClasses[size].gap}`}>
            {group.map((index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={() => handleFocus(index)}
                disabled={disabled}
                className={`
                  ${sizeClasses[size].input}
                  text-center font-semibold
                  bg-background border border-border rounded-lg
                  text-foreground placeholder:text-muted-foreground
                  focus:outline-none focus:ring-2 shadow-xs focus:ring-border focus:ring-offset-1 focus:border-secondary/50
                  transition-all duration-200 ease-out
                  hover:border-border/80
                  ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}
                `}
              />
            ))}
          </div>
          {groupIndex < groups.length - 1 && (
            <div className={`text-foreground font-semibold text-sm sm:text-lg ${sizeClasses[size].separator}`}>-</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// Preset configurations
export const InputOTPPresets = {
  small: {
    size: 'sm' as const,
    length: 4
  },
  medium: {
    size: 'md' as const,
    length: 6
  },
  large: {
    size: 'lg' as const,
    length: 8
  }
};
