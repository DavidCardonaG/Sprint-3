import { typesProduct } from "../types/types";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProduct.register:
            return{
            productos:[action.payload]
            }
        case typesProduct.listar:
            return{
            productos:[...action.payload]
            }
        case typesProduct.editar:
            return{
                productos:[...action.payload]
            }
        case typesProduct.eliminar:
            return{
                productos: state.productos.filter(pro => pro.nombre !== action.payload)
            }
    
        default:
           return state;
    }

}