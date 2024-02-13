import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./productSlice"
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
};


const persistedReducer = persistReducer(persistConfig, productsReducer);

const appStore = configureStore({
    reducer: {
        products: persistedReducer,
    },
});


export const persistor = persistStore(appStore);

export default appStore