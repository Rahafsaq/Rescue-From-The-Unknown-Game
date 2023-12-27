import React from 'react';
// import imageBack from '../assets/backgroundMan.jpeg';
import erth from "../assets/erth.png"
import searching from '../assets/searching.png'
import medal from '../assets/medal.png'
import line from '../assets/line.svg'
import Frame9 from '../assets/Frame9.png'

function Homepage() {
  return (

    <>
    <div
      className="bg-no-repeat p-10 bg-cover  overflow-hidden  "
      style={{
        backgroundImage: `url(${Frame9})`,
        backgroundPosition: `center`,
        
        }} >

<div className='flex flex-col items-center justify-center h-screen'>
  <div className='rounded-xl w-[40vw] h-[30vh]'>
    <div className='flex flex-col gap-8 justify-center items-center h-full'>
      <h1 className='text-black text-5xl font-thin '>الشخصيةالمسجونة</h1>
      <button className='bg-[#8D3333] rounded-xl text-white font-bold w-48 h-10'>ابدأ</button>
    </div>
  </div>
</div>
</div>

<div className='bg-[#5B776D]  '>
  <h1 className='text-5xl font-bold text-white text-center p-20 max-sm:text-4xl'>طريقة اللعبة</h1>


  <div className='flex items-center justify-center w-4/5 m-auto  max-sm:flex max-sm:flex-col-reverse '>
      <div className='flex justify-around items-center w-full'>
   
    <h1 className='text-white font-serif w-[50vw] mt-12 text-4xl leading-snug text-right max-sm:text-xl max-sm:w-96 max-sm:m-5'>مشروعنا عبارة عن لعبة تفاعلية حيث يختار اللاعبون شخصية من الشخصيات المحددة  
ويبدأون اللعب في مغامرة قائمة على البحث عبر مواقع محددة 
 </h1>
 </div>
<div className=' '>

<img className='ml-10 max-sm:w-64 max-sm:h-auto ' src={erth} alt="" width={500}/>
</div>
   
  </div>




  <div className='flex items-center justify-center w-4/5 m-auto max-sm:flex max-sm:flex-col '>

  <div>
<img className='max-sm:w-44 max-sm:h-auto' src={searching} alt="" width={500}/>
</div>
      <div className='flex justify-around items-center w-full'>
    <h1 className='text-white font-serif w-[50vw] mt-12 text-4xl leading-snug text-right max-sm:text-xl max-sm:w-80 max-sm:m-5'> 
    سيتم توزيع كل نسخة من نسخ الشخصية على مواقع عشوائية على خرائط Google ويحتاج اللاعب إلى بدء البحث عن نسخ الشخصيات باستخدام التجوّل الافتراضي في خرائط Google  
 </h1>
    </div>
  </div>


  <div className='flex items-center justify-center w-4/5 m-auto max-sm:flex max-sm:flex-col-reverse  '>
      <div className='flex justify-around items-center w-full'>
    <h1 className='text-white font-serif w-[50vw] mt-12 text-4xl leading-snug text-right max-sm:text-xl max-sm:w-80 max-sm:m-5'> 
    في كل موقع سيواجه اللاعبون تحديات متعددة يجب عليهم حلها لتحرير نسخ شخصياتهم والفوز باللعبة
 </h1>
    </div>

    <div>
<img className='max-sm:w-44 max-sm:h-auto' src={medal} alt="" width={500}/>
</div>
  </div>





<div>
    <img src={line} alt=""/>
</div>

<div className='h-auto w-full bg-[#5B776D] ] p-6 '>
    <h1 className='text-white text-center text-2xl leading-snug max-sm:text-xl '>©2023 Copyright: ImprisonedCharacters.com</h1>
</div>
</div>






</>
  );
}

export default Homepage;