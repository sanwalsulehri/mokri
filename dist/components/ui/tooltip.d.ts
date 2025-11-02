import React from 'react';
interface TooltipProps {
    children: React.ReactNode;
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    className?: string;
}
export declare function Tooltip({ children, content, position, delay, className }: TooltipProps): import("react/jsx-runtime").JSX.Element;
interface TooltipWrapperProps {
    children: React.ReactNode;
    tooltip: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
}
export declare function TooltipWrapper({ children, tooltip, position, delay }: TooltipWrapperProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=tooltip.d.ts.map