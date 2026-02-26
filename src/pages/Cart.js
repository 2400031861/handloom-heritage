import { useState } from "react";

function Cart({ cartItems, removeFromCart }) {

  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Calculate total
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  // Delivery estimation (5 days from today)
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 5);

  const handlePayment = () => {
    if (paymentMethod === "") {
      alert("Please select payment method");
      return;
    }

    if (paymentMethod !== "cod") {
      setPaymentSuccess(true);
    } else {
      alert("Order Confirmed! Pay on Delivery.");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                margin: "15px auto",
                width: "300px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <h3>{item.name}</h3>
              <p>${item.price}</p>

              <button
                onClick={() => removeFromCart(index)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total Amount: ${totalAmount}</h3>

          {/* PAYMENT SECTION */}
          <div style={{ marginTop: "30px" }}>
            <h3>Select Payment Method</h3>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{ padding: "8px", margin: "10px" }}
            >
              <option value="">Choose Method</option>
              <option value="card">Credit Card</option>
              <option value="netbanking">Net Banking</option>
              <option value="cod">Cash On Delivery</option>
            </select>

            {paymentMethod === "card" && (
              <div>
                <input placeholder="Card Holder Name" style={inputStyle} />
                <input placeholder="Expiry Date" style={inputStyle} />
                <input placeholder="OTP" style={inputStyle} />
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <div>
                <input placeholder="Bank Name" style={inputStyle} />
                <input placeholder="User ID" style={inputStyle} />
                <input placeholder="OTP" style={inputStyle} />
              </div>
            )}

            <button
              onClick={handlePayment}
              style={{
                padding: "10px 20px",
                backgroundColor: "#8b4513",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              Confirm Order
            </button>

            {/* SUCCESS MESSAGE */}
            {paymentSuccess && paymentMethod !== "cod" && (
              <div style={{ marginTop: "20px" }}>
                <h3 style={{ color: "green" }}>
                  Payment Successful ✅
                </h3>
                <p>
                  Expected Delivery: {deliveryDate.toDateString()}
                </p>
              </div>
            )}

            {paymentMethod === "cod" && (
              <p>
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
  width: "250px",
};

export default Cart;