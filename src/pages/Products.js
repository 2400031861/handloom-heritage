import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* KEEP ALL YOUR IMAGE IMPORTS EXACTLY SAME */
import banarasi1 from "../images/banarasi.jpg";
import banarasi2 from "../images/banarasii.jpg";
import banarasi3 from "../images/banarasi1.jpg";
import banarasi4 from "../images/banarasi2.jpg";
import kanchipuram1 from "../images/kanchipuram.jpg";
import kanchipuram2 from "../images/kanchipuramm.jpg";
import pochampally1 from "../images/pochampally.jpg";
import pochampally2 from "../images/pochampallyy.jpg";
import kurti1 from "../images/kurti1.jpg";
import kurti2 from "../images/kurti2.jpg";
import kurti3 from "../images/kurti3.jpg";
import bag1 from "../images/bag1.jpg";
import bag2 from "../images/bag2.jpg";
import bag3 from "../images/bag3.jpg";
import scarf1 from "../images/scarf1.jpg";
import scarf2 from "../images/scarf2.jpg";
import scarf3 from "../images/scarf3.jpg";
import curtain1 from "../images/curtain1.jpg";
import curtain2 from "../images/curtain2.jpg";
import curtain3 from "../images/curtain3.jpg";
import sweater1 from "../images/sweater1.jpg";
import sweater2 from "../images/sweater2.jpg";
import sweater3 from "../images/sweater3.jpg";
import diwan from "../images/diwan.jpg";
import diwan2 from "../images/diwan2.jpg";
import diwan3 from "../images/diwan3.jpg";
import pillow1 from "../images/pillow1.jpg";
import pillow2 from "../images/pillow2.jpg";
import pillow3 from "../images/pillow3.jpg";
import bedsheet1 from "../images/bedsheet1.jpg";
import bedsheet2 from "../images/bedsheet2.jpg";
import bedsheet3 from "../images/bedsheet3.jpg";
import doti from "../images/doti.jpg";
import doti2 from "../images/doti2.jpg";
import doti3 from "../images/doti3.jpg";
import menkurti1 from "../images/menkurti1.jpg";
import menkurti2 from "../images/menkurti2.jpg";
import menkurti3 from "../images/menkurti3.jpg";
import shirt1 from "../images/shirt1.jpg";
import shirt2 from "../images/shirt2.jpg";
import shirt3 from "../images/shirt3.jpg";

function Products({ addToCart }) {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({});

  // 🔵 ADDED: loading + error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ GET API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        const images = [
          banarasi1, banarasi2, banarasi3, banarasi4,
          kanchipuram1, kanchipuram2,
          pochampally1, pochampally2,
          kurti1, kurti2, kurti3,
          bag1, bag2, bag3,
          scarf1, scarf2, scarf3,
          curtain1, curtain2, curtain3,
          sweater1, sweater2, sweater3,
          diwan, diwan2, diwan3,
          pillow1, pillow2, pillow3,
          bedsheet1, bedsheet2, bedsheet3,
          doti, doti2, doti3,
          menkurti1, menkurti2, menkurti3,
          shirt1, shirt2, shirt3
        ];

        const formatted = data.slice(0, 30).map((item, index) => ({
          name: item.title,
          price: Math.floor(Math.random() * 5000) + 500,
          image: images[index % images.length],
          type: "General"
        }));

        setProducts(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  // 🔵 POST
  function addProduct() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Handloom Saree",
        body: "Beautiful handmade saree",
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setProducts(prev => [
          ...prev,
          {
            name: data.title,
            price: 1500,
            image: banarasi1,
            type: "General"
          }
        ]);
      });
  }

  // 🔵 DELETE
  function deleteProduct(index) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${index + 1}`, {
      method: "DELETE"
    })
      .then(() => {
        setProducts(prev => prev.filter((_, i) => i !== index));
      });
  }

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOptionChange = (index, field, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value
      }
    }));
  };

  return (
    <div style={{ backgroundColor: "#fdf6f0", minHeight: "100vh", padding: "20px" }}>

      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2 style={{ textAlign: "center" }}>Handloom Collection</h2>

      {/* 🔵 ADD BUTTON */}
      <div style={{ textAlign: "center", margin: "10px" }}>
        <button onClick={addProduct}>Add Product (API)</button>
      </div>

      {/* 🔵 LOADING + ERROR */}
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: "20px" }}>
        {filteredProducts.map((product, index) => {

          const quantity = selectedOptions[index]?.quantity || 1;
          const discount = 10;
          const finalPrice = (product.price - (product.price * discount / 100)) * quantity;

          return (
            <div key={index} style={{ background: "white", padding: "15px", borderRadius: "12px" }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
              <h3>{product.name}</h3>
              <p>₹{finalPrice.toFixed(2)}</p>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => handleOptionChange(index, "quantity", Number(e.target.value))}
              />

              <button onClick={() => addToCart(product)}>Add to Cart</button>

              {/* 🔵 DELETE BUTTON */}
              <button
                onClick={() => deleteProduct(index)}
                style={{ backgroundColor: "red", color: "white", marginTop: "5px" }}
              >
                Delete
              </button>

            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Products;