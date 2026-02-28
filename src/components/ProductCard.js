import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <span>{product.discount}</span>

      <select onChange={(e) => setSize(e.target.value)}>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>

      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <button onClick={() => addToCart(product, size, quantity)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;