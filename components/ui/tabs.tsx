'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface TabContent {
  id: string;
  content: React.ReactNode;
}

interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  stagger?: number;
}

interface TabsProps {
  tabs: TabItem[];
  contents: TabContent[];
  defaultTab?: string;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onTabChange?: (tabId: string) => void;
  // Animation props
  animations?: {
    tabTransition?: AnimationConfig;
    contentTransition?: AnimationConfig;
    underlineTransition?: AnimationConfig;
    tapScale?: number;
    staggerChildren?: boolean;
  };
}

export function Tabs({
  tabs,
  contents,
  defaultTab,
  variant = 'default',
  size = 'md',
  className = "",
  onTabChange,
  animations = {}
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  // Default animation configurations
  const defaultAnimations = {
    tabTransition: { duration: 0.5, ease: "easeInOut", delay: 0 },
    contentTransition: { duration: 0.3, ease: "easeInOut", delay: 0 },
    underlineTransition: { duration: 0.3, ease: "easeInOut", delay: 0 },
    tapScale: 0.98,
    staggerChildren: false
  };

  // Merge user animations with defaults
  const finalAnimations = {
    tabTransition: { ...defaultAnimations.tabTransition, ...animations.tabTransition },
    contentTransition: { ...defaultAnimations.contentTransition, ...animations.contentTransition },
    underlineTransition: { ...defaultAnimations.underlineTransition, ...animations.underlineTransition },
    tapScale: animations.tapScale ?? defaultAnimations.tapScale,
    staggerChildren: animations.staggerChildren ?? defaultAnimations.staggerChildren
  };

  const handleTabClick = (tabId: string) => {
    const tab = tabs.find(t => t.id === tabId);
    if (tab && !tab.disabled) {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    }
  };

  const sizeClasses = {
    sm: {
      tab: 'px-3 py-1.5 text-xs mb-1',
      content: 'p-3'
    },
    md: {
      tab: 'px-5 py-2.5 text-sm',
      content: 'p-5'
    },
    lg: {
      tab: 'px-7 py-3.5 text-base mb-1',
      content: 'p-7'
    },
    xl: {
      tab: 'px-9 py-4.5 text-lg bg-foreground/10',
      content: 'p-9'
    }
  };

  const variantClasses = {
    default: {
      container: 'border-b border-border',
      tab: 'hover:text-foreground transition-all duration-500 ease-in-out rounded-md',
      active: 'text-foreground',
      inactive: 'text-foreground/60'
    },
    pills: {
      container: 'bg-foreground/5 rounded-lg p-1',
      tab: 'rounded-md hover:bg-foreground/10 transition-all duration-500 ease-in-out',
      active: 'bg-background text-foreground',
      inactive: 'text-foreground/60'
    },
    underline: {
      container: 'border-b border-border',
      tab: 'relative hover:text-foreground transition-all duration-500 ease-in-out',
      active: 'text-foreground',
      inactive: 'text-foreground/60'
    }
  };

  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className={`flex gap-4 ${currentVariant.container}`}>
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const isDisabled = tab.disabled;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              disabled={isDisabled}
              className={`
                ${currentSize.tab} ${currentVariant.tab}
                ${isActive ? currentVariant.active : currentVariant.inactive}
                ${isActive && (size === 'sm' || size === 'lg') ? 'bg-foreground/10' : ''}
                ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                flex items-center justify-center gap-2 font-medium
                focus:outline-none
                relative overflow-hidden
              `}
            >
              {tab.icon && (
                <span className="flex-shrink-0">
                  {tab.icon}
                </span>
              )}
              <span>{tab.label}</span>
              
              {/* Underline variant indicator */}
              {variant === 'underline' && isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  layoutId="underline"
                  transition={{ 
                    duration: finalAnimations.underlineTransition.duration,
                    ease: finalAnimations.underlineTransition.ease as any,
                    delay: finalAnimations.underlineTransition.delay
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <motion.div 
        className={currentSize.content}
        initial={finalAnimations.staggerChildren ? { opacity: 0 } : undefined}
        animate={finalAnimations.staggerChildren ? { opacity: 1 } : undefined}
        transition={finalAnimations.staggerChildren ? { 
          duration: finalAnimations.contentTransition.duration,
          delay: finalAnimations.contentTransition.delay
        } : undefined}
      >
        {contents
          .filter(content => content.id === activeTab)
          .map((content) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ 
                duration: finalAnimations.contentTransition.duration,
                ease: finalAnimations.contentTransition.ease as any,
                delay: finalAnimations.contentTransition.delay
              }}
            >
              {content.content}
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  );
}

// Animation presets for easy configuration
export const AnimationPresets = {
  // Smooth and subtle animations
  smooth: {
    tabTransition: { duration: 0.4, ease: "easeInOut" },
    contentTransition: { duration: 0.25, ease: "easeInOut" },
    underlineTransition: { duration: 0.2, ease: "easeInOut" },
    tapScale: 0.98,
    staggerChildren: false
  },
  
  // Bouncy and playful animations
  bouncy: {
    tabTransition: { duration: 0.6, ease: "easeOut" },
    contentTransition: { duration: 0.4, ease: "easeOut" },
    underlineTransition: { duration: 0.3, ease: "easeOut" },
    tapScale: 0.95,
    staggerChildren: true
  },
  
  // Fast and snappy animations
  snappy: {
    tabTransition: { duration: 0.15, ease: "easeInOut" },
    contentTransition: { duration: 0.1, ease: "easeInOut" },
    underlineTransition: { duration: 0.1, ease: "easeInOut" },
    tapScale: 0.99,
    staggerChildren: false
  },
  
  // Elegant and sophisticated animations
  elegant: {
    tabTransition: { duration: 0.8, ease: "easeInOut" },
    contentTransition: { duration: 0.5, ease: "easeInOut" },
    underlineTransition: { duration: 0.4, ease: "easeInOut" },
    tapScale: 0.97,
    staggerChildren: true
  },
  
  // Minimal animations
  minimal: {
    tabTransition: { duration: 0.2, ease: "easeInOut" },
    contentTransition: { duration: 0.15, ease: "easeInOut" },
    underlineTransition: { duration: 0.1, ease: "easeInOut" },
    tapScale: 1,
    staggerChildren: false
  }
};

// Preset tab configurations
export const TabPresets = {
  // Dashboard tabs
  dashboard: [
    { id: 'overview', label: 'Overview', icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
      </svg>
    )},
    { id: 'analytics', label: 'Analytics', icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )},
    { id: 'settings', label: 'Settings', icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )}
  ],

  // Profile tabs
  profile: [
    { id: 'personal', label: 'Personal Info' },
    { id: 'security', label: 'Security' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'billing', label: 'Billing' }
  ],

  // Code editor tabs
  editor: [
    { id: 'index', label: 'index.tsx' },
    { id: 'styles', label: 'styles.css' },
    { id: 'config', label: 'config.json' }
  ]
};
