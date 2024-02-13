import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./productSlice"

const appStore = configureStore({
    reducer: {
        products: productsReducer,
    },
});
export default appStore