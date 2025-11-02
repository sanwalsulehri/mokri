interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    bg?: boolean;
    outline?: boolean;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
export declare function Button({ children, onClick, className, bg, outline, size, disabled, type }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=button.d.ts.map