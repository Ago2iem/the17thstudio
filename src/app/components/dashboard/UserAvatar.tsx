import React from 'react';
import { Avatar } from '../ui/Avatar';
import { User } from '../../lib/types';

interface UserAvatarsProps {
  users: User[];
  maxVisible?: number;
  className?: string;
}

export const UserAvatars: React.FC<UserAvatarsProps> = ({
  users,
  maxVisible = 3,
  className = ''
}) => {
  const visibleUsers = users.slice(0, maxVisible);
  const remainingCount = users.length - maxVisible;
  const displayNames = visibleUsers.map(user => user.name).join(', ');

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex -space-x-2">
        {visibleUsers.map((user) => (
          <Avatar
            key={user.id}
            name={user.image}
            className="border-2 border-white hover:z-10 transition-all duration-200"
          />
        ))}
      </div>

      <div className="text-sm text-gray-600 ml-2">
        {displayNames}
        {remainingCount > 0 && (
          <span className="font-medium"> +{remainingCount} others</span>
        )}
      </div>
    </div>
  );
};