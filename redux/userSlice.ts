import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface UserState {
    email: string;
    address: string;
    firstname: string;
    lastname: string;
    image: string;
}

const initialState: UserState = {
    email: '',
    address: '',
    firstname: '',
    lastname: '',
    image: ''
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
        }
    }
});

export const {UpdateAddress, UpdateImage} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;