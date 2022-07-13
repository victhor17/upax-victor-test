import React from 'react';
import { ItemContainer, HeaderIcon, BottomIcon } from './EmployeItemStyles';
import moment from 'moment';

export interface Employe {
	name: String;
	last_name: String;
	id: Number;
	birthday: String;
}

type Props = {
	employe: Employe | any;
};

const EmployeeItem = (props: Props) => {
	return (
		<ItemContainer>
			<HeaderIcon>{`${props.employe.name} ${props.employe.last_name}`}</HeaderIcon>
			<BottomIcon>{moment(new Date(props.employe.birthday)).format('DD-MM-YY ')}</BottomIcon>
		</ItemContainer>
	);
};

export default EmployeeItem;
