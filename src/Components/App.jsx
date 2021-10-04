import React from "react";
import ListarProductos from "../Components/ListarProductos";
import { useDispatch } from "react-redux";
import { startLogout } from "../Actions/actionLogin";
import Footer from '../Components/Footer'
const App = () => {
    const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div>
      <div className="items">
        <button id="one" className="btn-items">
          <i id="fas" class="fas fa-bars"></i>Todo
        </button>
        <button className="btn-items">Tarjeta de Regalo</button>
        <button className="btn-items">Prime</button>
        <button className="btn-items">Lo Más Vendido</button>
        <button className="btn-items">Amazonas Basics</button>
        <button className="btn-items">Cómputo y Tabletas</button>
        <button className="btn-items">Los Más Regalados</button>
      </div>

      <ListarProductos />
      <div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <Footer/>
    </div>
  );
};

export default App;
