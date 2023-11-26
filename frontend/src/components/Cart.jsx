import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext.jsx";
import Button from "../components/UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal
      open={userProgressCtx.progress === "cart"}
      className="w-1/3 p-6 rounded-xl backdrop:bg-stone-900/90 bg-stone-100"
    >
      <h2 className="font-bold text-xl mb-2">Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="flex justify-end my-6 text-yellow-500">
        {currencyFormatter.format(cartTotal)} GP
      </p>
      <p className="justify-end flex gap-2">
        <Button
          className="bg-red-500 hover:bg-red-700 p-2 rounded-xl shadow-xl"
          onClick={handleCloseCart}
        >
          Close
        </Button>
        <Button
          className="bg-yellow-400 hover:bg-yellow-600 p-2 rounded-xl shadow-xl"
          onClick={handleCloseCart}
        >
          Go to Checkout
        </Button>
      </p>
    </Modal>
  );
}
