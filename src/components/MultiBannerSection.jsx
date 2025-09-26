// src/components/MultiBannerSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// A reusable and improved component for each banner card
const BannerCard = ({ backgroundImage, subtitle, title, description, buttonText, buttonLink = "/products", className = "" }) => {
  return (
    <div
      className={`relative bg-cover bg-center rounded-lg shadow-lg text-white p-8 flex flex-col justify-center min-h-[300px] overflow-hidden ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-lg font-medium text-gray-200">{subtitle}</p>
        <h2 className="text-3xl font-extrabold my-2">{title}</h2>
        <p className="mb-4 text-gray-100">{description}</p>
        {buttonText && (
          <Link
            to={buttonLink}
            className="inline-block bg-transparent border-2 border-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-gray-900 transition-colors"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};


// The main component with a corrected and simplified grid layout
export default function MultiBannerSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Top Row: 2 Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <BannerCard
            className="lg:col-span-3"
            // CORRECTED: Changed '/images/banner/b2.jpg' to '/images/b2.jpg'
            backgroundImage='/images/b2.jpg'
            subtitle="crazy deals"
            title="buy 1 get 1 free"
            description="The best classic dress is on sale at Cara"
            buttonText="Learn More"
          />
          <BannerCard
            className="lg:col-span-2"
            // CORRECTED: Changed '/images/banner/b4.jpg' to '/images/b4.jpg'
            backgroundImage='/images/b4.jpg'
            subtitle="spring/summer"
            title="upcoming season"
            description="The best classic dress is on sale at Cara"
            buttonText="Collection"
          />
        </div>

        {/* Bottom Row: 3 Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <BannerCard
            // CORRECTED: Changed '/images/banner/b7.jpg' to '/images/b7.jpg'
            backgroundImage='/images/b7.jpg'
            subtitle="SEASONAL SALE"
            title="Winter Collection -50% OFF"
            description="Don't miss the trend"
          />
          <BannerCard
            // CORRECTED: Changed '/images/b16.jpg' to '/images/b16.jpg' (already mostly correct, just confirming the path)
            // Note: Your file list shows 'b16.jpg', but you had 'b14.png' and 'b16.jpg'. I assume you want 'b16.jpg'.
            backgroundImage='/images/b16.jpg'
            subtitle="NEW DRESS COLLECTION"
            title="Spring / Summer 2025"
            description="We love classic styles"
          />
          <BannerCard
            // CORRECTED: Changed '/images/banner/b17.jpg' to '/images/b17.jpg'
            backgroundImage='/images/b17.jpg'
            subtitle="T-SHIRTS"
            title="New Trendy Prints"
            description="High-quality materials"
          />
        </div>
      </div>
    </section>
  );
}