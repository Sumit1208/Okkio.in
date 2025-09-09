import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h18l-1.685 9.176a2 2 0 01-1.996 1.824H7.681a2 2 0 01-1.996-1.824L4 5h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 13h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2z" />
            </svg>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Your cart is empty</h2>
            <p className="mt-2 text-sm text-gray-600">Start shopping to add items to your cart</p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Shopping Cart</h1>
          <button onClick={clearCart} className="text-sm text-red-600 hover:text-red-800" >
            Clear Cart
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="p-6 flex flex-col sm:flex-row">
                <div className="flex-shrink-0">
                  <img
                    className="h-24 w-24 rounded-md object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">₹{item.price}</p>
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">₹{shipping.toFixed(2)}</span>
            </div>
            
            <div className="border-t border-gray-200 pt-4 flex justify-between">
              <span className="text-lg font-medium text-gray-900">Total</span>
              <span className="text-lg font-medium text-gray-900">₹{total.toFixed(2)}</span>
            </div>
            
            <div className="mt-6">
              <Link to="/checkout">
                <button className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
            
            <div className="mt-4 text-center">
              <Link to="/" className="text-indigo-600 hover:text-indigo-500">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
