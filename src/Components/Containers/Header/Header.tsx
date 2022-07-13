import React from 'react';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';
import { TbLogout } from 'react-icons/tb';
import { ImFolderUpload } from 'react-icons/im';
import {BsFillPeopleFill} from 'react-icons/bs'
import {
	BaseurlPath,
	EmployeesurlPath,
	UploadurlPath,
	loggedFlag,
} from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { selectIsLogged, setIsLogged } from '../../../Redux/loginSlice';

const Header = () => {
	const isLogged = useAppSelector(selectIsLogged);
	const dispatch = useAppDispatch();

	const handleLogout = (flag: loggedFlag) => {
		dispatch(setIsLogged(flag));
	};
	return (
		<div className='header-container'>
			<div className='left'>
				{
					isLogged && (
						<Link
							className='left'
							onClick={() => {
								handleLogout(false);
							}}
							to={BaseurlPath}
						>
							<TbLogout size={'32px'} /> Cerrar sesión
						</Link>
					) /* ||
          (<Link className="left" to={BaseurlPath}><TbLogin size={'32px'} /> Iniciar Sesión</Link>) */
				}
			</div>
			<div className='right'>
				{isLogged && (
					<>
						<Link to={UploadurlPath}>
							<ImFolderUpload size={'32px'} />
						</Link>

						<Link to={EmployeesurlPath}>
							<BsFillPeopleFill size={'32px'} />
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
