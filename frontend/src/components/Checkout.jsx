import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3001/api/orders", requestConfig);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  let actions = (
    <>
      <Button
        className="bg-red-500 hover:bg-red-700 p-2 rounded-xl shadow-xl"
        onClick={handleClose}
        type="button"
      >
        Close
      </Button>
      <Button className="bg-green-400 hover:bg-green-600 p-2 rounded-xl shadow-xl">
        Submit Order
      </Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
        className="w-1/3 p-6 rounded-xl backdrop:bg-stone-900/90 bg-stone-100"
      >
        <h2 className="font-bold text-xl mb-2">Success!</h2>
        <p>Your order was submitted succesfully.</p>
        <p>
          We will get back to you with more details via email as soon as
          possible.
        </p>
        <p className="flex justify-end my-4">
          <Button
            className="bg-green-400 hover:bg-green-600 p-2 rounded-xl shadow-xl w-20"
            onClick={handleFinish}
          >
            OK
          </Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={userProgressCtx.progress === "checkout" ? handleClose : null}
      className="w-1/3 p-6 rounded-xl backdrop:bg-stone-900/90 bg-stone-100"
    >
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-xl mb-2">Checkout</h2>
        <p>
          Total Amount:{" "}
          <span className="text-yellow-500">
            {currencyFormatter.format(cartTotal)} GP
          </span>
        </p>

        <Input
          className="flex flex-col mt-1 rounded p-1 border border-gray-300 w-1/2"
          label="Full Name"
          type="text"
          id="name"
        />
        <Input
          className="flex flex-col mt-1 rounded p-1 border border-gray-300 w-1/2"
          label="E-mail Address"
          type="email"
          id="email"
        />
        <Input
          className="flex flex-col mt-1 rounded p-1 border border-gray-300 w-1/2"
          label="Street"
          type="text"
          id="street"
        />
        <div className="flex mb-4">
          <Input
            className="flex flex-col mt-1 rounded p-1 border border-gray-300 w-auto"
            label="Postal Code"
            type="text"
            id="postal-code"
          />
          <Input
            className="flex flex-col mt-1 rounded p-1 border border-gray-300 w-auto"
            label="City"
            type="text"
            id="city"
          />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="justify-end flex gap-2">{actions}</p>
      </form>
    </Modal>
  );
}
