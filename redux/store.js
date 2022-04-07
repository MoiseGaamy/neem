import { createStore,applyMiddleware } from "redux";
import authReducer from '../redux/reducers/authReducer.js'
import thunk from "redux-thunk"

let store = createStore(authReducer,applyMiddleware(thunk))

export default store;