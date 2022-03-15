import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<section className='pt-[65px]'>{children}</section>
			<Footer />
		</div>
	);
};

export default Layout;
