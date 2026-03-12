import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { getProducts } from "../api/productsApi";
import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const { addToCart } =
    useContext(CartContext);


  useEffect(() => {

    getProducts().then(data => {

      const found =
        data.find(
          p => p.id === Number(id)
        );

      setProduct(found);

    });

  }, [id]);


  if (!product) {
    return <h2>Loading...</h2>;
  }


  // rating
  const rating =
    product.rating?.rate || 0;

  const count =
    product.rating?.count || 0;

  const stars =
    "⭐".repeat(
      Math.round(rating)
    );


  return (

    <div className="details">

      <img
        src={product.image}
        alt=""
        width="200"
      />

      <h2>{product.title}</h2>

      <p>${product.price}</p>


      {/* rating */}

      <p className="rating">

        {stars} ({rating}/5)

      </p>

      <p className="reviews">

        {count} reviews

      </p>


      <p>{product.description}</p>


      <button
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.image,
            rating: product.rating
          })
        }
      >
        Add to Cart
      </button>

    </div>

  );
}

export default ProductDetails;