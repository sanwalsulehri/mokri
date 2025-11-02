export interface ProgressBarProps {
    value?: number;
    max?: number;
    size?: 'sm' | 'md' | 'lg';
    type?: 'linear' | 'scroll';
    color?: string;
    backgroundColor?: string;
    showLabel?: boolean;
    label?: string;
    showPercentage?: boolean;
    animated?: boolean;
    striped?: boolean;
    scrollProgress?: boolean;
    className?: string;
}
export declare function ProgressBar({ value, max, size, type, color, backgroundColor, showLabel, label, showPercentage, animated, striped, scrollProgress, className }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
export declare const ProgressBarPresets: {
    upload: {
        variant: "default";
        showLabel: boolean;
        label: string;
        showPercentage: boolean;
        animated: boolean;
    };
    download: {
        variant: "success";
        showLabel: boolean;
        label: string;
        showPercentage: boolean;
    };
    error: {
        variant: "error";
        showLabel: boolean;
        label: string;
        showPercentage: boolean;
    };
};
//# sourceMappingURL=progress-bar.d.ts.map