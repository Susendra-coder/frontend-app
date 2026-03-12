import { useContext } from "react";
import { AppContext } from "../App";
function Cart() {
  const { cart, setCart } = useContext(AppContext);
  const increment = (id) => {
    setCart(
      cart.map((item) => {
        if (item._id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }),
    );
  };
  const decrement = (id) => {
    setCart(
      cart.map((item) => {
        if (item._id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      }),
    );
  };
  return (
    <div>
      <h1>My Cart</h1>
      <ol>
        {cart.map((item) => (
          <li key={item._id}>
            {item.name}-{item.price}-
            <button onClick={() => decrement(item._id)}>-</button>
            {item.quantity}
            <button onClick={() => increment(item._id)}>+</button>-
            {item.quantity * item.price}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Cart;