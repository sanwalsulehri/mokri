import React from 'react';
export interface BannerProps {
    title?: string;
    description?: string;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'gradient';
    size?: 'sm' | 'md' | 'lg';
    dismissible?: boolean;
    onDismiss?: () => void;
    action?: {
        label: string;
        onClick: () => void;
    };
    className?: string;
    children?: React.ReactNode;
    headerStyle?: boolean;
}
export declare function Banner({ title, description, variant, size, dismissible, onDismiss, action, className, children, headerStyle }: BannerProps): import("react/jsx-runtime").JSX.Element;
export declare const BannerPresets: {
    announcement: {
        variant: "info";
        title: string;
        description: string;
        action: {
            label: string;
            onClick: () => void;
        };
    };
    maintenance: {
        variant: "warning";
        title: string;
        description: string;
        dismissible: boolean;
    };
    success: {
        variant: "success";
        title: string;
        description: string;
        dismissible: boolean;
    };
    error: {
        variant: "error";
        title: string;
        description: string;
        action: {
            label: string;
            onClick: () => void;
        };
        dismissible: boolean;
    };
};
//# sourceMappingURL=banner.d.ts.map