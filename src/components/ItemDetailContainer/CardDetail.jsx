import React, { useState, useContext, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import "./ItemDetailContainer.css";
import { cartContext } from "../../context/cartContext";

function CardDetail({ book, textBtnAddCart }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(cartContext);
  //1. Crear una función de "compra"
  //2. Debe guardar el valor de la cantidad en un estado
  function handleAddToCart(count) {
    addToCart(book, count);
    setCount(count);
  }
  useEffect(()=>{
    
  })

  return (
    <div className="detail-container">

      <div className="main container">
        <img src={book.img} alt={book.titulo} />
        <h1>{book.titulo}</h1>
        <h3>$ {book.precio}</h3>
      </div>
      {count === 0 ? (
        <ItemCount
          stock={book.stock}
          initial={1}
          text={textBtnAddCart}
          onAddToCart={handleAddToCart}
        />
      ) : (
        
        setCount(0)
      )


      }

    </div>
  );
}

export default CardDetail;