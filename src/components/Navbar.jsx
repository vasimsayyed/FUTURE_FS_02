// src/components/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);

  // This function helps apply different styles to the link for the active page
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? 'text-blue-600 font-bold py-2 px-3 rounded-md'
      : 'text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-md transition-colors duration-300';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <NavLink to="/" className="text-2xl font-bold text-gray-800">
          V-Store
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/" className={getNavLinkClass}>HOME</NavLink>
          <NavLink to="/products" className={getNavLinkClass}>PRODUCTS</NavLink>
          <NavLink to="/about" className={getNavLinkClass}>ABOUT</NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>CONTACT</NavLink>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center">
          <NavLink to="/cart" className="relative text-gray-700 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}