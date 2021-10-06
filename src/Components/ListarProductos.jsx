import { useSelector, useDispatch } from "react-redux";
import {eliminarAsincrono} from '../Actions/actionProducts'
import Footer from '../Components/Footer'
import React from "react";

const ListarProductos = () => {
  const dispatch = useDispatch()

  const { productos } = useSelector((store) => store.productos);
  console.log(productos);
  return (
    <div>
        <h1>PRODUCTOS DISPONIBLES</h1>
      {productos ? (
        productos.map((pro, index) => (
          <tr key={index}>
            <td>{pro.nombre}</td>
            <td>{pro.precio}</td>
            <td>
              <img src={pro.imagen} alt="im" />
            </td>
            <td>{pro.descripcion}</td>
            <td onClick={()=>dispatch(eliminarAsincrono(pro.nombre))}><button>Eliminar</button></td>
          </tr>
        ))
      ) : (
        <p>Los Datos No Estan Disponibles</p>
        
      )}
      <Footer/>
    </div>
  );
};

export default ListarProductos;
