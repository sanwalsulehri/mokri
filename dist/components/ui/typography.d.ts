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
declare const Typography: React.FC<TypographyProps>;
export declare const TypographyPresets: {
    hero: {
        variant: "h1";
        weight: "bold";
        color: "default";
        className: string;
    };
    title: {
        variant: "h2";
        weight: "semibold";
        color: "default";
        className: string;
    };
    subtitle: {
        variant: "h3";
        weight: "medium";
        color: "muted";
        className: string;
    };
    body: {
        variant: "body";
        weight: "normal";
        color: "default";
        className: string;
    };
    caption: {
        variant: "caption";
        weight: "normal";
        color: "muted";
        className: string;
    };
    lead: {
        variant: "lead";
        weight: "normal";
        color: "default";
        className: string;
    };
};
export declare const Heading1: React.FC<Omit<TypographyProps, 'variant'>>;
export declare const Heading2: React.FC<Omit<TypographyProps, 'variant'>>;
export declare const Heading3: React.FC<Omit<TypographyProps, 'variant'>>;
export declare const Heading4: React.FC<Omit<TypographyProps, 'variant'>>;
export declare const Heading5: React.FC<Omit<TypographyProps, 'variant'>>;
export declare const Heading6: React.FC<Omit<TypographyProps, 'variant'>>;
export declare const Body: React.FC<Omit<TypographyProps, 'variant'>>;
export declare const Small: React.FC<Omit<TypographyProps, 'variant'>>;
export declare const Caption: React.FC<Omit<TypographyProps, 'variant'>>;
export declare const Lead: React.FC<Omit<TypographyProps, 'variant'>>;
export default Typography;
//# sourceMappingURL=typography.d.ts.map