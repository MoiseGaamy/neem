import { createStore,applyMiddleware } from "redux";
import authReducer from '../redux/reducers/authReducer.js'
import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from "redux-persist"


const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig,authReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk))

let persistor = persistStore(store)

export { store ,persistor};