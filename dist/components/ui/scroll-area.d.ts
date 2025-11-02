import React from 'react';
interface ScrollAreaProps {
    children: React.ReactNode;
    className?: string;
    maxHeight?: string;
    title?: string;
    showBorder?: boolean;
    size?: 'sm' | 'md' | 'lg';
}
export declare function ScrollArea({ children, className, maxHeight, title, showBorder, size }: ScrollAreaProps): import("react/jsx-runtime").JSX.Element;
export declare const ScrollAreaPresets: {
    small: {
        size: "sm";
        maxHeight: string;
        showBorder: boolean;
    };
    medium: {
        size: "md";
        maxHeight: string;
        showBorder: boolean;
    };
    large: {
        size: "lg";
        maxHeight: string;
        showBorder: boolean;
    };
};
export {};
//# sourceMappingURL=scroll-area.d.ts.map