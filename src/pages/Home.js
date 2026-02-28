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
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {/* Elegant Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.35))",
        }}
      ></div>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          maxWidth: "900px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "54px",
            fontWeight: "700",
            marginBottom: "20px",
            letterSpacing: "1px",
          }}
        >
          Handloom Heritage
        </h1>

        <h2
          style={{
            fontSize: "28px",
            fontWeight: "400",
            marginBottom: "25px",
          }}
        >
          Discover Authentic Indian Handloom
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            marginBottom: "40px",
          }}
        >
          We connect traditional Indian artisans with global buyers.
          Experience sustainable fashion crafted with heritage,
          culture, and timeless elegance.
        </p>

        <button
          onClick={() => navigate("/products")}
          style={{
            padding: "16px 38px",
            backgroundColor: "#d4af37",
            color: "#000",
            border: "none",
            fontSize: "18px",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#b8962e")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#d4af37")
          }
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;