'use client';

import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'caption' | 'lead';
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'destructive';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className = '',
  as,
  variant = 'body',
  color = 'default',
  weight = 'normal',
  align = 'left',
  truncate = false
}) => {
  const getVariantClasses = () => {
    const variants = {
      h1: 'text-4xl font-bold leading-tight',
      h2: 'text-3xl font-semibold leading-tight',
      h3: 'text-2xl font-semibold leading-snug',
      h4: 'text-xl font-medium leading-snug',
      h5: 'text-lg font-medium leading-normal',
      h6: 'text-base font-medium leading-normal',
      body: 'text-base leading-normal',
      small: 'text-sm leading-normal',
      caption: 'text-xs leading-normal',
      lead: 'text-lg leading-relaxed'
    };
    return variants[variant];
  };

  const getColorClasses = () => {
    const colors = {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive'
    };
    return colors[color];
  };

  const getWeightClasses = () => {
    const weights = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    };
    return weights[weight];
  };

  const getAlignClasses = () => {
    const aligns = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    };
    return aligns[align];
  };

  const getTruncateClasses = () => {
    return truncate ? 'truncate' : '';
  };

  const combinedClasses = `
    ${getVariantClasses()}
    ${getColorClasses()}
    ${getWeightClasses()}
    ${getAlignClasses()}
    ${getTruncateClasses()}
    ${className}
  `.trim();

  // Determine the HTML element to use
  const getElement = () => {
    if (as) return as;
    
    switch (variant) {
      case 'h1': return 'h1';
      case 'h2': return 'h2';
      case 'h3': return 'h3';
      case 'h4': return 'h4';
      case 'h5': return 'h5';
      case 'h6': return 'h6';
      case 'lead': return 'p';
      case 'caption': return 'span';
      default: return 'p';
    }
  };

  const Element = getElement() as keyof JSX.IntrinsicElements;

  return (
    <Element className={combinedClasses}>
      {children}
    </Element>
  );
};

// Typography presets for common use cases
export const TypographyPresets = {
  hero: {
    variant: 'h1' as const,
    weight: 'bold' as const,
    color: 'default' as const,
    className: 'mb-4'
  },
  title: {
    variant: 'h2' as const,
    weight: 'semibold' as const,
    color: 'default' as const,
    className: 'mb-3'
  },
  subtitle: {
    variant: 'h3' as const,
    weight: 'medium' as const,
    color: 'muted' as const,
    className: 'mb-2'
  },
  body: {
    variant: 'body' as const,
    weight: 'normal' as const,
    color: 'default' as const,
    className: 'mb-2'
  },
  caption: {
    variant: 'caption' as const,
    weight: 'normal' as const,
    color: 'muted' as const,
    className: 'mb-1'
  },
  lead: {
    variant: 'lead' as const,
    weight: 'normal' as const,
    color: 'default' as const,
    className: 'mb-3'
  }
};

// Convenience components for common typography patterns
export const Heading1: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant="h1" />
);

export const Heading2: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant="h2" />
);

export const Heading3: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant="h3" />
);

export const Heading4: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant="h4" />
);

export const Heading5: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant="h5" />
);

export const Heading6: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant="h6" />
);

export const Body: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant="body" />
);

export const Small: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant="small" />
);

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant="caption" />
);

export const Lead: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant="lead" />
);

export default Typography;
