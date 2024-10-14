import React from 'react';

function CityCard({ city }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={city.imageUrl} alt={city.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{city.name}</div>
        <p className="text-gray-700 text-base">{city.description}</p>
      </div>
    </div>
  );
}

export default CityCard;
