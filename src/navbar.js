import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="NavContainer">
        <p>E-Commerce Store</p>
        <div className="NavTiles">
          <Link to="/">Home</Link>
          <Link className="NavOption" to="products">
            Products
          </Link>
          <Link className="NavOption" to="cart">
            Go to cart
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
