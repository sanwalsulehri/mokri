interface FooterProps {
    className?: string;
    showNewsletter?: boolean;
    showSocial?: boolean;
    showBreadcrumbs?: boolean;
    columns?: number;
    containerSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
export declare function Footer({ className, showNewsletter, showSocial, showBreadcrumbs, columns, containerSize }: FooterProps): import("react/jsx-runtime").JSX.Element;
export declare const FooterPresets: {
    minimal: {
        showNewsletter: boolean;
        showSocial: boolean;
        showBreadcrumbs: boolean;
        columns: number;
    };
    full: {
        showNewsletter: boolean;
        showSocial: boolean;
        showBreadcrumbs: boolean;
        columns: number;
    };
    company: {
        showNewsletter: boolean;
        showSocial: boolean;
        showBreadcrumbs: boolean;
        columns: number;
    };
};
export {};
//# sourceMappingURL=footer.d.ts.map