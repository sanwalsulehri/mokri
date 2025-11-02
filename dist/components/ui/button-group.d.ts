import React from 'react';
interface ButtonGroupProps {
    children: React.ReactNode;
    variant?: 'default' | 'segmented' | 'attached' | 'spaced' | 'bordered';
    size?: 'sm' | 'md' | 'lg';
    orientation?: 'horizontal' | 'vertical';
    className?: string;
    disabled?: boolean;
}
interface BorderedButtonGroupProps {
    buttons: Array<{
        label: string;
        onClick?: () => void;
        active?: boolean;
        disabled?: boolean;
        variant?: 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
    }>;
    moreOptions?: Array<{
        label: string;
        onClick?: () => void;
        icon?: React.ReactNode;
        disabled?: boolean;
        divider?: boolean;
    }>;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
}
interface ButtonGroupItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    className?: string;
    variant?: 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
}
export declare function ButtonGroup({ children, variant, size, orientation, className, disabled }: ButtonGroupProps): import("react/jsx-runtime").JSX.Element;
export declare function ButtonGroupItem({ children, onClick, active, disabled, className, variant }: ButtonGroupItemProps): import("react/jsx-runtime").JSX.Element;
export declare function BorderedButtonGroup({ buttons, moreOptions, size, className, disabled }: BorderedButtonGroupProps): import("react/jsx-runtime").JSX.Element;
export declare const ButtonGroupPresets: {
    filter: {
        variant: "segmented";
        size: "sm";
        orientation: "horizontal";
    };
    toolbar: {
        variant: "attached";
        size: "md";
        orientation: "horizontal";
    };
    actions: {
        variant: "spaced";
        size: "md";
        orientation: "horizontal";
    };
    vertical: {
        variant: "default";
        size: "md";
        orientation: "vertical";
    };
    smallSegmented: {
        variant: "segmented";
        size: "sm";
        orientation: "horizontal";
    };
    largeActions: {
        variant: "spaced";
        size: "lg";
        orientation: "horizontal";
    };
};
export declare const ButtonGroupConfigs: {
    fileOperations: ({
        label: string;
        variant: "primary";
    } | {
        label: string;
        variant: "default";
    } | {
        label: string;
        variant: "secondary";
    })[];
    viewModes: {
        label: string;
        variant: "default";
    }[];
    sortOptions: {
        label: string;
        variant: "default";
    }[];
    statusFilters: {
        label: string;
        variant: "default";
    }[];
};
export {};
//# sourceMappingURL=button-group.d.ts.map