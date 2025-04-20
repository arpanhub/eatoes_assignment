import React, { useState } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`https://eatoes-assignment.onrender.com/api/orders/${phone}`);
      setOrders(response.data);
      setError("");
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to fetch orders. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">🧾 Order History</h2>

      <div className="mb-6">
        <label className="block text-gray-700">Enter Your Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchOrders}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-200"
        >
          Fetch Orders
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Order ID: {order.id}</h3>
              <p className="text-gray-600">Name: {order.name}</p>
              <p className="text-gray-600">Phone: {order.phone}</p>
              <p className="text-gray-600">Items: {order.items.map((item) => item.name).join(", ")}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-4">No orders found for this phone number.</p>
      )}
    </div>
  );
};

export default OrderHistory;
    