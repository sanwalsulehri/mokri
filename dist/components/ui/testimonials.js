'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from './avatar';
// Default testimonials data
const defaultTestimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "TechCorp",
        content: "This platform has completely transformed how we manage our projects. The intuitive interface and powerful features have increased our team's productivity by 40%. Highly recommended!",
        avatar: "SJ",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        rating: 5
    },
    {
        id: 2,
        name: "Mike Chen",
        role: "CEO",
        company: "StartupXYZ",
        content: "The best investment we've made for our business. The analytics dashboard gives us insights we never had before. Our revenue has grown 60% since implementing this solution.",
        avatar: "MC",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Design Director",
        company: "CreativeStudio",
        content: "As a designer, I appreciate the attention to detail and user experience. The tools are powerful yet easy to use. It's become an essential part of our creative workflow.",
        avatar: "ED",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 5
    },
    {
        id: 4,
        name: "Alex Rodriguez",
        role: "CTO",
        company: "InnovateLab",
        content: "The technical implementation is flawless. The API is well-documented and the integration was seamless. Our development team loves working with this platform.",
        avatar: "AR",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5
    },
    {
        id: 5,
        name: "Lisa Wang",
        role: "Marketing Manager",
        company: "GrowthCo",
        content: "The marketing automation features are incredible. We've seen a 3x increase in our conversion rates. The ROI has been outstanding from day one.",
        avatar: "LW",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        rating: 5
    },
    {
        id: 6,
        name: "David Kim",
        role: "Operations Director",
        company: "ScaleUp",
        content: "The operational efficiency gains have been remarkable. We've streamlined our processes and reduced manual work by 70%. This tool is a game-changer.",
        avatar: "DK",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        rating: 5
    }
];
const Testimonials = ({ testimonials = defaultTestimonials, autoPlay = true, autoPlayInterval = 5000, showNavigation = true, showDots = true, className = '' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay || isHovered)
            return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
        }, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, isHovered, testimonials.length]);
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };
    const goToNext = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (_jsx("svg", { className: `w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`, fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i)));
    };
    return (_jsxs("div", { className: `relative w-full max-w-4xl mx-auto ${className}`, children: [_jsxs("div", { className: "relative", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [_jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.5, ease: "easeInOut" }, className: "text-center space-y-6", children: [_jsxs("div", { className: "relative", children: [_jsx("svg", { className: "w-12 h-12 text-muted-foreground/20 mx-auto mb-4", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" }) }), _jsxs("blockquote", { className: "text-xl md:text-2xl font-medium text-foreground leading-relaxed max-w-3xl mx-auto", children: ["\"", testimonials[currentIndex].content, "\""] })] }), _jsx("div", { className: "flex justify-center space-x-1", children: renderStars(testimonials[currentIndex].rating) }), _jsxs("div", { className: "flex flex-col items-center space-y-2", children: [_jsx(Avatar, { src: testimonials[currentIndex].image, fallback: testimonials[currentIndex].avatar, size: "lg", className: "border-2 border-border" }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-semibold text-foreground", children: testimonials[currentIndex].name }), _jsxs("p", { className: "text-sm text-muted-foreground", children: [testimonials[currentIndex].role, " at ", testimonials[currentIndex].company] })] })] })] }, currentIndex) }), showNavigation && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: goToPrevious, className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-background/90 hover:bg-background border border-border rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group", children: _jsx("svg", { className: "w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }), _jsx("button", { onClick: goToNext, className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-background/90 hover:bg-background border border-border rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group", children: _jsx("svg", { className: "w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) })] }))] }), showDots && (_jsx("div", { className: "flex justify-center space-x-2 mt-8", children: testimonials.map((_, index) => (_jsx("button", { onClick: () => goToSlide(index), className: `w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                        ? 'bg-foreground scale-125'
                        : 'bg-muted hover:bg-muted-foreground/50'}` }, index))) }))] }));
};
export { Testimonials, defaultTestimonials };
