'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const Fade = ({ children, className = '', fadeLeft = true, fadeRight = true, fadeWidth = 'md', fadeOpacity = 0.8 }) => {
    const widthClasses = {
        sm: 'w-8 md:w-16',
        md: 'w-16 md:w-32',
        lg: 'w-24 md:w-48'
    };
    const widthClass = widthClasses[fadeWidth];
    return (_jsxs("div", { className: `relative overflow-hidden ${className}`, children: [fadeLeft && (_jsx(motion.div, { className: `absolute left-0 top-0 bottom-0 ${widthClass} bg-gradient-to-r from-background via-background/${Math.round(fadeOpacity * 100)} to-transparent z-10 pointer-events-none`, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } })), fadeRight && (_jsx(motion.div, { className: `absolute right-0 top-0 bottom-0 ${widthClass} bg-gradient-to-l from-background via-background/${Math.round(fadeOpacity * 100)} to-transparent z-10 pointer-events-none`, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } })), children] }));
};
export { Fade };
