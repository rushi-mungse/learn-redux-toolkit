import { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto">
        <h1 className="py-4 text-lg">All Products</h1>
        <div className="grid grid-cols-4 gap-4 items-center justify-center pb-8">
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
