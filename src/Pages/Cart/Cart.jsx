import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext.jsx";
import { assets } from "../../assets/assets.js";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { food_list, cartItems, removeFromCart, getTotal } =
    useContext(StoreContext);
    const navigate=useNavigate()
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  <div className="cart-item-item cart-title">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>

                    <p>{cartItems[item._id]}</p>

                    <p>${item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="remove"
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="total">
            <h2>Cart Total</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotal()}</p>
             
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotal()===0?0:getTotal()+2}</b>
            </div>
            <button onClick={()=>navigate("/order")}>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
