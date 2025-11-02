interface SliderProps {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}
export declare function Slider({ value: controlledValue, defaultValue, min, max, step, onChange, className, size, disabled }: SliderProps): import("react/jsx-runtime").JSX.Element;
export declare const SliderPresets: {
    small: {
        size: "sm";
        min: number;
        max: number;
        step: number;
    };
    medium: {
        size: "md";
        min: number;
        max: number;
        step: number;
    };
    large: {
        size: "lg";
        min: number;
        max: number;
        step: number;
    };
};
export {};
//# sourceMappingURL=slider.d.ts.map