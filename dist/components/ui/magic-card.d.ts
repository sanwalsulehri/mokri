import React from 'react';
interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    isMagic?: boolean;
    className?: string;
}
export declare function MagicCard({ children, isMagic, className, ...props }: MagicCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=magic-card.d.ts.map