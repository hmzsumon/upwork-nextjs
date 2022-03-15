import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Feature = ({ title, img, description, link, linkText }) => {
	return (
		<div className='flex flex-col items-center pt-4 space-y-6 border'>
			<h1 className='text-2xl text-[#74BB53] font-medium'>{title}</h1>

			<div>
				<Image
					src={img}
					alt='survey'
					width={160}
					height={160}
					className='mx-auto rounded-full -z-20'
				/>
			</div>

			<p>{description}</p>
			<Link href={link}>
				<a className='bg-[#6bb748] text-center w-full px-8 py-2 text-xl font-medium text-white'>
					{linkText}
				</a>
			</Link>
		</div>
	);
};

export default Feature;
