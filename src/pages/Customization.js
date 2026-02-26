import { useState } from "react";

function Customization() {
  const [product, setProduct] = useState("");
  const [color, setColor] = useState("");
  const [pattern, setPattern] = useState("");
  const [embroidery, setEmbroidery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Base price logic
  const basePrice = 100;
  const extraCharge = embroidery === "Heavy" ? 50 : embroidery === "Medium" ? 30 : 0;
  const totalPrice = basePrice + extraCharge;

  // Delivery estimation (10 days)
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 10);

  const handleSubmit = () => {
    if (!product || !color || !pattern) {
      alert("Please select all required fields");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20250506/pngtree-national-handloom-day-background-design-image_17254763.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "30px",
          maxWidth: "500px",
          margin: "auto",
          borderRadius: "15px",
        }}
      >
        <h2>Customize Your Handloom Product</h2>

        <select value={product} onChange={(e) => setProduct(e.target.value)} style={inputStyle}>
          <option value="">Select Product</option>
          <option>Kurti</option>
          <option>Saree</option>
          <option>Diwan Set</option>
          <option>Shirt</option>
        </select>

        <select value={color} onChange={(e) => setColor(e.target.value)} style={inputStyle}>
          <option value="">Select Colour</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Green</option>
          <option>Maroon</option>
        </select>

        <select value={pattern} onChange={(e) => setPattern(e.target.value)} style={inputStyle}>
          <option value="">Select Pattern</option>
          <option>Traditional</option>
          <option>Floral</option>
          <option>Modern</option>
          <option>Ikat</option>
        </select>

        <select value={embroidery} onChange={(e) => setEmbroidery(e.target.value)} style={inputStyle}>
          <option value="">Embroidery Type</option>
          <option>Light</option>
          <option>Medium</option>
          <option>Heavy</option>
        </select>

        <input type="file" style={inputStyle} />

        <textarea
          placeholder="Other requirements..."
          style={{
            ...inputStyle,
            height: "60px",
            resize: "none",
          }}
        />

        <button onClick={handleSubmit} style={buttonStyle}>
          Submit Customization
        </button>

        {submitted && (
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ color: "green" }}>
              Customization Request Submitted Successfully 💖
            </h3>
            <p>Total Price: ${totalPrice}</p>
            <p>Expected Delivery: {deliveryDate.toDateString()}</p>
            <p>Thank you for supporting Indian artisans 🌸</p>
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
};

export default Customization;