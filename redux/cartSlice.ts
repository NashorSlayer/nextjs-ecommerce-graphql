import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    }

export interface ProductCardProps {
    product: Product;
    quantity: number,
}

interface CartState {
    products: ProductCardProps[];
    total: number;
}

const initialState: CartState = {
    products: [],
    total: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart: (state, action: PayloadAction<ProductCardProps>) => {
            state.products.push(action.payload);
        },
        DeleteFromCart: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter((productProp: ProductCardProps) => productProp.product.id !== action.payload);
        },
        SetQuantity: (state, action: PayloadAction<{id: number, quantity: number}>) => {
            state.products = state.products.map((productProp: ProductCardProps) => {
                if (productProp.product.id === action.payload.id) {
                    productProp.quantity = productProp.quantity - action.payload.quantity;
                }
                return productProp;
            });
        },
        SetTotal: (state) => {
            state.total = state.products.reduce((total: number, productProp: ProductCardProps) => total + productProp.product.price * productProp.quantity, 0);
        }
    },
});

export const { AddToCart, DeleteFromCart, SetQuantity, SetTotal } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.products;
export default cartSlice.reducer;