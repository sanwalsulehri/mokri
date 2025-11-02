interface SwitchProps {
    title?: string;
    leftLabel?: string;
    rightLabel?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    controlTheme?: boolean;
}
export declare function Switch({ title, leftLabel, rightLabel, checked, onChange, disabled, className, size, controlTheme }: SwitchProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=switch.d.ts.map