import { useState, useEffect } from "react";

function AdminDashboard({ products = [], setProducts }) {

  const [usersCount, setUsersCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const users = localStorage.getItem("user");
    const cart = localStorage.getItem("cartItems");

    setUsersCount(users ? 1 : 0);
    setCartCount(cart ? JSON.parse(cart).length : 0);
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Admin Dashboard</h1>

      {/* STATISTICS SECTION */}
      <div style={statsContainer}>
        <div style={statCard}>
          <h2>{products.length}</h2>
          <p>Total Products</p>
        </div>

        <div style={statCard}>
          <h2>{usersCount}</h2>
          <p>Total Users</p>
        </div>

        <div style={statCard}>
          <h2>{cartCount}</h2>
          <p>Items in Cart</p>
        </div>
      </div>

      {/* PRODUCT LIST */}
      <div style={{ marginTop: "40px" }}>
        <h2>All Products</h2>

        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div style={gridStyle}>
            {products.map((product) => (
              <div key={product.id} style={cardStyle}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={imgStyle}
                />
                <h3>{product.name}</h3>
                <p><strong>₹{product.price}</strong></p>
                <p style={{ color: "gray" }}>{product.category}</p>

                <button
                  style={deleteBtn}
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete Product
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const containerStyle = {
  minHeight: "100vh",
  padding: "40px",
  background: "#f3f4f6",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#8b4513",
};

const statsContainer = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: "20px",
};

const statCard = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  width: "200px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const cardStyle = {
  background: "white",
  borderRadius: "12px",
  padding: "15px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
};

const deleteBtn = {
  background: "#b22222",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "10px",
};

export default AdminDashboard;