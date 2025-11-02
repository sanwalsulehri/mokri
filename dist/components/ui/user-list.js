'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Avatar from './avatar';
export const UserList = ({ users, onAddUser, className = '' }) => {
    return (_jsx("div", { className: `bg-background   rounded-lg ${className}`, children: users.map((user, index) => (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-3 px-4 py-3  transition-colors", children: [_jsx(Avatar, { src: user.avatar, alt: user.name, fallback: user.avatarFallback || user.name.charAt(0).toUpperCase(), size: "md", className: "flex-shrink-0" }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-sm font-medium text-foreground truncate", children: user.name }), _jsx("p", { className: "text-xs text-muted-foreground truncate", children: user.email })] }), _jsx("button", { onClick: () => onAddUser === null || onAddUser === void 0 ? void 0 : onAddUser(user.id), className: "flex-shrink-0 p-1 hover:bg-secondary rounded-md transition-colors", children: _jsx("svg", { className: "w-4 h-4 text-foreground", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }) })] }), index < users.length - 1 && (_jsx("div", { className: "border-t border-border mx-4" }))] }, user.id))) }));
};
// Sample user data
export const sampleUsers = [
    {
        id: '1',
        name: 'sanwal',
        email: 'sanwal@vercel.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        avatarFallback: 'S'
    },
    {
        id: '2',
        name: 'kashif',
        email: 'kashif@vercel.com',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        avatarFallback: 'M'
    },
    {
        id: '3',
        name: 'nankana',
        email: 'nankana@vercel.com',
        avatarFallback: 'E'
    }
];
export default UserList;
