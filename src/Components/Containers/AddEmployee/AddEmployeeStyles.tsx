import styled from 'styled-components';

export const FormContainer = styled.div`
	height: 100vh;
	width: 96%;
	background: #dfdfdf;
	position: fixed;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 610px) {
		width: 90%;
	}
`;

export const Form = styled.form`
	width: 30rem;
	height: 28rem;
	@media (max-width: 610px) {
		width: 90%;
		height: 80%;
	}
	display: flex;
	flex-flow: column;
	background-color: #fff;
  padding: 1rem;
`;

export const FromTop = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 1rem;
`;
