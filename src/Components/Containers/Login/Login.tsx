import React from 'react';
import { LoginContainer, FormContainer, UserInput } from './LoginStyles';
import { BsPersonCircle } from 'react-icons/bs';
import { BiLockAlt } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useAppDispatch } from '../../../Redux/hooks';
import { setIsLogged } from '../../../Redux/loginSlice';
import { useNavigate } from 'react-router-dom';
import { EmployeesurlPath } from '../../../constants';

type FormData = {
	user: String;
	password: String;
};

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const unSubmit = handleSubmit((data) => {
		// some login service request here
		navigate(EmployeesurlPath);
		dispatch(setIsLogged(true));
	});

	const preventPaste = (event: any) => {
		event.preventDefault();
	};

	return (
		<>
			<LoginContainer>
				<FormContainer>
					<form onSubmit={unSubmit}>
						<UserInput>
							<BsPersonCircle size={'28px'} />
							<TextField
								error={Boolean(errors.user)}
								{...register('user', { required: true })}
								variant='outlined'
								helperText={errors.user ? 'Campo requerido' : ''}
								label='Usuario o correo'
								onPaste={preventPaste}
							/>
						</UserInput>
						<UserInput>
							<BiLockAlt size={'28px'} />
							<TextField
								error={Boolean(errors.password)}
								type={'password'}
								{...register('password', { required: true })}
								variant='outlined'
								helperText={errors.password ? 'Campo requerido' : ''}
								label='Contraseña'
								onPaste={preventPaste}
							/>
						</UserInput>
						<UserInput>
							<Button variant='contained' onClick={unSubmit}>
								Iniciar Sesión
							</Button>
						</UserInput>
					</form>
				</FormContainer>
			</LoginContainer>
		</>
	);
};

export default Login;
