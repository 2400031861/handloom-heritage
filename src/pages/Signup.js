import { useState } from "react";

function Signup({ setUser }) {
  const [name, setName] = useState("");

  const handleSignup = () => {
    setUser(name);
    alert("Signup Successful!");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Signup</h2>
      <input
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      />
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;