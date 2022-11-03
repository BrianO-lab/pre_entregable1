import React, { useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);
  return (
    <Link to="/cart">
      <span>🛒</span>
      <span>{getTotalItemCount() > 0 && getTotalItemCount()}</span>
    </Link>
  );
}

export default CartWidget;