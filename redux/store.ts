import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, userReducer, authReducer, productReducer, paymentReducer } from "./index";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        auth: authReducer,
        products: productReducer,
        payment: paymentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

