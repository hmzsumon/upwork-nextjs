import React, { useState, useEffect, useMemo } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import countryList from 'react-select-country-list';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const SignUp = () => {
	const initialValues = {
		userName: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
		email: '',
		country: '',
		city: '',
		state: '',
		zip: '',
	};

	const [formValues, setFormValues] = useState(initialValues);
	const [inputErrors, setInputErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const options = useMemo(() => countryList().getData(), []);

	const [phone, setPhone] = useState();

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

	useEffect(() => {
		console.log(inputErrors);
		if (Object.keys(inputErrors).length === 0 && isSubmit) {
			// console.log(formValues);
		}
	}, [inputErrors, isSubmit, formValues]);

	const validate = (values) => {
		const errors = {};
		if (!values.userName) {
			errors.userName = 'User Name is Required';
		}
		if (!values.password) {
			errors.password = 'Password is required';
		} else if (values.password.length < 6) {
			errors.password = 'Password must be at least 6 characters';
		}

		if (!values.confirmPassword) {
			errors.confirmPassword = 'Confirm Password is required';
		} else if (values.confirmPassword !== values.password) {
			errors.confirmPassword = 'Password does not match';
		}

		if (!values.firstName) {
			errors.firstName = 'First Name is required';
		}
		if (!values.lastName) {
			errors.lastName = 'Last Name is required';
		}

		if (!values.email) {
			errors.email = 'Email is required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address';
		}

		if (!phone) {
			errors.phone = 'Phone is required';
		}

		if (!values.country) {
			errors.country = 'Country is required';
		}

		if (!values.city) {
			errors.city = 'City is required';
		}

		if (!values.state) {
			errors.state = 'State is required';
		}

		if (!values.zip) {
			errors.zip = 'Zip is required';
		}

		return errors;
	};
	return (
		<div className='h-full px-4 py-10 md:px-20'>
			<div className=' flex space-x-2 text-[#0E75BB] text-xl md:text-3xl font-bold border-b border-[#0E75BB]'>
				<FaUserPlus />
				<h1>REGISTER AT UPWORK</h1>
			</div>
			<div className='p-4 mt-6 border md:p-10'>
				<form className='w-full ' onSubmit={handleSubmit}>
					{/* Start User name */}
					<div className='flex flex-wrap mb-6 -mx-3'>
						<div className='w-full px-3'>
							<label
								className={`block mb-2 ${
									inputErrors.userName && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-password'
							>
								User Name:
							</label>
							<input
								className={`block w-full md:w-1/2 px-4 py-3  leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500 ${
									inputErrors.userName && 'border-red-500'
								}`}
								id='grid-password'
								name='userName'
								type='text'
								value={formValues.userName}
								onChange={handleChange}
							/>
							<p className='text-xs italic text-red-500'>
								{inputErrors.userName}
							</p>
						</div>
					</div>
					{/* End User name */}

					{/* Start Password */}
					<div className='flex flex-wrap mb-6 -mx-3'>
						<div className='w-full px-3 mb-6 md:w-1/2 md:mb-0'>
							<label
								className={`block mb-2 ${
									inputErrors.password && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-first-name'
							>
								Password:
							</label>
							<input
								className={`appearance-none block w-full ${
									inputErrors.password && 'border-red-500'
								}  bg-gray-200 text-gray-700 border rounded  py-3 px-4 leading-tight  focus:outline-none focus:bg-white'
                            id='grid-first-name`}
								name='password'
								type='password'
								value={formValues.password}
								onChange={handleChange}
							/>

							<p className='text-xs italic text-red-500'>
								{inputErrors.password}
							</p>
						</div>
						<div className='w-full px-3 md:w-1/2'>
							<label
								className={`block mb-2 ${
									inputErrors.confirmPassword && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-last-name'
							>
								Confirm Password:
							</label>
							<input
								className={`appearance-none block w-full ${
									inputErrors.confirmPassword ? 'border-red-500' : null
								} rounded bg-gray-200 text-gray-700 border  py-3 px-4  leading-tight  focus:outline-none focus:bg-white'
                            id='grid-first-name`}
								name='confirmPassword'
								id='grid-last-name'
								type='password'
								placeholder='Doe'
								value={formValues.confirmPassword}
								onChange={handleChange}
							/>
							<p className='text-xs italic text-red-500'>
								{inputErrors.confirmPassword}
							</p>
						</div>
					</div>
					{/* End Password */}

					{/* Start Emil */}
					<div className='flex flex-wrap mb-6 -mx-3'>
						<div className='w-full px-3 mb-6 md:w-1/2 md:mb-0'>
							<label
								className={`block mb-2 ${
									inputErrors.email && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-first-name'
							>
								Email Address:
							</label>
							<input
								className={`appearance-none block w-full ${
									inputErrors.email && 'border-red-500'
								}  bg-gray-200 text-gray-700 border rounded  py-3 px-4  leading-tight  focus:outline-none focus:bg-white'
                            id='grid-first-name`}
								name='email'
								type='email'
								value={formValues.email}
								onChange={handleChange}
							/>

							<p className='text-xs italic text-red-500'>{inputErrors.email}</p>
						</div>
						<div className='w-full px-3 md:w-1/2'>
							<label
								className={`block mb-2 ${
									inputErrors.phone && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-last-name'
							>
								Phone:
							</label>

							<PhoneInput
								className={`phone-input ${inputErrors.phone && 'error'}`}
								international
								defaultCountry='US'
								value={phone}
								onChange={setPhone}
							/>

							<p className='text-xs italic text-red-500'>{inputErrors.phone}</p>
						</div>
					</div>
					{/* End Emil */}

					<div className='flex flex-wrap mb-6 -mx-3'>
						<div className='w-full px-3 mb-6 md:w-1/2 md:mb-0'>
							<label
								className={`block mb-2 ${
									inputErrors.firstName && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-first-name'
							>
								First Name
							</label>
							<input
								className={`appearance-none block w-full ${
									inputErrors.firstName && 'border-red-500'
								}  bg-gray-200 text-gray-700 border rounded  py-3 px-4  leading-tight  focus:outline-none focus:bg-white'
                            id='grid-first-name`}
								name='firstName'
								type='text'
								value={formValues.firstName}
								onChange={handleChange}
							/>

							<p className='text-xs italic text-red-500'>
								{inputErrors.firstName}
							</p>
						</div>
						<div className='w-full px-3 md:w-1/2'>
							<label
								className={`block mb-2 ${
									inputErrors.lastName && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-last-name'
							>
								Last Name
							</label>
							<input
								className={`appearance-none block w-full ${
									inputErrors.lastName ? 'border-red-500' : null
								} rounded bg-gray-200 text-gray-700 border  py-3 px-4  leading-tight  focus:outline-none focus:bg-white'
                            id='grid-first-name`}
								name='lastName'
								id='grid-last-name'
								type='text'
								value={formValues.lastName}
								onChange={handleChange}
							/>
							<p className='text-xs italic text-red-500'>
								{inputErrors.lastName}
							</p>
						</div>
					</div>

					{/* start Country */}
					<div className='flex flex-wrap mb-6 -mx-3'>
						<div className='w-full px-3'>
							<label
								className={`block mb-2 ${
									inputErrors.country && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-password'
							>
								Country:
							</label>
							<div className='relative w-full md:w-1/2'>
								<select
									className={`block w-full ${
										inputErrors.country && 'border-red-500'
									} px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500`}
									id='grid-state'
									name='country'
									value={formValues.country}
									onChange={handleChange}
								>
									<option>Select a Country</option>
									{options.map((option, index) => (
										<option key={index} value={option.label}>
											{option.label}
										</option>
									))}
								</select>
								<div className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none'>
									<svg
										className='w-4 h-4 fill-current'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
									>
										<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
									</svg>
								</div>
							</div>

							<p className='text-xs italic text-red-600'>
								{inputErrors.country}
							</p>
						</div>
					</div>
					<div className='flex flex-wrap mb-2 -mx-3'>
						<div className='w-full px-3 mb-6 md:w-1/3 md:mb-0'>
							<label
								className={`block mb-2 ${
									inputErrors.city && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-city'
							>
								City:
							</label>
							<input
								className={`block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded ${
									inputErrors.city && 'border-red-500'
								} appearance-none focus:outline-none focus:bg-white focus:border-gray-500`}
								id='grid-city'
								name='city'
								type='text'
								value={formValues.city}
								onChange={handleChange}
							/>
							<p className='text-xs italic text-red-500'>{inputErrors.city}</p>
						</div>

						<div className='w-full px-3 mb-6 md:w-1/3 md:mb-0'>
							<label
								className={`block mb-2 ${
									inputErrors.state && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-state'
							>
								State
							</label>
							<div className='relative'>
								<input
									className={`block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded ${
										inputErrors.state && 'border-red-500'
									} appearance-none focus:outline-none focus:bg-white focus:border-gray-500`}
									id='grid-city'
									type='text'
									name='state'
									value={formValues.state}
									onChange={handleChange}
								/>
								<p className='text-xs italic text-red-500'>
									{inputErrors.state}
								</p>
							</div>
						</div>
						<div className='w-full px-3 mb-6 md:w-1/3 md:mb-0'>
							<label
								className={`block mb-2 ${
									inputErrors.zip && 'text-red-500'
								} text-xs font-bold tracking-wide text-gray-700 uppercase`}
								htmlFor='grid-zip'
							>
								Zip
							</label>
							<input
								className={`block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded ${
									inputErrors.zip && 'border-red-500'
								} appearance-none focus:outline-none focus:bg-white focus:border-gray-500`}
								id='grid-zip'
								type='text'
								name='zip'
								value={formValues.zip}
								onChange={handleChange}
							/>
							<p className='text-xs italic text-red-500'>{inputErrors.zip}</p>
						</div>
					</div>
					<div className='px-4 py-3 text-right bg-gray-50 sm:px-6'>
						<button
							type='submit'
							className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;

{
	/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */
}
