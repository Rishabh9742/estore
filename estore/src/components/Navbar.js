import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);

    document.body.classList.toggle("dark");
  };

  return (

    <nav className="nav">

      {/* Logo */}
      <h2 className="logo">
        <Link to="/">E-Store</Link>
      </h2>


      {/* Links */}
      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        <Link to="/checkout">
          Checkout
        </Link>


        {/* Auth section */}

        {user ? (

          <>

            <span className="user">
              {user}
            </span>

            <button
              onClick={logout}
              className="btn"
            >
              Logout
            </button>

          </>

        ) : (

          <>

            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Signup
            </Link>

          </>

        )}


        {/* Dark mode */}

        <button
          onClick={toggleTheme}
          className="btn"
        >
          {dark ? "Light" : "Dark"}
        </button>

      </div>

    </nav>

  );
}

export default Navbar;