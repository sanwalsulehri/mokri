'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export const DropdownMenu = ({ trigger, options, align = 'right', className = '', onOpenChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);
    useEffect(() => {
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(isOpen);
    }, [isOpen, onOpenChange]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleItemClick = (item) => {
        var _a;
        if (!item.disabled) {
            (_a = item.onClick) === null || _a === void 0 ? void 0 : _a.call(item);
            setIsOpen(false);
        }
    };
    const getAlignmentClasses = () => {
        switch (align) {
            case 'left':
                return 'left-0';
            case 'center':
                return 'left-1/2 transform -translate-x-1/2';
            case 'right':
            default:
                return 'right-0';
        }
    };
    return (_jsxs("div", { className: `relative inline-block ${className}`, ref: dropdownRef, children: [_jsx("div", { onClick: toggleDropdown, className: "cursor-pointer", children: trigger }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, scale: 0.95, y: -5 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: -5 }, transition: { duration: 0.15, ease: "easeOut" }, className: `absolute z-50 mt-2 w-48 md:w-56 ${getAlignmentClasses()} ${className}`, children: _jsx("div", { className: "bg-muted border py-1.5 border-border rounded-lg shadow-lg overflow-y-auto max-h-64", children: options.map((item, index) => (_jsxs(React.Fragment, { children: [item.divider && index > 0 && (_jsx("div", { className: "border-t border-border my-1" })), _jsxs(motion.button, { type: "button", onClick: () => handleItemClick(item), disabled: item.disabled, className: `
                      w-full px-3 py-1.5 md:px-4 md:py-2 text-left text-xs md:text-sm text-foreground
                      hover:bg-secondary hover:text-foreground
                      transition-colors duration-150
                      flex items-center gap-2 md:gap-3
                      ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    `, whileTap: { scale: item.disabled ? 1 : 0.98 }, children: [item.icon && (_jsx("span", { className: "flex-shrink-0 text-foreground/60", children: item.icon })), _jsx("span", { className: "flex-1", children: item.label })] })] }, item.value))) }) })) })] }));
};
// Icon components for common dropdown items
export const DropdownIcons = {
    Profile: () => (_jsx("svg", { className: "w-3 h-3 md:w-4 md:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) })),
    Settings: () => (_jsxs("svg", { className: "w-3 h-3 md:w-4 md:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }), _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })] })),
    Logout: () => (_jsx("svg", { className: "w-3 h-3 md:w-4 md:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" }) })),
    Help: () => (_jsx("svg", { className: "w-3 h-3 md:w-4 md:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) })),
    Bell: () => (_jsx("svg", { className: "w-3 h-3 md:w-4 md:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" }) }))
};
export default DropdownMenu;
