import React, { useState, useEffect } from "react";
import { getUnbook } from '../../bookAPI/bookAPI';
import CardDetail from "./CardDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [book, setbook] = useState([]);

  const { itemID } = useParams();

  useEffect(() => {
    getUnbook(itemID).then((data) => {
      setbook(data);
    });
  }, [itemID]);

  return (

      <CardDetail book={book} />

  );
}



export default ItemDetailContainer