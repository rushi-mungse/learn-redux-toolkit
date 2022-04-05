import { useSelector } from "react-redux";
import Product from "../components/Product";

const Cart = () => {
  const allItemsInCart = useSelector((state) => state.cart);
  return (
    <div className="bg-gray-200 h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 items-center justify-center py-8">
          {allItemsInCart.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
