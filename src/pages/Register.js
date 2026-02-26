import React from "react";

function Register() {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h2>Create Account</h2>
      <input type="text" placeholder="Enter Name" /><br /><br />
      <input type="email" placeholder="Enter Email" /><br /><br />
      <input type="password" placeholder="Enter Password" /><br /><br />
      <button>Create Account</button>
    </div>
  );
}

export default Register;