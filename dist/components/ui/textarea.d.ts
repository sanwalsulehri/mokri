import React from 'react';
interface TextAreaProps {
    label?: string;
    placeholder?: string;
    isLabel?: boolean;
    isWithButton?: boolean;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onButtonClick?: () => void;
    buttonText?: string;
    disabled?: boolean;
    rows?: number;
    maxLength?: number;
}
export declare function TextArea({ label, placeholder, isLabel, isWithButton, className, value, onChange, onButtonClick, buttonText, disabled, rows, maxLength }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=textarea.d.ts.map