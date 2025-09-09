// // context/CartContext.js

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemsCount,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};


// const CartContext = createContext();

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       // Check if the product is already in the cart
//       const existingItem = prevItems.find(item => item.id === product.id);
      
//       if (existingItem) {
//         // If it exists, increase the quantity
//         return prevItems.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         // If it's a new product, add it with quantity 1
//         return [...prevItems, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(productId);
//       return;
//     }
    
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === productId
//           ? { ...item, quantity: newQuantity }
//           : item
//       )
//     );
//   };

//   const getCartTotal = () => {
//     return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const getCartItemsCount = () => {
//     return cartItems.reduce((count, item) => count + item.quantity, 0);
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const value = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     getCartTotal,
//     getCartItemsCount,
//     clearCart
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };