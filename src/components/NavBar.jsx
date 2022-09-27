import React from 'react';
import ButtonBar from './ButtonBar';
import CartIcon from '../Asset/shopping-cart.png'


const NavBar = () => (
  <div>
    <ButtonBar
      titulo="Los más vendidos"
    />
    <ButtonBar
      titulo="Próximamente"
    />
    <ButtonBar
      titulo="Nuevos lanzamientos"
    />
    <img alt='Carrito de compras' src={CartIcon} />
  </div>

);

export default NavBar;