import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="bg-gray-900">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to={"/"}>
          <h1 className="text-xl text-orange-500">REDUX STORE</h1>
        </Link>
        <div className="text-white">
          <Link
            to={"/"}
            className="mr-4 text-lg hover:text-orange-500 duration-300 transition-all"
          >
            Home
          </Link>
          <Link
            to={"/cart"}
            className="mr-4 text-lg hover:text-orange-500 duration-300 transition-all"
          >
            Cart
          </Link>
          <span className="font-bold text-lg">Items : {items.length}</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
