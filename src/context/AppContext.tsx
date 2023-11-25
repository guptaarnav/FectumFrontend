import React, { createContext, useContext, useState } from 'react';

type AppProviderProps = {
    children: React.ReactNode; //👈 children prop typr
};
  

// Define the shape of your cart item
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imgFile: string;
}

// Define types for your context state
interface AppContextState {
    cart: CartItem[];
    isAuthenticated: boolean;
  }

const initialState: AppContextState = {
  cart: [{
    id: '1',
    name: 'Product 1',
    price: 100,
    quantity: 2,
    imgFile: 'Black-Logo-Only.png'
  }],
  isAuthenticated: false,
  // ... initial values for other state variables
};

// Create the context
const AppContext = createContext<AppContextState | any>(initialState);

// Export the custom hook
export const useAppContext = () => useContext(AppContext);

// Provider component
export const AppProvider = (props: AppProviderProps) => {
  const [state, setState] = useState(initialState);

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setState(prevState => {
      // Check if the item already exists in the cart
      const existingItem = prevState.cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // If exists, increment quantity
        return {
          ...prevState,
          cart: prevState.cart.map(cartItem => 
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          )
        };
      } else {
        // If not, add the new item
        return { ...prevState, cart: [...prevState.cart, { ...item, quantity: 1 }] };
      }
    });
  };

    // Function to update quantity of an item in the cart
    const updateQuantityInCart = (id: string, newQuantity: number) => {
        setState(prevState => ({
            ...prevState,
            cart: prevState.cart.map(cartItem => 
                cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem
            )
        }));
    }

  // Function to remove an item from the cart
  const removeFromCart = (id: string) => {
    setState(prevState => ({
      ...prevState,
      cart: prevState.cart.filter(cartItem => cartItem.id !== id)
    }));
  };

  // Function to clear the cart
  const clearCart = () => {
    setState(prevState => ({ ...prevState, cart: [] }));
  };

  const loginUser = () => {
    setState(prevState => ({ ...prevState, isAuthenticated: true }));
  };

  
  return (
    <AppContext.Provider value={{ ...state, addToCart, updateQuantityInCart, clearCart, removeFromCart, loginUser }}>
      {props.children}
    </AppContext.Provider>
  );
};
