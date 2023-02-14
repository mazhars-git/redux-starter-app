import { loadProduct } from './../../actions/productActions';

const loadProductData = () =>{

    return async(dispatch, getState) =>{
        const res = await fetch("products.json");
        const data = await res.json();

        if(data.data.length){
            dispatch(loadProduct(data.data));
        }
    }
}

export default loadProductData;