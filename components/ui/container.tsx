'use client';

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  padding?: 'sm' | 'md' | 'lg';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'xl',
  padding = 'md'
}) => {
  const getSizeClasses = () => {
    const sizes = {
      xs: 'max-w-sm',
      sm: 'max-w-4xl',
      md: 'max-w-5xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      '2xl': 'max-w-[1440px]'
    };
    return sizes[size];
  };

  const getPaddingClasses = () => {
    const paddings = {
      sm: 'px-2',
      md: 'px-4',
      lg: 'px-6'
    };
    return paddings[padding];
  };

  const combinedClasses = `
    ${getSizeClasses()}
    mx-auto
    ${getPaddingClasses()}
    ${className}
  `.trim();

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Container;
