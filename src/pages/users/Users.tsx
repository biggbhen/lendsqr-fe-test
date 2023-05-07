// import React from 'react'
import UserCard from './UserCard';
import UserTable from './UserTable';
import './users.scss';

// type Props = {}

const Users = () => {
	return (
		<div className='user_container'>
			<h1 className='topic'>users</h1>
			<div className='userTypes'>
				<UserCard />
			</div>
			<UserTable />
		</div>
	);
};

export default Users;
