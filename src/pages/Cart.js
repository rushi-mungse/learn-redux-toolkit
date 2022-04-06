import { useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const allItemsInCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-8 flex-col">
          {allItemsInCart.map((product) => {
            return (
              <div className="flex items-center justify-between px-4 w-9/12 bg-white my-4 h-24">
                <div className="flex items-center justify-center  ">
                  <img src={product.image} alt="" className="h-20" />
                  <h1 className="text-md ml-4">{product.title}</h1>
                </div>
                <div>
                  <span className="mr-8"> ₹{product.price}</span>
                  <button
                    className="text-lg py-1 px-4 bg-indigo-600 rounded-full text-white"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
