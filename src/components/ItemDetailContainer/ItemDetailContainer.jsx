import React, { useState, useEffect } from "react";
import CardDetail from "./CardDetail";
import { getUnLibro } from '../../bookAPI/bookAPI';
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {

  const [book, setbook] = useState({});
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { itemID } = useParams();

  useEffect(() => {
    getUnLibro(itemID)
      .then((data) => {
        setbook(data);
      })
      .catch((error) => {
        console.log("Catch?")
        setFeedbackMsg(error.message);
      });
  }, [itemID]);

  // 2. Render condicional con Operador Ternario
  return (
    <>
      {feedbackMsg !== null ?
        <h4>Error: {feedbackMsg}</h4>
        :
        <CardDetail book={book}
          textBtnAddCart="AGREGAR AL CARRITO"
        />
      }
    </>
  );


}



export default ItemDetailContainer