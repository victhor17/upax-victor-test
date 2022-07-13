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
import { TextField } from '@mui/material';

const filterEmployees = (
	filterValue: string,
	array: Employe[]
) => {
	return array.filter((item: Employe) => {
		return (
			item.name.includes(filterValue) || item.last_name.includes(filterValue)
		);
	});
};

const list: Employe[] = [];

const Employees = () => {
	const [next, setNext] = useState('');
	const { error } = useGetEmployees(next);
	const employeesList = useAppSelector(selectEmployees);
	const [canShowModal, setCanShowModal] = useState(false);
	const [hasAdded, setHasAdded] = useState('');

	const [currentpage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [currentList, setCurrentList] = useState(list);
	const [filterText, setFilterText] = useState('');

	const onChangePage = (event: any, value: number) => {
		setCurrentPage(value);
	};

	useEffect(() => {if (!filterText.length) {

		setCurrentList((): any => {
			if (currentpage === 1) return employeesList.slice(0, 10);
			else return employeesList.slice((currentpage - 1) * 10, currentpage * 10);
		});
	}
	}, [currentpage, employeesList, filterText]);

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
		setNext(String(hasAdded));
		console.log('wii');
	}, [hasAdded]);

	if (error) {
		toast.error('No se pudo cargar los employees');
	}

	const handleSearch = (event: any) => {
		console.log(event.target.value);
		if (event.target.value) {
			setCurrentList(filterEmployees(event.target.value, employeesList));
		}
		setFilterText(event.target.value);
	};

	return (
		<EmployeesContainer>
			<AddEmployeeContainer
				hasAdded={setHasAdded}
				setterCanShowModal={setCanShowModal}
				canShowModal={canShowModal}
			/>
			<AddEmploye>
				<TextField onChange={handleSearch} />
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
				<Pagination
					count={totalPages}
					page={currentpage}
					onChange={onChangePage}
				/>
			</PaginationContainer>
		</EmployeesContainer>
	);
};

export default Employees;
