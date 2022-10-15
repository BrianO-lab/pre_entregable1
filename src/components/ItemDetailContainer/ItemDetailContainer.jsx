import React, { useState, useEffect } from "react";
import CardDetail from "./CardDetail";
import { getUnLibro } from '../../bookAPI/bookAPI';
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [book, setbook] = useState([]);

  const { itemID } = useParams();

  useEffect(() => {
    getUnLibro(itemID).then((data) => {
      setbook(data);
    });
  }, [itemID]);

  return (

    <CardDetail book={book} />

  );
}



export default ItemDetailContainer