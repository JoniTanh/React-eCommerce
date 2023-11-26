import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function Products() {
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3001/api/products");

      if (!response.ok) {
        // ...
      }

      const products = await response.json();
      setLoadedProducts(products);
    }

    fetchProducts();
  }, []);

  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-4 mx-20 gap-4 p-4">
        {loadedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
