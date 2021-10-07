import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../Actions/actionLogin";
import ProductoApp from '../Components/ProductoApp'
import Pro from '../Components/Pro'
import Imgs from '../Components/Imgs'
import Footer from '../Components/Footer'
const App = () => {
    const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const handlePrime = () => {
    window.location = 'https://www.primevideo.com/'
}
const handleRegalo = () => {
    window.location = 'https://www.amazon.com/-/es/Gift-Cards/b/ref=amb_link_13?ie=UTF8&node=2864196011&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-leftnav&pf_rd_r=DQFSRJHEQMK2T4S8AD2M&pf_rd_r=DQFSRJHEQMK2T4S8AD2M&pf_rd_t=101&pf_rd_p=6fab5752-891e-4843-b52b-1bf92c8211b3&pf_rd_p=6fab5752-891e-4843-b52b-1bf92c8211b3&pf_rd_i=10232440011'
}
  return (
    <div>
      <div className="items">
        <button id="one" className="btn-items">
          <i id="fast" class="fas fa-bars"></i>Todo
        </button>
        <button className="btn-items" type="button" onClick={handleRegalo}>Tarjeta de Regalo</button>
        <button  className="btn-items" type="button"  onClick={handlePrime}>Prime</button>
        <button className="btn-items">Lo Más Vendido</button>
        <button className="btn-items">Amazonas Basics</button>
        <button className="btn-items">Cómputo y Tabletas</button>
        <button className="btn-items">Los Más Regalados</button>
        <Link className="btn-items" to="/productos">Registra Tus Productos</Link>
        <Link className="btn-items" to="/contacto">Contacto</Link>
        <button className="btn-items" onClick={handleLogout}>Cerrar Sesión</button>
      </div><br></br>
      <ProductoApp/>
      <h2>Productos relacionados con este articulo</h2>
      <Pro/>
      <h2>Inspirado por tu historial de búsqueda</h2>
      <Imgs/>
      <Footer/>

    </div>
  );
};

export default App;
