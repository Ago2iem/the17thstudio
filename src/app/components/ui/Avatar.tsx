import React, { useState } from 'react';
import Image from 'next/image';

interface AvatarProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  className = '',
  size = 'md'
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const sizePixels = {
    sm: 24,
    md: 32,
    lg: 48
  };

  const getImagePath = (name: string) => {
    return `/assets/avatars/${name}.png`;
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (imageError) {
    // Fallback to initials if image fails to load
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-gray-500 text-white flex items-center justify-center font-medium ${className}`}>
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden relative cursor-pointer ${className}`}>
      <Image
        src={getImagePath(name)}
        alt={`${name}'s avatar`}
        width={sizePixels[size]}
        height={sizePixels[size]}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
};