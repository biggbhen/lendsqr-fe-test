import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './style.scss';
import { useNavigate } from 'react-router-dom';

// type Props = {}

const Form = () => {
	const [showPassword, setShowpassword] = React.useState(false);
	const navigate = useNavigate();

	// console.log(showPassword);

	return (
		<div className='formContainer'>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string().required('Field is required'),
					password: Yup.string()
						.min(5, 'Too Short!')
						.required('Password is required'),
				})}
				onSubmit={async (values, { setSubmitting }) => {
					navigate('/users');
					console.log(values);
					setSubmitting(false);
				}}>
				{({
					errors,
					handleBlur,
					handleChange,
					handleSubmit,
					// isSubmitting,
					touched,
					values,
					// setFieldValue,
				}) => (
					<form noValidate onSubmit={handleSubmit}>
						<h1>Welcome!</h1>
						<p>Enter details to Login.</p>
						<input
							name='email'
							placeholder='Email'
							onBlur={handleBlur}
							onChange={handleChange}
							type='email'
							value={values.email}
							className='email'
						/>
						<span style={{ color: 'red' }}>
							{errors.email && touched.email && errors.email}
						</span>
						<div className='passwordInput'>
							<p
								className='show'
								style={{ cursor: 'pointer' }}
								onClick={() => setShowpassword(!showPassword)}>
								show
							</p>
							<input
								name='password'
								placeholder='Password'
								onBlur={handleBlur}
								onChange={handleChange}
								type={`${showPassword === true ? 'text' : 'password'}`}
								value={values.password}
								className='password'
							/>
						</div>
						<span style={{ color: 'red' }}>
							{errors.password && touched.password && errors.password}
						</span>
						<div>
							<p className='forgotPassword'>FORGOT PASSWORD?</p>
							<button
								className='button'
								style={{
									backgroundColor:
										!values.email ||
										!values.password ||
										Boolean(errors.password && touched.password) ||
										Boolean(errors.email && touched.email)
											? 'grey'
											: '#39cdcc',
									cursor: 'pointer',
								}}
								disabled={
									!values.email ||
									!values.password ||
									Boolean(
										errors.password && touched.password && errors.password
									) ||
									Boolean(errors.email && touched.email && errors.email)
								}
								type='submit'>
								LOG IN
							</button>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Form;
