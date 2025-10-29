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
  dashed?: boolean;
  shadow?: boolean;
  padding?: string;
  rounded?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
}

export function Card({
  title,
  description,
  children,
  className = "",
  dashed = false,
  shadow = true,
  padding = "p-6",
  rounded = "rounded-lg",
  titleClassName = "",
  descriptionClassName = "",
  contentClassName = ""
}: CardProps) {
  const borderClass = dashed ? "border-dashed" : "border-solid";
  const shadowClass = shadow ? "shadow-md" : "";
  
  return (
    <div 
      className={`
        w-full bg-background ${rounded} border border-border ${padding}
        ${borderClass} ${shadowClass} 
        ${className}
      `}
    >
      <div className="">
      {/* Title */}
      {title && (
        <h3 className={`text-xl mt-6 font-semibold text-foreground text-center ${titleClassName}`}>
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className={`text-foreground/70 mt-2 text-sm text-center ${descriptionClassName}`}>
          {description}
        </p>
      )}
</div>
      {/* Content */}
      {children && (
        <div className={`space-y-4  ${contentClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
}
