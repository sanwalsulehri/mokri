'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Interfaces
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
const defaultImageData: ImageCarouselItem[] = [
  {
    id: 1,
    title: "Mountain Landscape",
    subtitle: "Nature's Beauty",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
  },
  {
    id: 2,
    title: "Ocean Waves",
    subtitle: "Serene Waters",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop"
  },
  {
    id: 3,
    title: "Forest Path",
    subtitle: "Peaceful Journey",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop"
  },
  {
    id: 4,
    title: "City Skyline",
    subtitle: "Urban Dreams",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=500&fit=crop"
  },
  {
    id: 5,
    title: "Desert Sunset",
    subtitle: "Golden Hour",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop"
  },
  {
    id: 6,
    title: "Lakeside View",
    subtitle: "Tranquil Moments",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop"
  }
];

// Image Carousel Component
const ImageCarousel: React.FC<ImageCarouselProps> = ({
  data = defaultImageData,
  itemsPerView = 3,
  showPagination = true,
  autoPlay = false,
  autoPlaySpeed = 3000,
  showArrows = true,
  arrowsInside = false
}) => {
  const settings = {
    dots: showPagination,
    infinite: true,
    speed: 800,
    slidesToShow: itemsPerView,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: autoPlaySpeed,
    pauseOnHover: true,
    arrows: showArrows,
    prevArrow: <CustomPrevArrow arrowsInside={arrowsInside} />,
    nextArrow: <CustomNextArrow arrowsInside={arrowsInside} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(itemsPerView, 2),
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
    <div className="relative w-full max-w-7xl mx-auto px-4">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="px-3">
            <div className="relative group overflow-hidden rounded-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.subtitle}</p>
              </div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .slick-dots {
          bottom: -50px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 12px !important;
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
      `}</style>
    </div>
  );
};

export { ImageCarousel, defaultImageData };
