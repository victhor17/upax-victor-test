import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface imagesState {
	list: any[];
}

const initialState: imagesState = {
	list: [],
};

export const imagesSlice = createSlice({
	name: 'images',
	initialState,
	reducers: {
		setImages: (state: imagesState, action: PayloadAction<any[]>) => {
			state.list = [...state.list, ...action.payload];
		},
	},
});

export const { setImages } = imagesSlice.actions;

export const selectImages = (state: RootState) => state.images.list;

export default imagesSlice.reducer;
