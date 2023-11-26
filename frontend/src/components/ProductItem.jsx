import { useContext } from "react";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";

export default function ProductItem({ product }) {
  const cartCtx = useContext(CartContext);

  function handleAddProductToCart() {
    cartCtx.addItem(product);
  }

  return (
    <li className="bg-stone-400 rounded-xl w-full justify-self-center">
      <article className="text-center">
        <img
          className="rounded-t-xl w-full"
          src={`http://localhost:3001/${product.image}`}
          alt={product.name}
        />
        <div className="p-4">
          <h3 className="text-2xl text-white black-text-shadow">
            {product.name}
          </h3>
          <p className="text-yellow-300 text-lg my-2">
            {currencyFormatter.format(product.price)} GP
          </p>
          <p className="text-black text-lg">{product.description}</p>
        </div>
        <p>
          <Button
            onClick={handleAddProductToCart}
            className="bg-white hover:bg-slate-400 p-2 rounded-xl mt-4 mb-6 shadow-xl"
          >
            Add to Card
          </Button>
        </p>
      </article>
    </li>
  );
}
