'use client';
import { jsx as _jsx } from "react/jsx-runtime";
const Typography = ({ children, className = '', as, variant = 'body', color = 'default', weight = 'normal', align = 'left', truncate = false }) => {
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
        if (as)
            return as;
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
    const Element = getElement();
    return (_jsx(Element, { className: combinedClasses, children: children }));
};
// Typography presets for common use cases
export const TypographyPresets = {
    hero: {
        variant: 'h1',
        weight: 'bold',
        color: 'default',
        className: 'mb-4'
    },
    title: {
        variant: 'h2',
        weight: 'semibold',
        color: 'default',
        className: 'mb-3'
    },
    subtitle: {
        variant: 'h3',
        weight: 'medium',
        color: 'muted',
        className: 'mb-2'
    },
    body: {
        variant: 'body',
        weight: 'normal',
        color: 'default',
        className: 'mb-2'
    },
    caption: {
        variant: 'caption',
        weight: 'normal',
        color: 'muted',
        className: 'mb-1'
    },
    lead: {
        variant: 'lead',
        weight: 'normal',
        color: 'default',
        className: 'mb-3'
    }
};
// Convenience components for common typography patterns
export const Heading1 = (props) => (_jsx(Typography, Object.assign({}, props, { variant: "h1" })));
export const Heading2 = (props) => (_jsx(Typography, Object.assign({}, props, { variant: "h2" })));
export const Heading3 = (props) => (_jsx(Typography, Object.assign({}, props, { variant: "h3" })));
export const Heading4 = (props) => (_jsx(Typography, Object.assign({}, props, { variant: "h4" })));
export const Heading5 = (props) => (_jsx(Typography, Object.assign({}, props, { variant: "h5" })));
export const Heading6 = (props) => (_jsx(Typography, Object.assign({}, props, { variant: "h6" })));
export const Body = (props) => (_jsx(Typography, Object.assign({}, props, { variant: "body" })));
export const Small = (props) => (_jsx(Typography, Object.assign({}, props, { variant: "small" })));
export const Caption = (props) => (_jsx(Typography, Object.assign({}, props, { variant: "caption" })));
export const Lead = (props) => (_jsx(Typography, Object.assign({}, props, { variant: "lead" })));
export default Typography;
