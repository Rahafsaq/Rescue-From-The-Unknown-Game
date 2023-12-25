import React from 'react';
import character1 from '../assets/character-1.png';
import character2 from '../assets/character-2.png';
import character3 from '../assets/character-3.png';
import character5 from '../assets/character-5.png';
import character6 from '../assets/character-6.png';
import character7 from '../assets/character-7.png';
import charactersBackground from '../assets/characters-background.jpeg';
function Characters() {
	return (
		<div>
			{/* start div for title, input and selected character */}
			<div
				className=' bg-contain w-screen h-[95vh] bg-no-repeat bg-center bg-[#004B50]'
				style={{
					backgroundImage: `url(${charactersBackground})`,
				}}
			>
				<div className='flex flex-col justify-end h-[70vh] items-center '>
					<p className='mb-7 text-3xl text-white'>اختر الشخصية التي تريد انقاذها</p>
					<input
						type='text'
						placeholder='اكتب اسم للشخصية'
						className='text-center w-[20vw] placeholder:p-1 p-1 rounded-lg bg-[#ECEAEA]'
					/>
					<img src={character1} className=' w-[14vw] h-[45vh] mt-2' />
				</div>
			</div>
			{/* end div for title and input and selected character*/}
			{/* start div for all characters and start play button */}
			<div className='flex flex-col items-center w-[100vw] h-[40vh] gap-8 bg-[#004B50]'>
				{/* start All characters */}
				<div className='flex gap-10 mt-4'>
					<img src={character3} className='w-[10vw] h-[20vh]' />
					<img src={character2} className='w-[10vw] h-[20vh]' />
					<img src={character5} className='w-[10vw] h-[20vh]' />
					<img src={character6} className='w-[10vw] h-[20vh]' />
					<img src={character7} className='w-[10vw] h-[20vh]' />
				</div>
				{/* end All characters */}
				<div>
					<button className='w-[20vw] bg-[#8D3333] text-white p-2 rounded-lg'>ابدأ</button>
				</div>
			</div>
			{/* end div for all characters and start play button */}
		</div>
	);
}

export default Characters;
