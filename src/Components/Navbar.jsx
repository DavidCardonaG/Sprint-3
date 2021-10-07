import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../Actions/actionLogin";
import {loginSincrono} from '../Actions/actionLogin'

const Navbar = (user) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <header className="header">
      <nav className="navbar">
        <img
          className="logo-ama"
          src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1633306315/logo-amazon_jan4vi.png"
          alt="logo-amazonas"
        />
        <div className="ubicacion">
          <p className="p-navbar">Hola</p>
          <button className="btn-navbar">
            <i class="far fa-map-marker-alt"></i> Elige tu dirección
          </button>
        </div>
        <div className="search">
          <button className="btn-nav">Todos Los Departamentos <i class="fas fa-sort-down"></i></button>
          <input
            name="search"
            placeholder="Canon EQS R6-Cámara sin Espejo de Marco"
            className="search-navbar"
          />
          <button className="btn-search">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div className="identi">
            <p className="p-navbar">Hola,Identificate</p>
            <button className="btn-navbar">Cuenta y Listas</button>
        </div>
        <div className="identi">
            <p className="p-navbar">Devoluciones</p>
            <button className="btn-navbar">Y Pedidos</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
