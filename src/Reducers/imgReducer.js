import { typesImg } from "../types/types";

const initialState = {
    img: []
}

export const imgReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesImg.listarI:
            return{
            img:[...action.payload]
            }
    
        default:
           return state;
    }

}