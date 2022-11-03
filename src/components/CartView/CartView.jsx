import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";


function CartView() {
  const { cart, removeItem } = useContext(cartContext);

  return (
    <>
      {cart.map((book) => (
        <div>
          <h2>{book.titulo}</h2>
          <h4>${book.precio}</h4>
          <h4>{book.count}</h4>
          <h4>Precio Total: ${book.precio * book.count}</h4>
          <button>X</button>
        </div>
      ))}
    </>
  );
}

export default CartView;