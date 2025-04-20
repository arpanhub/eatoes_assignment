import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";
import OrderHistory from "./components/OrderHistory";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleAddToCart = (item) => setCartItems([...cartItems, item]);
  const handlePlaceOrder = () => setOrderConfirmed(true);
  const handleOrderPlaced = () => {
    setCartItems([]);
    setOrderConfirmed(false);
    alert("Order placed successfully!");
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-6 font-sans">
        <header className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">🍽️ The Digital Diner</h1>
          <nav className="space-x-4 mt-4 md:mt-0">
            <Link to="/" className="text-blue-600 hover:underline">Menu</Link>
            <Link to="/cart" className="text-blue-600 hover:underline">Cart</Link>
            <Link to="/history" className="text-blue-600 hover:underline">Order History</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Menu onAddToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={
              orderConfirmed
                ? <OrderForm cartItems={cartItems} onOrderPlaced={handleOrderPlaced} />
                : <Cart cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
            }
          />
          <Route path="/history" element={<OrderHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
