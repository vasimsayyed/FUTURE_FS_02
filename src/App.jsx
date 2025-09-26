// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import pages
import HomePage from './pages/HomePage'; // NEW IMPORT
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';


function App() {
  return (
    // After
   <div className="font-sans min-h-screen"> 
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* UPDATED ROUTE */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <NewsletterSignup/>
      <Footer/>
    </div>
  );
}

export default App;