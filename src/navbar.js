import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="NavContainer">
        <p>E-Commerce Store</p>
        <div className="NavTiles">
          <Link className="NavOption" to="/">
            Home
          </Link>
          <Link className="NavOption" to="products">
            Products
          </Link>
          <div className="NavOption">
            <div className="category">
              <button>Categories</button>
              <p>&#x1F893;</p>
            </div>
          </div>
          <Link className="NavOption-cart" to="cart">
            <img src="./cart-icon.png" alt="cart"></img>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
