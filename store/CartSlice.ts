import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItem from "../interfaces/CartItem";
import { loadCart } from "../utilities/localStorage";
import {RootState} from './store'



export interface cartSliceType{
    items: CartItem[],
    totalQuantity: number
}

export const initialCartState: cartSliceType = {
    items: [],
    totalQuantity: 0
}

const previousCart = loadCart()


const cartSlice = createSlice({
  name: "cart",
  initialState: previousCart ? previousCart : initialCartState,
  reducers: {
    addItemToCart: (state, actions: PayloadAction<CartItem>) => {
      const addedItem = actions.payload;
      const existingItem = state.items.find((item) => item.id === addedItem.id);
      state.totalQuantity += addedItem.quantity;

      if (!existingItem) {
        state.items.push(addedItem);
      } else {
        existingItem.quantity += addedItem.quantity;
      }
    },
    increaseQuantity: (state, actions: PayloadAction<number>) => {
      state.totalQuantity++;
      state.items = state.items.map((item) => {
        if (item.id === actions.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseQuantity: (state, actions: PayloadAction<number>) => {
      state.totalQuantity--;
      state.items = state.items.map((item) => {
        if (item.id === actions.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter((item) => item.quantity > 0);
    },
    clearCart: () => {
        return initialCartState
    }

  },
});


export const CartItems = (state: RootState): CartItem[] => state.cart.items

export const totalAmount = (state: RootState): any => {
    const total = state.cart.items.reduce((cartTotal, currentItem) => {
        const {price, quantity} = currentItem
        cartTotal += price * quantity
        return cartTotal
    }, 0)

  return parseFloat(total.toFixed(2));
}

export const totalQuantity = (state: RootState): number =>state.cart.totalQuantity;


export const { addItemToCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer