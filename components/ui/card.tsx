'use client';

import React from 'react';
import { Button } from './button';
import { Input } from './input';
import { Switch } from './switch';

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Card({
  title,
  description,
  children,
  className = ""
}: CardProps) {
  return (
    <div 
      className={`
        w-full max-w-md bg-background border border-secondary/10 rounded-lg 
        shadow-md p-6 space-y-6
        ${className}
      `}
    >
      {/* Title */}
      {title && (
        <h3 className="text-2xl font-semibold text-foreground text-center">
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className="text-foreground/70 text-sm text-center">
          {description}
        </p>
      )}

      {/* Content */}
      {children && (
        <div className="space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}
