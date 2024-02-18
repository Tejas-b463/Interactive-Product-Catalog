import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice = createSlice({
    name: 'whishlist',
    initialState: {
        items: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items.length = 0;
        }

    }
})

export const { removeFromCart, addToWishlist, clearCart } = whishlistSlice.actions

export default whishlistSlice.reducer