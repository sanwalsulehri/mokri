'use client';

import React from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: 'lazy' | 'eager';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  objectFit,
  objectPosition,
  onLoad,
  onError,
  ...rest
}) => {
  const imageClasses = [
    className,
    objectFit && `object-${objectFit}`,
    objectPosition && `object-[${objectPosition}]`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={imageClasses}
      onLoad={onLoad}
      onError={onError}
      {...rest}
    />
  );
};

export default Image;
