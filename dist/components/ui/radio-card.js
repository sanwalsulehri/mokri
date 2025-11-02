'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function RadioCard({ name, value, label, description, checked = false, onChange, disabled = false, className = "" }) {
    const handleChange = (e) => {
        if (!disabled && onChange) {
            onChange(e.target.value);
        }
    };
    return (_jsx("div", { className: `
        relative border rounded-lg p-4 cursor-pointer transition-all duration-200
        ${checked
            ? 'border-foreground bg-muted shadow-sm'
            : 'border-border hover:border-foreground hover:bg-muted/50'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `, onClick: () => !disabled && onChange && onChange(value), children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsxs("div", { className: "relative mt-1", children: [_jsx("input", { type: "radio", name: name, value: value, checked: checked, onChange: handleChange, disabled: disabled, className: "w-4 h-4 text-foreground bg-background border border-border rounded-full focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 checked:bg-foreground checked:border-foreground transition-all duration-200 opacity-0 absolute" }), _jsx("div", { className: `w-4 h-4 border border-border rounded-full flex items-center justify-center transition-all duration-200 ${checked ? 'border-foreground bg-foreground' : 'bg-background'}`, children: checked && (_jsx("svg", { className: "w-2 h-2 text-background", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) })) })] }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "text-sm font-medium text-foreground mb-1", children: label }), description && (_jsx("div", { className: "text-xs text-muted-foreground", children: description }))] })] }) }));
}
