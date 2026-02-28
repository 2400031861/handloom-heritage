import { useState } from "react";

function Payment() {
  const [method, setMethod] = useState("");
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState("");

  const today = new Date();
  const delivery = new Date(today);
  delivery.setDate(today.getDate() + 5);

  const handlePayment = () => {
    if (!method) {
      setError("Please select a payment method");
      return;
    }

    setError("");

    if (method === "cod") {
      alert("Order Confirmed! Pay on Delivery.");
      setPaid(false);
    } else {
      setPaid(true);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f1e8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#8b4513", marginBottom: "20px" }}>
          Secure Payment
        </h2>

        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          style={dropdownStyle}
        >
          <option value="">Choose Payment Method</option>
          <option value="card">Credit Card</option>
          <option value="netbanking">Net Banking</option>
          <option value="cod">Cash On Delivery</option>
        </select>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* CREDIT CARD */}
        {method === "card" && (
          <div>
            <input placeholder="Card Holder Name" style={inputStyle} />

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <select style={smallInputStyle}>
                <option>Month</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>

              <select style={smallInputStyle}>
                <option>Year</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
              </select>
            </div>

            <input placeholder="Enter OTP" style={inputStyle} />
          </div>
        )}

        {/* NET BANKING */}
        {method === "netbanking" && (
          <div>
            <select style={inputStyle}>
              <option>Select Bank</option>
              <option>SBI</option>
              <option>HDFC</option>
              <option>ICICI</option>
              <option>Axis Bank</option>
            </select>

            <input placeholder="User ID" style={inputStyle} />
            <input placeholder="Enter OTP" style={inputStyle} />
          </div>
        )}

        <button onClick={handlePayment} style={buttonStyle}>
          Confirm Order
        </button>

        {/* SUCCESS MESSAGE */}
        {paid && method !== "cod" && (
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ color: "green" }}>
              Payment Successful ✅
            </h3>
            <p>
              Expected Delivery: {delivery.toDateString()}
            </p>
            <p style={{ fontStyle: "italic", marginTop: "10px" }}>
              Thank you for supporting Handloom Heritage 💛
            </p>
          </div>
        )}

        {/* COD DELIVERY MESSAGE */}
        {method === "cod" && (
          <p style={{ marginTop: "15px" }}>
            Expected Delivery: {delivery.toDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  margin: "10px auto",
  padding: "8px",
  width: "90%",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const smallInputStyle = {
  padding: "8px",
  width: "45%",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const dropdownStyle = {
  padding: "10px",
  width: "100%",
  borderRadius: "8px",
  marginBottom: "15px",
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#d4af37",
  color: "#000",
  border: "none",
  borderRadius: "25px",
  cursor: "pointer",
  fontWeight: "600",
  marginTop: "15px",
  width: "100%",
};

export default Payment;