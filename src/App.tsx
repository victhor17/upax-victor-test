import * as React from 'react';
import './App.css';
import Login from './Components/Containers/Login/Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Components/Containers/Header/Header';
import { useAppSelector } from './Redux/hooks';
import { selectIsLogged } from './Redux/loginSlice';
import { useLocation } from 'react-router-dom';
import Employees from './Components/Containers/Employees/Employees';
import UploadImages from './Components/Containers/UploadImages/UploadImages';
import { BaseurlPath, EmployeesurlPath, UploadurlPath } from './constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useValidateSession = () => {
	const location = useLocation();
	const isLogged = useAppSelector(selectIsLogged);
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!isLogged && location.pathname !== BaseurlPath) {
			navigate(BaseurlPath);
		}
	}, [isLogged, location, navigate]);
};

function App() {
	useValidateSession();
	return (
		<div>
			<Header />
			<ToastContainer />
			<Routes>
				<Route path={BaseurlPath} element={<Login />} />
				<Route path={EmployeesurlPath} element={<Employees />} />
				<Route path={UploadurlPath} element={<UploadImages/>}/>
			</Routes>
		</div>
	);
}

export default App;
