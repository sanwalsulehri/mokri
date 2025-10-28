'use client';

import React from 'react';

interface ProfileVerificationProps {
  className?: string;
}

export function ProfileVerification({ className = "" }: ProfileVerificationProps) {
  return (
    <div className={`flex items-center justify-between p-4 bg-muted rounded-lg border border-border ${className}`}>
      <div className="flex items-center gap-3">
        <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm text-foreground font-medium">Your profile has been verified.</span>
      </div>
      <svg className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
