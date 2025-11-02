import React from 'react';
interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    className?: string;
    id?: string;
}
export declare function Checkbox({ checked, defaultChecked, onChange, disabled, size, label, className, id }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
interface CheckboxGroupProps {
    children: React.ReactNode;
    className?: string;
    orientation?: 'horizontal' | 'vertical';
    spacing?: 'sm' | 'md' | 'lg';
}
export declare function CheckboxGroup({ children, className, orientation, spacing }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export declare const CheckboxPresets: {
    form: {
        size: "md";
        orientation: "vertical";
        spacing: "md";
    };
    settings: {
        size: "sm";
        orientation: "vertical";
        spacing: "sm";
    };
    large: {
        size: "lg";
        orientation: "vertical";
        spacing: "lg";
    };
};
export {};
//# sourceMappingURL=checkbox.d.ts.map