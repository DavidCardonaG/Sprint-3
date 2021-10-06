import { typesProduct } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,deleteDoc,doc,getDocs,query,where} from "@firebase/firestore";

export const eliminarAsincrono = (nombre) => {
    return async (dispatch) =>{
        const proData = collection(db,"Productos");
        const q = query(proData,where("nombre","==",nombre))

        const date = await getDocs(q);
        date.forEach((dt) => {
            deleteDoc(doc(db,"Productos",dt.id))
        })
        dispatch(eliminarSincrono(nombre));

    }
}
export const eliminarSincrono = (nombre) =>{
    return{
        type:typesProduct.eliminar,
        payload:nombre
    }
}
export const listAsincrono = () =>{
    return async(dispatch)=>{
      const datos = await getDocs(collection(db,"Productos"))
      const products = []
      datos.forEach((doc) => {
          products.push({ 
              ...doc.data()
          })
      })
      dispatch(listSincrono(products))
    }
}
export const listSincrono = (productos) => {
    return{
        type:typesProduct.listar,
        payload:productos
    }
}

export const registerProductos = (nombre,imagen,precio,descripcion) =>{
    return(dispatch)=>{
        const newProduct = {
            nombre,
            imagen,
            precio,
            descripcion
        }
        addDoc(collection(db,"Productos"), newProduct)
        .then(res => {
            dispatch(registerProductosSincrono(newProduct))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
export const registerProductosSincrono = (productos) => {
    return{
        type: typesProduct.register,
        payload:productos
    }
}
    
    