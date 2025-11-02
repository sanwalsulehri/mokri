interface RadioProps {
    name: string;
    value: string;
    label?: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    disabled?: boolean;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}
export declare function Radio({ name, value, label, checked, onChange, disabled, className, size }: RadioProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=radio.d.ts.map