import { useSelector, useDispatch } from "react-redux";
import {eliminarAsincrono} from '../Actions/actionProducts'
import {editarAsincrono} from '../Actions/actionProducts'
import { Table } from 'react-bootstrap';
import Footer from '../Components/Footer'
import React from "react";

const ListarProductos = () => {
  const dispatch = useDispatch()

  const { productos } = useSelector((store) => store.productos);
  console.log(productos);
  return (
    <div>
        <h1 className="product-ti">PRODUCTOS DISPONIBLES</h1>
        <Table striped bordered hover>
                <thead id="cabecera">
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Descripción</th>
                        <th>Acción Editar</th>
                        <th>Acción Eliminar</th>
                    </tr>
                </thead>
                <tbody>
      {productos ? (
        productos.map((pro, index) => (
          <tr key={index}>
            <td  id="name-table">{pro.nombre}</td>
            <td>{pro.precio}</td>
            <td>
              <img src={pro.imagen} alt="im" />
            </td>
            <td>{pro.descripcion}</td>
            <td onClick={()=>dispatch(editarAsincrono)}><button className="editar">Editar</button></td>
            <td onClick={()=>dispatch(eliminarAsincrono(pro.nombre))}><button className="eliminar">Eliminar</button></td>
            </tr>
        ))
      ) : (
        <p>Los Datos No Estan Disponibles</p>
        
      )}
       </tbody>
       </Table>
      <Footer/>
    </div>
  );
};

export default ListarProductos;
