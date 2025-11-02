'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from './input';

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  keywords?: string[];
  action?: () => void;
  disabled?: boolean;
  group?: string;
  shortcut?: string;
}

interface CommandProps {
  items?: CommandItem[];
  placeholder?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'bordered';
  showGroups?: boolean;
  maxHeight?: string;
  onSelect?: (item: CommandItem) => void;
  onSearch?: (query: string) => void;
}

// Default command items
const defaultCommandItems: CommandItem[] = [
  {
    id: 'calendar',
    label: 'Calendar',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    keywords: ['schedule', 'events', 'dates'],
    action: () => console.log('Calendar opened'),
    group: 'Suggestions'
  },
  {
    id: 'search-emoji',
    label: 'Emoji',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    keywords: ['emoji', 'smile', 'search'],
    action: () => console.log('Emoji search opened'),
    group: 'Suggestions'
  },
  {
    id: 'calculator',
    label: 'Calculator',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    keywords: ['math', 'calculate', 'numbers'],
    action: () => console.log('Calculator opened'),
    group: 'Suggestions'
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    keywords: ['user', 'account', 'profile'],
    action: () => console.log('Profile opened'),
    group: 'Settings',
    shortcut: '⌘ P'
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    keywords: ['payment', 'invoice', 'billing'],
    action: () => console.log('Billing opened'),
    group: 'Settings',
    shortcut: '⌘ B'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    keywords: ['preferences', 'config', 'options'],
    action: () => console.log('Settings opened'),
    group: 'Settings',
    shortcut: '⌘ S'
  }
];

export function Command({
  items = defaultCommandItems,
  placeholder = "Type a command or search...",
  className = '',
  size = 'md',
  variant = 'default',
  showGroups = true,
  maxHeight = 'max-h-80',
  onSelect,
  onSearch
}: CommandProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState<CommandItem[]>(items);
  const commandRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: {
      container: 'text-xs sm:text-sm',
      input: 'text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2',
      item: 'text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2',
      icon: 'w-3 h-3 sm:w-4 sm:h-4',
      spacing: 'gap-1.5 sm:gap-2'
    },
    md: {
      container: 'text-sm sm:text-base',
      input: 'text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3',
      item: 'text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3',
      icon: 'w-4 h-4 sm:w-5 sm:h-5',
      spacing: 'gap-2 sm:gap-3'
    },
    lg: {
      container: 'text-base sm:text-lg',
      input: 'text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4',
      item: 'text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4',
      icon: 'w-5 h-5 sm:w-6 sm:h-6',
      spacing: 'gap-3 sm:gap-4'
    }
  };

  const variantClasses = {
    default: 'bg-background border border-border rounded-lg shadow-lg',
    minimal: 'bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-md',
    bordered: 'bg-background border-2 border-border rounded-lg shadow-lg'
  };

  // Filter items based on query
  useEffect(() => {
    if (!query.trim()) {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => {
        const searchText = `${item.label} ${item.description || ''} ${item.keywords?.join(' ') || ''}`.toLowerCase();
        return searchText.includes(query.toLowerCase());
      });
      setFilteredItems(filtered);
    }
    setSelectedIndex(0);
    onSearch?.(query);
  }, [query, items, onSearch]);

  // Group items by group property
  const groupedItems = showGroups 
    ? filteredItems.reduce((groups, item) => {
        const group = item.group || 'Other';
        if (!groups[group]) groups[group] = [];
        groups[group].push(item);
        return groups;
      }, {} as Record<string, CommandItem[]>)
    : { 'All': filteredItems };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalItems = filteredItems.length;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % totalItems);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + totalItems) % totalItems);
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setQuery('');
        break;
    }
  };

  const handleSelect = (item: CommandItem) => {
    if (!item.disabled) {
      item.action?.();
      onSelect?.(item);
      setIsOpen(false);
      setQuery('');
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputBlur = () => {
    // Delay closing to allow for clicks on items
    setTimeout(() => setIsOpen(false), 150);
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={commandRef}>
      {/* Input */}
      <div className="relative">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          isWithIcon={true}
          customIcon={
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          }
          className={`
            ${isOpen ? 'rounded-b-none border-b-0' : ''}
          `}
        />
      </div>

      {/* Command Palette */}
      <AnimatePresence>
        {isOpen && filteredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`
              absolute z-50 w-full mt-0
              ${variantClasses[variant]}
              ${maxHeight} overflow-y-auto
              ${isOpen ? 'rounded-t-none rounded-b-lg' : 'rounded-lg'}
              max-w-sm sm:max-w-md md:max-w-lg
            `}
          >
            {Object.entries(groupedItems).map(([groupName, groupItems]) => (
              <div key={groupName}>
                {showGroups && groupItems.length > 0 && (
                  <div className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-xs font-semibold text-foreground/60 bg-muted/30 border-b border-border">
                    {groupName}
                  </div>
                )}
                
                {groupItems.map((item, index) => {
                  const globalIndex = filteredItems.indexOf(item);
                  const isSelected = globalIndex === selectedIndex;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      disabled={item.disabled}
                      className={`
                        w-full flex items-center ${sizeClasses[size].spacing}
                        ${sizeClasses[size].item}
                        text-left transition-colors duration-150
                        ${isSelected 
                          ? 'bg-foreground/10 text-foreground' 
                          : 'text-foreground/80 hover:bg-muted/50'
                        }
                        ${item.disabled 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'cursor-pointer'
                        }
                        first:rounded-t-lg last:rounded-b-lg
                      `}
                    >
                      {item.icon && (
                        <span className={`${sizeClasses[size].icon} text-foreground/60 flex-shrink-0`}>
                          {item.icon}
                        </span>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{item.label}</div>
                        {item.description && (
                          <div className="text-xs text-foreground/60 truncate mt-0.5">
                            {item.description}
                          </div>
                        )}
                      </div>
                      
                      {/* Keyboard shortcut */}
                      {item.shortcut && (
                        <div className="text-[10px] sm:text-xs text-foreground/40 flex-shrink-0 font-mono">
                          {item.shortcut}
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Command Group for organizing commands
interface CommandGroupProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg';
}

export function CommandGroup({
  children,
  className = '',
  spacing = 'md'
}: CommandGroupProps) {
  const spacingClasses = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6'
  };

  return (
    <div className={`${spacingClasses[spacing]} ${className}`}>
      {children}
    </div>
  );
}

// Preset configurations
export const CommandPresets = {
  // Quick actions
  quickActions: {
    size: 'sm' as const,
    variant: 'minimal' as const,
    showGroups: false
  },
  
  // Full command palette
  fullPalette: {
    size: 'md' as const,
    variant: 'default' as const,
    showGroups: true
  },
  
  // Compact search
  compact: {
    size: 'sm' as const,
    variant: 'bordered' as const,
    showGroups: false
  }
};

// Common icons for commands
export const CommandIcons = {
  Search: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  
  File: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  
  Settings: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  
  User: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  
  Home: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  
  Calendar: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  
  Mail: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  
  Plus: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )
};
