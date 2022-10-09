import React from 'react'
import './ButtonBar.css'

export default function ButtonBar(props) {
  console.log(props);
  return (
    <div className='button-bar'>
      <p className='button-bar--titulo'>{props.titulo}</p>
    </div>
  )
}


