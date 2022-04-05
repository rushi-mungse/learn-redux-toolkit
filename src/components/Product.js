import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddItem = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="flex items-center justify-center p-2 bg-white flex-col h-80">
      <img src={product.image} alt="cart-item" className="h-20" />
      <h1 className="text-sm m-4 text-center">{product.title}</h1>
      <span className="text-orange-500 font-bold text-md">
        ₹ {product.price}
      </span>
      <button
        className="py-1 px-4 bg-orange-500 rounded-full mt-4"
        onClick={() => handleAddItem(product)}
      >
        Add Item
      </button>
    </div>
  );
};

export default Product;
