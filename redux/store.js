import { createStore,applyMiddleware,combineReducers } from "redux";
import authReducer from '../redux/reducers/authReducer.js'
import goalReducer from "./reducers/goalReducer.js";
import thunk from "redux-thunk";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore, persistReducer } from "redux-persist"

// import { LogBox } from 'react-native';


// LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage
// }

const reducers = combineReducers({
    goals: goalReducer
})

// const persistedReducer = persistReducer(persistConfig,reducers)

let store = createStore(reducers, applyMiddleware(thunk))

// let persistor = persistStore(store)

export { store };