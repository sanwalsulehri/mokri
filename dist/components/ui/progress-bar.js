'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
export function ProgressBar({ value = 0, max = 100, size = 'sm', type = 'linear', color, backgroundColor, showLabel = false, label, showPercentage = false, animated = false, striped = false, scrollProgress = false, className = '' }) {
    const [scrollValue, setScrollValue] = useState(0);
    // Track scroll progress if scrollProgress is enabled
    useEffect(() => {
        if (scrollProgress) {
            const handleScroll = () => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                setScrollValue(Math.min(Math.max(scrollPercent, 0), 100));
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollProgress]);
    const currentValue = scrollProgress ? scrollValue : value;
    const percentage = Math.min(Math.max((currentValue / max) * 100, 0), 100);
    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return {
                    container: 'h-4',
                    text: 'text-xs',
                    label: 'text-xs'
                };
            case 'lg':
                return {
                    container: 'h-8',
                    text: 'text-base',
                    label: 'text-base'
                };
            default: // md
                return {
                    container: 'h-6',
                    text: 'text-sm',
                    label: 'text-sm'
                };
        }
    };
    const sizeStyles = getSizeStyles();
    // Helper function to get color class or style
    const getColorStyle = (colorValue) => {
        if (!colorValue)
            return { className: 'bg-foreground' };
        // Check if it's a hex color
        if (colorValue.startsWith('#')) {
            return { backgroundColor: colorValue };
        }
        // Check if it's a Tailwind color name
        const tailwindColors = {
            'primary': 'bg-primary',
            'secondary': 'bg-secondary',
            'accent': 'bg-accent',
            'foreground': 'bg-foreground',
            'background': 'bg-background',
            'muted': 'bg-muted',
            'success': 'bg-green-500',
            'warning': 'bg-yellow-500',
            'error': 'bg-red-500',
            'info': 'bg-blue-500'
        };
        if (tailwindColors[colorValue]) {
            return { className: tailwindColors[colorValue] };
        }
        // Default to hex if not recognized
        return { backgroundColor: colorValue };
    };
    // Helper function to get background color class or style
    const getBackgroundColorStyle = (colorValue) => {
        if (!colorValue)
            return { className: 'bg-muted' };
        // Check if it's a hex color
        if (colorValue.startsWith('#')) {
            return { backgroundColor: colorValue };
        }
        // Check if it's a Tailwind color name
        const tailwindBgColors = {
            'primary': 'bg-blue-200',
            'secondary': 'bg-gray-200',
            'accent': 'bg-purple-200',
            'foreground': 'bg-gray-800',
            'background': 'bg-white',
            'muted': 'bg-gray-100',
            'success': 'bg-green-100',
            'warning': 'bg-yellow-100',
            'error': 'bg-red-100',
            'info': 'bg-blue-100'
        };
        if (tailwindBgColors[colorValue]) {
            return { className: tailwindBgColors[colorValue] };
        }
        // Default to hex if not recognized
        return { backgroundColor: colorValue };
    };
    // Helper function to get text color class or style
    const getTextColorStyle = (colorValue) => {
        if (!colorValue)
            return { className: 'text-foreground' };
        // Check if it's a hex color
        if (colorValue.startsWith('#')) {
            return { color: colorValue };
        }
        // Check if it's a Tailwind color name
        const tailwindTextColors = {
            'primary': 'text-primary',
            'secondary': 'text-secondary',
            'accent': 'text-accent',
            'foreground': 'text-foreground',
            'background': 'text-background',
            'muted': 'text-muted',
            'success': 'text-green-600',
            'warning': 'text-yellow-600',
            'error': 'text-red-600',
            'info': 'text-blue-600'
        };
        if (tailwindTextColors[colorValue]) {
            return { className: tailwindTextColors[colorValue] };
        }
        // Default to hex if not recognized
        return { color: colorValue };
    };
    const progressClasses = `
    ${sizeStyles.container}
    ${striped ? 'bg-stripes' : ''}
    ${animated ? 'animate-pulse' : ''}
  `.trim();
    // Scroll Progress Bar
    const renderScroll = () => {
        const colorStyle = getColorStyle(color);
        const bgColorStyle = getBackgroundColorStyle(backgroundColor);
        return (_jsx("div", { className: `fixed top-0 left-0 w-full z-50 ${className}`, children: _jsx("div", { className: `w-full h-2 ${bgColorStyle.className}`, style: bgColorStyle.backgroundColor ? { backgroundColor: bgColorStyle.backgroundColor } : {}, children: _jsx(motion.div, { className: `h-full ${colorStyle.className}`, style: colorStyle.backgroundColor ? { backgroundColor: colorStyle.backgroundColor } : {}, initial: { width: 0 }, animate: { width: `${percentage}%` }, transition: {
                        duration: 0.1,
                        ease: "easeOut"
                    } }) }) }));
    };
    // Linear Progress Bar (default)
    const renderLinear = () => {
        const colorStyle = getColorStyle(color);
        const bgColorStyle = getBackgroundColorStyle(backgroundColor);
        const textColorStyle = getTextColorStyle(color);
        return (_jsxs("div", { className: `w-full ${className}`, children: [(showLabel || showPercentage) && (_jsxs("div", { className: "flex justify-between items-center mb-2", children: [showLabel && (_jsx("span", { className: `${sizeStyles.label} font-medium text-foreground`, children: label || 'Progress' })), showPercentage && (_jsxs("span", { className: `${sizeStyles.text} ${textColorStyle.className}`, style: textColorStyle.color ? { color: textColorStyle.color } : {}, children: [Math.round(percentage), "%"] }))] })), _jsx("div", { className: `w-full rounded-full overflow-hidden ${sizeStyles.container} ${bgColorStyle.className}`, style: bgColorStyle.backgroundColor ? { backgroundColor: bgColorStyle.backgroundColor } : {}, children: _jsx(motion.div, { className: `${progressClasses} h-full rounded-full ${colorStyle.className}`, style: colorStyle.backgroundColor ? { backgroundColor: colorStyle.backgroundColor } : {}, initial: { width: 0 }, animate: { width: `${percentage}%` }, transition: {
                            duration: 0.8,
                            ease: "easeOut",
                            type: "tween"
                        } }) }), !showPercentage && (_jsxs("div", { className: "flex justify-between items-center mt-1", children: [_jsx("span", { className: `${sizeStyles.text} text-foreground/70`, children: value }), _jsx("span", { className: `${sizeStyles.text} text-foreground/70`, children: max })] }))] }));
    };
    // Render based on type
    switch (type) {
        case 'scroll':
            return renderScroll();
        default:
            return renderLinear();
    }
}
// Progress Bar presets for common use cases
export const ProgressBarPresets = {
    upload: {
        variant: 'default',
        showLabel: true,
        label: 'Upload Progress',
        showPercentage: true,
        animated: true
    },
    download: {
        variant: 'success',
        showLabel: true,
        label: 'Download Progress',
        showPercentage: true
    },
    error: {
        variant: 'error',
        showLabel: true,
        label: 'Error Progress',
        showPercentage: true
    }
};
