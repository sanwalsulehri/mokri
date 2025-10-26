'use client';

import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'text' | 'circular' | 'rectangular' | 'card' | 'avatar' | 'button' | 'input';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'shimmer' | 'none';
  lines?: number;
  spacing?: 'sm' | 'md' | 'lg';
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'default',
  size = 'md',
  width,
  height,
  animation = 'pulse',
  lines = 1,
  spacing = 'md'
}) => {
  const getBaseClasses = () => {
    const base = 'bg-foreground/10 rounded';
    const animationClass = animation === 'pulse' ? 'animate-pulse' : 
                         animation === 'wave' ? 'animate-wave' : 
                         animation === 'shimmer' ? 'animate-shimmer' : '';
    
    const variantClass = variant === 'default' ? 'rounded-md' :
                        variant === 'text' ? 'rounded-sm' :
                        variant === 'circular' ? 'rounded-full' :
                        variant === 'rectangular' ? 'rounded-none' :
                        variant === 'card' ? 'rounded-lg' :
                        variant === 'avatar' ? 'rounded-full' :
                        variant === 'button' ? 'rounded-md' :
                        variant === 'input' ? 'rounded-md' : 'rounded-md';
    
    return `${base} ${variantClass} ${animationClass} ${className}`.trim();
  };
  
  const getSizeClasses = () => {
    return size === 'sm' ? 'h-3' : 
           size === 'md' ? 'h-4' : 
           size === 'lg' ? 'h-6' : 'h-8';
  };

  const getSpacingClasses = () => {
    return spacing === 'sm' ? 'space-y-1' : 
           spacing === 'md' ? 'space-y-2' : 'space-y-3';
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
      case 'avatar':
        return {
          width: width || (size === 'sm' ? '24px' : size === 'md' ? '32px' : size === 'lg' ? '48px' : '64px'),
          height: height || (size === 'sm' ? '24px' : size === 'md' ? '32px' : size === 'lg' ? '48px' : '64px')
        };
      case 'button':
        return {
          width: width || (size === 'sm' ? '80px' : size === 'md' ? '100px' : size === 'lg' ? '120px' : '140px'),
          height: height || (size === 'sm' ? '28px' : size === 'md' ? '32px' : size === 'lg' ? '36px' : '40px')
        };
      case 'input':
        return {
          width: width || '100%',
          height: height || (size === 'sm' ? '32px' : size === 'md' ? '36px' : size === 'lg' ? '40px' : '44px')
        };
      case 'card':
        return {
          width: width || '100%',
          height: height || (size === 'sm' ? '120px' : size === 'md' ? '160px' : size === 'lg' ? '200px' : '240px')
        };
      default:
        return {
          width: width || '100%',
          height: height || getSizeClasses()
        };
    }
  };

  if (lines > 1) {
    const spacingClass = getSpacingClasses();
    return (
      <div className={`${spacingClass} ${className}`.trim()}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${getBaseClasses()} ${index === lines - 1 ? 'w-3/4' : 'w-full'}`}
            style={{
              height: getSizeClasses(),
              ...(index === lines - 1 ? { width: '75%' } : {})
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={getBaseClasses()}
      style={getVariantStyles()}
    />
  );
};

// Preset components for common use cases
export const SkeletonText: React.FC<Omit<SkeletonProps, 'variant'> & { lines?: number }> = ({ 
  lines = 3, 
  ...props 
}) => (
  <Skeleton variant="text" lines={lines} {...props} />
);

export const SkeletonAvatar: React.FC<Omit<SkeletonProps, 'variant'>> = (props) => (
  <Skeleton variant="avatar" {...props} />
);

export const SkeletonButton: React.FC<Omit<SkeletonProps, 'variant'>> = (props) => (
  <Skeleton variant="button" {...props} />
);

export const SkeletonInput: React.FC<Omit<SkeletonProps, 'variant'>> = (props) => (
  <Skeleton variant="input" {...props} />
);

export const SkeletonCard: React.FC<Omit<SkeletonProps, 'variant'>> = (props) => (
  <Skeleton variant="card" {...props} />
);

// Complex skeleton layouts
export const SkeletonProfile: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`space-y-4 ${className}`.trim()}>
    <div className="flex items-center space-x-4">
      <SkeletonAvatar size="lg" />
      <div className="space-y-2 flex-1">
        <Skeleton width="60%" height="20px" />
        <Skeleton width="40%" height="16px" />
      </div>
    </div>
    <SkeletonText lines={3} />
  </div>
);

export const SkeletonPost: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`space-y-4 ${className}`.trim()}>
    <div className="flex items-center space-x-3">
      <SkeletonAvatar size="md" />
      <div className="space-y-1 flex-1">
        <Skeleton width="30%" height="16px" />
        <Skeleton width="20%" height="14px" />
      </div>
    </div>
    <SkeletonText lines={4} />
    <div className="flex space-x-4">
      <SkeletonButton size="sm" />
      <SkeletonButton size="sm" />
      <SkeletonButton size="sm" />
    </div>
  </div>
);

export const SkeletonTable: React.FC<{ 
  rows?: number; 
  columns?: number; 
  className?: string 
}> = ({ rows = 5, columns = 4, className = '' }) => (
  <div className={`space-y-3 ${className}`.trim()}>
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="flex space-x-4">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton 
            key={colIndex} 
            width="100%" 
            height="20px"
            className={colIndex === columns - 1 ? 'w-1/2' : ''}
          />
        ))}
      </div>
    ))}
  </div>
);

export const SkeletonDashboard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`space-y-6 ${className}`.trim()}>
    {/* Header */}
    <div className="space-y-2">
      <Skeleton width="40%" height="32px" />
      <Skeleton width="60%" height="20px" />
    </div>
    
    {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-3 p-4 border border-border rounded-lg">
              <Skeleton width="30%" height="16px" />
              <Skeleton width="60%" height="24px" />
              <Skeleton width="40%" height="14px" />
            </div>
          ))}
        </div>
    
    {/* Chart Area */}
    <div className="space-y-4">
      <Skeleton width="25%" height="20px" />
      <Skeleton height="200px" />
    </div>
    
    {/* Table */}
    <div className="space-y-3">
      <Skeleton width="20%" height="20px" />
      <SkeletonTable rows={4} columns={4} />
    </div>
  </div>
);

// Preset configurations
export const SkeletonPresets = {
  // Text presets
  title: { variant: 'text' as const, size: 'lg' as const, width: '60%' },
  subtitle: { variant: 'text' as const, size: 'md' as const, width: '40%' },
  paragraph: { variant: 'text' as const, lines: 3 },
  
  // Component presets
  smallAvatar: { variant: 'avatar' as const, size: 'sm' as const },
  mediumAvatar: { variant: 'avatar' as const, size: 'md' as const },
  largeAvatar: { variant: 'avatar' as const, size: 'lg' as const },
  
  smallButton: { variant: 'button' as const, size: 'sm' as const },
  mediumButton: { variant: 'button' as const, size: 'md' as const },
  largeButton: { variant: 'button' as const, size: 'lg' as const },
  
  smallInput: { variant: 'input' as const, size: 'sm' as const },
  mediumInput: { variant: 'input' as const, size: 'md' as const },
  largeInput: { variant: 'input' as const, size: 'lg' as const },
  
  smallCard: { variant: 'card' as const, size: 'sm' as const },
  mediumCard: { variant: 'card' as const, size: 'md' as const },
  largeCard: { variant: 'card' as const, size: 'lg' as const },
  
  // Animation presets
  pulse: { animation: 'pulse' as const },
  wave: { animation: 'wave' as const },
  shimmer: { animation: 'shimmer' as const },
  static: { animation: 'none' as const }
};

export default Skeleton;
