import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const { addToCart } =
    useContext(CartContext);

  return (
    <div className="card">

      <img src={product.image} alt="" />

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button
        onClick={() =>
          addToCart(product)
        }
      >
        Add
      </button>

      <Link
        to={"/product/" + product.id}
      >
        Details
      </Link>

    </div>
  );
}

export default ProductCard;