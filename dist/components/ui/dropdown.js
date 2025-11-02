'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const defaultOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' }
];
export function DropDown({ label, placeholder = "Select an option...", options = defaultOptions, className = "", value, onChange, disabled = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || '');
    const dropdownRef = useRef(null);
    const selectedOption = options.find(option => option.value === selectedValue);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleSelect = (optionValue) => {
        setSelectedValue(optionValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(optionValue);
        setIsOpen(false);
    };
    const toggleDropdown = () => {
        if (!disabled) {
            console.log('Toggling dropdown, current state:', isOpen);
            setIsOpen(!isOpen);
        }
    };
    return (_jsxs("div", { className: `w-full ${className}`, children: [label && (_jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: label })), _jsxs("div", { className: "relative", ref: dropdownRef, children: [_jsx("button", { type: "button", onClick: toggleDropdown, disabled: disabled, className: `w-full bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-border/70 focus:border-border/40 focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 ease-in-out shadow-sm focus:shadow-md py-2 pl-3 pr-8 text-left cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`, children: _jsx("span", { className: selectedOption ? 'text-foreground' : 'text-foreground/60', children: selectedOption ? selectedOption.label : placeholder }) }), _jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: _jsx(motion.svg, { className: "h-4 w-4 text-foreground/60", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", animate: { rotate: isOpen ? 180 : 0 }, transition: { duration: 0.2 }, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, y: -5 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -5 }, transition: { duration: 0.15, ease: "easeOut" }, className: "absolute z-[9999] py-2 w-full mt-1 px-2 bg-background border border-border rounded-lg shadow-lg max-h-60 overflow-auto", children: options.map((option, index) => (_jsx(motion.button, { type: "button", onClick: () => handleSelect(option.value), className: `w-full text-left px-3 py-2 font-medium hover:bg-muted cursor-pointer text-sm text-foreground/80 transition-colors duration-150 rounded-md  ${selectedValue === option.value ? 'bg-muted/50 font-semibold' : ''}`, whileTap: { scale: 0.98 }, children: option.label }, option.value))) })) })] })] }));
}
