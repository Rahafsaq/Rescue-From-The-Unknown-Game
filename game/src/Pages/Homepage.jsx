import React from 'react';
import imageBack from '../assets/backgroundMan.jpeg';
import erth from "../assets/erth.png"
import searching from '../assets/searching.png'
import medal from '../assets/medal.png'
import line from '../assets/line.svg'
function Homepage() {
  return (

    <>
    <div
      className="bg-no-repeat p-10 h-screen"
      style={{
        backgroundImage: `url(${imageBack})`,
        height: '',
        width: '%',
        backgroundSize: 'cover',}} >

            <div className='flex justify-end '>
            <button className='border-2 border-black text-lg rounded-lg p-2 font-semibold bg-[#b5b4b42a] '>Sing-Up</button>

            </div>
<div className='flex flex-col items-center justify-center h-screen'>
  <div className='rounded-xl w-[40vw] h-[30vh] bg-[#d9d9d960]'>
    <div className='flex flex-col gap-8 justify-center items-center h-full'>
      <h1 className='text-black text-3xl font-bold '>العنوان</h1>
      <button className='bg-[#8D3333] rounded-xl text-white font-bold w-32 h-10'>ابدأ</button>
    </div>
  </div>
</div>
</div>

<div className='bg-[#5B776D]  '>
  <h1 className='text-5xl font-bold text-white text-center p-20'>طريقة اللعبة</h1>


  <div className='flex items-center justify-center w-[70vw] m-auto '>
    <div className='flex justify-between '>
    <h1 className='text-white font-serif text-center mt-12' >مشروعنا عبارة عن لعبة تفاعلية حيث يختار اللاعبون شخصية من الشخصيات المحددة  
   <br /> ويبدأون اللعب في مغامرة قائمة على البحث عبر مواقع محددة</h1>

    <img className='w-auto h-52' src={erth} alt="" />
    </div>
  </div>



  <div className='flex items-center justify-center  w-[70vw] m-auto  '>
    <div className='flex justify-between gap-7'>
    <img className='w-auto h-52' src={searching} alt="" />

    <h1 className='text-white font-serif text-center mt-12 '>سيتم توزيع كل نسخة من نسخ الشخصية على مواقع عشوائية على 
    خرائط Google <br /> ويحتاج اللاعب إلى بدء البحث عن نسخ الشخصيات باستخدام التجوّل الافتراضي في خرائط Google.</h1>
    </div>
</div>


<div className='flex items-center justify-center  w-[70vw] m-auto  '>
    <div className='flex justify-between gap-7 '>

    <h1 className='text-white font-serif text-center mt-12 '> في كل موقع سيواجه اللاعبون تحديات متعددة يجب عليهم حلها لتحرير نسخ شخصياتهم والفوز باللعبة.</h1>  

    <img className='w-auto h-52' src={medal} alt="" />
    </div>
</div>

<div>
    <img src={line} alt="" />
</div>

<div className='h-auto w-full bg-[#5B776D] ] p-6 '>
    <h1 className='text-white text-center text-xl '>©  2023 Copyright: ImprisonedCharacters.com</h1>
</div>
</div>






</>
  );
}

export default Homepage;