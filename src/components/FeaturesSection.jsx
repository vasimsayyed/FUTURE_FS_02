// src/components/FeaturesSection.jsx
import React from 'react';

const features = [
  {
    title: 'Free Shipping',
    // CORRECTED PATH: /images/features/f1.png
    image: './images/features/f1.png', 
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-800',
  },
  {
    title: 'Online Order',
    // CORRECTED PATH: /images/features/f2.png
    image: './images/features/f2.png',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
  },
  {
    title: 'Save Money',
    image: './images/features/f3.png',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800',
  },
  {
    title: 'Promotions',
    // CORRECTED PATH: /images/features/f4.png
    image: './images/features/f4.png',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-800',
  },
  {
    title: 'Happy Sell',
    // CORRECTED PATH: /images/features/f5.png
    image: './images/features/f5.png',
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-800',
  },
  {
    title: 'F24/7 Support',
    // CORRECTED PATH: /images/features/f6.png
    image: './images/features/f6.png',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-800',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* The image src now uses the correct absolute path */}
              <img src={feature.image} alt={feature.title} className="mx-auto mb-4" />
              <h3
                className={`inline-block px-3 py-1 rounded-md font-semibold text-sm ${feature.bgColor} ${feature.textColor}`}
              >
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}