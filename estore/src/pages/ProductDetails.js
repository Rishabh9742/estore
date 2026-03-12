import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  // important check
  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <h2>{product.title}</h2>

      <img
        src={product.image}
        alt=""
        width="200"
      />

      <p>Price: ${product.price}</p>

      <p>{product.description}</p>

    </div>
  );
}

export default ProductDetails;