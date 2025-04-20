import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = ({ onAddToCart }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get("https://eatoes-assignment.onrender.com/api/menu");
        setMenuItems(res.data);
      } catch (err) {
        console.error("Failed to fetch menu:", err);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">📜 Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-500">Category: {item.category}</p>
              <p className="text-green-600 font-semibold mt-2">${item.price}</p>
            </div>
            <button
              onClick={() => onAddToCart(item)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
