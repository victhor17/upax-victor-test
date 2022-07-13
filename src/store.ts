import { configureStore } from '@reduxjs/toolkit';
import employeesSlice from './Redux/employeesSlice';
import loginSlice from './Redux/loginSlice';
import imagesSlice from './Redux/imagesSlice';

const store = configureStore({
	reducer: {
		login: loginSlice,
		employees: employeesSlice,
    images: imagesSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
