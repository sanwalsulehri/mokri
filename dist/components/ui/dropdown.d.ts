interface DropDownProps {
    label?: string;
    placeholder?: string;
    options?: {
        value: string;
        label: string;
    }[];
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}
export declare function DropDown({ label, placeholder, options, className, value, onChange, disabled }: DropDownProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=dropdown.d.ts.map