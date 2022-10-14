
import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import './ItemListContainer.css';
import { getBooks, getBookByCategoria } from '../../bookAPI/bookAPI';
import { useParams } from "react-router-dom";


export default function ItemListContainer() {

  const [dataBook, setDataBook] = useState([]);
  const params = useParams();
  const categoriaID = params.categoryID;

  useEffect(() => {
    if (categoriaID === undefined) {
      getBooks().then((data) => {
        setDataBook(data);
      });
    }
    else {
      getBookByCategoria(categoriaID).then((data) => {
        setDataBook(data);
      });
    }
  }, [categoriaID])

  return (
    <div className='list-item'>
      {dataBook.map((book) => {
        return (
          <div className="container">

            <ItemList dataBook={dataBook} />

          </div>
        );
      })}



    </div>
  )
}