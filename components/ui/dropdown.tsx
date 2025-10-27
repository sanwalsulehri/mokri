
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropDownProps {
  label?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' }
];

export function DropDown({ 
  label, 
  placeholder = "Select an option...", 
  options = defaultOptions,
  className = "",
  value,
  onChange,
  disabled = false
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      console.log('Toggling dropdown, current state:', isOpen);
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-foreground mb-2">
          {label}
        </label>
      )}
      
      <div className="relative" ref={dropdownRef}>
        {/* Custom dropdown trigger */}
        <button
          type="button"
          onClick={toggleDropdown}
          disabled={disabled}
          className={`w-full bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-border/70 focus:border-border/40 focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 ease-in-out shadow-sm focus:shadow-md py-2 pl-3 pr-8 text-left cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
          <span className={selectedOption ? 'text-foreground' : 'text-foreground/60'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </button>
        
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <motion.svg 
            className="h-4 w-4 text-foreground/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </motion.svg>
        </div>

        {/* Dropdown menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute z-[9999] py-2 w-full mt-1 px-2 bg-background border border-border rounded-lg shadow-lg max-h-60 overflow-auto"
            >
              {options.map((option, index) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full text-left px-3 py-2 font-medium hover:bg-muted cursor-pointer text-sm text-foreground/80 transition-colors duration-150 rounded-md  ${
                    selectedValue === option.value ? 'bg-muted/50 font-semibold' : ''
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {option.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
  