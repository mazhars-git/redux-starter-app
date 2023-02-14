import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    LOAD_PRODUCT 
    } from "../actionTypes/actionTypes";

export const loadProduct = (data) =>{
    return{
        type: LOAD_PRODUCT,
        payload: data,
    };
};
export const addToCart = (product) =>{
    return{
        type: ADD_TO_CART,
        payload: product,
    };
};

export const removeFromCart = (product) =>{
    return{
        type: REMOVE_FROM_CART,
        payload: product,
    };
};