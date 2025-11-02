interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date) => void;
    placeholder?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    showToday?: boolean;
}
export declare function DatePicker({ value, onChange, placeholder, className, size, disabled, minDate, maxDate, showToday }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
export declare const DatePickerPresets: {
    small: {
        size: "sm";
        showToday: boolean;
    };
    medium: {
        size: "md";
        showToday: boolean;
    };
    large: {
        size: "lg";
        showToday: boolean;
    };
};
export {};
//# sourceMappingURL=date-picker.d.ts.map