import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product =
    products.find(
      (p) => p.id == id
    );

  return (
    <div>

      <h2>{product.name}</h2>

      <img
        src={product.image}
        alt=""
      />

      <p>
        Price: ${product.price}
      </p>

    </div>
  );
}

export default ProductDetails;