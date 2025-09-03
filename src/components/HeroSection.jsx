// src/components/HeroSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content Area */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg text-gray-700 mb-2">Trade-in-offer</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Super value deals <br />
            <span className="text-green-600">On all products</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Save more with coupons & up to 70% off!
          </p>
          <Link
            to="/products"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Image Area */}
        <div className="w-500px md:w-1/2 h-80 md:h-96 lg:h-[810px]">
          <img
            src="/images/hero4.png" // Make sure this is hero4.jpg as in your uploaded file
            alt="Fashion model"
            // These classes are essential for the image to fill the container
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}