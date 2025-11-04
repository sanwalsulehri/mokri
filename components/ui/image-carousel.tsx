'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Interfaces (accept only image URLs)
interface ImageCarouselProps {
  data?: string[];
  itemsPerView?: number;
  showPagination?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  showArrows?: boolean;
  arrowsInside?: boolean;
  // simple: regular multi-slide; modern: centered big image with peeking sides
  variant?: 'simple' | 'modern';
  modernMaxWidth?: string | number;
}

// Custom Arrow Components
const CustomPrevArrow = ({ onClick, arrowsInside = false }: { onClick?: () => void; arrowsInside?: boolean }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background/95 border border-border rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group ${
      arrowsInside ? 'left-4' : 'left-2 md:-left-12'
    }`}
  >
    <svg
      className="w-4 h-4 md:w-6 md:h-6 text-foreground/70 group-hover:text-foreground transition-colors"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick, arrowsInside = false }: { onClick?: () => void; arrowsInside?: boolean }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background/95 border border-border rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group ${
      arrowsInside ? 'right-4' : 'right-2 md:-right-12'
    }`}
  >
    <svg
      className="w-4 h-4 md:w-6 md:h-6 text-foreground/70 group-hover:text-foreground transition-colors"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

// Default Data
const defaultImageData: string[] = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop"
];

// Image Carousel Component
const ImageCarousel: React.FC<ImageCarouselProps> = ({
  data = defaultImageData,
  itemsPerView = 3,
  showPagination = true,
  autoPlay = false,
  autoPlaySpeed = 3000,
  showArrows = true,
  arrowsInside = false,
  variant = 'modern',
  modernMaxWidth = '100%'
}) => {
  const isModern = variant === 'modern';
  const settings = {
    dots: showPagination,
    infinite: true,
    speed: 800,
    slidesToShow: isModern ? 3 : itemsPerView,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: autoPlaySpeed,
    pauseOnHover: true,
    arrows: showArrows,
    prevArrow: <CustomPrevArrow arrowsInside={arrowsInside} />,
    nextArrow: <CustomNextArrow arrowsInside={arrowsInside} />,
    centerMode: isModern,
    centerPadding: isModern ? '0px' : '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: isModern ? 3 : Math.min(itemsPerView, 2),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div
      className="relative w-full mx-auto px-4 h-fit overflow-x-hidden overflow-y-hidden"
      style={{ maxWidth: isModern ? modernMaxWidth : undefined, paddingBottom: '32px' } as React.CSSProperties}
    >
      <Slider {...settings} className={isModern ? 'max-h-[50vh]' : ''}>
        {data.map((src, index) => (
          <div key={index} className={` h-fit ${isModern ? 'px-1' : 'px-3'} `}>
            <div className={`relative ${isModern ? 'overflow-visible' : 'overflow-hidden'} rounded-2xl`} style={isModern ? ({ height: '40vh', minHeight: '40vh' } as React.CSSProperties) : undefined}>
              <div className={`${isModern ? 'overflow-hidden' : 'overflow-hidden'} h-full rounded-2xl`}>
                <img
                  src={src}
                  alt="carousel-image"
                  className={`block w-full h-full object-cover rounded-2xl`}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        ${isModern ? `
        .slick-list { overflow: visible !important; }
        .slick-track { display: flex; align-items: stretch !important; }
        .slick-slide { transition: opacity 420ms ease; height: auto !important; }
        .slick-slide > div { height: 100% !important; }
        .slick-slide img { transition: transform 480ms ease, opacity 420ms ease; transform-origin: center center; will-change: transform; height: 100% !important; }
        .slick-center img { transform: scale(1.12); opacity: 1; }
        .slick-slide:not(.slick-center) img { transform: scale(0.9); opacity: 0.6; }
        @media (min-width: 1024px){ .slick-slider .slick-list { padding: 0 0 !important; } }
        @media (min-width: 768px) and (max-width: 1023.98px){ .slick-slider .slick-list { padding: 0 0 !important; } }
        @media (max-width: 767.98px){ .slick-slider .slick-list { padding: 0 0 !important; } }
        ` : ''}
        .slick-dots {
          bottom: 4px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 8px !important;
        }
        .slick-dots li {
          width: auto !important;
          height: auto !important;
          margin: 0 !important;
        }
        .slick-dots li button {
          width: 12px !important;
          height: 12px !important;
          border-radius: 50% !important;
          background: var(--muted) !important;
          border: 1px solid var(--border) !important;
          padding: 0 !important;
          transition: all 0.3s ease !important;
        }
        .slick-dots li button:before {
          display: none !important;
        }
        .slick-dots li.slick-active button {
          background: var(--foreground) !important;
          border-color: var(--foreground) !important;
          transform: scale(1.2) !important;
        }
        .slick-dots li:hover button {
          background: var(--foreground) !important;
          border-color: var(--foreground) !important;
          transform: scale(1.1) !important;
        }
        .slick-dots li.slick-active:hover button {
          background: var(--foreground) !important;
          border-color: var(--foreground) !important;
          transform: scale(1.3) !important;
        }
      ` }} />
    </div>
  );
};

export { ImageCarousel, defaultImageData };
