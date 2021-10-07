import { useSelector, useDispatch } from "react-redux";
import { listProdAsincrono} from '../Actions/actionProd'
import React,{useEffect} from "react";

const ProductoApp = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((store) => store.product);
  console.log(product);
  useEffect(() => {
    dispatch(listProdAsincrono())
}, [dispatch])

  return (
    <div>
      {product ? (
        product.map((prod, index) => (
          <div className="data" key={index}>
              <div className="img-mini">
              <button className="btn-img"><img src={prod.imagen1} alt="ima" /></button>
              <button className="btn-img"><img src={prod.imagen2} alt="ima" /></button>
              <button className="btn-img"><img src={prod.imagen3} alt="ima" /></button>
              </div>
              <div className="img-grande">
              <img src={prod.imagen} alt="im" />
              </div>
              <div className="items-data">
            <p className="name">{prod.nombre}</p>
            Precio: <p  className="precio">{prod.precio}</p> <p className="envio"> Envío GRATIS <a href="#">Detalles</a></p>
            <p className="info">Hasta 18 meses sin intereses de $5,592.76. Ver mensualidades 
Solicita tu tarjeta Amazon Recargable y obtén $100 de descuento en tu primera compra mayor a $500</p>
            <p className="descripcion">{prod.descripcion}</p>
            <p>Acerca de este Artículo</p>
            </div>
            <div className="container-compra">
                <p className="precio">{prod.precio}</p>
                <p className="envio">Envío GRATIS <a href="#">Detalles</a></p>
                <p>LLega: Nov 8-17</p>
                <p className="p-d">Puede que el envio se retrace un poco</p>
                <button className="btn-c"><i class="fas fa-play"></i> Comprar Ahora</button>
                <a  className="link-r" href="#">Transacción Segura</a>

            </div>
          </div>
        ))
      ) : (
        <p>Los Datos No Estan Disponibles</p>
      )}
    </div>
  );
};

export default ProductoApp;
