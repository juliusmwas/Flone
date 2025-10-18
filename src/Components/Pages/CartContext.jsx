import { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Create the provider (this wraps your entire app)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        // If item already exists, just increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
      }
      // Otherwise, add new item
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // ✅ Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // ✅ Update quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // ✅ Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Provide all values to the app
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
