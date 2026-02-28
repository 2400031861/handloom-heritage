import { useState } from "react";

function Customization() {
  const [product, setProduct] = useState("");
  const [color, setColor] = useState("#800000");
  const [pattern, setPattern] = useState("");
  const [embroidery, setEmbroidery] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Dynamic base pricing
  const productPrices = {
    Kurti: 150,
    Saree: 300,
    "Diwan Set": 250,
    Shirt: 120,
  };

  const basePrice = productPrices[product] || 0;

  const embroideryCharge =
    embroidery === "Heavy"
      ? 70
      : embroidery === "Medium"
      ? 40
      : embroidery === "Light"
      ? 20
      : 0;

  const totalPrice = basePrice + embroideryCharge;

  // 📦 Delivery (10 days)
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 10);

  const handleSubmit = () => {
    if (!product || !pattern) {
      setError("Please fill all required fields");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f1e8",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "35px",
          width: "450px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#8b4513" }}>
          Customize Your Handloom
        </h2>

        {/* PRODUCT */}
        <select value={product} onChange={(e) => setProduct(e.target.value)} style={inputStyle}>
          <option value="">Select Product *</option>
          <option>Kurti</option>
          <option>Saree</option>
          <option>Diwan Set</option>
          <option>Shirt</option>
        </select>

        {/* COLOR PICKER */}
        <label style={{ fontSize: "14px" }}>Choose Colour</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ ...inputStyle, height: "40px", padding: "3px" }}
        />

        {/* PATTERN */}
        <select value={pattern} onChange={(e) => setPattern(e.target.value)} style={inputStyle}>
          <option value="">Select Pattern *</option>
          <option>Traditional</option>
          <option>Floral</option>
          <option>Modern</option>
          <option>Ikat</option>
        </select>

        {/* EMBROIDERY BUTTON STYLE */}
        <div style={{ marginBottom: "15px" }}>
          <p style={{ marginBottom: "5px" }}>Embroidery Type</p>
          {["Light", "Medium", "Heavy"].map((type) => (
            <button
              key={type}
              onClick={() => setEmbroidery(type)}
              style={{
                marginRight: "10px",
                padding: "6px 12px",
                borderRadius: "20px",
                border: embroidery === type ? "2px solid #d4af37" : "1px solid #ccc",
                backgroundColor: embroidery === type ? "#d4af37" : "white",
                cursor: "pointer",
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* FILE UPLOAD */}
        <input type="file" style={inputStyle} />

        {/* NOTES */}
        <input
          type="text"
          placeholder="Other requirements..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={inputStyle}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleSubmit} style={buttonStyle}>
          Submit Customization
        </button>

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h3 style={{ color: "green" }}>
              Customization Request Submitted 💛
            </h3>
            <p><strong>Total Price:</strong> ${totalPrice}</p>
            <p>
              <strong>Expected Delivery:</strong> {deliveryDate.toDateString()}
            </p>
            <p style={{ fontStyle: "italic", marginTop: "10px" }}>
              Your handcrafted piece is being specially woven with care by our artisans ✨
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#d4af37",
  border: "none",
  borderRadius: "25px",
  cursor: "pointer",
  fontWeight: "600",
  marginTop: "10px",
};

export default Customization;