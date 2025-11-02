'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Avatar from './avatar';
import { Card } from './card';
import { Fade } from './fade';
// Default marquee cards
const defaultMarqueeCards = [
    {
        id: 1,
        name: "Sarah Johnson",
        description: "Frontend Developer with 5+ years experience in React and TypeScript",
        avatar: "SJ",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face&auto=format"
    },
    {
        id: 2,
        name: "Mike Chen",
        description: "UI/UX Designer creating beautiful and intuitive user experiences",
        avatar: "MC",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format"
    },
    {
        id: 3,
        name: "Emily Davis",
        description: "Product Manager driving innovation and strategic product development",
        avatar: "ED",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&auto=format"
    },
    {
        id: 4,
        name: "Alex Rodriguez",
        description: "Backend Engineer building scalable and robust server architectures",
        avatar: "AR",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format"
    },
    {
        id: 5,
        name: "Lisa Wang",
        description: "DevOps Specialist ensuring smooth deployments and infrastructure",
        avatar: "LW",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face&auto=format"
    },
    {
        id: 6,
        name: "David Kim",
        description: "Data Scientist extracting insights from complex datasets",
        avatar: "DK",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&auto=format"
    }
];
const Marquee = ({ cards = defaultMarqueeCards, speed = 'normal', direction = 'left', pauseOnHover = true, fadeEdges = true, className = '', layers = 'single', children }) => {
    const speedDuration = {
        slow: 60,
        normal: 45,
        fast: 30
    };
    const duration = speedDuration[speed];
    const isReverse = direction === 'right';
    const renderCustomItem = (item, key) => (_jsx("div", { className: "mx-1 flex-shrink-0", children: item }, key));
    const renderCardItem = (card, key) => (_jsx(motion.div, { className: "mx-1  max-w-[250px] h-full md:max-w-[350px] flex-shrink-0", children: _jsx(Card, { className: "w-full h-full p-4 h-full rounded-lg transition-all duration-300 cursor-pointer", children: _jsxs("div", { className: "flex md:flex-row flex-col items-start space-x-3", children: [_jsx(Avatar, { src: card.image, fallback: card.avatar, size: "md", className: "flex-shrink-0" }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx(motion.h4, { className: "text-base font-semibold text-foreground mb-0.5", children: card.name }), _jsxs(motion.p, { className: "text-sm text-foreground/70 mb-2", children: ["@", card.name.toLowerCase().replace(/\s+/g, '')] }), _jsx(motion.p, { className: "text-sm  text-muted-foreground leading-relaxed", children: card.description })] })] }) }) }, key));
    // Use children if provided, otherwise use cards
    const itemsToRender = children ? React.Children.toArray(children) : cards;
    const duplicatedItems = [...itemsToRender, ...itemsToRender]; // Duplicate for seamless loop
    const renderMarqueeLayer = (direction, layerKey) => {
        const isReverse = direction === 'right';
        const [isPaused, setIsPaused] = useState(false);
        const containerRef = useRef(null);
        useEffect(() => {
            if (containerRef.current) {
                const element = containerRef.current;
                if (isPaused) {
                    element.style.animationPlayState = 'paused';
                }
                else {
                    element.style.animationPlayState = 'running';
                }
            }
        }, [isPaused]);
        return (_jsx("div", { ref: containerRef, className: `flex ${isReverse ? 'animate-marquee-reverse' : 'animate-marquee'}`, style: {
                width: '200%',
                animationDuration: `${duration}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
            }, onMouseEnter: () => {
                if (pauseOnHover) {
                    setIsPaused(true);
                }
            }, onMouseLeave: () => {
                if (pauseOnHover) {
                    setIsPaused(false);
                }
            }, children: _jsx("div", { className: `flex items-center py-2 ${isReverse ? 'flex-row-reverse' : ''}`, children: duplicatedItems.map((item, index) => {
                    if (children) {
                        return renderCustomItem(item, `${layerKey}-custom-${index}`);
                    }
                    else {
                        return renderCardItem(item, `${layerKey}-card-${item.id}-${index}`);
                    }
                }) }) }, layerKey));
    };
    return (_jsx(Fade, { fadeLeft: fadeEdges, fadeRight: fadeEdges, className: `py-4 ${className}`, children: _jsx("div", { className: "-space-y-1", children: layers === 'double' ? (_jsxs(_Fragment, { children: [renderMarqueeLayer('left', 'layer1'), renderMarqueeLayer('right', 'layer2')] })) : (
            /* Single layer */
            renderMarqueeLayer(direction, 'single')) }) }));
};
export { Marquee, defaultMarqueeCards };
