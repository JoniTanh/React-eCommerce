import Header from "./components/Header";
import Products from "./components/Products";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Products />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
