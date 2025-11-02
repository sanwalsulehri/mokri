interface RadioCardProps {
    name: string;
    value: string;
    label: string;
    description?: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    disabled?: boolean;
    className?: string;
}
export declare function RadioCard({ name, value, label, description, checked, onChange, disabled, className }: RadioCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=radio-card.d.ts.map