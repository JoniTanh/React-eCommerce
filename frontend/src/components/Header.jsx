import { useContext } from "react";
import logoImg from "../assets/ge-horizontal-removebg.png";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header className="flex justify-between p-10">
      <div className="mx-[46px]">
        <img
          className="w-1/2 min-h-full"
          src={logoImg}
          alt="Grand Exchange logo"
        />
      </div>
      <nav className="self-center px-20">
        <Button
          onClick={handleShowCart}
          className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-xl shadow-xl"
        >
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
