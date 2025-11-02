'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext(undefined);
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
        else {
            // Default to dark mode
            setTheme('dark');
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme: () => setTheme(prev => prev === 'light' ? 'dark' : 'light') }, children: children }));
}
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error('useTheme must be used within a ThemeProvider');
    return context;
}
