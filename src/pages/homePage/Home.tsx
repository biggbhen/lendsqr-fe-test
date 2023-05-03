// import React from 'react'
import './home.scss';
import logo from '../../assets/lendsqrLogo.svg';
import pic from '../../assets/login.svg';
import Form from '../../components/form/Form';

// interface Props {

// }

const Home = () => {
	return (
		<section className='container'>
			<section className='imageDescription'>
				<div className='logo'>
					<figure>
						<img src={logo} alt='logo' />
					</figure>
				</div>
				<div className='pic'>
					<figure>
						<img src={pic} alt='picture' />
					</figure>
				</div>
			</section>
			<section className='formSection'>
				<Form />
			</section>
		</section>
	);
};

export default Home;
