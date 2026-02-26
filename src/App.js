import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Customization from "./pages/Customization";

function App() {

  // 🔹 USER STATE
  const [user] = useState("Guest");

  // 🔹 CART STATE
  const [cartItems, setCartItems] = useState([]);

  // 🔹 ADD TO CART
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // 🔹 REMOVE FROM CART
  const removeFromCart = (indexToRemove) => {
    setCartItems(
      cartItems.filter((_, index) => index !== indexToRemove)
    );
  };

  // 🔹 NAV LINK STYLE
  const linkStyle = {
    margin: "0 15px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500"
  };

  return (
    <Router>
      <div>

        {/* ================= HEADER ================= */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 40px",
            backgroundColor: "#8b4513",
            color: "white"
          }}
        >
          <h1 style={{ margin: 0 }}>Handloom Heritage</h1>

          <div>
            <span style={{ marginRight: "20px" }}>
              Welcome, {user}
            </span>

            <Link
              to="/login"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none"
              }}
            >
              Login
            </Link>

            <Link
              to="/cart"
              style={{ color: "white", textDecoration: "none" }}
            >
              🛒 Cart ({cartItems.length})
            </Link>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav
          style={{
            textAlign: "center",
            padding: "12px",
            backgroundColor: "#f5f5f5"
          }}
        >
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/products" style={linkStyle}>Products</Link>
          <Link to="/customize" style={linkStyle}>✨ Customization</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>

        {/* ================= ROUTES ================= */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/products" 
            element={<Products addToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
              />
            } 
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/customize" element={<Customization />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;