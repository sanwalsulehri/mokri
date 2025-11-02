import React from 'react';
interface ModalProps {
    title?: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    showCloseButton?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}
export declare function Modal({ title, children, isOpen, onClose, showCloseButton, size, className }: ModalProps): import("react/jsx-runtime").JSX.Element;
interface ModalTriggerProps {
    children: React.ReactNode;
    modalContent: React.ReactNode;
    modalTitle?: string;
    modalSize?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}
export declare function ModalTrigger({ children, modalContent, modalTitle, modalSize, className }: ModalTriggerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=modal.d.ts.map