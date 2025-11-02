import React from 'react';
interface TabItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}
interface TabContent {
    id: string;
    content: React.ReactNode;
}
interface AnimationConfig {
    duration?: number;
    ease?: string;
    delay?: number;
    stagger?: number;
}
interface TabsProps {
    tabs: TabItem[];
    contents: TabContent[];
    defaultTab?: string;
    variant?: 'default' | 'pills' | 'underline';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    onTabChange?: (tabId: string) => void;
    animations?: {
        tabTransition?: AnimationConfig;
        contentTransition?: AnimationConfig;
        underlineTransition?: AnimationConfig;
        tapScale?: number;
        staggerChildren?: boolean;
    };
}
export declare function Tabs({ tabs, contents, defaultTab, variant, size, className, onTabChange, animations }: TabsProps): import("react/jsx-runtime").JSX.Element;
export declare const AnimationPresets: {
    smooth: {
        tabTransition: {
            duration: number;
            ease: string;
        };
        contentTransition: {
            duration: number;
            ease: string;
        };
        underlineTransition: {
            duration: number;
            ease: string;
        };
        tapScale: number;
        staggerChildren: boolean;
    };
    bouncy: {
        tabTransition: {
            duration: number;
            ease: string;
        };
        contentTransition: {
            duration: number;
            ease: string;
        };
        underlineTransition: {
            duration: number;
            ease: string;
        };
        tapScale: number;
        staggerChildren: boolean;
    };
    snappy: {
        tabTransition: {
            duration: number;
            ease: string;
        };
        contentTransition: {
            duration: number;
            ease: string;
        };
        underlineTransition: {
            duration: number;
            ease: string;
        };
        tapScale: number;
        staggerChildren: boolean;
    };
    elegant: {
        tabTransition: {
            duration: number;
            ease: string;
        };
        contentTransition: {
            duration: number;
            ease: string;
        };
        underlineTransition: {
            duration: number;
            ease: string;
        };
        tapScale: number;
        staggerChildren: boolean;
    };
    minimal: {
        tabTransition: {
            duration: number;
            ease: string;
        };
        contentTransition: {
            duration: number;
            ease: string;
        };
        underlineTransition: {
            duration: number;
            ease: string;
        };
        tapScale: number;
        staggerChildren: boolean;
    };
};
export declare const TabPresets: {
    dashboard: {
        id: string;
        label: string;
        icon: import("react/jsx-runtime").JSX.Element;
    }[];
    profile: {
        id: string;
        label: string;
    }[];
    editor: {
        id: string;
        label: string;
    }[];
};
export {};
//# sourceMappingURL=tabs.d.ts.map