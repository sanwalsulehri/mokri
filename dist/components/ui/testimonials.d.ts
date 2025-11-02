import React from 'react';
interface Testimonial {
    id: number | string;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar?: string;
    image?: string;
    rating: number;
}
interface TestimonialsProps {
    testimonials?: Testimonial[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showNavigation?: boolean;
    showDots?: boolean;
    className?: string;
}
declare const defaultTestimonials: Testimonial[];
declare const Testimonials: React.FC<TestimonialsProps>;
export { Testimonials, defaultTestimonials };
//# sourceMappingURL=testimonials.d.ts.map