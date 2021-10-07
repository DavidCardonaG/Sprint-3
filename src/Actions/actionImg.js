import{typesImg} from '../types/types'
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs} from "@firebase/firestore";

export const lisImgA = () => {
    return async(dispatch)=>{
        const imgD = await getDocs(collection(db,"img"))
        const igD = []
        imgD.forEach((doc) => {
            igD.push({ 
                ...doc.data()
            })
        })
        dispatch(lisImg(igD))
      }

}
export const lisImg = (pro) =>{
    return{
        type:typesImg.listarI,
        payload:pro
    }
}