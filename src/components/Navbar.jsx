import React, { useState } from 'react';


// Navbar component with responsive design
export default function Navbar({ onLinkClick }) {
  // State to manage the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg py-4 px-6 md:px-8 lg:px-12">
      {/* Desktop Navigation - Visible on medium screens and up */}
      <div className="hidden md:flex container mx-auto justify-between items-center">
        {/* Logo - left-aligned */}
        <div className="flex-shrink-0">
          <a href="#" onClick={() => onLinkClick('Home')} className="text-2xl font-extrabold text-indigo-600">
            Okkio
          </a>
        </div>

        {/* Desktop Menu and Search Bar - center-aligned */}
        <div className="flex items-center space-x-8 lg:space-x-12">
          
          <a href="#" onClick={() => onLinkClick('Home')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Home</a>
          <a href="#" onClick={() => onLinkClick('Products')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Products</a>
          <a href="#" onClick={() => onLinkClick('Services')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Services</a>
          <a href="#" onClick={() => onLinkClick('Contact')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Contact</a>
          {/* Search bar for desktop */}
          <div className="relative w-full max-w-sm">
            <input 
              type="text" 
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right-aligned button for desktop */}
        <div className="flex items-center space-x-4">
          <a href="#" onClick={() => onLinkClick('Cart')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1.685 9.176a2 2 0 01-1.996 1.824H7.681a2 2 0 01-1.996-1.824L4 5h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2z" />
            </svg>
          </a>
          <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300">
            Profile
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - Visible on small screens */}
      <div className="md:hidden container mx-auto flex justify-between items-center">
        {/* Mobile menu button (Hamburger) - left-aligned */}
        <div>
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {/* Conditional rendering for the icon */}
              {isOpen ? (
                // Close icon (X)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon (3 lines)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Logo - right-aligned */}
        <div className="flex-shrink-0">
          <a href="#" onClick={() => onLinkClick('Home')} className="text-2xl font-extrabold text-indigo-600">
            Okkio
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown - toggled by state, full-width, slides down */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center space-y-4">
          {/* Search bar for mobile */}
          <div className="relative w-4/5 mx-auto">
            <input 
              type="text" 
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <a href="#" onClick={() => { onLinkClick('Home'); setIsOpen(false); }} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Home</a>
          <a href="#" onClick={() => { onLinkClick('Products'); setIsOpen(false); }} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Products</a>
          <a href="#" onClick={() => { onLinkClick('Services'); setIsOpen(false); }} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Services</a>
          <a href="#" onClick={() => { onLinkClick('Contact'); setIsOpen(false); }} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Contact</a>
          
          <a href="#" onClick={() => { onLinkClick('Cart'); setIsOpen(false); }} className="block w-4/5 text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            <svg className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1.685 9.176a2 2 0 01-1.996 1.824H7.681a2 2 0 01-1.996-1.824L4 5h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2z" />
            </svg>
            <span className="ml-2">Cart</span>
          </a>
          
          <button className="w-4/5 bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 mt-4">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
}

// Navbar component with responsive design
// export default function Navbar({ onLinkClick }) {
//   // State to manage the mobile menu visibility
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to toggle the mobile menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-lg py-4 px-6 md:px-8 lg:px-12">
//       {/* Desktop Navigation - Visible on medium screens and up */}
//       <div className="hidden md:flex container mx-auto justify-between items-center">
//         {/* Logo - left-aligned */}
//         <div className="flex-shrink-0">
//           <a href="#" onClick={() => onLinkClick('Home')} className="text-2xl font-extrabold text-indigo-600">
//             Brand
//           </a>
//         </div>

//         {/* Desktop Menu and Search Bar - center-aligned */}
//         <div className="flex items-center space-x-8 lg:space-x-12">
//           {/* Search bar for desktop */}
          
          
//           <a href="#" onClick={() => onLinkClick('Home')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Home</a>
//           <a href="#" onClick={() => onLinkClick('Products')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Products</a>
//           <a href="#" onClick={() => onLinkClick('Services')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Services</a>
//           <a href="#" onClick={() => onLinkClick('Contact')} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Contact</a>

//           <div className="relative w-full max-w-sm">
//             <input 
//               type="text" 
//               placeholder="Search for products..."
//               className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Right-aligned button for desktop */}
//         <div className="flex items-center">
//           <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300">
//             Profile
//           </button>
//         </div>
//       </div>
      
//       {/* Mobile Navigation - Visible on small screens */}
//       <div className="md:hidden container mx-auto flex justify-between items-center">
//         {/* Mobile menu button (Hamburger) - left-aligned */}
//         <div>
//           <button onClick={toggleMenu} className="focus:outline-none">
//             {/* Hamburger Icon */}
//             <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               {/* Conditional rendering for the icon */}
//               {isOpen ? (
//                 // Close icon (X)
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 // Hamburger icon (3 lines)
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Logo - right-aligned */}
//         <div className="flex-shrink-0">
//           <a href="#" onClick={() => onLinkClick('Home')} className="text-2xl font-extrabold text-indigo-600">
//             Brand
//           </a>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown - toggled by state, full-width, slides down */}
//       <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'}`}>
//         <div className="flex flex-col items-center space-y-4">
//           {/* Search bar for mobile */}
//           <div className="relative w-4/5 mx-auto">
//             <input 
//               type="text" 
//               placeholder="Search for products..."
//               className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
//           </div>
          
//           <a href="#" onClick={() => { onLinkClick('Home'); setIsOpen(false); }} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Home</a>
//           <a href="#" onClick={() => { onLinkClick('Products'); setIsOpen(false); }} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Products</a>
//           <a href="#" onClick={() => { onLinkClick('Services'); setIsOpen(false); }} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Services</a>
//           <a href="#" onClick={() => { onLinkClick('Contact'); setIsOpen(false); }} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Contact</a>
//           <button className="w-4/5 bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 mt-4">
//             Profile
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

