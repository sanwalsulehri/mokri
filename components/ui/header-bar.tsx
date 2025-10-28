'use client';

import React from 'react';
import { IconButton } from './icon-button';

interface HeaderBarProps {
  className?: string;
}

export function HeaderBar({ className = "" }: HeaderBarProps) {
  return (
    <div className={`flex items-center justify-between p-2 bg-muted rounded-lg border border-border ${className}`}>
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <span className="text-sm text-foreground">https://</span>
      </div>
      <div className="flex gap-2">
        <IconButton onClick={() => console.log('Info')}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </IconButton>
        <IconButton onClick={() => console.log('Star')}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </IconButton>
      </div>
    </div>
  );
}
