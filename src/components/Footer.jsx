// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Contact */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Cara</h3>
            <p className="font-bold mb-2">Contact</p>
            <p className="text-gray-600"><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
            <p className="text-gray-600"><strong>Phone:</strong> +01 2222 365 / (+91) 01 2345 6789</p>
            <p className="text-gray-600"><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
          </div>

          {/* Column 2: About */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-black">About Us</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Delivery Information</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Terms & Conditions</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: My Account */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-4">My Account</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-black">Sign In</Link></li>
              <li><Link to="/cart" className="text-gray-600 hover:text-black">View Cart</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">My Wishlist</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Track My Order</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Help</Link></li>
            </ul>
          </div>

          {/* Column 4: Install App */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-4">Install App</h4>
            <p className="text-gray-600 mb-2">From App Store or Google Play</p>
            <div className="flex space-x-2 mb-4">
              {/* Corrected path and using '1.png' as a likely App Store badge image */}
              <img src='/images/1.png' alt="App Store" className="border rounded-md h-12" /> 
              {/* Corrected path and using 'app.jpg' as the Google Play badge image */}
              <img src='/images/app.jpg' alt="Google Play" className="border rounded-md h-12" />
            </div>
            <p className="text-gray-600 mb-2">Secured Payment Gateways</p>
            {/* Corrected path for the payment image, using absolute path /images/pay.png */}
            <img src='/images/pay.png' alt="Payment Gateways" className="h-8" /> 
          </div>
        </div>
        <div className="text-center text-gray-500 border-t pt-6 mt-10">
          <p>&copy; {currentYear}, Cara - E-commerce Website Template</p>
        </div>
      </div>
    </footer>
  );
}