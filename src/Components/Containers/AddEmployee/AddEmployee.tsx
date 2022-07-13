import React from 'react';
import { FormContainer, Form, FromTop } from './AddEmployeeStyles';
import { ImCancelCircle } from 'react-icons/im';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { postEmployee } from '../../../Services/employees';
import moment from 'moment';

type Props = {
	canShowModal: Boolean;
	setterCanShowModal: Function;
	hasAdded: Function;
};

type FormData = {
	name: String;
	last_name: String;
	birthday: string;
};

const AddEmployee = (props: Props) => {
	const { canShowModal, setterCanShowModal, hasAdded } = props;

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = handleSubmit(async (data) => {
		try {
			const payload = {
				...data,
				birthday: moment(new Date(data.birthday)).format('YYYY/MM/DD'),
			};
			const response = await postEmployee(payload);
      // response could be used for something
			hasAdded((state: Boolean) => !state);
			toast.success('Employee Agregado correctamente');
			setterCanShowModal(false);
			reset();
		} catch (error) {
			toast.error('No se pudo agregar el employee');
		}
		console.log(data);
	});

	return (
		canShowModal && (
			<FormContainer>
				<Form onSubmit={onSubmit}>
					<FromTop>
						<ImCancelCircle
							onClick={() => {
								setterCanShowModal(false);
							}}
						/>
					</FromTop>
					<TextField
						error={Boolean(errors.name)}
						margin='normal'
						{...register('name', { required: true, maxLength: 30 })}
						variant='outlined'
						label='Nombre(s)'
						helperText={errors.name ? 'Campo requerido' : ''}
					/>

					<TextField
						error={Boolean(errors.last_name)}
						margin='normal'
						{...register('last_name', { required: true, maxLength: 30 })}
						variant='outlined'
						label='Apellidos'
						helperText={errors.last_name ? 'Campo requerido' : ''}
					/>

					<TextField
						error={Boolean(errors.birthday)}
						margin='normal'
						{...register('birthday', { required: true })}
						type='date'
						label='Fecha de nacimiento'
						helperText={errors.birthday ? 'Campo requerido' : ''}
					/>
					<Button variant='contained' onClick={onSubmit}>
						Agregar
					</Button>
				</Form>
			</FormContainer>
		)
	);
};

export default AddEmployee;
