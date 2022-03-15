import Link from 'next/link';
import React from 'react';

const Banner = () => {
	return (
		<section className='banner'>
			<div className='h-[25rem] space-y-20 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center'>
				<div className='space-y-4'>
					<h1 className='text-3xl md:text-5xl font-medium text-white text-center'>
						EARN MONEY EVERY TIME YOU GO ONLINE!
					</h1>
					<p className='text-md uppercase text-white text-center'>
						Earn GPT points for simple tasks such as completing surveys, playing
						games, watching videos and more!
					</p>
				</div>
				<Link href='/signup'>
					<a className='py-4 px-8 bg-[#62A642] text-white text-xl uppercase rounded '>
						Join Free Today
					</a>
				</Link>
			</div>
		</section>
	);
};

export default Banner;
