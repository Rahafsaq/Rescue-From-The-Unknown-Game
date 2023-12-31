import React from 'react';
import { Link } from 'react-router-dom';
import char1 from '../assets/images/char1.png';

function Errorpage() {
	return (
		<>
			<div className='flex justify-center items-center w-[100vw]'>
				{/* <img className='w-24 h-72 mt-8 max-sm:hidden' src={BackgroundError} alt='' /> */}
				<div className='h-screen flex flex-col justify-center items-center gap-9 max-sm:flex max-sm:gap-1'>
					<h1 className='text-black font-serif text-7xl max-sm:text-5xl max-sm:m-0'>404</h1>
					<img className='w-[10vw] ' src={char1} alt='' />
					<h1 className='text-4xl max-sm:text-lg'>عذرًا, الصفحة غير موجودة</h1>
					<Link to='/'>
						<button className='bg-[#E9D6AD] rounded-xl text-black font-serif w-52 h-10'>
							العودة للصفحة الرئيسية
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Errorpage;
