import React from 'react';
interface SkeletonProps {
    className?: string;
    variant?: 'default' | 'text' | 'circular' | 'rectangular' | 'card' | 'avatar' | 'button' | 'input';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    width?: string | number;
    height?: string | number;
    animation?: 'pulse' | 'wave' | 'shimmer' | 'none';
    lines?: number;
    spacing?: 'sm' | 'md' | 'lg';
}
declare const Skeleton: React.FC<SkeletonProps>;
export declare const SkeletonText: React.FC<Omit<SkeletonProps, 'variant'> & {
    lines?: number;
}>;
export declare const SkeletonAvatar: React.FC<Omit<SkeletonProps, 'variant'>>;
export declare const SkeletonButton: React.FC<Omit<SkeletonProps, 'variant'>>;
export declare const SkeletonInput: React.FC<Omit<SkeletonProps, 'variant'>>;
export declare const SkeletonCard: React.FC<Omit<SkeletonProps, 'variant'>>;
export declare const SkeletonProfile: React.FC<{
    className?: string;
}>;
export declare const SkeletonPost: React.FC<{
    className?: string;
}>;
export declare const SkeletonTable: React.FC<{
    rows?: number;
    columns?: number;
    className?: string;
}>;
export declare const SkeletonDashboard: React.FC<{
    className?: string;
}>;
export declare const SkeletonPresets: {
    title: {
        variant: "text";
        size: "lg";
        width: string;
    };
    subtitle: {
        variant: "text";
        size: "md";
        width: string;
    };
    paragraph: {
        variant: "text";
        lines: number;
    };
    smallAvatar: {
        variant: "avatar";
        size: "sm";
    };
    mediumAvatar: {
        variant: "avatar";
        size: "md";
    };
    largeAvatar: {
        variant: "avatar";
        size: "lg";
    };
    smallButton: {
        variant: "button";
        size: "sm";
    };
    mediumButton: {
        variant: "button";
        size: "md";
    };
    largeButton: {
        variant: "button";
        size: "lg";
    };
    smallInput: {
        variant: "input";
        size: "sm";
    };
    mediumInput: {
        variant: "input";
        size: "md";
    };
    largeInput: {
        variant: "input";
        size: "lg";
    };
    smallCard: {
        variant: "card";
        size: "sm";
    };
    mediumCard: {
        variant: "card";
        size: "md";
    };
    largeCard: {
        variant: "card";
        size: "lg";
    };
    pulse: {
        animation: "pulse";
    };
    wave: {
        animation: "wave";
    };
    shimmer: {
        animation: "shimmer";
    };
    static: {
        animation: "none";
    };
};
export default Skeleton;
//# sourceMappingURL=skeleton.d.ts.map