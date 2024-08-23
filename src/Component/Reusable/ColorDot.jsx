import React from 'react';

const ColorDot = ({ color }) => {
  const getColorClass = (color) => {
    const colorMap = {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      indigo: 'bg-indigo-500',
      gray: 'bg-gray-500',
      black: 'bg-black',
      white: 'bg-white',
      // Add more color mappings as needed
    };

    return colorMap[color.toLowerCase()] || 'bg-gray-300'; // Default to gray if color not found
  };

  return (
    <span 
      className={`inline-block w-4 h-4 rounded-full ${getColorClass(color)} mr-1`}
      style={!getColorClass(color).startsWith('bg-') ? { backgroundColor: color } : {}}
    ></span>
  );
};

export default ColorDot;