import React from 'react';
interface InputProps {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'file';
    isLabel?: boolean;
    isWithIcon?: boolean;
    customIcon?: React.ReactNode;
    isWithButton?: boolean;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void;
    buttonText?: string;
    disabled?: boolean;
    bg?: boolean;
    accept?: string;
    readOnly?: boolean;
}
export declare function Input({ label, placeholder, type, isLabel, isWithIcon, customIcon, isWithButton, className, value, onChange, onFocus, onBlur, onKeyDown, onButtonClick, buttonText, disabled, bg, accept, readOnly }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=input.d.ts.map