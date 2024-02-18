import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./productSlice"
import wishlistReducer from "./wishlistSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice"

const persistConfig = {
    key: 'root',
    storage,
};


const persistedReducer = persistReducer(persistConfig, productsReducer);
const persistedWishlistReducer = persistReducer(persistConfig, wishlistReducer);

const appStore = configureStore({
    reducer: {
        products: persistedReducer,
        user: userReducer,
        wishlists: persistedWishlistReducer,
    },
});


export const persistor = persistStore(appStore);

export default appStore