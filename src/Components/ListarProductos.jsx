import { useSelector,useDispatch } from 'react-redux';
import React from 'react';
import { Table } from 'react-bootstrap';


const ListarProductos = () => {
    // const dispatch = useDispatch()

    const {productos} = useSelector(store => store.productos)
    console.log(productos)
    return (
        <div>
        <Table striped bordered hover>
           <thead>
               <tr>
                   <th>Nombres</th>
                   <th>Imagen</th>

               </tr>
           </thead>
           <tbody>
               {
                   (productos) ?
                   (
                       productos.map((pro , index)=>(
                           <tr key={index}>
                               <td>{pro.nombre}</td>
                               <td><img src={pro.imagen}/></td>
                               {/* <td onClick={()=>dispatch(eliminarAsincrono(pro.email))}><button>Eliminar</button></td> */}
                               </tr>
                       ))
                   )
                   : (<p>Los Datos No Estan Disponibles</p>)
               }
          
           </tbody>
       </Table>
   </div>
)
}

export default ListarProductos
