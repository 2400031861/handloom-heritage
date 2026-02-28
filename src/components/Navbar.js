import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <button onClick={() => navigate(-1)}>⬅</button>

      <h2>Handloom Heritage</h2>

      <div>
        {user && <span>Welcome, {user.name}</span>}
        <Link to="/cart">🛒</Link>
        <Link to="/customization">🎨</Link>
      </div>
    </div>
  );
};

export default Navbar;