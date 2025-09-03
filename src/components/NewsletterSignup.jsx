// src/components/NewsletterSignup.jsx
import React from 'react';

const backgroundPattern = 'https://res.cloudinary.com/dsyln8jyt/image/upload/v1716313795/cara-banners/b14_j8v8gq.png';

export default function NewsletterSignup() {
  return (
    <section
      className="my-16 py-12 bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 text-white mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold mb-2">Sign Up For Newsletters</h2>
          <p className="text-gray-300">
            Get E-mail updates about our latest shop and{' '}
            <span className="text-yellow-400">special offers.</span>
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-l-md border-0 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold px-6 py-3 rounded-r-md hover:bg-green-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}