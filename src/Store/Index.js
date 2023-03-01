import {createStore, applyMiddleware } from 'redux'
import {combineReducers} from "redux"
import thunkMiddleware from "redux-thunk"
import authReducer from './Reducers/authReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import registerReducer from './Reducers/registerReducer';
// import PostReducer from './reducer/PostReducer.jsx';
// import fetchReducer from './reducer/fetchReducer.js';
// import updateReducer from './reducer/updateReducer.js';
import profileReducer from './Reducers/profileReducer.js';

const rootreducer  = combineReducers(
    {
        authReducer,
        profileReducer,
        registerReducer,
        // PostReducer,
        // fetchReducer,
        // updateReducer,
    }
);


const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;