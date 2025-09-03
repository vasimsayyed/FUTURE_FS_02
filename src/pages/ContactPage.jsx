// CORRECTED CODE for src/pages/ContactPage.jsx
import React from 'react';

export default function ContactPage() { // <-- The fix is right here
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600">Get in touch with us at contact@mystore.com.</p>
    </div>
  );
}