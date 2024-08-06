import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(true);
  function addToCart() {
    setCart(!cart);
  }
  const cartMOde = cart ? "" : "in-cart";
  return (
    <li className={cartMOde}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>
        {cart ? "Add to Cart" : "Remove from cart"}
      </button>
    </li>
  );
}

export default Item;
