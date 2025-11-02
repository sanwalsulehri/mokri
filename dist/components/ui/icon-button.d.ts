import React from 'react';
interface IconButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    className?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
}
export declare function IconButton({ children, onClick, href, target, className, disabled, size }: IconButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=icon-button.d.ts.map