import { useState } from "react";

function Payment() {
  const [method, setMethod] = useState("");
  const [paid, setPaid] = useState(false);

  const today = new Date();
  const delivery = new Date(today);
  delivery.setDate(today.getDate() + 5);

  const handlePayment = () => {
    if (method === "cod") {
      alert("Order Confirmed!");
    } else {
      setPaid(true);
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Select Payment Method</h2>

      <select
        onChange={(e) => setMethod(e.target.value)}
        style={{ padding: "10px", margin: "20px" }}
      >
        <option value="">Choose Method</option>
        <option value="card">Credit Card</option>
        <option value="netbanking">Net Banking</option>
        <option value="cod">Cash On Delivery</option>
      </select>

      {method === "card" && (
        <div>
          <input placeholder="Card Holder Name" style={inputStyle} />
          <input placeholder="Expiry Date" style={inputStyle} />
          <input placeholder="OTP" style={inputStyle} />
        </div>
      )}

      {method === "netbanking" && (
        <div>
          <input placeholder="Bank Name" style={inputStyle} />
          <input placeholder="User ID" style={inputStyle} />
          <input placeholder="OTP" style={inputStyle} />
        </div>
      )}

      <br />

      <button onClick={handlePayment} style={buttonStyle}>
        Confirm Order
      </button>

      {paid && method !== "cod" && (
        <div>
          <h3 style={{ color: "green" }}>Payment Successful ✅</h3>
          <p>
            Expected Delivery: {delivery.toDateString()}
          </p>
        </div>
      )}

      {method === "cod" && (
        <p>Expected Delivery: {delivery.toDateString()}</p>
      )}
    </div>
  );
}

const inputStyle = {
  display: "block",
  margin: "10px auto",
  padding: "8px",
  width: "250px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#8b4513",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default Payment;