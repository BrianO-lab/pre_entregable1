
import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ItemListContainer.css'



export default function ItemListContainer() {


  return (
    <div className='list-item'>
      <ItemCard
        img="https://briano-lab.github.io/Pre_Entrega2_JS/img/stock/Attack_on_Titan_Lost_Girls_(novel).jpg"
        titulo="Libro 1"
        autor="Autor 1"
        precio="1200"
      />
      <ItemCard
        img="https://briano-lab.github.io/Pre_Entrega2_JS/img/stock/Back_When_You_Called_Us_Devils_Volume_13.jpg"
        titulo="Libro 2"
        autor="Autor 2"
        precio="1200"
      />
      <ItemCard
        img="https://briano-lab.github.io/Pre_Entrega2_JS/img/stock/Cardcaptor_Sakura_Clear_Card_Volume_11.jpg"
        titulo="Libro 3"
        autor="Autor 3"
        precio="1200"
      />
   

    </div>
  )
}