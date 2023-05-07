// import React from 'react'
import usersImg from '../../assets/usersImg.svg';
import activeusersImg from '../../assets/activeUsersImg.svg';
import userswitsavingsImg from '../../assets/userswitsavingsImg.svg';
import userswitLoansImg from '../../assets/userswitLoansImg.svg';
import './usercard.scss';

const users = [
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
	return (
		<div className='card_container'>
			{users.map((user, index) => (
				<div className='card' key={index}>
					<img src={user.icon} alt='users_icon' className='user_icon' />
					<p className='user_name'>{user.name}</p>
					<p className='user_number'>{user.numbers}</p>
				</div>
			))}
		</div>
	);
};

export default UserCard;
