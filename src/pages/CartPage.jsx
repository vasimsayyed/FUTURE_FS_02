// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();
  const totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.items.length === 0) {
    return <div className="p-4 text-center">Your cart is empty.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cart.items.map(item => (
          <div key={item.id} className="flex justify-between items-center border p-4 rounded-lg">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>${item.price}</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 text-center border rounded"
                min="1"
              />
              <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <Link to="/checkout" className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4 inline-block">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}