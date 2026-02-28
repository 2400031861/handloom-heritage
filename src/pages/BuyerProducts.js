function BuyerProducts({ addToCart }) {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Buyer Products</h2>
      <button onClick={() => addToCart("Sample Product")}>
        Add Sample Product
      </button>
    </div>
  );
}

export default BuyerProducts;