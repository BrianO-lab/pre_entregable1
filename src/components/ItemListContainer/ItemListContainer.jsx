
import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import './ItemListContainer.css';
import { getBooks, getBookByCategoria } from '../../bookAPI/bookAPI';
import { useParams } from "react-router-dom";


function ItemListContainer(props) {

  const [dataBook, setDataBook] = useState([]);
  const params = useParams();
  const categoriaID = params.categoriaID;

  useEffect(() => {
    if (categoriaID === undefined) {
      getBooks().then((data) => {
        setDataBook(data);
      });
    } else {
      getBookByCategoria(categoriaID).then((data) => {
        setDataBook(data);
      });
    }
  }, [categoriaID]);

  return (
    <div className='list-item'>
      <ItemList dataBook={dataBook} />
    </div>
  )
}

export default ItemListContainer;