// import React from 'react'
import usersImg from '../../assets/usersImg.svg';
import activeusersImg from '../../assets/activeUsersImg.svg';
import userswitsavingsImg from '../../assets/userswitsavingsImg.svg';
import userswitLoansImg from '../../assets/userswitLoansImg.svg';

const users: any = [
	{
		name: 'USERS',
		numbers: '2,453',
		icon: usersImg,
	},
	{
		name: 'ACTIVE USERS',
		numbers: '2,453',
		icon: activeusersImg,
	},
	{
		name: 'USERS WITH LOANS',
		numbers: '12,453',
		icon: userswitLoansImg,
	},
	{
		name: 'USERS WITH SAVINGS',
		numbers: '102,453',
		icon: userswitsavingsImg,
	},
];

const UserCard = () => {
	return <div>UserCard</div>;
};

export default UserCard;
