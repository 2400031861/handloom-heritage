import { useState } from "react";

function Contact() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setMessage("");
  };

  return (
    <div>
      <h2>Contact Us</h2>

      <p><strong>Handloom Fashion Store</strong></p>
      <p>Email: support@handloomfashion.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: India</p>

      <hr />

      <h3>Send Us a Message</h3>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
        />
        <br /><br />

        <input 
          type="email" 
          placeholder="Your Email" 
          required 
        />
        <br /><br />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Send</button>
      </form>

    </div>
  );
}

export default Contact;