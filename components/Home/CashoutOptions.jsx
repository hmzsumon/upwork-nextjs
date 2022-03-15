import Image from 'next/image';
import React from 'react';

const CashoutOptions = () => {
	return (
		<section className='bg-[#055991] space-y-6 py-10 px-6 md:px-20'>
			<div>
				<h1 className='text-3xl font-bold text-center text-white'>
					ALL YOUR FAVORITE CASHOUT OPTIONS!
				</h1>
				<p className='text-center text-white '>
					Convert your points to cash, crypto currencies or digital giftcards.
				</p>
			</div>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
				<div className='flex items-center justify-center border'>
					<Image
						src='/paypal-white.svg'
						alt='logo'
						width={'100%'}
						height={'100%'}
					/>
				</div>
				<div className='flex items-center justify-center border '>
					<Image
						src='/paypal-white.svg'
						alt='logo'
						width={'100%'}
						height={'100%'}
					/>
				</div>
				<div className='flex items-center justify-center border '>
					<Image
						src='/paypal-white.svg'
						alt='logo'
						width={'100%'}
						height={'100%'}
					/>
				</div>
				<div className='flex items-center justify-center border '>
					<Image
						src='/paypal-white.svg'
						alt='logo'
						width={'100%'}
						height={'100%'}
					/>
				</div>
			</div>
		</section>
	);
};

export default CashoutOptions;
