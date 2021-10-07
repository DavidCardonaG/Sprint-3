import{typesPro} from '../types/types'
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs} from "@firebase/firestore";

export const lisProA = () => {
    return async(dispatch)=>{
        const dpro = await getDocs(collection(db,"pro"))
        const proD = []
        dpro.forEach((doc) => {
            proD.push({ 
                ...doc.data()
            })
        })
        dispatch(lisPro(proD))
      }

}
export const lisPro = (pro) =>{
    return{
        type:typesPro.lis,
        payload:pro
    }
}