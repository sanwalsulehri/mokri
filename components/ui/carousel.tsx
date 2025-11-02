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

const defaultCardData: CardCarouselItem[] = [
  {
    id: 1,
    title: "Beautiful Design",
    subtitle: "Modern & Elegant",
    description: "Experience stunning visuals with our beautifully crafted design system that brings your ideas to life.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Fast Performance",
    subtitle: "Lightning Quick",
    description: "Built for speed with optimized performance and smooth animations that never compromise on quality.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    gradient: "from-green-500 to-blue-600"
  },
  {
    id: 3,
    title: "Responsive Design",
    subtitle: "Perfect Everywhere",
    description: "Seamlessly adapts to all devices and screen sizes for the best experience across all platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    gradient: "from-pink-500 to-red-600"
  },
  {
    id: 4,
    title: "Easy to Use",
    subtitle: "Intuitive Interface",
    description: "User-friendly design that makes complex tasks simple and enjoyable for everyone.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    id: 5,
    title: "Customizable",
    subtitle: "Make It Yours",
    description: "Highly customizable components to match your brand and vision perfectly.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    id: 6,
    title: "Reliable",
    subtitle: "Always Available",
    description: "Built with reliability and stability in mind, ensuring your projects never fail.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&h=300&fit=crop",
    gradient: "from-teal-500 to-green-600"
  }
];

// Custom Arrow Components
const CustomPrevArrow = ({ onClick, arrowsInside = false }: { onClick?: () => void; arrowsInside?: boolean }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background/95 border border-border rounded-full p-1.5 md:p-2 shadow-lg hover:shadow-xl transition-all duration-300 group ${
      arrowsInside ? 'left-4' : 'left-4 max-[1339px]:left-4 min-[1350px]:-left-12'
    }`}
  >
    <svg
      className="w-3 h-3 md:w-4 md:h-4 text-foreground/70 group-hover:text-foreground transition-colors"
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
    className={`absolute top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background/95 border border-border rounded-full p-1.5 md:p-2 shadow-lg hover:shadow-xl transition-all duration-300 group ${
      arrowsInside ? 'right-4' : 'right-4 max-[1339px]:right-4 min-[1350px]:-right-12'
    }`}
  >
    <svg
      className="w-3 h-3 md:w-4 md:h-4 text-foreground/70 group-hover:text-foreground transition-colors"
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

// Beautiful Image Carousel
const BeautifulImageCarousel: React.FC<ImageCarouselProps> = ({
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
              <div className="aspect-[3/2] md:aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg md:text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-xs md:text-sm opacity-90">{item.subtitle}</p>
              </div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom Pagination Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .slick-dots {
          bottom: -50px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 8px !important;
        }
        @media (min-width: 768px) {
          .slick-dots {
            gap: 12px !important;
          }
        }
        .slick-dots li {
          width: auto !important;
          height: auto !important;
          margin: 0 !important;
        }
        .slick-dots li button {
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          background: var(--muted) !important;
          border: 1px solid var(--border) !important;
          padding: 0 !important;
          transition: all 0.3s ease !important;
        }
        @media (min-width: 768px) {
          .slick-dots li button {
            width: 12px !important;
            height: 12px !important;
          }
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

// Beautiful Card Carousel
const BeautifulCardCarousel: React.FC<CardCarouselProps> = ({
  data = defaultCardData,
  itemsPerView = 3,
  showPagination = true,
  autoPlay = false,
  autoPlaySpeed = 5000,
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
    <div className="relative w-full max-w-7xl mx-auto px-4 pb-16">
      <Slider {...settings}>
        {data.map((card) => (
          <div key={card.id} className="px-3">
            <div className="relative group overflow-hidden rounded-2xl transition-all duration-500 bg-background border border-border h-full flex flex-col">
              {/* Image with same padding as content */}
              <div className="p-3 md:p-4">
                <div className="aspect-[3/2] md:aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Content with same padding */}
              <div className="px-3 pb-3 md:px-4 md:pb-4 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm font-medium text-foreground/60 mb-2 md:mb-3">
                  {card.subtitle}
                </p>
                <p className="text-xs md:text-sm text-foreground/70 leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom Pagination Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .slick-slide > div > div {
          height: 100% !important;
        }
        .slick-track {
          display: flex !important;
          align-items: stretch !important;
        }
        .slick-slide {
          height: auto !important;
        }
        .slick-slide > div {
          height: 100% !important;
        }
        .slick-dots {
          bottom: -50px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 8px !important;
        }
        @media (min-width: 768px) {
          .slick-dots {
            gap: 12px !important;
          }
        }
        .slick-dots li {
          width: auto !important;
          height: auto !important;
          margin: 0 !important;
        }
        .slick-dots li button {
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          background: var(--muted) !important;
          border: 1px solid var(--border) !important;
          padding: 0 !important;
          transition: all 0.3s ease !important;
        }
        @media (min-width: 768px) {
          .slick-dots li button {
            width: 12px !important;
            height: 12px !important;
          }
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

export { BeautifulImageCarousel, BeautifulCardCarousel };

// Example usage with custom data:
/*
// Image Carousel with custom data
const customImageData = [
  {
    id: "img-1",
    title: "Custom Image 1",
    subtitle: "Custom subtitle",
    image: "https://example.com/image1.jpg"
  },
  {
    id: "img-2", 
    title: "Custom Image 2",
    subtitle: "Another subtitle",
    image: "https://example.com/image2.jpg"
  }
];

<BeautifulImageCarousel 
  data={customImageData}
  itemsPerView={2}
  autoPlay={true}
  arrowsInside={true}
/>

// Card Carousel with custom data
const customCardData = [
  {
    id: "card-1",
    title: "Custom Card",
    subtitle: "Custom subtitle", 
    description: "Custom description here",
    image: "https://example.com/card1.jpg",
    gradient: "from-red-500 to-pink-600" // Optional
  },
  {
    id: "card-2",
    title: "Another Card",
    subtitle: "Another subtitle",
    description: "Another description",
    image: "https://example.com/card2.jpg"
    // gradient is optional - will use default if not provided
  }
];

<BeautifulCardCarousel
  data={customCardData}
  itemsPerView={2}
  showPagination={false}
  autoPlay={true}
  arrowsInside={false}
/>
*/