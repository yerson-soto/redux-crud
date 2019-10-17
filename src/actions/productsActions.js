import { SHOW_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, SHOW_PRODUCT, EDIT_PRODUCT } from './types';

import axios from 'axios';

export const showProducts = () => async dispatch => {
    const response = await axios.get('http://localhost:5000/productos');
    dispatch({
        type: SHOW_PRODUCTS,
        payload: response.data
    })
}

export const showProduct = id => async dispatch => {
    const response = await axios.get(`http://localhost:5000/productos/${id}`);
    dispatch({
        type: SHOW_PRODUCT,
        payload: response.data
    })
}

export const deleteProduct = id => async dispatch => {
    await axios.delete(`http://localhost:5000/productos/${id}`);
    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    })
}

export const addProduct = post => async dispatch => {
    const response = await axios.post('http://localhost:5000/productos', post);
    dispatch({
        type: ADD_PRODUCT,
        payload: response.data
    })
}

export const editProduct = product => async dispatch => {
    const response = await axios.put(`http://localhost:5000/productos/${product.id}`, product);
    dispatch({
        type: EDIT_PRODUCT,
        payload: response.data
    })
}