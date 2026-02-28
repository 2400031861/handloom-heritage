import { useState } from "react";

function SellerDashboard({ products = [], setProducts = () => {} }) {

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleAddProduct = () => {
    if (!productName || !price || !category || !image) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      price,
      category,
      image,
    };

    setProducts((prev) => [...prev, newProduct]);

    setProductName("");
    setPrice("");
    setCategory("");
    setImage("");

    alert("Product added successfully!");
  };

  const handleDelete = (id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5efe6", padding: "40px" }}>
      <h1 style={{ textAlign: "center", color: "#8b4513" }}>
        Seller Dashboard
      </h1>

      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        maxWidth: "500px",
        margin: "30px auto",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center" }}>Add New Product</h2>

        <input type="text" placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={inputStyle}
        />

        <input type="number" placeholder="Price (₹)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={inputStyle}
        />

        <input type="text" placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={inputStyle}
        />

        <input type="text" placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleAddProduct} style={buttonStyle}>
          Add Product
        </button>
      </div>

      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h2>Your Products ({products?.length || 0})</h2>

        {products?.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px"
          }}>
            {products.map((product) => (
              <div key={product.id} style={cardStyle}>
                <img src={product.image} alt={product.name} style={imgStyle} />
                <h3>{product.name}</h3>
                <p><strong>₹{product.price}</strong></p>
                <p style={{ color: "gray" }}>{product.category}</p>
                <button
                  onClick={() => handleDelete(product.id)}
                  style={deleteBtn}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#8b4513",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
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

export default SellerDashboard;