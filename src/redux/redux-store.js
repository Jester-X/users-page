import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import uiReducer from './ui-reducer'
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk'
import {reduxForm} from 'redux-form'

let reducers = combineReducers({
    ui: uiReducer,
    users: usersReducer,
    form: reduxForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;