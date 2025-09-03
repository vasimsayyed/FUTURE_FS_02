// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';

export default function CheckoutPage() {
  const [form, setForm] = useState({ name: '', address: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.address && form.email) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  if (submitted) {
    return <div className="p-4 text-center text-2xl text-green-600">Thank you for your order!</div>;
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" onChange={e => setForm({...form, name: e.target.value})} />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" onChange={e => setForm({...form, email: e.target.value})} />
        <textarea placeholder="Shipping Address" className="w-full p-2 border rounded" onChange={e => setForm({...form, address: e.target.value})}></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg">Place Order</button>
      </form>
    </div>
  );
}