
import { cartSliceType } from "../store/CartSlice";


// get the cart that was saved to the localStorage
export const loadCart = (): cartSliceType | undefined => {
    try{
        const getLoadedCart = localStorage.getItem('cart')
        if(getLoadedCart === null){
            return undefined
        }
        return JSON.parse(getLoadedCart)
    } catch(error){
        return undefined
    }
} 

// save items selected to cart to localStorage
export const saveCart = (cart: cartSliceType): void => {
    try{
        const saveCartItem = JSON.stringify(cart)
        localStorage.setItem('cart', saveCartItem)
    } catch(error){
        console.log('error while setting cart to localStorage')
    }
}