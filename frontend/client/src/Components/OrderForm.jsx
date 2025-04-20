import React, { useState } from "react";
import axios from "axios";

const OrderForm = ({ cartItems, onOrderPlaced }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/order", {
        name,
        phone,
        items: cartItems,
      });
      onOrderPlaced();
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Confirm Your Order</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Your Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-200"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
