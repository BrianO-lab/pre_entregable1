import React from 'react'
import ItemCard from '../ItemCard/ItemCard';
import './ItemListContainer.css'


function ItemList(prop) {
  return (
    <div className='list-item'>
      {prop.map((book) => {
        return (
          <ItemCard
            key={book.id}
            titulo={book.titulo}
            img={book.img}
            autor={book.autor}
            precio={book.precio}
          />
        );
      })}

    </div>
  )
}

export default ItemList