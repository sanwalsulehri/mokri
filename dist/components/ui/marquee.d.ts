import React from 'react';
interface MarqueeCard {
    id: number | string;
    name: string;
    description: string;
    avatar?: string;
    image?: string;
}
interface MarqueeProps {
    cards?: MarqueeCard[];
    speed?: 'slow' | 'normal' | 'fast';
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    fadeEdges?: boolean;
    className?: string;
    layers?: 'single' | 'double';
    children?: React.ReactNode;
}
declare const defaultMarqueeCards: MarqueeCard[];
declare const Marquee: React.FC<MarqueeProps>;
export { Marquee, defaultMarqueeCards };
//# sourceMappingURL=marquee.d.ts.map