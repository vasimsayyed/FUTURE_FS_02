// src/components/NewArrivals.jsx
import React from 'react';
import ProductGridSection from './ProductGridSection';
import { newArrivals } from '../newArrivalsData';

export default function NewArrivals() {
  return (
    <ProductGridSection
      title="New Arrivals"
      subtitle="Summer Collection New Modern Design"
      products={newArrivals}
    />
  );
}