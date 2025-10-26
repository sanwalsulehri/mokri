'use client';

import React from 'react';
import Avatar from './avatar';

// User List Component
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  avatarFallback?: string;
}

interface UserListProps {
  users: User[];
  onAddUser?: (userId: string) => void;
  className?: string;
}

export const Image: React.FC<UserListProps> = ({
  users,
  onAddUser,
  className = ''
}) => {
  return (
    <div className={`bg-background   rounded-lg ${className}`}>
      {users.map((user, index) => (
        <div key={user.id}>
          <div className="flex items-center gap-3 px-4 py-3  transition-colors">
            {/* Avatar */}
            <Avatar
              src={user.avatar}
              alt={user.name}
              fallback={user.avatarFallback || user.name.charAt(0).toUpperCase()}
              size="md"
              className="flex-shrink-0"
            />
            
            {/* User Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {user.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email}
              </p>
            </div>
            
            {/* Add Button */}
            <button
              onClick={() => onAddUser?.(user.id)}
              className="flex-shrink-0 p-1 hover:bg-secondary rounded-md transition-colors"
            >
              <svg 
                className="w-4 h-4 text-foreground" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 4v16m8-8H4" 
                />
              </svg>
            </button>
          </div>
          
          {/* Divider */}
          {index < users.length - 1 && (
            <div className="border-t border-border mx-4" />
          )}
        </div>
      ))}
    </div>
  );
};

// Sample user data
export const sampleUsers: User[] = [
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

export default Image;
