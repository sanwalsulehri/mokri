import React from 'react';
interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
}
interface AccordionProps {
    items: AccordionItem[];
    variant?: 'default' | 'bordered' | 'minimal' | 'card';
    size?: 'sm' | 'md' | 'lg';
    allowMultiple?: boolean;
    defaultOpenItems?: string[];
    className?: string;
    onToggle?: (itemId: string, isOpen: boolean) => void;
}
export declare function Accordion({ items, variant, size, allowMultiple, defaultOpenItems, className, onToggle }: AccordionProps): import("react/jsx-runtime").JSX.Element;
export declare const AccordionPresets: {
    faq: {
        variant: "bordered";
        size: "md";
        allowMultiple: boolean;
    };
    navigation: {
        variant: "minimal";
        size: "sm";
        allowMultiple: boolean;
    };
    card: {
        variant: "card";
        size: "md";
        allowMultiple: boolean;
    };
    simple: {
        variant: "default";
        size: "md";
        allowMultiple: boolean;
    };
};
export declare const AccordionIcons: {
    Question: () => import("react/jsx-runtime").JSX.Element;
    Settings: () => import("react/jsx-runtime").JSX.Element;
    Info: () => import("react/jsx-runtime").JSX.Element;
    Document: () => import("react/jsx-runtime").JSX.Element;
    User: () => import("react/jsx-runtime").JSX.Element;
};
export {};
//# sourceMappingURL=accordion.d.ts.map