import React, { useState } from 'react'
import ProductCard from './ProductCard';


const MainContent = () => {
  const [products] = useState([
    { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Urban Blaze Sneakers",category:"Footwear", price: "2799" },
    { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Black Panther: The King",category:"shirt", price: "899", originalPrice: "1200" },
    { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Urban Tribal Tattoo",category:"shirt", price: "1299" },
    { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Vans Old Skool",category:"shirt", price: "3499", originalPrice: "4000" },
    { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Oversized T-shirt",category:"T-shirt", price: "799" },
    { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Mens Jeans",category:"Jeans", price: "1499" },
    { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "DM Shirt",category:"Shirt", price: "1099" },
    { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Polos",category:"Top-wear", price: "1299" },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-1  md:p-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">NEW ARRIVALS</h2>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-1 sm:p-2 mb-2 sm:mb-4 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </main>
  );
};

// const MainContent = () => {
//   const [products] = useState([
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Urban Blaze Sneakers", price: "2799" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Black Panther: The King", price: "899", originalPrice: "1200" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Urban Tribal Tattoo", price: "1299" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Vans Old Skool", price: "3499", originalPrice: "4000" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Oversized T-shirt", price: "799" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Mens Jeans", price: "1499" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "DM Shirt", price: "1099" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Polos", price: "1299" },
//   ]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredProducts = products.filter(product =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <main className="p-2 sm:p-4">
//       <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">NEW ARRIVALS</h2>
//       <input
//         type="text"
//         placeholder="Search products..."
//         className="w-full p-2 mb-2 sm:mb-4 border rounded-lg text-sm sm:text-base"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
//         {filteredProducts.map((product, index) => (
//           <ProductCard key={index} {...product} />
//         ))}
//       </div>
//     </main>
//   );
// };

export default MainContent;

// const MainContent = () => {
//   const [products] = useState([
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Urban Blaze Sneakers", price: "2799" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Black Panther: The King", price: "899", originalPrice: "1200" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Urban Tribal Tattoo", price: "1299" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Vans Old Skool", price: "3499", originalPrice: "4000" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Oversized T-shirt", price: "799" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Mens Jeans", price: "1499" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "DM Shirt", price: "1099" },
//     { image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", title: "Polos", price: "1299" },
//   ]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredProducts = products.filter(product =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <main className="p-4">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">NEW ARRIVALS</h2>
//       <input
//         type="text"
//         placeholder="Search products..."
//         className="w-full p-2 mb-4 border rounded"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {filteredProducts.map((product, index) => (
//           <ProductCard key={index} {...product} />
//         ))}
//       </div>
//     </main>
//   );
// };

