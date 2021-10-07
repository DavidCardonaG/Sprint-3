import {typesProd} from '../types/types'
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,deleteDoc,doc,getDocs,query,where} from "@firebase/firestore";


export const listProdAsincrono = () =>{
    return async(dispatch)=>{
      const dat = await getDocs(collection(db,"producto"))
      const prod = []
      dat.forEach((doc) => {
          prod.push({ 
              ...doc.data()
          })
      })
      dispatch(listProd(prod))
    }
}
export const listProd = (product) => {
    return{
        type:typesProd.list,
        payload:product
    }
}