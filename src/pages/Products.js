import React, { useState } from "react";
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

function Products({ addToCart, initialType = "All" }) {

  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState(initialType);
  const [search, setSearch] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({});

  const products = [
    { name: "Banarasi Saree Classic", price: 120, image: banarasi1, type: "Banarasi" },
    { name: "Banarasi Bridal Saree", price: 250, image: banarasi2, type: "Banarasi" },
    { name: "Banarasi Saree", price: 120, image: banarasi3, type: "Banarasi" },
     { name: "Banarasi Bridal", price: 250, image: banarasi4, type: "Banarasi" },
    { name: "Kanchipuram Silk Traditional", price: 150, image: kanchipuram1, type: "Kanchipuram" },
    { name: "Kanchipuram Wedding Special", price: 400, image: kanchipuram2, type: "Kanchipuram" },
    { name: "Pochampally Ikat Dupatta", price: 40, image: pochampally1, type: "Pochampally" },
    { name: "Pochampally Designer Ikat", price: 900, image: pochampally2, type: "Pochampally" },
    { name: "Handloom Cotton Kurti", price: 60, image: kurti1, type: "Kurti" },
    { name: "Block Print Handloom Kurti", price: 75, image: kurti2, type: "Kurti" },
    { name: "Ikat Handloom Kurti", price: 95, image: kurti3, type: "Kurti" },
    { name: "Handloom Cotton Tote Bag", price: 45, image: bag1, type: "Bag" },
    { name: "Ikat Handloom Shoulder Bag", price: 65, image: bag2, type: "Bag" },
    { name: "Eco-Friendly Handloom Sling Bag", price: 55, image: bag3, type: "Bag" },
    { name: "Handloom Cotton Scarf", price: 30, image: scarf1, type: "Scarf" },
    { name: "Ikat Pattern Scarf", price: 45, image: scarf2, type: "Scarf" },
    { name: "Organic Handwoven Scarf", price: 50, image: scarf3, type: "Scarf" },
    { name: "Handloom Cotton Curtain", price: 80, image: curtain1, type: "Curtain" },
    { name: "Ikat Handwoven Curtain", price: 120, image: curtain2, type: "Curtain" },
    { name: "Eco-Friendly Designer Curtain", price: 150, image: curtain3, type: "Curtain" },
    { name: "Handloom Wool Sweater", price: 110, image: sweater1, type: "Sweater" },
    { name: "Organic Cotton Knit Sweater", price: 130, image: sweater2, type: "Sweater" },
    { name: "Artisan Handwoven Winter Sweater", price: 150, image: sweater3, type: "Sweater" },
    { name: "Handloom Cotton Diwan Set", price: 95, image: diwan, type: "Diwan" },
    { name: "Ikat Handwoven Diwan Set", price: 140, image: diwan2, type: "Diwan" },
    { name: "Premium Artisan Diwan Collection", price: 180, image: diwan3, type: "Diwan" },
    { name: "Handloom Cotton Pillow Cover", price: 25, image: pillow1, type: "Pillow" },
    { name: "Ikat Designer Pillow Cover", price: 35, image: pillow2, type: "Pillow" },
    { name: "Eco-Friendly Artisan Pillow Cover", price: 45, image: pillow3, type: "Pillow" },
    { name: "Handloom Cotton Bedsheet", price: 120, image: bedsheet1, type: "Bedsheet" },
    { name: "Ikat Designer Bedsheet Set", price: 160, image: bedsheet2, type: "Bedsheet" },
    { name: "Premium Artisan Handwoven Bedsheet", price: 200, image: bedsheet3, type: "Bedsheet" },
    { name: "Handloom Cotton Doti", price: 50, image: doti, type: "Doti" },
    { name: "Traditional South Indian Doti", price: 75, image: doti2, type: "Doti" },
    { name: "Premium Silk Wedding Doti", price: 120, image: doti3, type: "Doti" },
    { name: "Handloom Cotton Men Kurti", price: 70, image: menkurti1, type: "Men Kurti" },
    { name: "Traditional Handwoven Men Kurti", price: 95, image: menkurti2, type: "Men Kurti" },
    { name: "Premium Festival Men Kurti", price: 120, image: menkurti3, type: "Men Kurti" },
    { name: "Handloom Cotton Shirt", price: 60, image: shirt1, type: "Shirt" },
    { name: "Ikat Handwoven Shirt", price: 85, image: shirt2, type: "Shirt" },
    { name: "Premium Artisan Men's Shirt", price: 110, image: shirt3, type: "Shirt" },
  ];

  const types = ["All", ...new Set(products.map(p => p.type))];

  const handleOptionChange = (index, field, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value
      }
    }));
  };

  const filteredProducts = products.filter(p =>
    (selectedType === "All" || p.type === selectedType) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#fdf6f0", minHeight: "100vh", padding: "20px" }}>

      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2 style={{ textAlign: "center" }}>Handloom Collection</h2>

      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px 20px", borderRadius: "25px", width: "300px" }}
        />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {types.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            style={{
              margin: "5px",
              padding: "8px 14px",
              borderRadius: "20px",
              backgroundColor: selectedType === type ? "#8b4513" : "#ddd",
              color: selectedType === type ? "white" : "black",
              border: "none"
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: "20px", marginTop: "20px" }}>
        {filteredProducts.map((product, index) => {

          const quantity = selectedOptions[index]?.quantity || 1;
          const discount = 10;
          const finalPrice = (product.price - (product.price * discount / 100)) * quantity;

          return (
            <div key={index} style={{ background: "white", padding: "15px", borderRadius: "12px" }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
              <h3>{product.name}</h3>
              <p style={{ color: "red" }}>10% OFF</p>
              <p><del>${product.price}</del> <strong>${finalPrice}</strong></p>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => handleOptionChange(index, "quantity", Number(e.target.value))}
                style={{ width: "100%", marginBottom: "8px" }}
              />

              <button
                onClick={() => addToCart({ ...product, quantity, finalPrice })}
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#8b4513",
                  color: "white",
                  border: "none",
                  borderRadius: "20px"
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Products;