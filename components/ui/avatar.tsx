'use client';

import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  fallback,
  size = 'md',
  className = '',
  onClick
}) => {
  const getSizeClasses = () => {
    const sizes = {
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg'
    };
    return sizes[size];
  };

  const getFallbackText = () => {
    if (fallback) return fallback;
    if (alt) return alt.charAt(0).toUpperCase();
    return 'A';
  };

  const avatarClasses = `
    ${getSizeClasses()}
    rounded-full
    ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}
    ${className}
  `.trim();

  return (
    <div className={`relative inline-block ${avatarClasses}`} onClick={onClick}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${getSizeClasses()} rounded-full object-cover`}
          onError={(e) => {
            // Fallback to text avatar if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallbackDiv = target.nextElementSibling as HTMLElement;
            if (fallbackDiv) {
              fallbackDiv.style.display = 'flex';
            }
          }}
        />
      ) : null}
      
      {/* Fallback avatar */}
      <div 
        className={`
          ${getSizeClasses()} 
          rounded-full
          bg-foreground
          text-background
          flex 
          items-center 
          justify-center 
          font-semibold
          ${src ? 'hidden' : ''}
        `.trim()}
        style={src ? { display: 'none' } : {}}
      >
        {getFallbackText()}
      </div>
    </div>
  );
};

export default Avatar;