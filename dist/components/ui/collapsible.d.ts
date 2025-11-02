import React from 'react';
interface CollapsibleProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'bordered' | 'minimal';
    icon?: React.ReactNode;
    disabled?: boolean;
}
export declare function Collapsible({ title, children, defaultOpen, className, size, variant, icon, disabled }: CollapsibleProps): import("react/jsx-runtime").JSX.Element;
interface CollapsibleGroupProps {
    children: React.ReactNode;
    className?: string;
    spacing?: 'sm' | 'md' | 'lg';
    allowMultiple?: boolean;
}
export declare function CollapsibleGroup({ children, className, spacing, allowMultiple }: CollapsibleGroupProps): import("react/jsx-runtime").JSX.Element;
export declare const CollapsiblePresets: {
    faq: {
        variant: "bordered";
        size: "md";
    };
    settings: {
        variant: "default";
        size: "sm";
    };
    docs: {
        variant: "minimal";
        size: "md";
    };
    panels: {
        variant: "bordered";
        size: "lg";
    };
};
export declare const CollapsibleIcons: {
    Settings: () => import("react/jsx-runtime").JSX.Element;
    Info: () => import("react/jsx-runtime").JSX.Element;
    Help: () => import("react/jsx-runtime").JSX.Element;
    Document: () => import("react/jsx-runtime").JSX.Element;
    Code: () => import("react/jsx-runtime").JSX.Element;
    Chevron: () => import("react/jsx-runtime").JSX.Element;
};
export {};
//# sourceMappingURL=collapsible.d.ts.map