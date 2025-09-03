// src/context/CartContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

// 1. Initial State
const initialState = {
  items: [],
};

// 2. Create Context
const CartContext = createContext();

// 3. Reducer Function
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
      }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    }
    case 'UPDATE_QUANTITY': {
       const updatedItems = state.items.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      return { ...state, items: updatedItems.filter(item => item.quantity > 0) };
    }
    default:
      return state;
  }
}

// 4. Provider Component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = {
    cart: state,
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: { id } }),
    updateQuantity: (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 5. Custom Hook for easy access
export function useCart() {
  return useContext(CartContext);
}