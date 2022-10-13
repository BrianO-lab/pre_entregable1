import React from "react";

import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

function CardDetail({ book }) {
  return (
    <div className="detail-container">

        <div className="main container">
          <h1>{book.titulo}</h1>
          <img src={book.img} alt={book.titulo} />
          <h3>$ {book.precio}</h3>
        </div>
        <ItemCount stock={book.stock} initial={1} text="Agregar al carrito" />

    </div>
  );
}

export default CardDetail;