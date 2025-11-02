'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Custom Arrow Components
const CustomPrevArrow = ({ onClick, arrowsInside = false }) => (_jsx("button", { onClick: onClick, className: `absolute top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background/95 border border-border rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group ${arrowsInside ? 'left-4' : 'left-2 md:-left-12'}`, children: _jsx("svg", { className: "w-4 h-4 md:w-6 md:h-6 text-foreground/70 group-hover:text-foreground transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M15 19l-7-7 7-7" }) }) }));
const CustomNextArrow = ({ onClick, arrowsInside = false }) => (_jsx("button", { onClick: onClick, className: `absolute top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background/95 border border-border rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group ${arrowsInside ? 'right-4' : 'right-2 md:-right-12'}`, children: _jsx("svg", { className: "w-4 h-4 md:w-6 md:h-6 text-foreground/70 group-hover:text-foreground transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 5l7 7-7 7" }) }) }));
// Default Data
const defaultImageData = [
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
const ImageCarousel = ({ data = defaultImageData, itemsPerView = 3, showPagination = true, autoPlay = false, autoPlaySpeed = 3000, showArrows = true, arrowsInside = false }) => {
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
        prevArrow: _jsx(CustomPrevArrow, { arrowsInside: arrowsInside }),
        nextArrow: _jsx(CustomNextArrow, { arrowsInside: arrowsInside }),
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
    return (_jsxs("div", { className: "relative w-full max-w-7xl mx-auto px-4", children: [_jsx(Slider, Object.assign({}, settings, { children: data.map((item) => (_jsx("div", { className: "px-3", children: _jsxs("div", { className: "relative group overflow-hidden rounded-2xl transition-all duration-500", children: [_jsx("div", { className: "aspect-[4/3] overflow-hidden", children: _jsx("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }) }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }), _jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500", children: [_jsx("h3", { className: "text-xl font-bold mb-1", children: item.title }), _jsx("p", { className: "text-sm opacity-90", children: item.subtitle })] }), _jsx("div", { className: "absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500" })] }) }, item.id))) })), _jsx("style", { dangerouslySetInnerHTML: { __html: `
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
      ` } })] }));
};
export { ImageCarousel, defaultImageData };
