// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import CallToActionBanner from '../components/CallToActionBanner';
import NewArrivals from '../components/NewArrivals';
import MultiBannerSection from '../components/MultiBannerSection';
// You can add other sections here later if you want more content on the home page

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection/>
      <FeaturedProducts/>
      <CallToActionBanner/>
      <NewArrivals/>
      <MultiBannerSection/>
      {/* You might add featured products or other content here later */}
    </>
  );
}