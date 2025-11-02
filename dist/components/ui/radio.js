'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Radio({ name, value, label, checked = false, onChange, disabled = false, className = "", size = 'md' }) {
    const sizeClasses = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5'
    };
    const textSizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
    };
    const handleChange = (e) => {
        if (!disabled && onChange) {
            onChange(e.target.value);
        }
    };
    return (_jsxs("label", { className: `flex items-center gap-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`, children: [_jsx("input", { type: "radio", name: name, value: value, checked: checked, onChange: handleChange, disabled: disabled, className: `${sizeClasses[size]} bg-background border border-border rounded-full  transition-all duration-200` }), label && (_jsx("span", { className: `${textSizeClasses[size]} text-foreground`, children: label }))] }));
}
