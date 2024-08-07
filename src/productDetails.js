import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemContext } from "./App";

const ProductDetails = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [id]);

  const { cart, setCart } = useContext(itemContext);

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
  console.log(cart);

  return (
    <>
      <p>{item ? item.title : "loading"}</p>
      <div className="Full">
        <div>
          <img className="descriptionImage" src={item.images} alt="img"></img>
        </div>
        <div>
          <p>Name:{item.title}</p>
          <p>Brand:{item.brand}</p>
          <p>Category:{item.category}</p>
          <p>Description:{item.description}</p>
          <p>Price:{item.price}</p>
          <p>
            Rating:{item.rating}
            <br></br>
          </p>
          <button>-</button>1<button>+</button>
          <button onClick={() => AddtoCart(item)}>Add to cart</button>
          <br></br>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
