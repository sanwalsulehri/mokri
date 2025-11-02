import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface ImageCarouselItem {
    id: number | string;
    title: string;
    subtitle: string;
    image: string;
}
interface CardCarouselItem {
    id: number | string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    gradient?: string;
}
interface ImageCarouselProps {
    data?: ImageCarouselItem[];
    itemsPerView?: number;
    showPagination?: boolean;
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    showArrows?: boolean;
    arrowsInside?: boolean;
}
interface CardCarouselProps {
    data?: CardCarouselItem[];
    itemsPerView?: number;
    showPagination?: boolean;
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    showArrows?: boolean;
    arrowsInside?: boolean;
}
declare const BeautifulImageCarousel: React.FC<ImageCarouselProps>;
declare const BeautifulCardCarousel: React.FC<CardCarouselProps>;
export { BeautifulImageCarousel, BeautifulCardCarousel };
//# sourceMappingURL=carousel.d.ts.map