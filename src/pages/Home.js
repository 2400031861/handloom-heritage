import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20250506/pngtree-national-handloom-day-background-design-image_17254763.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.45)",  // 🔥 this fixes readability
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          paddingTop: "180px",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "42px", fontWeight: "bold" }}>
          Discover Authentic Indian Handloom
        </h2>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "20px auto",
          }}
        >
          We connect traditional Indian artisans with global buyers.
          Experience sustainable fashion crafted with heritage and elegance.
        </p>

        <button
          onClick={() => navigate("/products")}
          style={{
            padding: "14px 30px",
            backgroundColor: "#8b4513",
            color: "white",
            border: "none",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;