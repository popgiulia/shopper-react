import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './state';

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.products = [];
        },
        addToCart: (state, { payload }) => {
            const product = state.products.find(p => p.id === payload.product.id && p.size === payload.product.size);

            if (product) {
                product.quantity += 1;
                return;
            }

            state.products.push({
                ...payload.product,
                quantity: 1
            });
        },
        increaseQuantity: (state, { payload }) => {
            const product = state.products.find(p => p.id === payload.id && p.size === payload.size);
            product.quantity += 1;
        },
        decreaseQuantity: (state, { payload }) => {
            const product = state.products.find(p => p.id === payload.id && p.size === payload.size);

            if (product.quantity === 1) {
                return;
            }

            product.quantity -= 1;
        },
        removeFromCart: (state, { payload }) => {
            state.products = state.products.filter(p => !(p.id === payload.id && p.size === payload.size));
        }
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;