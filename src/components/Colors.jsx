import React from 'react';

const Colors = () => {
  // color for vegetables
  const colors = {
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    brown: 'bg-amber-900',
    black: 'bg-black ',
    white: 'bg-white border border-gray-400',
  };

  return (
    <div className="flex flex-col gap-1 mt-4">
      <h2 className="font-bold">filter by colors</h2>
      <div className="flex flex-col gap-1">
        {Object.entries(colors).map(([name, bgClass], index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="peer hidden"
              id={`checkbox-${index}`}
              name="categories"
              value={name}
            />
            <div
              className={`w-3 h-3 rounded-full ${bgClass} ${
                name === name ? 'border border-gray-400' : ''
              } `}
            ></div>
            <p className={`font-bold text-sm `}>{name}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Colors;
