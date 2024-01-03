import React from 'react';
import { Link } from 'react-router-dom';
import BGImgae from '../assets/images/Summer-Map-Game.png';
import LittleBoy from '../assets/images/littleBoy.png';
import erth from '../assets/erth.png';
// import MainBG1 from "../assets/images/mainBG1.png";
import MainBG2 from '../assets/images/mainBG2.png';
import Prsions from '../assets/images/prsions.png';
import Map from '../assets/images/green-map_1.png';
import '../App.css';
import line from '../assets/line.svg';
import medal from '../assets/medal.png';
import searching from '../assets/searching.png';
function Homepage() {
	return (
		<>
			<div className='overflow-hidden'>
				<div
					className='relative bg-cover bg-no-repeat p-12 text-center h-[90vh]  max-sm:overflow-auto max-md:overflow-auto '
					style={{
						backgroundImage: `url(${MainBG2})`,
						backgroundColor: `black`,
						backgroundSize: `cover`,
						backgroundPosition: `center`,
					}}
				>
					<div
						className=' absolute bottom-0 left-0 right-0 top-0 h-full w-full  bg-fixed max-sm:overflow-auto max-md:overflow-auto'
						// style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }}
					>
						{/* Content Hero */}
						<div className='flex justify-around items-center h-[100vh]'>
							{/* Title */}
							<div className=' text-white flex flex-col gap-y-11 items-center'>
								<h2 className='text-white font-bold text-6xl font-primary'>الإنقاذ من المجهول</h2>
								<Link to='/Characters'>
									<button className='text-white w-52 h-10 text-lg font-secondary font-bold bg-[#8D3333]  shadow-2xl  rounded-2xl p-1'>
										ابدأ
									</button>
								</Link>
							</div>
							{/* Images */}
							<div className=' flex flex-col items-center  relative h-full '>
								<img src={LittleBoy} alt='LittleBoy' className=' z-10' width={200} />
								<img src={Prsions} alt='Earth' className='absolute bottom-9' width={270} />
							</div>
						</div>
					</div>
				</div>

				<footer className='h-auto  w-full bg-[#687687ff]  p-4'>
					<div className=' '>
						<h1 className='text-white text-center text-3xl leading-snug max-sm:text-xl  '>
							&#129293;صُنعت بكل بحب{' '}
						</h1>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Homepage;
