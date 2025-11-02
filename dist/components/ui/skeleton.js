'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Skeleton = ({ className = '', variant = 'default', size = 'md', width, height, animation = 'pulse', lines = 1, spacing = 'md' }) => {
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
        return (_jsx("div", { className: `${spacingClass} ${className}`.trim(), children: Array.from({ length: lines }).map((_, index) => (_jsx("div", { className: `${getBaseClasses()} ${index === lines - 1 ? 'w-3/4' : 'w-full'}`, style: Object.assign({ height: getSizeClasses() }, (index === lines - 1 ? { width: '75%' } : {})) }, index))) }));
    }
    return (_jsx("div", { className: getBaseClasses(), style: getVariantStyles() }));
};
// Preset components for common use cases
export const SkeletonText = (_a) => {
    var { lines = 3 } = _a, props = __rest(_a, ["lines"]);
    return (_jsx(Skeleton, Object.assign({ variant: "text", lines: lines }, props)));
};
export const SkeletonAvatar = (props) => (_jsx(Skeleton, Object.assign({ variant: "avatar" }, props)));
export const SkeletonButton = (props) => (_jsx(Skeleton, Object.assign({ variant: "button" }, props)));
export const SkeletonInput = (props) => (_jsx(Skeleton, Object.assign({ variant: "input" }, props)));
export const SkeletonCard = (props) => (_jsx(Skeleton, Object.assign({ variant: "card" }, props)));
// Complex skeleton layouts
export const SkeletonProfile = ({ className = '' }) => (_jsxs("div", { className: `space-y-4 ${className}`.trim(), children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(SkeletonAvatar, { size: "lg" }), _jsxs("div", { className: "space-y-2 flex-1", children: [_jsx(Skeleton, { width: "60%", height: "20px" }), _jsx(Skeleton, { width: "40%", height: "16px" })] })] }), _jsx(SkeletonText, { lines: 3 })] }));
export const SkeletonPost = ({ className = '' }) => (_jsxs("div", { className: `space-y-4 ${className}`.trim(), children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(SkeletonAvatar, { size: "md" }), _jsxs("div", { className: "space-y-1 flex-1", children: [_jsx(Skeleton, { width: "30%", height: "16px" }), _jsx(Skeleton, { width: "20%", height: "14px" })] })] }), _jsx(SkeletonText, { lines: 4 }), _jsxs("div", { className: "flex space-x-4", children: [_jsx(SkeletonButton, { size: "sm" }), _jsx(SkeletonButton, { size: "sm" }), _jsx(SkeletonButton, { size: "sm" })] })] }));
export const SkeletonTable = ({ rows = 5, columns = 4, className = '' }) => (_jsx("div", { className: `space-y-3 ${className}`.trim(), children: Array.from({ length: rows }).map((_, rowIndex) => (_jsx("div", { className: "flex space-x-4", children: Array.from({ length: columns }).map((_, colIndex) => (_jsx(Skeleton, { width: "100%", height: "20px", className: colIndex === columns - 1 ? 'w-1/2' : '' }, colIndex))) }, rowIndex))) }));
export const SkeletonDashboard = ({ className = '' }) => (_jsxs("div", { className: `space-y-6 ${className}`.trim(), children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Skeleton, { width: "40%", height: "32px" }), _jsx(Skeleton, { width: "60%", height: "20px" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: Array.from({ length: 3 }).map((_, index) => (_jsxs("div", { className: "space-y-3 p-4 border border-border rounded-lg", children: [_jsx(Skeleton, { width: "30%", height: "16px" }), _jsx(Skeleton, { width: "60%", height: "24px" }), _jsx(Skeleton, { width: "40%", height: "14px" })] }, index))) }), _jsxs("div", { className: "space-y-4", children: [_jsx(Skeleton, { width: "25%", height: "20px" }), _jsx(Skeleton, { height: "200px" })] }), _jsxs("div", { className: "space-y-3", children: [_jsx(Skeleton, { width: "20%", height: "20px" }), _jsx(SkeletonTable, { rows: 4, columns: 4 })] })] }));
// Preset configurations
export const SkeletonPresets = {
    // Text presets
    title: { variant: 'text', size: 'lg', width: '60%' },
    subtitle: { variant: 'text', size: 'md', width: '40%' },
    paragraph: { variant: 'text', lines: 3 },
    // Component presets
    smallAvatar: { variant: 'avatar', size: 'sm' },
    mediumAvatar: { variant: 'avatar', size: 'md' },
    largeAvatar: { variant: 'avatar', size: 'lg' },
    smallButton: { variant: 'button', size: 'sm' },
    mediumButton: { variant: 'button', size: 'md' },
    largeButton: { variant: 'button', size: 'lg' },
    smallInput: { variant: 'input', size: 'sm' },
    mediumInput: { variant: 'input', size: 'md' },
    largeInput: { variant: 'input', size: 'lg' },
    smallCard: { variant: 'card', size: 'sm' },
    mediumCard: { variant: 'card', size: 'md' },
    largeCard: { variant: 'card', size: 'lg' },
    // Animation presets
    pulse: { animation: 'pulse' },
    wave: { animation: 'wave' },
    shimmer: { animation: 'shimmer' },
    static: { animation: 'none' }
};
export default Skeleton;
