import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface LoginState {
	isLogged: Boolean;
}

const initialState: LoginState = {
	isLogged: false,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setIsLogged: (state: LoginState, action: PayloadAction<Boolean>) => {
			state.isLogged = action.payload;
		},
	},
});

export const { setIsLogged } = loginSlice.actions;

export const selectIsLogged = (state: RootState) => state.login.isLogged;

export default loginSlice.reducer;
