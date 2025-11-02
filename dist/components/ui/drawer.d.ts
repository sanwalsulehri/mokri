import React from 'react';
interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
    position?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showCloseButton?: boolean;
}
export declare function Drawer({ isOpen, onClose, title, description, children, className, position, size, showCloseButton }: DrawerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=drawer.d.ts.map