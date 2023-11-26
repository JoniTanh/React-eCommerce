import ProductItem from "./ProductItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Products() {
  const {
    data: loadedProducts,
    isLoading,
    error,
  } = useHttp("http://localhost:3001/api/products", requestConfig, []);

  if (isLoading) {
    return <p className="text-center">Fetching products...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch products" message={error} />;
  }

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
