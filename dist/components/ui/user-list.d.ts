import React from 'react';
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
export declare const UserList: React.FC<UserListProps>;
export declare const sampleUsers: User[];
export default UserList;
//# sourceMappingURL=user-list.d.ts.map