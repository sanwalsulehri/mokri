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
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
}

export function Card({
  title,
  description,
  children,
  className = "max-w-[450px] p-6 rounded-lg",
  dashed = false,
  shadow = true,
  titleClassName = "",
  descriptionClassName = "",
  contentClassName = ""
}: CardProps) {
  const borderClass = dashed ? "border-dashed" : "border-solid";
  const shadowClass = shadow ? "shadow-md" : "";
  
  return (
    <div 
      className={`
        w-full bg-background rounded-lg border border-border  
        ${borderClass} ${shadowClass} space-y-6
        ${className}
      `}
    >
      <div className="">
      {/* Title */}
      {title && (
        <h3 className={`text-2xl font-semibold text-foreground text-center ${titleClassName}`}>
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
        <div className={`space-y-4 ${contentClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
}
