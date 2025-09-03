// src/components/FeaturedProducts.jsx
import React from 'react';
import ProductGridSection from './ProductGridSection';
import { featuredProducts } from '../featuredProductsData';

export default function FeaturedProducts() {
  return (
    <ProductGridSection
      title="Featured Products"
      subtitle="Summer Collection New Modern Design"
      products={featuredProducts}
    />
  );
}