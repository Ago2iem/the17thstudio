import React from 'react';
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
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const sizePixels = {
    sm: 24,
    md: 32,
    lg: 48
  };

  const getImagePath = (name: string) => {
    return `/assets/avatars/${name}.png`;
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden relative ${className}`}>
      <Image
        src={getImagePath(name)}
        alt={`${name}'s avatar`}
        width={sizePixels[size]}
        height={sizePixels[size]}
        className="w-full h-full object-cover"
      />
    </div>
  );
};