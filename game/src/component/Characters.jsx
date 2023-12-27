import React from 'react';
import { Link } from 'react-router-dom';
import character1 from '../assets/character-1.png';
import character2 from '../assets/character-2.png';
import character3 from '../assets/character-3.png';
import character5 from '../assets/character-5.png';
import character6 from '../assets/character-6.png';
import character7 from '../assets/character-7.png';
import charactersBackground from '../assets/characters-background.jpeg';
function Characters() {
	return (
		<div className=' bg-[#004B50] h-screen'>
			<p className='p-5 text-center text-3xl font-semibold text-white max-sm:text-2xl max-sm:p-8'>
				اختر الشخصية التي تريد انقاذها
			</p>
			<div className='flex justify-center'>
				{' '}
				<input
					type='text'
					placeholder='اكتب اسم للشخصية'
					className='text-center w-[20vw] placeholder:p-1 p-1 rounded-lg bg-[#ECEAEA] max-sm:w-[45vw]'
				/>
			</div>

			<section className='flex flex-row-reverse max-sm:flex-col'>
				{/* start div for selected character */}
				<div
					className=' bg-contain w-[45vw] h-[65vh] bg-no-repeat bg-center bg-[#004B50] max-sm:h-[35vh] max-sm:w-[100vw]'
					style={{
						backgroundImage: `url(${charactersBackground})`,
					}}
				>
					<div className='flex flex-col justify-end h-[50vh] w-[45vw] items-center max-sm:h-[26vh] max-sm:w-[100vw]'>
						<img src={character1} className=' w-[14vw] h-[45vh] mt-2 max-sm:h-[35vh] max-sm:w-[20vw]' />
					</div>
				</div>
				{/* end div for selected character*/}

				{/* start All characters */}
				<div className='flex flex-col items-center w-[100vw]  gap-10 mt-10 max-sm:flex-col  max-sm:justify-center max-sm:gap-4 max-sm:mt-4'>
					{/* start characters in first line */}
					<div className='flex gap-10 max-sm:gap-8 '>
						{/* char1 */}
						<div className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-md w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center'>
							<img src={character3} className='w-[10vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
						{/* char2 */}
						<div className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-md w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center'>
							<img src={character1} className='w-[6vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
						{/* char3 */}
						<div className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-md w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center'>
							<img src={character2} className='w-[10vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
					</div>
					{/* end characters in first line */}

					<div className='flex gap-10 max-sm:gap-8 '>
						{/* char4 */}
						<div className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-md w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center'>
							<img src={character5} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
						{/* char5 */}
						<div className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-md w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center'>
							<img src={character6} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
						{/* char6 */}
						<div className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-md w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center'>
							<img src={character7} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
					</div>
				</div>
				{/* end All characters */}
			</section>
			<Link to={'/StagesGame'}>
				<div className='flex justify-center'>
					<button className='w-[20vw] bg-[#8D3333] text-white p-2 rounded-lg max-sm:mt-3 max-sm:w-[40vw]'>
						ابدأ
					</button>
				</div>
			</Link>
		</div>
	);
}

export default Characters;

{
	/* <p className='mb-7 text-3xl text-white'>اختر الشخصية التي تريد انقاذها</p>
<input
	type='text'
	placeholder='اكتب اسم للشخصية'
	className='text-center w-[20vw] placeholder:p-1 p-1 rounded-lg bg-[#ECEAEA]'
/> */
}

{
	/* <img src={character3} className='w-[10vw] h-[20vh]' />
						<img src={character1} className='w-[10vw] h-[20vh]' />
						<img src={character2} className='w-[10vw] h-[20vh]' />
						<img src={character5} className='w-[10vw] h-[20vh]' />
						<img src={character6} className='w-[10vw] h-[20vh]' />
						<img src={character7} className='w-[10vw] h-[20vh]' /> */
}

// bg-[rgba(208,100,80,0.5)]
