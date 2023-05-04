// import React from 'react'
import './sidebar.scss';
import briefcase from '../../../assets/briefcase.svg';
import angledown from '../../../assets/angleDown.svg';
import home from '../../../assets/home.svg';
import userIcon from '../../../assets/user-friends.svg';
import loanIcon from '../../../assets/loans.svg';
import loanreqIcon from '../../../assets/loanrequests.svg';
import userFriendsIcon from '../../../assets/guarantors.svg';
import decisionIcon from '../../../assets/decisions.svg';
import savingsIcon from '../../../assets/savings.svg';
import whitelistIcon from '../../../assets/whitelist.svg';
import karmaIcon from '../../../assets/karma.svg';
import bankIcon from '../../../assets/bank.svg';
import coinsIcon from '../../../assets/coins.svg';
import transIcon from '../../../assets/transaction.svg';
import serviceIcon from '../../../assets/services.svg';
import serviceAccIcon from '../../../assets/scroll.svg';
import scrollIcon from '../../../assets/karma.svg';
import chartbarIcon from '../../../assets/chartbar.svg';
import sliderIcon from '../../../assets/sliders.svg';
import badgeIcon from '../../../assets/badge.svg';
import clipboardIcon from '../../../assets/clipboard.svg';
import tireIcon from '../../../assets/tire.svg';
import logIcon from '../../../assets/sign-out.svg';
// type Props = {}
const customersList = [
	{ name: 'Users', icon: userIcon },
	{ name: 'Guarantors', icon: userFriendsIcon },
	{ name: 'Loans', icon: loanIcon },
	{ name: 'Decision Models', icon: decisionIcon },
	{ name: 'Savings', icon: savingsIcon },
	{ name: 'Loan Requests', icon: loanreqIcon },
	{ name: 'Whitelist', icon: whitelistIcon },
	{ name: 'Karma', icon: karmaIcon },
];
const businessList = [
	{ name: 'Organization', icon: briefcase },
	{ name: 'Loan Products', icon: loanreqIcon },
	{ name: 'Savings Products', icon: bankIcon },
	{ name: 'Fees and Charges', icon: coinsIcon },
	{ name: 'Transactions', icon: transIcon },
	{ name: 'Services', icon: serviceIcon },
	{ name: 'Service Account', icon: serviceAccIcon },
	{ name: 'Settlements', icon: scrollIcon },
	{ name: 'Reports', icon: chartbarIcon },
];
const settingsList = [
	{ name: 'Preferrences', icon: sliderIcon },
	{ name: 'Fees and Pricing', icon: badgeIcon },
	{ name: 'Audit Logs', icon: clipboardIcon },
	{ name: 'Systems Messages', icon: tireIcon },
];

const Sidebar = () => {
	return (
		<div className='sidebar_container'>
			<ul className='personal'>
				<li>
					<div className='briefcase'>
						<img src={briefcase} alt='briefcase' />
					</div>
					<div>Switch Organization</div>
					<div className='angledown'>
						<img src={angledown} alt='angle down' />
					</div>
				</li>
				<li>
					<div className='homeIcon'>
						<img src={home} alt='home' />
					</div>
					<div>Dashboard</div>
				</li>
			</ul>
			<h2>CUSTOMERS</h2>
			<ul className='customers_section'>
				{customersList.map((item, index) => (
					<li key={index}>
						<div className='icon'>
							<img src={item.icon} alt='icon' />
						</div>
						<div>{item.name}</div>
					</li>
				))}
			</ul>
			<h2>BUSINESSES</h2>
			<ul className='customers_section'>
				{businessList.map((item, index) => (
					<li key={index}>
						<div className='icon'>
							<img src={item.icon} alt='icon' />
						</div>
						<div>{item.name}</div>
					</li>
				))}
			</ul>
			<h2>SETTINGS</h2>
			<ul className='customers_section'>
				{settingsList.map((item, index) => (
					<li key={index}>
						<div className='icon'>
							<img src={item.icon} alt='icon' />
						</div>
						<div>{item.name}</div>
					</li>
				))}
			</ul>

			<ul className='logout'>
				<li>
					<div className='icon'>
						<img src={logIcon} alt='icon' />
					</div>
					<div>Logout</div>
				</li>
				<li style={{ fontSize: '0.9rem', marginTop: '1rem' }}>v1.2.0</li>
			</ul>
		</div>
	);
};

export default Sidebar;
