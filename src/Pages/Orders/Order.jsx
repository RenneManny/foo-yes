import React, { useContext } from "react";
import "./Order.css";
import { StoreContext } from "../../Context/StoreContext";
function Order() {
  const {getTotal}=useContext(StoreContext);
  return (
    <div className="form-container">
      <form action="" className="place-order">
        <div className="order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder=" Last Name" />
          </div>
          <input type="email" placeholder="someone@somewhere.com" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
  <input type="text" placeholder='Zip Code' />
  <input type="text" placeholder=' LandMark' />
</div>
<input type="text" placeholder="Phone Number" />
        </div>

        <div className="order-right">
        <div className="total">
            <h2>Cart Total</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotal()}</p>
             
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotal()+2}</b>
            </div>
            <button >Proceed to Payment</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Order;
