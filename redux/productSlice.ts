import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define a type for the slice state
export interface ProductState {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    stock: number;
}

// Define the initial state using that type
const initialState: ProductState[] = [];

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        AddProduct: (state, action) => {
            state.push(action.payload);
        },
        DeleteProduct: (state, action) => {
            state = state.filter((product: ProductState) => product.id !== action.payload);
        },
        UpdateProduct: (state, action) => {
            state = state.map((product: ProductState) => {
                if (product.id === action.payload.id) {
                    product = action.payload;
                }
                return product;
            });
        },
        UpdateStock: (state, action) => {
            state = state.map((product: ProductState) => {
                if (product.id === action.payload.id) {
                    product.stock = action.payload.stock;
                }
                return product;
            });
        }
    },
});

export const { AddProduct, DeleteProduct, UpdateProduct, UpdateStock } = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products;

export default productSlice.reducer;