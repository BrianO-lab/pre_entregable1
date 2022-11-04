import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Button from '../Button/Button';

function CartView() {
  const { cart, removeItem, clearCart } = useContext(cartContext);

  return (
    <>
      <Button onClick={() => clearCart()}>
        Vaciar el carrito
      </Button>

      {cart.map((book) => (
        <div>
          <h2>{book.titulo}</h2>
          <h4>${book.precio}</h4>
          <h4>{book.count}</h4>
          <h4>Precio Total: ${book.precio * book.count}</h4>

          <Button
            onClick={() => removeItem(book.id)}
          >
            X
          </Button>
        </div>
      ))}
    </>
  );
}

export default CartView;