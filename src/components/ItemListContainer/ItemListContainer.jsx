
import React, { useState, useEffect } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ItemListContainer.css';
import { getBooks } from '../../bookAPI/bookAPI';


export default function ItemListContainer() {

  const [dataBook, setDataBook] = useState([]);

  useEffect(() => {
    getBooks().then((data) => {
      setDataBook(data);
    });
  }, [])

  return (
    <div className='list-item'>
      {dataBook.map((book) => {
        return (
          <ItemCard
            key={book.id}
            titulo={book.titulo}
            img={book.img}
            autor={book.autor}
            precio={book.precio}
            stock={book.stock}
          />
        );
      })}



    </div>
  )
}