// src/components/CallToActionBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// The background image includes the dark theme, patterns, and sunglasses
const bannerImageUrl =  '/images/banner/b1.jpg';

export default function CallToActionBanner() {
  return (
    <section className="my-16">
      <div className="container mx-auto px-6">
        <div
          className="flex flex-col items-center justify-center text-center text-white bg-cover bg-center rounded-2xl p-12 min-h-[300px] shadow-lg"
          style={{ backgroundImage: `url(${bannerImageUrl})` }}
        >
          <p className="text-lg font-medium text-gray-200">Repair Services</p>
          <h2 className="text-4xl md:text-5xl font-extrabold my-4">
            Up to <span className="text-red-500">70% Off</span> - All T-Shirts & Accessories
          </h2>
          <Link
            to="/products"
            className="mt-4 bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}