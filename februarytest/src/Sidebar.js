import React, { useState, useEffect } from "react";
import "./Sidebar.css";

function Sidebar(props) {
  let allItems = props.data;

  const [basketItems, setBasketItems] = useState();

  useEffect(() => {
    setBasketItems(allItems);
  }, [allItems]);

  //   console.log(props.data);
  return (
    <div className="sidebar">
      <div className="sidebarText">
        <h2>Ashley Hylton</h2>
        <h2>Items in basket:</h2>
        <h2>2</h2>
        <h2>Your Order</h2>
      </div>
      <div className="basketmeals">
        {basketItems?.map((item) => {
          return item.foodName;
        })}

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
          alt=" "
        />
        <div className="basketmealtext">
          <p>1 </p>
          <p>x</p>
          <p>mealtype</p>
        </div>
        <div className="price">
          <p>Price</p>
        </div>
      </div>
      <div className="total">
        <p>Total Amount:</p>
        <p>£20.50</p>
      </div>
      <div className="checkout">
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Sidebar;
