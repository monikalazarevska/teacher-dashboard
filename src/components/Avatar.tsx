import React from 'react';

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => (
  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
    {name.charAt(0)}
  </div>
);

export default Avatar;
