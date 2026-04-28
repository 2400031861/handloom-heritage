import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Customization from "./pages/Customization";
import AdminDashboard from "./pages/AdminDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerProducts from "./pages/BuyerProducts";
import Register from "./pages/Register";

function App() {

  /* ================= USER STATE ================= */
  const [user, setUser] = useState(() => {
    try {
      return localStorage.getItem("user") || "Guest";
    } catch {
      return "Guest";
    }
  });

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  /* ================= PRODUCTS ================= */
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem("products");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  /* ================= CART ================= */
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cartItems");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  /* ================= 🔵 BACKEND API CALL ================= */
  useEffect(() => {
    fetch("http://10.142.13.189:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Shars",
        age: 21
      })
    })
      .then(res => res.json())
      .then(data => console.log("Backend Response:", data))
      .catch(err => console.error("API Error:", err));
  }, []);

  /* ================= CART FUNCTIONS ================= */
  const addToCart = (product) => {
    if (!product) return;
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    setUser("Guest");
    localStorage.removeItem("user");
  };

  const navLinkStyle = {
    margin: "0 15px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  };

  return (
    <Router>
      <div>

        {/* ================= HEADER ================= */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 40px",
            backgroundColor: "#8b4513",
            color: "white",
          }}
        >
          <h1 style={{ margin: 0 }}>Handloom Heritage</h1>

          <div>
            <span style={{ marginRight: "20px" }}>
              Welcome, <strong>{user}</strong>
            </span>

            <Link to="/login" style={{ color: "white", marginRight: "10px" }}>
              Login
            </Link>

            <Link to="/register" style={{ color: "white", marginRight: "10px" }}>
              Register
            </Link>

            <button onClick={handleLogout} style={{ marginRight: "10px" }}>
              Logout
            </button>

            <Link to="/cart" style={{ color: "white" }}>
              🛒 Cart ({cartItems.length})
            </Link>
          </div>
        </header>

        {/* ================= NAV ================= */}
        <nav
          style={{
            textAlign: "center",
            padding: "12px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/products" style={navLinkStyle}>Products</Link>
          <Link to="/customize" style={navLinkStyle}>Customization</Link>
          <Link to="/contact" style={navLinkStyle}>Contact</Link>
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
                clearCart={clearCart}
              />
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/customize" element={<Customization />} />

          <Route
            path="/login"
            element={<Login setUser={setUser} />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/admin-dashboard"
            element={
              <AdminDashboard
                products={products}
                setProducts={setProducts}
              />
            }
          />

          <Route
            path="/seller-dashboard"
            element={
              <SellerDashboard
                products={products}
                setProducts={setProducts}
              />
            }
          />

          <Route
            path="/buyer-products"
            element={
              <BuyerProducts
                products={products}
                addToCart={addToCart}
              />
            }
          />

        </Routes>

      </div>
    </Router>
  );
}

export default App;