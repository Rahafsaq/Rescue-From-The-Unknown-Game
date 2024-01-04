

import React from 'react';
import Prsions from '../assets/images/prsions.png';
import LittleBoy from '../assets/images/littleBoy.png';
import NewBg from '../assets/images/newbg.png';
import { Link } from 'react-router-dom';

function Homepage() {

  return (
    <>
<div className=' bg-gray-200'>

  <div className='flex justify-evenly  h-screen  '
            style={{

              // backgroundImage: `url(${ui})`,
              backgroundImage: `url(${NewBg})`,
              backgroundColor: `black`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,}}>
  
  

<div className='flex flex-col gap-14 items-center justify-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:h-screen'>
<h1 className="text-white font-bold text-6xl font-primary  max-sm:text-2xl max-sm:flex mt-10">
                  الإنقاذ من المجهول
                </h1>
             <p className='font-secondary text-white text-center w-[33vw] max-sm:text-center max-sm:w-[66vw] max-sm:text-xl'>
             مشروعنا عبارة عن لعبة تفاعلية حيث يختار اللاعبون شخصية من
              الشخصيات المحددة ويبدأون اللعب في مغامرة قائمة على البحث عبر
                مواقع محددة
             </p>
                

<Link to="/Characters">
                
<button className="text-white w-52 h-10 text-lg font-secondary font-bold bg-[#8D3333] shadow-2xl  rounded-2xl p-1 ">
ابدأ
                                </button>
                  </Link>

</div>
              {/* Images */}
              <div className=" flex flex-col items-center  relative h-full ">
                <img
                  src={LittleBoy}
                  alt="LittleBoy"
                  className=" z-10 max-sm:hidden  "
                  width={250}
                />
                <img
                  src={Prsions}
                  alt="Earth"
                  className="absolute bottom-9 max-sm:hidden "
                  width={270}/>

                
              </div>

  </div>
              <footer className="h-auto absolute bottom-0  w-full bg-[#6482a1c0] p-2">
            <div className=" ">
              <h1 className="text-white font-secondary text-center text-xl leading-snug max-sm:text-xl  ">
              &#129293;صُنعت بكل بحب  </h1>
            </div>
          </footer>
</div>

    </>
  )
	return (
		<>
			<div className=' bg-gray-200'>
				<div
					className='flex justify-evenly  h-screen  '
					style={{
						// backgroundImage: `url(${ui})`,
						backgroundImage: `url(${NewBg})`,
						backgroundColor: `black`,
						backgroundSize: `cover`,
						backgroundPosition: `center`,
					}}
				>
					<div className='flex flex-col gap-14 items-center justify-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:h-screen '>
						<h1 className='text-white font-bold text-6xl font-primary  max-sm:text-2xl max-sm:flex mt-10   '>
							الإنقاذ من المجهول
						</h1>
						<p className='font-secondary text-white text text-right w-[33vw] max-sm:text-right max-sm:w-[66vw] max-sm:text-xl'>
							مشروعنا عبارة عن لعبة تفاعلية حيث يختار اللاعبون شخصية من الشخصيات المحددة ويبدأون اللعب في
							مغامرة قائمة على البحث عبر مواقع محددة
						</p>

						<Link to='/Characters'>
							<button className='text-white w-52 h-10 text-lg font-secondary font-bold bg-[#8D3333] shadow-2xl  rounded-2xl p-1 '>
								ابدأ
							</button>
						</Link>
					</div>
					{/* Images */}
					<div className=' flex flex-col items-center  relative h-full '>
						<img src={LittleBoy} alt='LittleBoy' className=' z-10 max-sm:hidden  ' width={250} />
						<img src={Prsions} alt='Earth' className='absolute bottom-9 max-sm:hidden ' width={270} />
					</div>
				</div>
				<footer className='h-auto absolute bottom-0  w-full bg-[#6482a1c0] p-2'>
					<div className=' '>
						<h1 className='text-white font-secondary text-center text-xl leading-snug max-sm:text-xl  '>
							&#129293;صُنعت بكل بحب{' '}
						</h1>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Homepage;
