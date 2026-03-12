import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cart } = useContext(CartContext);

  return (
    <nav className="nav">

      <h2>E-Store</h2>

      <div>

        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/signup">
          Signup
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;