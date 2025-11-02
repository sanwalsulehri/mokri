import React from 'react';
interface AvatarProps {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}
declare const Avatar: React.FC<AvatarProps>;
interface AvatarGroupProps {
    avatars: Array<{
        src?: string;
        alt?: string;
        fallback?: string;
    }>;
    size?: 'sm' | 'md' | 'lg';
    max?: number;
    className?: string;
}
declare const AvatarGroup: React.FC<AvatarGroupProps>;
export { AvatarGroup };
export default Avatar;
//# sourceMappingURL=avatar.d.ts.map