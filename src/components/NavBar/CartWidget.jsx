import React, { useContext } from 'react';

import { cartContext } from "../../context/cartContext";

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);
  return (
    <a href="/">
      <span>X</span>
      <span>{getTotalItemCount()}</span>
    </a>
  );
}

export default CartWidget;