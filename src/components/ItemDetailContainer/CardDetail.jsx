import React, { useState, useContext, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import "./ItemDetailContainer.css";
import { cartContext, } from "../../context/cartContext";

import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

function CardDetail({ book, textBtnAddCart }) {
  const [count, setCount] = useState(0);
  const { addToCart, isInCart } = useContext(cartContext);

  function handleAddToCart(count) {
    addToCart(book, count);
    setCount(count);
  }
  useEffect(() => {

  })

  if (book.titulo) {
    return (
      <div className="detail-container">

        <div className="main container">
          <img src={book.img} alt={book.titulo} />
          <h1>{book.titulo}</h1>
          <h3>$ {book.precio}</h3>
        </div>

        {isInCart(book.id) ? (

          <>
            <Link to="/cart">
              <Button>
                Ir al carrito
              </Button>
            </Link>
            <Link to="/">
              <Button>
                Seguir comprando
              </Button>
            </Link>
          </>

        ) : (
          <ItemCount
            stock={book.stock}
            initial={count}
            text={textBtnAddCart}
            onAddToCart={handleAddToCart}
          />
        )}

      </div>
    );
  }
  return <Loader />;

}

export default CardDetail;