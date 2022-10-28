import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import "./ItemDetailContainer.css";

function CardDetail({ book, textBtnAddCart }) {
  return (
    <div className="detail-container">

      <div className="main container">
        <img src={book.img} alt={book.titulo} />
        <h1>{book.titulo}</h1>
        <h3>$ {book.precio}</h3>
      </div>
      <ItemCount stock={book.stock} initial={1} />
      <Button>
        {textBtnAddCart}
      </Button>
    </div>
  );
}

export default CardDetail;