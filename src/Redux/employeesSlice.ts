import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Employe } from '../Components/EmployeeItem/EmployeItem';

interface employeesState {
	list: Employe[];
}

const initialState: employeesState = {
	list: [],
};

export const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		setList: (state: employeesState, action: PayloadAction<Employe[]>) => {
			state.list = action.payload;
		},
	},
});

export const { setList } = employeesSlice.actions;

export const selectEmployees = (state: RootState) => state.employees.list;

export default employeesSlice.reducer;
