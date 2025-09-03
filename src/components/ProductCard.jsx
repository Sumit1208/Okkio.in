import React from 'react';

const ProductCard = ({ image, title,category, price, originalPrice }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">{title}</h3>
        <h2 className="text-sm text-gray-800 mb-1">{category}</h2>
        <div className="flex items-baseline space-x-2 mb-2">
          <p className="text-green-600 font-bold">₹{price}</p>
          {originalPrice && <p className="text-gray-500 line-through">₹{originalPrice}</p>}
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
