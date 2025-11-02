interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    variant?: 'default' | 'dots' | 'numbers' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
    showFirstLast?: boolean;
    showPrevNext?: boolean;
    maxVisiblePages?: number;
    className?: string;
    disabled?: boolean;
    withBorder?: boolean;
}
export declare function Pagination({ currentPage, totalPages, onPageChange, variant, size, showFirstLast, showPrevNext, maxVisiblePages, className, disabled, withBorder }: PaginationProps): import("react/jsx-runtime").JSX.Element | null;
export declare const PaginationPresets: {
    simple: {
        showFirstLast: boolean;
        showPrevNext: boolean;
        maxVisiblePages: number;
        variant: "default";
    };
    full: {
        showFirstLast: boolean;
        showPrevNext: boolean;
        maxVisiblePages: number;
        variant: "default";
    };
    minimal: {
        showFirstLast: boolean;
        showPrevNext: boolean;
        maxVisiblePages: number;
        variant: "minimal";
    };
    dots: {
        showFirstLast: boolean;
        showPrevNext: boolean;
        maxVisiblePages: number;
        variant: "dots";
    };
    numbers: {
        showFirstLast: boolean;
        showPrevNext: boolean;
        maxVisiblePages: number;
        variant: "numbers";
    };
};
export {};
//# sourceMappingURL=pagination.d.ts.map