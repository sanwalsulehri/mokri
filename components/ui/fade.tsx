'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FadeProps {
  children: React.ReactNode;
  className?: string;
  fadeLeft?: boolean;
  fadeRight?: boolean;
  fadeWidth?: 'sm' | 'md' | 'lg';
  fadeOpacity?: number;
}

const Fade: React.FC<FadeProps> = ({
  children,
  className = '',
  fadeLeft = true,
  fadeRight = true,
  fadeWidth = 'md',
  fadeOpacity = 0.8
}) => {
  const widthClasses = {
    sm: 'w-8 md:w-16',
    md: 'w-16 md:w-32',
    lg: 'w-24 md:w-48'
  };

  const widthClass = widthClasses[fadeWidth];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Left fade */}
      {fadeLeft && (
        <motion.div 
          className={`absolute left-0 top-0 bottom-0 ${widthClass} bg-gradient-to-r from-background via-background/${Math.round(fadeOpacity * 100)} to-transparent z-10 pointer-events-none`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      {/* Right fade */}
      {fadeRight && (
        <motion.div 
          className={`absolute right-0 top-0 bottom-0 ${widthClass} bg-gradient-to-l from-background via-background/${Math.round(fadeOpacity * 100)} to-transparent z-10 pointer-events-none`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      {/* Content */}
      {children}
    </div>
  );
};

export { Fade };
