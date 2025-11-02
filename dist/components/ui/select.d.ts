import React from 'react';
interface SelectProps {
    label?: string;
    placeholder?: string;
    isLabel?: boolean;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
    children: React.ReactNode;
}
export declare function Select({ label, placeholder, isLabel, className, value, onChange, disabled, children }: SelectProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=select.d.ts.map