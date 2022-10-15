import React from 'react'
// import { useState } from "react";
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import './ItemCard.css'

export default function ItemCard(props) {

  return (

    <div className='card'>
      <div className='card-div--img'>
        <img className='card-img' alt={props.titulo} src={props.img} />
      </div>
      <div className='card-info'>
        <h3 className='card-info--titulo'>{props.titulo}</h3>
        <h3 className='card-info--autor'>{props.autor}</h3>
        <p className='card-info--precio'>{props.precio}</p>
      </div>
      <ItemCount initial={1} stock={props.stock} />
      <Link to={`/item/${props.id}`}>
        <Button titulo='Mas informacion' />
      </Link>


    </div>




  );
}