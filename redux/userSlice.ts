import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Cart {
    id: string;
    isEmpty: boolean;
}

interface Historical {
    id: string;
}


export interface UserState {
    id: string;
    email: string;
    address: string;
    firstName: string;
    lastName: string;
    image: string;
    Cart: Cart;
    Historical: Historical;
}

const initialState: UserState = {
    id: '',
    email: '',
    address: '',
    firstName: '',
    lastName: '',
    image: '',
    Cart: {
        id: '',
        isEmpty: true
    },
    Historical: {
        id: ''
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        UpdateAddress: (state, action) => {
            const { address } = action.payload;
            state.address = address;
        },
        UpdateImage: (state, action) => {
            const { image } = action.payload;
            state.image = image;
        },
        GetUser: (state, action) => {
            const { id, email, address, firstName, lastName, image, Cart, Historical } = action.payload;
            state.id = id;
            state.email = email;
            state.address = address;
            state.firstName = firstName;
            state.lastName = lastName;
            state.image = image;
            state.Cart = Cart;
            state.Historical = Historical;
        }
    }
});

export const {UpdateAddress, UpdateImage, GetUser} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;