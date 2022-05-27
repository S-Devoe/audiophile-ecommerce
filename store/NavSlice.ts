import { createSlice } from "@reduxjs/toolkit";
import {RootState} from './store'

const navSlice = createSlice({
    name: 'nav',
    initialState:{ navOpen: false, cartModal: false, checkoutModal: false},
    reducers:{
        toggleNav: (state) =>{
            state.navOpen = !state.navOpen
        },
        closeNav: (state) => {
            state.navOpen = false
        },

        openCartModal: (state) => {
            state.cartModal = true;
        },
        closeCartModal : (state) => {
            state.cartModal = false
        },
        openCheckoutModal: (state) => {
            state.checkoutModal = true
        },
        closeCheckoutModal:(state) => {
            state.checkoutModal = false
        }

    }
})

export const isNavOpen = (state: RootState): boolean => state.nav.navOpen 

export const {toggleNav, closeNav, openCartModal, closeCartModal, openCheckoutModal, closeCheckoutModal} = navSlice.actions

export default navSlice.reducer