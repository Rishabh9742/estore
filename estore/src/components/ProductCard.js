import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const { addToCart } =
    useContext(CartContext);


  // rating values
  const rating =
    product.rating?.rate || 0;

  const count =
    product.rating?.count || 0;

  // create stars
  const stars = "⭐".repeat(
    Math.round(rating)
  );


  return (

    <div className="card">

      <img src={product.image} alt="" />

      <h3>{product.name}</h3>

      <p>${product.price}</p>


      {/* ⭐ Rating */}

      <p className="rating">

        {stars} ({rating}/5)

      </p>

      <p className="reviews">

        {count} reviews

      </p>


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