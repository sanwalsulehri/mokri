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
import { useState, useRef } from 'react';
export function MagicCard(_a) {
    var { children, isMagic = false, className = '' } = _a, props = __rest(_a, ["children", "isMagic", "className"]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const handleMouseMove = (e) => {
        if (!isMagic || !cardRef.current)
            return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };
    return (_jsxs("div", Object.assign({ ref: cardRef, onMouseMove: handleMouseMove, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false) }, props, { className: `
        relative overflow-hidden rounded-xl border border-border
        bg-background backdrop-blur-md
        transition-all duration-300 ease-out
        ${isMagic ? 'cursor-pointer' : ''}
        ${className}
      `, children: [isMagic && (_jsx("div", { className: "absolute inset-0 pointer-events-none transition-opacity duration-300 z-0", style: {
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,
              var(--glow),
              transparent 70%)`,
                    transition: 'opacity glow0.4s ease, background 0.1s ease',
                } })), _jsx("div", { className: "relative z-10 p-6", children: children })] })));
}
