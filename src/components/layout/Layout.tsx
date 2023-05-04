// import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

// type Props = {}

const Layout = () => {
	return (
		<div className='layout'>
			<Header />
			<Sidebar />
			<Outlet />
		</div>
	);
};

export default Layout;
