'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
export function Modal({ title, children, isOpen, onClose, showCloseButton = true, size = 'md', className = "" }) {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    const sizeClasses = {
        sm: 'max-w-sm md:max-w-md',
        md: 'max-w-md md:max-w-lg',
        lg: 'max-w-lg md:max-w-2xl',
        xl: 'max-w-xl md:max-w-4xl'
    };
    return (_jsx(AnimatePresence, { children: isOpen && (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, className: "fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4", onClick: handleBackdropClick, children: [_jsx("div", { className: "absolute inset-0 bg-black/50 backdrop-blur-sm" }), _jsxs(motion.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.3
                    }, className: `relative w-full ${sizeClasses[size]} bg-background border border-secondary rounded-xl shadow-2xl ${className}`, children: [(title || showCloseButton) && (_jsxs("div", { className: "flex items-center justify-between p-4 md:p-6 border-b border-secondary/20", children: [title && (_jsx("h2", { className: "text-lg md:text-xl font-semibold text-foreground", children: title })), showCloseButton && (_jsx(Button, { onClick: onClose, bg: false, size: "md", className: "hover:bg-secondary/40", children: _jsx("svg", { className: "w-4 h-4 md:w-5 md:h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }))] })), _jsx("div", { className: "p-4 md:p-6", children: children })] })] })) }));
}
export function ModalTrigger({ children, modalContent, modalTitle, modalSize = 'md', className = "" }) {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx("div", { onClick: () => setIsOpen(true), className: className, children: children }), _jsx(Modal, { title: modalTitle, isOpen: isOpen, onClose: () => setIsOpen(false), size: modalSize, children: modalContent })] }));
}
