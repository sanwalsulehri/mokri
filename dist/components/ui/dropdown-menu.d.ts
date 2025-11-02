import React from 'react';
interface DropdownMenuItem {
    label: string;
    value: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    divider?: boolean;
}
interface DropdownMenuProps {
    trigger: React.ReactNode;
    options: DropdownMenuItem[];
    align?: 'left' | 'right' | 'center';
    className?: string;
    onOpenChange?: (open: boolean) => void;
}
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
export declare const DropdownIcons: {
    Profile: () => import("react/jsx-runtime").JSX.Element;
    Settings: () => import("react/jsx-runtime").JSX.Element;
    Logout: () => import("react/jsx-runtime").JSX.Element;
    Help: () => import("react/jsx-runtime").JSX.Element;
    Bell: () => import("react/jsx-runtime").JSX.Element;
};
export default DropdownMenu;
//# sourceMappingURL=dropdown-menu.d.ts.map