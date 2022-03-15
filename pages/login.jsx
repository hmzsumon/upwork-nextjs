import React, { useState } from 'react';
import Link from 'next/link';

const Login = () => {
	const initialValues = {
		userName: '',
		password: '',
	};

	const [formValues, setFormValues] = useState(initialValues);
	const [inputErrors, setInputErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
		// console.log(formValues);
		// console.log(options);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('data', formValues);
		setInputErrors(validate(formValues));
		setIsSubmit(true);
		// console.log('phone', phone);
	};

	const validate = (values) => {
		const errors = {};
		if (!values.userName) {
			errors.userName = 'User Name is Required';
		}
		if (!values.password) {
			errors.password = 'Password is required';
		}

		if (!values.email) {
			errors.email = 'Email is required';
		}

		return errors;
	};
	return (
		<div className='flex items-center justify-center w-full h-screen px-4 '>
			<div className='w-full max-w-[500px] h-auto rounded border '>
				<div className='bg-[#0E75BB] w-full max-w-[500px] rounded-t py-6 px-4  '>
					<h1 className='text-3xl font-bold text-white'>Login</h1>
				</div>
				<form className='my-6' onSubmit={handleSubmit}>
					<div className='w-full px-3 space-y-4'>
						<input
							className={`block w-full ${
								inputErrors.userName &&
								'border-red-500 placeholder:text-red-500'
							}  px-4 py-3  leading-tight text-gray-700  border-gray-200 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500 `}
							id='grid-password'
							name='userName'
							type='text'
							placeholder='User Name'
							value={formValues.userName}
							onChange={handleChange}
						/>
						<p className='text-xs italic text-red-500'>
							{inputErrors.userName}
						</p>

						<input
							className={`block w-full ${
								inputErrors.password &&
								'border-red-500 placeholder:text-red-500'
							}  px-4 py-3  leading-tight text-gray-700  border-gray-200 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500 `}
							name='password'
							type='password'
							placeholder='Password'
							value={formValues.password}
							onChange={handleChange}
						/>
						<p className='text-xs italic text-red-500'>
							{inputErrors.password}
						</p>
					</div>
					<div className='flex items-center justify-between w-full px-3 my-6'>
						<button
							type='submit'
							className='inline-flex justify-center px-4 py-2 font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm text-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Login
						</button>
						<Link href='/signup'>
							<a className='text-xl font-medium text-blue-600 hover:underline hover:text-blue-700'>
								Not a member? Join Now
							</a>
						</Link>
					</div>
				</form>
				<div className='bg-gray-200 text-right w-fuu max-w-[500px] rounded-b border-t border-gray-300 py-3 px-4  '>
					<Link href='/'>
						<a className='text-lg font-semibold text-blue-500 hover:underline hover:text-blue-700'>
							Forgot Password?
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
