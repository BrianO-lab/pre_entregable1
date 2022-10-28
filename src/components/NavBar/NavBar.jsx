import React from 'react';
import './NavBar.css';
import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="header-navbar">
      <ul className="nav-menu">
        <Link to="/">Inicio </Link>
        <Link to="/item">Productos</Link>
        <Link to="/categoria/libro">Libros</Link>
        <Link to="/categoria/manga">Mangas</Link>
        <Link to="/categoria/artbook">Artbook's</Link>
        <CartWidget />
      </ul>
    </div>

  );
}


export default NavBar;