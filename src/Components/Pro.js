import { useSelector, useDispatch } from "react-redux";
import { lisProA } from "../Actions/actionPro";
import React, { useEffect } from "react";

const Pro = () => {
  const dispatch = useDispatch();

  const { pro } = useSelector((store) => store.pro);
  console.log(pro);
  useEffect(() => {
    dispatch(lisProA());
  }, [dispatch]);
  return (
    <div className="pros">
      {pro ? (
        pro.map((pr, index) => (
          <div  key={index}>
            <div className="card">
            <img className="img-grande" src={pr.imagen} alt="im" />
            <p className="p-card">{pr.descripcion}</p>
            <p className="precio-card">{pr.precio}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Los Datos No Estan Disponibles</p>
      )}
    </div>
  );
};

export default Pro;
