import { useContext, useEffect, useState } from "react";
import { itemContext } from "./App";
import Checkout from "./checkout";

const Cart = () => {
  let { cart, setCart } = useContext(itemContext);
  console.log(cart);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(5);
  const [grandTotal, setGrandtotal] = useState(0);

  const calculateSubTotal = () => {
    let i = 0;
    let temp = 0;
    let temp2 = 0;
    while (i < cart.length) {
      temp = cart[i].price * cart[i].quantity;
      temp2 += temp;
      i++;
    }
    setSubTotal(temp2);
    calculateDiscount(temp2);
  };

  const calculateDiscount = (total) => {
    let temp;
    temp = total * 0.05;
    setDiscount(temp);
    calculateGrandTotal(total, temp);
  };

  const calculateGrandTotal = (total, disc) => {
    let temp;
    temp = total - disc;
    setGrandtotal(temp);
  };

  const clearCart = () => {
    setCart([]);
    console.log(cart);
  };

  const checkOut = () => {
    <Checkout />;
  };

  const setSingleItemPrice = (price, quantity) => {
    return (price * quantity).toFixed(3);
  };

  const plusButton = (obj) => {
    const updatedCart = cart.map((item) => {
      if (item.id === obj.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  };

  // const minusButtonCheck = () => {
  //   cart.map((items) => {
  //     if (items.quantity === 0) {
  //       setCart({});
  //     }
  //   });
  // };

  const minusButton = (obj) => {
    const updatedCart = cart.map((item) => {
      if (item.id === obj.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  };

  const deleteSingleItem = (obj) => {
    const tempArray = cart.filter((item) => {
      if (item.id !== obj.id) {
        return item;
      }
    });
    setCart(tempArray);
  };

  useEffect(() => {
    calculateSubTotal();
  }, [cart]);
  console.log("CART", cart);
  return (
    <>
      <div className="Cart">
        <div className="CartItems">
          {cart.map((items) => (
            <div className="CartItemTiles">
              <p style={{ flex: 2 }}>{items.title}</p>
              <div style={{ flex: 1 }} className="buttonDiv">
                <button onClick={() => minusButton(items)}>-</button>
                <p className="totalItems">{items.quantity}</p>
                <button onClick={() => plusButton(items)}>+</button>
              </div>

              <p style={{ flex: 1 }}>
                ${setSingleItemPrice(items.price, items.quantity)}
              </p>

              <button onClick={() => deleteSingleItem(items)}>
                <img
                  className="Delete-Dustbin"
                  src="delete.png"
                  alt="Del"
                ></img>
              </button>
            </div>
          ))}
        </div>
        <div className="CartTotal">
          <h3 className="TotalHeader">Total</h3>
          <div className="Subtotal">
            <p>SubTotal</p>
            <p>${subTotal.toFixed(3)}</p>
          </div>
          <div className="Subtotal">
            <p>Discount (5%)</p>
            <p> ${discount.toFixed(3)}</p>
          </div>
          <div className="Subtotal">
            <p>Grand Total</p>
            <p>${grandTotal.toFixed(3)}</p>
          </div>
          <div className="ProceedToCheckout">
            <button className="ClearCartButton" onClick={() => clearCart()}>
              Clear Cart
            </button>
            <button className="CheckoutButton" onClick={() => checkOut()}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
