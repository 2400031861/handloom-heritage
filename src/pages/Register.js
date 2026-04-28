import React, { useState } from "react";

function Register() {

  // ✅ STEP 1: state for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ STEP 2: error state
  const [error, setError] = useState("");

  // ✅ STEP 3: handle register
  const handleRegister = () => {

    // validation
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    // save user (fake backend)
    localStorage.setItem("user", JSON.stringify({ name, email }));

    alert("Registered Successfully ✅");

    // clear fields
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h2>Create Account</h2>

      {/* 🔴 ERROR MESSAGE */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={handleRegister}>
        Create Account
      </button>
    </div>
  );
}

export default Register;