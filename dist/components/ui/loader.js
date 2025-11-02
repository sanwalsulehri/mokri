'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function Loader({ size = 'md', variant = 'spinner', color = 'primary', className = '' }) {
    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return {
                    spinner: 'w-4 h-4',
                    dots: 'w-2 h-2',
                    pulse: 'w-3 h-3',
                    bars: 'w-1 h-4',
                    outline: 'w-4 h-4'
                };
            case 'lg':
                return {
                    spinner: 'w-8 h-8',
                    dots: 'w-3 h-3',
                    pulse: 'w-6 h-6',
                    bars: 'w-2 h-8',
                    outline: 'w-8 h-8'
                };
            default: // md
                return {
                    spinner: 'w-6 h-6',
                    dots: 'w-2.5 h-2.5',
                    pulse: 'w-4 h-4',
                    bars: 'w-1.5 h-6',
                    outline: 'w-6 h-6'
                };
        }
    };
    const getColorStyles = () => {
        switch (color) {
            case 'secondary':
                return 'text-gray-500';
            case 'accent':
                return 'text-blue-500';
            default: // primary
                return 'text-foreground';
        }
    };
    const sizeStyles = getSizeStyles();
    const colorStyles = getColorStyles();
    const renderSpinner = () => (_jsx(motion.div, { className: `${sizeStyles.spinner} ${colorStyles} ${className}`, animate: { rotate: 360 }, transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear"
        }, children: _jsxs("svg", { className: "w-full h-full", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }) }));
    const renderDots = () => (_jsx("div", { className: `flex space-x-1 ${className}`, children: [0, 1, 2].map((index) => (_jsx(motion.div, { className: `${sizeStyles.dots} ${colorStyles} rounded-full bg-current`, animate: {
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
            }, transition: {
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
            } }, index))) }));
    const renderPulse = () => (_jsx(motion.div, { className: `${sizeStyles.pulse} ${colorStyles} ${className} rounded-full bg-current`, animate: {
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
        }, transition: {
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
        } }));
    const renderBars = () => (_jsx("div", { className: `flex space-x-1 items-end h-6 ${className}`, children: [0, 1, 2, 3].map((index) => (_jsx(motion.div, { className: `${sizeStyles.bars} ${colorStyles} bg-current`, animate: {
                height: ['25%', '100%', '25%']
            }, transition: {
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
            } }, index))) }));
    const renderOutline = () => (_jsx("div", { className: `flex items-center justify-center ${className}`, children: _jsx("div", { className: `${sizeStyles.outline} border-2 border-current border-t-transparent rounded-full animate-spin` }) }));
    switch (variant) {
        case 'dots':
            return renderDots();
        case 'pulse':
            return renderPulse();
        case 'bars':
            return renderBars();
        case 'outline':
            return renderOutline();
        default:
            return renderSpinner();
    }
}
// Loader presets for common use cases
export const LoaderPresets = {
    smallSpinner: {
        size: 'sm',
        variant: 'spinner',
        color: 'primary'
    },
    mediumDots: {
        size: 'md',
        variant: 'dots',
        color: 'primary'
    },
    largePulse: {
        size: 'lg',
        variant: 'pulse',
        color: 'primary'
    },
    accentBars: {
        size: 'md',
        variant: 'bars',
        color: 'accent'
    },
    outlineLoader: {
        size: 'md',
        variant: 'outline',
        color: 'primary'
    }
};
