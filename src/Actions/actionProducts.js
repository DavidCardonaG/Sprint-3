import { typesProduct } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,deleteDoc,doc,getDocs,query,updateDoc,where} from "@firebase/firestore";
import Swal from 'sweetalert2'

export const editarAsincrono = (productos) => {
    return async (dispatch, getState) => {
        const id = getState().login.id;
        console.log(productos)

        const EditCard = {
            nombre: productos.nombre,
            precio: productos.precio,
            descripcion: productos.descripcion,
            imagen: productos.imagen
        }

        const cardFire = { ...EditCard }
        delete cardFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        const docRef = await doc(db, `${id}/Productos/data/`, `${productos.id}`);
        console.log(docRef)
        // Update the timestamp field with the value from the server
        const updateTimestamp = await updateDoc(docRef, {
            nombre: productos.nombre,
            precio: productos.precio,
            descripcion: productos.descripcion,
            imagen: productos.imagen
        });

        Swal.fire('Saved', productos.nombre, 'success');
        dispatch(listAsincrono(id))
    }

}
export const editarSincrono = (id, productos) => {
    return{
        type: typesProduct.editar,
        payload: {
            id,
            ...productos}
    }
}

export const eliminarAsincrono = (nombre) => {
    return async (dispatch) =>{
        const proData = collection(db,"Productos");
        const q = query(proData,where("nombre","==",nombre))

        const date = await getDocs(q);
        date.forEach((dt) => {
            deleteDoc(doc(db,"Productos",dt.id))
        })
        dispatch(eliminarSincrono(nombre));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Los Datos Han Sido Borrados Correctamente',
            showConfirmButton: false,
            timer: 2000
          })

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
    
    