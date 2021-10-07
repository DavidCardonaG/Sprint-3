import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../Reducers/loginReducer';
import { registerReducer } from '../Reducers/registerReducer';
import {productsReducer } from '../Reducers/productsReducer';
import {productReducer} from '../Reducers/productReducer'
import {proReducer} from '../Reducers/proReducer'
import {imgReducer} from '../Reducers/imgReducer'

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    productos: productsReducer,
    product: productReducer,
    pro: proReducer,
    img: imgReducer
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
   
)