'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from './theme-provider';
import { Switch } from './ui/switch';
import { IconButton } from './ui/icon-button';
export function ThemeToggle({ variant = 'button', size = 'md', className = "", lightIcon, darkIcon, leftLabel, rightLabel }) {
    const { theme, toggleTheme } = useTheme();
    // Default icons
    const defaultLightIcon = (_jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }) }));
    const defaultDarkIcon = (_jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }) }));
    if (variant === 'switch') {
        return (_jsx(Switch, { checked: theme === 'dark', onChange: toggleTheme, size: size, className: className, leftLabel: leftLabel, rightLabel: rightLabel, controlTheme: true }));
    }
    return (_jsx(IconButton, { onClick: toggleTheme, className: className, "aria-label": "Toggle theme", size: "sm", children: theme === 'light' ? (lightIcon || (_jsx("svg", { className: "h-4.5 w-4.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }) }))) : (darkIcon || (_jsx("svg", { className: "h-4.5 w-4.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }) }))) }));
}
