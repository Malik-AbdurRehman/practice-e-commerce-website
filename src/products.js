import { useEffect, useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { itemContext } from "./App";
import { useContext } from "react";

const Products = () => {
  const [record, setRecord] = useState([]);

  const { cart, setCart } = useContext(itemContext);
  console.log(cart);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setRecord(data.products))
      .catch((err) => console.log(err));
  }, []);

  const AddtoCart = (obj) => {
    let found = cart.find((item) => item.id === obj.id);
    console.log(found);
    if (found) {
      const updatedCart = cart.map((item) => {
        if (item.id === found.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...obj, quantity: 1 }]);
    }
  };
  return (
    <>
      <div className="container">
        {record.map((items, index) => (
          <div className="tiles" key={index}>
            <Link to={`/products/${items.id}`}>
              <img src={items.thumbnail} alt="pics"></img>
              <h3>{items.title}</h3>
              <p>${items.price}</p>
            </Link>
            <button onClick={() => AddtoCart(items)}>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
