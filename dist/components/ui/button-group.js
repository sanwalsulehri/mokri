'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './button';
import { DropdownMenu } from './dropdown-menu';
export function ButtonGroup({ children, variant = 'default', size = 'md', orientation = 'horizontal', className = '', disabled = false }) {
    const baseClasses = 'inline-flex';
    const orientationClasses = orientation === 'vertical' ? 'flex-col' : 'flex-row';
    const variantClasses = {
        default: orientation === 'horizontal' ? '[&>*:not(:first-child)]:ml-0 [&>*:not(:last-child)]:mr-0 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child):not(:last-child)]:rounded-none' : '[&>*:not(:first-child)]:mt-0 [&>*:not(:last-child)]:mb-0 [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child):not(:last-child)]:rounded-none',
        segmented: orientation === 'horizontal' ? '[&>*:not(:first-child)]:ml-0 [&>*:not(:last-child)]:mr-0 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child)]:border-l-0' : '[&>*:not(:first-child)]:mt-0 [&>*:not(:last-child)]:mb-0 [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child)]:border-t-0',
        attached: orientation === 'horizontal' ? '[&>*:not(:first-child)]:ml-0 [&>*:not(:last-child)]:mr-0 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:first-child)]:shadow-none' : '[&>*:not(:first-child)]:mt-0 [&>*:not(:last-child)]:mb-0 [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:first-child)]:shadow-none',
        spaced: orientation === 'horizontal' ? 'gap-1 sm:gap-2' : 'gap-1 sm:gap-2',
        bordered: 'border border-border divide-x divide-border rounded-lg overflow-hidden bg-background'
    };
    return (_jsx("div", { className: `${baseClasses} ${orientationClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`, role: "group", children: children }));
}
export function ButtonGroupItem({ children, onClick, active = false, disabled = false, className = '', variant = 'default' }) {
    const variantClasses = {
        default: active ? 'bg-foreground text-background' : 'bg-transparent text-foreground hover:bg-foreground/10',
        primary: active ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-600 hover:bg-blue-50',
        secondary: active ? 'bg-gray-600 text-white' : 'bg-transparent text-gray-600 hover:bg-gray-50',
        destructive: active ? 'bg-red-600 text-white' : 'bg-transparent text-red-600 hover:bg-red-50',
        outline: active ? 'bg-foreground text-background border-foreground' : 'bg-transparent text-foreground border-border hover:bg-foreground/10',
        ghost: active ? 'bg-foreground/10 text-foreground' : 'bg-transparent text-foreground hover:bg-foreground/10'
    };
    return (_jsx(Button, { onClick: onClick, disabled: disabled, className: `${variantClasses[variant]} ${active ? 'shadow-sm' : ''} text-xs sm:text-sm px-2 py-1 sm:px-3 rounded-none sm:py-2 ${className}`, bg: false, children: children }));
}
// Bordered Button Group with Dropdown
export function BorderedButtonGroup({ buttons, moreOptions = [], size = 'md', className = '', disabled = false }) {
    const sizeClasses = {
        sm: 'px-2 py-1 sm:px-3 sm:py-[6px] text-xs sm:text-sm',
        md: 'px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base',
        lg: 'px-4 py-2.5 sm:px-6 sm:py-3 text-base sm:text-lg'
    };
    const getButtonVariantClasses = (variant, active) => {
        const baseClasses = {
            default: active ? 'bg-foreground text-background' : 'bg-muted/50 text-foreground hover:bg-muted/70',
            primary: active ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-600 hover:bg-blue-50',
            secondary: active ? 'bg-gray-600 text-white' : 'bg-transparent text-gray-600 hover:bg-gray-50',
            destructive: active ? 'bg-red-600 text-white' : 'bg-transparent text-red-600 hover:bg-red-50',
            outline: active ? 'bg-foreground text-background border-foreground' : 'bg-transparent text-foreground border-border hover:bg-foreground/10',
            ghost: active ? 'bg-foreground/10 text-foreground' : 'bg-transparent text-foreground hover:bg-foreground/10'
        };
        return baseClasses[variant] || baseClasses.default;
    };
    return (_jsxs("div", { className: `inline-flex border border-border rounded-lg bg-background ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`, children: [buttons.map((button, index) => (_jsx("button", { onClick: button.onClick, disabled: button.disabled || disabled, className: `
              ${sizeClasses[size]} 
              flex items-center justify-center gap-1 sm:gap-2 
              cursor-pointer leading-tight 
              font-medium transition-all duration-200 ease-in-out 
              focus:outline-none
              ${getButtonVariantClasses(button.variant || 'default', button.active || false)}
              ${button.active ? 'shadow-sm' : ''}
              ${button.disabled || disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
              ${index > 0 ? 'border-l border-border' : ''}
              ${index === 0 ? 'rounded-l-lg overflow-hidden' : ''}
              ${index === buttons.length - 1 && moreOptions.length === 0 ? 'rounded-r-lg overflow-hidden' : ''}
              ${index === buttons.length - 1 && moreOptions.length > 0 ? 'border-r border-border' : ''}
            `, children: button.label }, index))), moreOptions.length > 0 && (_jsx(DropdownMenu, { trigger: _jsxs("button", { className: `
                ${sizeClasses[size]} 
                flex items-center justify-center gap-1
                cursor-pointer leading-tight 
                font-medium transition-all duration-200 ease-in-out 
                focus:outline-none
                bg-muted/50 text-foreground hover:bg-muted/70
                border-l border-border rounded-r-lg overflow-hidden
                ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
              `, children: [_jsx("span", { className: "hidden sm:inline", children: "More" }), _jsx("span", { className: "sm:hidden text-xs", children: "..." }), _jsx("svg", { className: "w-3 h-3 sm:w-4 sm:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), options: moreOptions.map(option => ({
                    label: option.label,
                    value: option.label.toLowerCase().replace(/\s+/g, '-'),
                    icon: option.icon,
                    onClick: option.onClick,
                    disabled: option.disabled,
                    divider: option.divider
                })), align: "right" }))] }));
}
// Preset configurations for common use cases
export const ButtonGroupPresets = {
    // Segmented control for filters
    filter: {
        variant: 'segmented',
        size: 'sm',
        orientation: 'horizontal'
    },
    // Toolbar buttons
    toolbar: {
        variant: 'attached',
        size: 'md',
        orientation: 'horizontal'
    },
    // Action buttons with spacing
    actions: {
        variant: 'spaced',
        size: 'md',
        orientation: 'horizontal'
    },
    // Vertical navigation
    vertical: {
        variant: 'default',
        size: 'md',
        orientation: 'vertical'
    },
    // Small segmented control
    smallSegmented: {
        variant: 'segmented',
        size: 'sm',
        orientation: 'horizontal'
    },
    // Large action group
    largeActions: {
        variant: 'spaced',
        size: 'lg',
        orientation: 'horizontal'
    }
};
// Common button group configurations
export const ButtonGroupConfigs = {
    // File operations
    fileOperations: [
        { label: 'New', variant: 'primary' },
        { label: 'Open', variant: 'default' },
        { label: 'Save', variant: 'default' },
        { label: 'Export', variant: 'secondary' }
    ],
    // View modes
    viewModes: [
        { label: 'Grid', variant: 'default' },
        { label: 'List', variant: 'default' },
        { label: 'Card', variant: 'default' }
    ],
    // Sort options
    sortOptions: [
        { label: 'Name', variant: 'default' },
        { label: 'Date', variant: 'default' },
        { label: 'Size', variant: 'default' },
        { label: 'Type', variant: 'default' }
    ],
    // Status filters
    statusFilters: [
        { label: 'All', variant: 'default' },
        { label: 'Active', variant: 'default' },
        { label: 'Pending', variant: 'default' },
        { label: 'Completed', variant: 'default' }
    ]
};
