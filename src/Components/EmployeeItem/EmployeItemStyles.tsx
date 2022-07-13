import styled from 'styled-components';

export const ItemContainer = styled.div`
	min-height: 8rem;
	min-width: 16rem;
	margin: 0.8rem;
	background-color: #fff;
	box-shadow: 3px 4px 10px 0px rgba(92, 85, 85, 0.79);
	padding: 0.8rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const HeaderIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50%;
`;

export const BottomIcon = styled.div`
	display: flex;
	justify-content: space-around;
`;
