import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface ImageCarouselItem {
    id: number | string;
    title: string;
    subtitle: string;
    image: string;
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
declare const defaultImageData: ImageCarouselItem[];
declare const ImageCarousel: React.FC<ImageCarouselProps>;
export { ImageCarousel, defaultImageData };
//# sourceMappingURL=image-carousel.d.ts.map