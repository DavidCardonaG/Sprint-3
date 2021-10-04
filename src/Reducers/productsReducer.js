import { types, typesProduct } from "../types/types";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProduct.register:
            return{
                products: [action.payload]
            }
        case typesProduct.listar:
            return{
                productos:[...action.payload]
            }
        case typesProduct.eliminar:
            return{
                ...state
            }
         
    
        default:
           return state;
    }

}