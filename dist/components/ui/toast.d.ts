import { ReactNode } from 'react';
export interface Toast {
    id: string;
    title?: string;
    description?: string;
    variant?: 'default' | 'success' | 'error' | 'warning';
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}
interface ToastContextType {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
}
export declare function ToastProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useToast(): ToastContextType;
export declare const toast: {
    success: (title: string, description?: string, options?: Partial<Toast>) => {
        id?: string | undefined;
        title: string;
        description: string;
        variant: "default" | "success" | "error" | "warning";
        duration?: number;
        action?: {
            label: string;
            onClick: () => void;
        };
    };
    error: (title: string, description?: string, options?: Partial<Toast>) => {
        id?: string | undefined;
        title: string;
        description: string;
        variant: "default" | "success" | "error" | "warning";
        duration?: number;
        action?: {
            label: string;
            onClick: () => void;
        };
    };
    warning: (title: string, description?: string, options?: Partial<Toast>) => {
        id?: string | undefined;
        title: string;
        description: string;
        variant: "default" | "success" | "error" | "warning";
        duration?: number;
        action?: {
            label: string;
            onClick: () => void;
        };
    };
    info: (title: string, description?: string, options?: Partial<Toast>) => {
        id?: string | undefined;
        title: string;
        description: string;
        variant: "default" | "success" | "error" | "warning";
        duration?: number;
        action?: {
            label: string;
            onClick: () => void;
        };
    };
};
export {};
//# sourceMappingURL=toast.d.ts.map