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
      alert("Item Added to the Cart");
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...obj, quantity: 1 }]);
      alert("Item Added to the Cart");
    }
  };
  console.log(cart);

  return (
    <>
      <div className="Full">
        <div>
          <img className="descriptionImage" src={item.images} alt="img"></img>
        </div>
        <div className="product-desc">
          <div className="details-div1">
            <h1>Name:</h1>
            <p>{item.title}</p>
          </div>
          <div className="details-div2">
            <h1>Brand:</h1>
            <p>{item.brand}</p>
          </div>
          <div className="details-div2">
            <h1>Category:</h1>
            <p>{item.category}</p>
          </div>
          <div className="details-div2">
            <h1>Description:</h1>
            <p>{item.description}</p>
          </div>
          <div className="details-div1">
            <h1>Price:</h1>
            <p>${item.price}</p>
          </div>
          <div className="details-div1">
            <h1>Rating:</h1>
            <p>
              {item.rating}
              <br></br>
            </p>
          </div>
          <button className="details-ATC" onClick={() => AddtoCart(item)}>
            Add to cart
          </button>
          <br></br>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
