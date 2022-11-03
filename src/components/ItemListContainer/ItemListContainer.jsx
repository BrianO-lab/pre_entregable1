
import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import './ItemListContainer.css';
import { getBooks, getBookByCategoria } from '../../bookAPI/bookAPI';
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";


function ItemListContainer(props) {

  const [dataBook, setDataBook] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams();
  const categoriaID = params.categoriaID;

  useEffect(() => {
    setDataBook([]);
    setIsLoading(true)
    if (categoriaID === undefined) {
      getBooks().then((data) => {
        setDataBook(data);
        setIsLoading(false);
      });
    } else {
      getBookByCategoria(categoriaID).then((data) => {
        setDataBook(data);
        setIsLoading(false);
      });
    }
  }, [categoriaID]);

  return (
    <div className='list-item'>
      {
        isLoading ?
          <Loader />

          :

          <ItemList dataBook={dataBook} />

      }
    </div>
  )
}

export default ItemListContainer;