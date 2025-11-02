'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
export function ScrollArea({ children, className = '', maxHeight = 'max-h-48', title, showBorder = true, size = 'md' }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollRef = useRef(null);
    const sizeClasses = {
        sm: {
            title: 'px-2 py-1.5 text-xs sm:text-sm',
            item: 'px-2 py-1.5 text-xs sm:text-sm',
            maxHeight: 'max-h-32 sm:max-h-40'
        },
        md: {
            title: 'px-3 py-2 text-sm sm:text-base',
            item: 'px-3 py-2 text-sm sm:text-base',
            maxHeight: 'max-h-48 sm:max-h-56'
        },
        lg: {
            title: 'px-4 py-2.5 text-base sm:text-lg',
            item: 'px-4 py-2.5 text-base sm:text-lg',
            maxHeight: 'max-h-64 sm:max-h-72'
        }
    };
    const currentMaxHeight = maxHeight === 'max-h-48' ? sizeClasses[size].maxHeight : maxHeight;
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                setIsScrolled(scrollRef.current.scrollTop > 0);
            }
        };
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
            return () => scrollElement.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (_jsx("div", { className: `w-full ${className}`, children: _jsxs("div", { ref: scrollRef, className: `
          ${currentMaxHeight} overflow-y-auto
          ${showBorder ? 'border border-border rounded-lg' : ''}
          rounded-lg
        `, children: [title && (_jsx("div", { className: `${sizeClasses[size].title} text-foreground border-b border-border sticky top-0 bg-background z-10 font-semibold`, children: title })), _jsx("div", { children: React.Children.map(children, (child, index) => (_jsx("div", { className: `${sizeClasses[size].item} hover:bg-muted/30 transition-colors ${index > 0 ? 'border-t border-border' : ''}`, children: child }, index))) })] }) }));
}
// Preset configurations
export const ScrollAreaPresets = {
    small: {
        size: 'sm',
        maxHeight: 'max-h-32 sm:max-h-40',
        showBorder: true
    },
    medium: {
        size: 'md',
        maxHeight: 'max-h-48 sm:max-h-56',
        showBorder: true
    },
    large: {
        size: 'lg',
        maxHeight: 'max-h-64 sm:max-h-72',
        showBorder: true
    }
};
