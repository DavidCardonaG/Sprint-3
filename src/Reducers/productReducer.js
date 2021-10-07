import { typesProd } from "../types/types";

const initialState = {
    product: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProd.list:
            return{
            product:[...action.payload]
            }
    
        default:
           return state;
    }

}