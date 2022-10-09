import React from 'react'
import Button from '../Button/Button';

export default function ItemCard(props) {
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img alt={props.titulo} src={props.img}></img>
        </div>
        <div className='card-info'>
          <h3 className='card-info--titulo'>{props.titulo}</h3>
          <h3 className='card-info--autor'>{props.autor}</h3>
          <p className='card-info--precio'>{props.precio}</p>
        </div>
        <Button titulo='Añadir al carrito' />
      </div>

    </>
  );
}