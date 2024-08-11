import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0,
        totalQuantity: 0
    },
    reducers: {
      addToCart: (state,action) => {
        const existingItem = 
        state.items.find(item => item._id === action.payload._id )
        if(existingItem){
            existingItem.quantity += 1
        }else{
            state.items.push(action.payload)
        }
      },
      deleteFromCart: (state,action) => {
        state.items = 
        state.items.filter(item => item._id !== action.payload._id)
      },
      decreaseCartItem: (state,action) => {
        const existingItem = 
        state.items.find(item => item._id === action.payload._id )

        if(existingItem) {
          existingItem.quantity -= 1
          if(existingItem.quantity === 0){
            state.items = 
            state.items.filter(item => item._id !== action.payload._id)
          }
        }
      },
      getTotalPrice: (state) => {
        const totalPrice = state.items.reduce((total, item)=>{
          return total + item.price * item.quantity
        },0)
        state.totalPrice = totalPrice
      },
      getTotalQuantity: (state) => {
        const totalQuantity = state.items.reduce((total, item)=>{
          return total + item.quantity
        },0)
        state.totalQuantity = totalQuantity
      },
      clearCart: (state) => {
        state.items = []
        state.totalPrice = 0
        state.totalQuantity = 0
      }
    }
})

export const {addToCart, deleteFromCart, decreaseCartItem, getTotalPrice, getTotalQuantity, clearCart} = cartSlice.actions

export default cartSlice.reducer