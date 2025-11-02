interface InputOTPProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    autoFocus?: boolean;
}
export declare function InputOTP({ length, value, onChange, className, size, disabled, autoFocus }: InputOTPProps): import("react/jsx-runtime").JSX.Element;
export declare const InputOTPPresets: {
    small: {
        size: "sm";
        length: number;
    };
    medium: {
        size: "md";
        length: number;
    };
    large: {
        size: "lg";
        length: number;
    };
};
export {};
//# sourceMappingURL=input-otp.d.ts.map