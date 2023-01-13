import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers/rootReducer';
import logger from "redux-logger";

//composeWithDevTools()
const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(logger)));

export default store;