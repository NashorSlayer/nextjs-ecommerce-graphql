import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define a type for the slice state
interface PaymentState {
    token_ws: string;
    url: string;
}

// Define the initial state using that type
const initialState: PaymentState = {
    token_ws: '',
    url: '',
};

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        updatePayment: (state, action) => {
            const { token_ws, url } = action.payload;
            state.token_ws = token_ws;
            state.url = url;
        }
    },
});

export const { updatePayment } = paymentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPayment = (state: RootState) => state.payment;

export default paymentSlice.reducer;
