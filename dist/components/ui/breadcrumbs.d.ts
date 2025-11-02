import React from 'react';
interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
}
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    className?: string;
    showHome?: boolean;
    homeIcon?: React.ReactNode;
    onItemClick?: (item: BreadcrumbItem, index: number) => void;
}
export declare function Breadcrumbs({ items, separator, className, showHome, homeIcon, onItemClick }: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
export declare const BreadcrumbPresets: {
    fileSystem: (path: string[]) => ({
        label: string;
    } | {
        label: string;
        icon: import("react/jsx-runtime").JSX.Element;
    })[];
    ecommerce: (category: string, subcategory?: string, product?: string) => ({
        label: string;
        icon: import("react/jsx-runtime").JSX.Element;
    } | {
        label: string;
        icon?: undefined;
    })[];
    admin: (section: string, subsection?: string) => ({
        label: string;
        icon: import("react/jsx-runtime").JSX.Element;
    } | {
        label: string;
        icon?: undefined;
    })[];
};
export {};
//# sourceMappingURL=breadcrumbs.d.ts.map