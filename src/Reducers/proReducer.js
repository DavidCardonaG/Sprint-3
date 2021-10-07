import { typesPro } from "../types/types";

const initialState = {
    pro: []
}

export const proReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesPro.lis:
            return{
            pro:[...action.payload]
            }
    
        default:
           return state;
    }

}