import React from "react";

const Cart = ({ cartItems, onPlaceOrder }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty. Add some delicious items!</p>
        </div>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-green-600 font-semibold">${item.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onPlaceOrder}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-200"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
