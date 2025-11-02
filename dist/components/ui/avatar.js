'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Avatar = ({ src, alt = 'Avatar', fallback, size = 'md', className = '', onClick }) => {
    const getSizeClasses = () => {
        const sizes = {
            sm: 'h-6 w-6 md:h-8 md:w-8 text-xs md:text-sm',
            md: 'h-8 w-8 md:h-10 md:w-10 text-sm md:text-base',
            lg: 'h-10 w-10 md:h-14 md:w-14 text-base md:text-lg'
        };
        return sizes[size];
    };
    const getFallbackText = () => {
        if (fallback)
            return fallback;
        if (alt)
            return alt.charAt(0).toUpperCase();
        return 'A';
    };
    const avatarClasses = `
    ${getSizeClasses()}
    rounded-full
    ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}
    ${className}
  `.trim();
    return (_jsxs("div", { className: `relative inline-block ${avatarClasses}`, onClick: onClick, children: [src ? (_jsx("img", { src: src, alt: alt, className: `${getSizeClasses()} rounded-full object-cover aspect-square`, onError: (e) => {
                    // Fallback to text avatar if image fails to load
                    const target = e.target;
                    target.style.display = 'none';
                    const fallbackDiv = target.nextElementSibling;
                    if (fallbackDiv) {
                        fallbackDiv.style.display = 'flex';
                    }
                } })) : null, _jsx("div", { className: `
          ${getSizeClasses()} 
          rounded-full
          bg-foreground
          text-background
          flex 
          items-center 
          justify-center 
          font-semibold
          ${src ? 'hidden' : ''}
        `.trim(), children: getFallbackText() })] }));
};
const AvatarGroup = ({ avatars, size = 'md', max = 5, className = '' }) => {
    const visibleAvatars = avatars.slice(0, max);
    const remainingCount = avatars.length - max;
    return (_jsxs("div", { className: `flex items-center -space-x-2 ${className}`, children: [visibleAvatars.map((avatar, index) => (_jsx("div", { className: `border-2 rounded-full overflow-hidden border-background relative z-10 ${size === 'sm' ? 'h-6 w-6 md:h-8 md:w-8' : size === 'md' ? 'h-8 w-8 md:h-10 md:w-10' : 'h-10 w-10 md:h-14 md:w-14'}`, children: _jsx("img", { src: avatar.src, alt: avatar.alt, className: "w-full h-full object-cover" }) }))), remainingCount > 0 && (_jsxs("div", { className: `
          ${size === 'sm' ? 'h-6 w-6 md:h-8 md:w-8' : size === 'md' ? 'h-8 w-8 md:h-10 md:w-10' : 'h-10 w-10 md:h-12 md:w-12'}
          rounded-full
          bg-muted
          text-muted-foreground
          flex
          items-center
          justify-center
          font-semibold
          border-2
          border-border
          ${size === 'sm' ? 'text-xs md:text-sm' : size === 'md' ? 'text-sm md:text-base' : 'text-base md:text-lg'}
        `, children: ["+", remainingCount] }))] }));
};
export { AvatarGroup };
export default Avatar;
