// src/components/ProductGridSection.jsx
import React from 'react';
import ProductCard from './ProductCard'; // We can reuse our existing card design!

export default function ProductGridSection({ title, subtitle, products }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-12">{subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}