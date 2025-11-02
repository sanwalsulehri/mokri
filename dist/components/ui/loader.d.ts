export interface LoaderProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'outline';
    color?: 'primary' | 'secondary' | 'accent';
    className?: string;
}
export declare function Loader({ size, variant, color, className }: LoaderProps): import("react/jsx-runtime").JSX.Element;
export declare const LoaderPresets: {
    smallSpinner: {
        size: "sm";
        variant: "spinner";
        color: "primary";
    };
    mediumDots: {
        size: "md";
        variant: "dots";
        color: "primary";
    };
    largePulse: {
        size: "lg";
        variant: "pulse";
        color: "primary";
    };
    accentBars: {
        size: "md";
        variant: "bars";
        color: "accent";
    };
    outlineLoader: {
        size: "md";
        variant: "outline";
        color: "primary";
    };
};
//# sourceMappingURL=loader.d.ts.map