import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20250506/pngtree-national-handloom-day-background-design-image_17254763.jpg')",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2>Login to Handloom Heritage</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#8b4513",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Login;