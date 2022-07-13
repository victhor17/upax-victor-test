import React, { useEffect, useState } from 'react';
import {
	EmployeesContainer,
	PaginationContainer,
	EmployeesList,
	AddEmploye,
	AddEmployeeLink,
} from './EmployeesStyles';
import useGetEmployees from '../../../hooks/useGetEmployees';
import { toast } from 'react-toastify';
import { Pagination } from '@mui/material';
import EmployeeItem from '../../EmployeeItem/EmployeItem';
import { useAppSelector } from '../../../Redux/hooks';
import { selectEmployees } from '../../../Redux/employeesSlice';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import AddEmployeeContainer from '../AddEmployee/AddEmployee';
import { Employe } from '../../EmployeeItem/EmployeItem';

const Employees = () => {
	const [next, setNext] = useState('');
	const employeesList = useAppSelector(selectEmployees);
	const [canShowModal, setCanShowModal] = useState(false);
	const [hasAdded, setHasAdded] = useState('');

	const [currentpage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [currentList, setCurrentList] = useState([]);

	const onChangePage = (event: any, value: number) => {
		setCurrentPage(value);
	}

	useEffect(() => {
		setCurrentList((): any => {
			if (currentpage === 1) return employeesList.slice(0, 10)
			else return employeesList.slice((currentpage -1)*10, currentpage*10)
		})
	}, [currentpage, employeesList])

	useEffect(() => {
		if (employeesList.length) {
			setTotalPages(() => {
				let total = parseInt(`${employeesList.length / 10}`);
				total += employeesList.length % 10 ? 1 : 0;
				return total;
			});
		}
	}, [employeesList]);

	useEffect(() => {
		if (hasAdded) {
			setNext(String(hasAdded));
		}
	}, [hasAdded]);

	const { error } = useGetEmployees(next);

	if (error) {
		toast.error('No se pudo cargar los employees');
	}

	return (
		<EmployeesContainer>
			<AddEmployeeContainer
				hasAdded={setHasAdded}
				setterCanShowModal={setCanShowModal}
				canShowModal={canShowModal}
			/>
			<AddEmploye>
				<AddEmployeeLink
					onClick={() => {
						setCanShowModal(true);
					}}
				>
					Agregar Employee
					<BsFillPersonPlusFill size={'28px'} />
				</AddEmployeeLink>
			</AddEmploye>
			<EmployeesList>
				{currentList?.map((item: Employe | any, index) => {
					return (
						<EmployeeItem
							key={`${index}${item.name}`}
							employe={item}
						></EmployeeItem>
					);
				})}
			</EmployeesList>
			<PaginationContainer>
				<Pagination count={totalPages} page={currentpage} onChange={onChangePage}/>
			</PaginationContainer>
		</EmployeesContainer>
	);
};

export default Employees;