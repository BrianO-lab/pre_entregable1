import React from 'react';
import './NavBar.css';
import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";


const NavBar = () => (
  <div className="header-navbar">
    <ul className="nav-menu">
      <Link to="/">Inicio </Link>
      <Link to="/item">Libros</Link>
      <Link to="/categoria/b">b</Link>
      <Link to="/categoria/k">k</Link>
      <CartWidget />
    </ul>
  </div>

);

export default NavBar;