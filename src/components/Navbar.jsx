import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg py-4 px-6 md:px-8 lg:px-12">
      {/* Desktop Navigation */}
      <div className="hidden md:flex container mx-auto justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-extrabold text-indigo-600">
            Okkio
          </Link>
        </div>

        <div className="flex items-center space-x-8 lg:space-x-12">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Products</Link>
          <Link to="/services" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Services</Link>
          <Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Contact</Link>
          
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

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1.685 9.176a2 2 0 01-1.996 1.824H7.681a2 2 0 01-1.996-1.824L4 5h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2z" />
            </svg>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </Link>
          
          <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300">
            Profile
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden container mx-auto flex justify-between items-center">
        <div>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-extrabold text-indigo-600">
            Okkio
          </Link>
        </div>

        <Link to="/cart" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1.685 9.176a2 2 0 01-1.996 1.824H7.681a2 2 0 01-1.996-1.824L4 5h16" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2z" />
          </svg>
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItemsCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center space-y-4">
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
          
          <Link to="/" onClick={() => setIsOpen(false)} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Products</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">Contact</Link>
          
          <Link to="/cart" onClick={() => setIsOpen(false)} className="block w-4/5 text-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            <svg className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1.685 9.176a2 2 0 01-1.996 1.824H7.681a2 2 0 01-1.996-1.824L4 5h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2z" />
            </svg>
            <span className="ml-2">Cart</span>
          </Link>
          
          <button className="w-4/5 bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 mt-4">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
}
