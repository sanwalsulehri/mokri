'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Card({ title, description, children, className = "", dashed = false, shadow = true, padding = "p-6", rounded = "rounded-lg", titleClassName = "", descriptionClassName = "", contentClassName = "" }) {
    const borderClass = dashed ? "border-dashed" : "border-solid";
    const shadowClass = shadow ? "shadow-md" : "";
    return (_jsxs("div", { className: `
        w-full bg-background ${rounded} border border-border ${padding}
        ${borderClass} ${shadowClass} 
        ${className}
      `, children: [_jsxs("div", { className: "", children: [title && (_jsx("h3", { className: `text-xl mt-6 font-semibold text-foreground text-center ${titleClassName}`, children: title })), description && (_jsx("p", { className: `text-foreground/70 mt-2 text-sm text-center ${descriptionClassName}`, children: description }))] }), children && (_jsx("div", { className: `space-y-4  ${contentClassName}`, children: children }))] }));
}
