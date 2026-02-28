import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {

  const navigate = useNavigate();

  const [role, setRole] = useState("Buyer");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [error, setError] = useState("");

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= EMAIL VALIDATION ================= */
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  /* ================= SEND OTP ================= */
  const sendOtp = () => {
    if (!form.email || !form.password) {
      return setError("Enter email and password first");
    }

    if (!validateEmail(form.email)) {
      return setError("Enter valid email address");
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();

    setGeneratedOtp(newOtp);
    setOtpSent(true);
    setError("");

    alert(`OTP sent (simulated): ${newOtp}`);
  };

  /* ================= VERIFY OTP ================= */
  const verifyOtp = () => {
    if (form.otp === generatedOtp) {
      setOtpVerified(true);
      setError("");
      alert("OTP Verified Successfully ✅");
    } else {
      setError("Invalid OTP");
    }
  };

  /* ================= HANDLE SIGNUP ================= */
  const handleSignup = () => {

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return setError("All fields are required");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    if (!captchaChecked) {
      return setError("Please verify CAPTCHA");
    }

    if (!otpVerified) {
      return setError("Please verify OTP before creating account");
    }

    setError("");

    setUser(`${role} (${form.name})`);

    alert(`Account created successfully as ${role}`);

    /* ✅ CORRECT ROLE-BASED REDIRECT */
    if (role === "Admin") {
      navigate("/admin-dashboard");
    } 
    else if (role === "Seller") {
      navigate("/seller-dashboard");
    } 
    else {
      navigate("/products");
    }
  };

  return (
    <div style={outerStyle}>
      <div style={cardStyle}>
        <h2>Create Account</h2>

        {/* ROLE SELECTION */}
        <div style={roleContainer}>
          {["Admin", "Seller", "Buyer"].map((r) => (
            <button
              key={r}
              style={{
                ...roleButton,
                backgroundColor: role === r ? "#8b4513" : "#ddd",
                color: role === r ? "white" : "black",
              }}
              onClick={() => setRole(r)}
            >
              {r}
            </button>
          ))}
        </div>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          style={inputStyle}
        />

        {!otpSent && (
          <button onClick={sendOtp} style={buttonStyle}>
            Send OTP
          </button>
        )}

        {otpSent && !otpVerified && (
          <>
            <input
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
              style={inputStyle}
            />
            <button onClick={verifyOtp} style={buttonStyle}>
              Verify OTP
            </button>
          </>
        )}

        {otpVerified && (
          <p style={{ color: "green", fontWeight: "bold" }}>
            OTP Verified ✅
          </p>
        )}

        {/* CAPTCHA */}
        <div style={{ margin: "10px 0" }}>
          <label>
            <input
              type="checkbox"
              checked={captchaChecked}
              onChange={() => setCaptchaChecked(!captchaChecked)}
            />{" "}
            I'm not a robot
          </label>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleSignup} style={buttonStyle}>
          Create Account
        </button>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const outerStyle = {
  backgroundImage:
    "url('https://png.pngtree.com/thumb_back/fw800/background/20250506/pngtree-national-handloom-day-background-design-image_17254763.jpg')",
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.95)",
  padding: "40px",
  borderRadius: "15px",
  width: "400px",
  textAlign: "center",
};

const roleContainer = {
  display: "flex",
  justifyContent: "space-around",
  margin: "15px 0",
};

const roleButton = {
  padding: "6px 12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

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
  fontWeight: "bold",
};

export default Signup;