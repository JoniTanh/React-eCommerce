import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="flex justify-between items-center pb-1">
      <p>
        {name} - {quantity}
        <span> x </span>
        <span className="text-yellow-500">
          {currencyFormatter.format(price)} GP
        </span>
      </p>
      <p className="flex gap-2">
        <Button
          onClick={onDecrease}
          className="px-2 bg-white hover:bg-blue-100 border-2 text-red-500 rounded-xl mx-2 justify-start"
        >
          -
        </Button>
        <span className="w-4 text-center">{quantity}</span>
        <Button
          onClick={onIncrease}
          className="px-2 bg-white hover:bg-blue-100 border-2 text-green-500 rounded-xl mx-2"
        >
          +
        </Button>
      </p>
    </li>
  );
}
