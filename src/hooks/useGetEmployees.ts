import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../Redux/hooks';
import { selectEmployees, setList } from '../Redux/employeesSlice';
import { getEmployees } from '../Services/employees';

const useGetEmployees = (pagination: String) => {
	const [error, setError] = useState(false);
	const currentEmployes = useAppSelector(selectEmployees);
	const dispath = useAppDispatch();

	const fetchEmployees = async () => {
		try {
			if (!currentEmployes.length) {
				const responseService = await getEmployees();
				const employees = responseService.data.data.employees;
				dispath(setList(employees));
			}
		} catch (err) {
			setError(true);
		}
	};

	useEffect(() => {
		setError(false);
		fetchEmployees();
	}, [pagination]);

	return { error };
};

export default useGetEmployees;
