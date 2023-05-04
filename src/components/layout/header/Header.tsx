// import React from 'react';
import './header.scss';
import logo from '../../../assets/lendsqrLogo.svg';
import searchicon from '../../../assets/search.svg';
import arrowdown from '../../../assets/arrowDown.svg';
import bell from '../../../assets/bell.svg';
import userIcon from '../../../assets/userIcon.svg';

// type Props = {}

const Header = () => {
	return (
		<header>
			<nav>
				<div className='leftSect'>
					<figure className='header_logo'>
						<img src={logo} alt='logo' />
					</figure>
					<div className='search'>
						<form>
							<input
								type='text'
								className='searchInput'
								placeholder='Search for anything'
							/>
							<button>
								<img src={searchicon} alt='search' />
							</button>
						</form>
					</div>
				</div>
				<ul>
					<li>
						<a href='#'>Docs</a>
					</li>
					<li>
						<img src={bell} alt='arrow-down' />
					</li>
					<li>
						<img src={userIcon} alt='arrow-down' className='userIcon' />
					</li>
					<li>
						Adedeji{' '}
						<img
							src={arrowdown}
							alt='arrow-down'
							style={{ marginLeft: '5px' }}
						/>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
