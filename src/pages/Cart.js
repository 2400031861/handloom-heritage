import { useState } from "react";

function Cart({ cartItems, removeFromCart }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // ✅ Calculate total properly (price × quantity)
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  // ✅ Delivery date (5 days from today)
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 5);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select payment method");
      return;
    }

    if (paymentMethod === "cod") {
      alert("Order Confirmed! Pay on Delivery.");
      setPaymentSuccess(false);
    } else {
      setPaymentSuccess(true);
    }
  };

  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#f5f1e8", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#8b4513" }}>
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty</p>
      ) : (
        <>
          {/* PRODUCTS */}
          <div style={{ maxWidth: "900px", margin: "auto" }}>
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "white",
                  marginBottom: "20px",
                  borderRadius: "15px",
                  padding: "15px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <div style={{ flex: 1, marginLeft: "20px" }}>
                  <h3>{item.name}</h3>
                  <p>Size: {item.size || "M"}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                  <p style={{ fontWeight: "bold" }}>
                    ₹{item.price * (item.quantity || 1)}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    backgroundColor: "#800000",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <h3 style={{ textAlign: "center", marginTop: "30px" }}>
            Total Amount: ₹{totalAmount}
          </h3>

          {/* PAYMENT SECTION */}
          <div
            style={{
              marginTop: "40px",
              textAlign: "center",
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              maxWidth: "500px",
              marginInline: "auto",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Select Payment Method</h3>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={dropdownStyle}
            >
              <option value="">Choose Method</option>
              <option value="card">Credit Card</option>
              <option value="netbanking">Net Banking</option>
              <option value="cod">Cash On Delivery</option>
            </select>

            {/* CREDIT CARD */}
            {paymentMethod === "card" && (
              <div>
                <input placeholder="Card Holder Name" style={inputStyle} />
                <input type="month" style={inputStyle} />
                <input placeholder="OTP" style={inputStyle} />
              </div>
            )}

            {/* NET BANKING */}
            {paymentMethod === "netbanking" && (
              <div>
                <select style={inputStyle}>
                  <option>Select Bank</option>
                  <option>SBI</option>
                  <option>HDFC</option>
                  <option>ICICI</option>
                </select>
                <input placeholder="User ID" style={inputStyle} />
                <input placeholder="OTP" style={inputStyle} />
              </div>
            )}

            <button onClick={handlePayment} style={confirmButton}>
              Confirm Order
            </button>

            {/* SUCCESS MESSAGE */}
            {paymentSuccess && paymentMethod !== "cod" && (
              <div style={{ marginTop: "20px" }}>
                <h3 style={{ color: "green" }}>
                  Payment Successful ✅
                </h3>
                <p>Expected Delivery: {deliveryDate.toDateString()}</p>
              </div>
            )}

            {paymentMethod === "cod" && (
              <p style={{ marginTop: "15px" }}>
                Expected Delivery: {deliveryDate.toDateString()}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

const inputStyle = {
  display: "block",
  margin: "10px auto",
  padding: "8px",
  width: "80%",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const dropdownStyle = {
  padding: "10px",
  margin: "15px 0",
  width: "80%",
  borderRadius: "8px",
};

const confirmButton = {
  padding: "12px 25px",
  backgroundColor: "#d4af37",
  border: "none",
  borderRadius: "25px",
  cursor: "pointer",
  fontWeight: "600",
};

export default Cart;