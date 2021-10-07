import { useSelector, useDispatch } from "react-redux";
import { lisImgA } from "../Actions/actionImg"
import React, { useEffect } from "react";

const Imgs = () => {
  const dispatch = useDispatch();

  const { img } = useSelector((store) => store.img);
  console.log(img);
  useEffect(() => {
    dispatch(lisImgA());
  }, [dispatch]);
  return (
    <div className="pros">
      {img ? (
        img.map((ig, index) => (
          <div  key={index}>
            <div className="card">
            <img className="img-grande" src={ig.imagen} alt="im" />
            </div>
          </div>
        ))
      ) : (
        <p>Los Datos No Estan Disponibles</p>
      )}
    </div>
  );
};

export default Imgs;
