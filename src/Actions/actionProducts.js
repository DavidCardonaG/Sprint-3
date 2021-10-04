import { typesProduct } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where } from "@firebase/firestore";

export const listarAsincrono = () =>{
    return async(dispatch) =>{
        const datos = await getDocs(collection(db,'productos'))
        console.log(datos)
        const prod=[];
        datos.forEach((nombre) =>{
            prod.push({...nombre.data()})
            console.log(nombre)
        
        })
        dispatch(listarSincrono(prod))
    }
    }
    export const listarSincrono = (productos) =>{
        return{
            type: typesProduct.listar,
            payload:productos
        }
    
    }

    const actionProducts = () => {
        return (
            <div>
                
            </div>
        )
    }
    
    export default actionProducts
    