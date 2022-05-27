import { configureStore } from "@reduxjs/toolkit"
import { saveCart } from "../utilities/localStorage"


import navReducer from './NavSlice'
import CartReducer from './CartSlice'

const store = configureStore({
    reducer:{
        cart: CartReducer,
        nav: navReducer
    }
})

store.subscribe(() => {
    saveCart(store.getState().cart)
})

export type RootState = ReturnType<typeof store.getState>

export default store