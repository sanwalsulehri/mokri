'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
const ToastContext = createContext(undefined);
export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const addToast = useCallback((toast) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = Object.assign(Object.assign({}, toast), { id });
        setToasts(prev => [...prev, newToast]);
        // Auto remove after duration
        const duration = toast.duration || 5000;
        setTimeout(() => {
            removeToast(id);
        }, duration);
    }, []);
    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);
    return (_jsxs(ToastContext.Provider, { value: { toasts, addToast, removeToast }, children: [children, _jsx(ToastContainer, {})] }));
}
export function useToast() {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}
function ToastContainer() {
    const { toasts, removeToast } = useToast();
    return (_jsx("div", { className: "fixed top-2 right-2 md:top-4 md:right-4 z-[10000000] space-y-2 md:space-y-3 max-w-xs md:max-w-sm w-full", children: _jsx(AnimatePresence, { mode: "popLayout", children: toasts.map((toast, index) => (_jsx(motion.div, { layout: true, initial: {
                    opacity: 0,
                    x: 200
                }, animate: {
                    opacity: 1,
                    x: 0
                }, exit: {
                    opacity: 0,
                    x: 200
                }, transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: index * 0.05
                }, children: _jsx(ToastItem, { toast: toast, onRemove: removeToast }) }, toast.id))) }) }));
}
function ToastItem({ toast, onRemove }) {
    const handleRemove = () => {
        onRemove(toast.id);
    };
    const getVariantStyles = () => {
        switch (toast.variant) {
            case 'success':
                return {
                    container: 'bg-green-50 border-green-200',
                    iconBg: 'bg-green-100',
                    icon: 'text-green-600',
                    title: 'text-green-900',
                    description: 'text-green-700',
                    accent: 'bg-green-500'
                };
            case 'error':
                return {
                    container: 'bg-red-50 border-red-200',
                    iconBg: 'bg-red-100',
                    icon: 'text-red-600',
                    title: 'text-red-900',
                    description: 'text-red-700',
                    accent: 'bg-red-500'
                };
            case 'warning':
                return {
                    container: 'bg-yellow-50 border-yellow-200',
                    iconBg: 'bg-yellow-100',
                    icon: 'text-yellow-600',
                    title: 'text-yellow-900',
                    description: 'text-yellow-700',
                    accent: 'bg-yellow-500'
                };
            default:
                return {
                    container: 'bg-background border-border',
                    iconBg: 'bg-foreground/10',
                    icon: 'text-foreground/70',
                    title: 'text-foreground',
                    description: 'text-foreground/70',
                    accent: 'bg-foreground'
                };
        }
    };
    const getIcon = () => {
        switch (toast.variant) {
            case 'success':
                return (_jsx("svg", { className: "w-3 h-3 md:w-4 md:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }));
            case 'error':
                return (_jsx("svg", { className: "w-3 h-3 md:w-4 md:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }));
            case 'warning':
                return (_jsx("svg", { className: "w-3 h-3 md:w-4 md:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" }) }));
            default:
                return (_jsx("svg", { className: "w-3 h-3 md:w-4 md:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }));
        }
    };
    const styles = getVariantStyles();
    return (_jsx("div", { className: `
        w-full border rounded-lg shadow-md p-2 md:p-3
        ${styles.container}
      `, children: _jsxs("div", { className: "flex items-start gap-2 md:gap-3", children: [_jsx("div", { className: `flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full ${styles.iconBg} flex items-center justify-center ${styles.icon}`, children: getIcon() }), _jsxs("div", { className: "flex-1 min-w-0 space-y-0.5 md:space-y-1", children: [toast.title && (_jsx("h4", { className: `text-xs md:text-sm font-medium ${styles.title}`, children: toast.title })), toast.description && (_jsx("p", { className: `text-xs ${styles.description}`, children: toast.description })), toast.action && (_jsx("div", { className: "pt-0.5 md:pt-1", children: _jsx(Button, { onClick: toast.action.onClick, className: "text-xs px-1.5 py-0.5 md:px-2 md:py-1 h-auto", children: toast.action.label }) }))] }), _jsx("button", { onClick: handleRemove, className: `
            flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center
            ${styles.iconBg} ${styles.icon} opacity-60 hover:opacity-100
            transition-opacity duration-200
          `, children: _jsx("svg", { className: "w-2.5 h-2.5 md:w-3 md:h-3", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })] }) }));
}
// Convenience functions for common toast types
export const toast = {
    success: (title, description, options) => {
        // This would be used with the hook in components
        return Object.assign({ title, description, variant: 'success' }, options);
    },
    error: (title, description, options) => {
        return Object.assign({ title, description, variant: 'error' }, options);
    },
    warning: (title, description, options) => {
        return Object.assign({ title, description, variant: 'warning' }, options);
    },
    info: (title, description, options) => {
        return Object.assign({ title, description, variant: 'default' }, options);
    },
};
