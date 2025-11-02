import React from 'react';
interface CommandItem {
    id: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    keywords?: string[];
    action?: () => void;
    disabled?: boolean;
    group?: string;
    shortcut?: string;
}
interface CommandProps {
    items?: CommandItem[];
    placeholder?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'bordered';
    showGroups?: boolean;
    maxHeight?: string;
    onSelect?: (item: CommandItem) => void;
    onSearch?: (query: string) => void;
}
export declare function Command({ items, placeholder, className, size, variant, showGroups, maxHeight, onSelect, onSearch }: CommandProps): import("react/jsx-runtime").JSX.Element;
interface CommandGroupProps {
    children: React.ReactNode;
    className?: string;
    spacing?: 'sm' | 'md' | 'lg';
}
export declare function CommandGroup({ children, className, spacing }: CommandGroupProps): import("react/jsx-runtime").JSX.Element;
export declare const CommandPresets: {
    quickActions: {
        size: "sm";
        variant: "minimal";
        showGroups: boolean;
    };
    fullPalette: {
        size: "md";
        variant: "default";
        showGroups: boolean;
    };
    compact: {
        size: "sm";
        variant: "bordered";
        showGroups: boolean;
    };
};
export declare const CommandIcons: {
    Search: () => import("react/jsx-runtime").JSX.Element;
    File: () => import("react/jsx-runtime").JSX.Element;
    Settings: () => import("react/jsx-runtime").JSX.Element;
    User: () => import("react/jsx-runtime").JSX.Element;
    Home: () => import("react/jsx-runtime").JSX.Element;
    Calendar: () => import("react/jsx-runtime").JSX.Element;
    Mail: () => import("react/jsx-runtime").JSX.Element;
    Plus: () => import("react/jsx-runtime").JSX.Element;
};
export {};
//# sourceMappingURL=command.d.ts.map