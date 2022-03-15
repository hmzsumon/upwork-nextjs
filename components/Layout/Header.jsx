import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const menuContent = [
	{
		id: 1,
		title: 'Home',
		link: '/',
	},
	{
		id: 2,
		title: 'About',
		link: '/about',
	},
	{
		id: 3,
		title: 'Contact',
		link: '/contact',
	},
	{
		id: 4,
		title: 'Lottery',
		link: '/lottery',
	},
	{
		id: 5,
		title: 'Coin',
		link: '/coin',
	},
	{
		id: 6,
		title: 'Task',
		link: '/task',
	},
];

const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<header className='relative'>
			<nav className='px-4 fixed w-full py-2 bg-[#0E75BB] flex items-center justify-between '>
				<Image src='/up.png' alt='Up' width={200} height={50} />
				<ul className='hidden space-x-4 text-lg font-medium text-white uppercase md:flex'>
					{menuContent.map((item) => (
						<li key={item.id}>
							<Link href={item.link}>
								<a>{item.title}</a>
							</Link>
						</li>
					))}
				</ul>
				<div className='space-x-3 text-lg font-medium uppercase '>
					<Link href='/signup'>
						<a className='bg-[#62A642] hidden md:inline-block text-white px-4 py-1 rounded'>
							Join
						</a>
					</Link>
					<Link href='/login'>
						<a className='px-4 py-1 text-gray-800 bg-white rounded'>Login</a>
					</Link>
				</div>
				<div className='md:hidden'>
					<button className='toggler-menu' onClick={handleClick}>
						<div className={click ? 'active' : ''}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>
				</div>
			</nav>
			{/* Mobile Menu */}

			<div
				className={`bg-[#043a5e]  h-[1000px] w-full absolute  mobile-menu ${
					click ? 'is-active' : null
				}`}
			>
				<ul className='px-4 pt-6 text-white'>
					{menuContent.map((item) => (
						<li key={item.id} className='py-2 text-xl font-bold'>
							<Link href={item.link}>
								<a>{item.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
