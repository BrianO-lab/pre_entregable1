import React from 'react';
import ButtonBar from "../ButtonBar/ButtonBar";
import "./NavBar.css";

const NavBar = () => (
  <div className='header-navbar'>
    <ButtonBar
      titulo="Los más vendidos"
    />
    <ButtonBar
      titulo="Próximamente"
    />
    <ButtonBar
      titulo="Nuevos lanzamientos"
    />
    <img className='logo-carrito' alt='Carrito de compras' src="/Images/CartIcon.png" />
  </div>

);

export default NavBar;