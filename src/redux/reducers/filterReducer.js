import { TOGGLE_STOCK } from "../actionTypes/actionTypes";
import { TOGGLE_BRAND } from './../actionTypes/actionTypes';

export const initialState = {
    filters: {
        brands : [],
        stock : false,
    },
    keywords: "",
};

export const filterReducer = (state = initialState, action) =>{
    switch (action.type) {
        case TOGGLE_BRAND:
            return {};
        case TOGGLE_STOCK:
            return {};
        default:
            return state;
    }
}