'use client';

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
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
      xs: 'w-full max-w-sm',
      sm: 'w-full max-w-4xl',
      md: 'max-w-5xl',
      lg: 'w-full max-w-6xl',
      xl: 'w-full max-w-7xl',
      '2xl': 'w-full max-w-[1480px]',
      '3xl': 'w-full max-w-[1700px]'
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
