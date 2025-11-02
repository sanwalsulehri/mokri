interface BadgeProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    bg?: boolean;
    hover?: boolean;
    variant?: 'default' | 'secondary' | 'destructive' | 'muted';
}
export declare function Badge({ children, onClick, className, bg, hover, variant }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=badge.d.ts.map