// src/pages/ProductsPage.jsx

import React from 'react';
import { products } from '../data'; // FIX 1: Corrected path to data
import ProductCard from '../components/ProductCard'; // FIX 2: Corrected path to component

// FIX 3: Renamed function to match filename
export default function ProductsPage() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}