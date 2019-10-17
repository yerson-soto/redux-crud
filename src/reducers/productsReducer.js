import { SHOW_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, SHOW_PRODUCT, EDIT_PRODUCT } from '../actions/types';

const initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SHOW_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case EDIT_PRODUCT:
                const prueba = state.products.map(product => 
                    product.id === action.payload.id ? (product = action.payload) : product
                    )
                    console.log(prueba);
                    break;
            
        default:
            return state;
    }
}

export default productsReducer;