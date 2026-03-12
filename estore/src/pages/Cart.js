import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cart,
    removeFromCart,
    total
  } = useContext(CartContext);

  return (
    <div>

      <h2>Cart</h2>

      {cart.map((item, i) => (

        <div key={i}>

          {item.name}
          ${item.price}

          <button
            onClick={() =>
              removeFromCart(i)
            }
          >
            Remove
          </button>

        </div>

      ))}

      <h3>Total: ${total}</h3>

    </div>
  );
}

export default Cart;