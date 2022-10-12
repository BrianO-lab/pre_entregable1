
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'
import { getBooks } from '../../bookAPI/bookAPI';

// import ItemList from "./ItemList";


function ItemListContainer(props) {


  const [dataBook, setDataBook] = useState([]);

  useEffect(() => {
    getBooks().then((data) => {
      setDataBook(data);
    });
  }, []);


  return (
    <div className='list-item'>
      <ItemList dataBook={dataBook} />
    </div>
  );
}

export default ItemListContainer;