import React from 'react'
import imageEr from '../assets/imageEr.png'
import BackgroundError from '../assets/BackgroundError.png'
import char1 from '../assets/images/char1.png'

function Errorpage() {
  return (
    <>
    <div className='flex justify-center '>
    <img className='w-24 h-72 mt-8 max-sm:hidden' src={BackgroundError} alt="" />
<div className='h-screen flex flex-col justify-center items-center gap-9'>
<h1 className='text-black font-serif text-7xl max-sm:text-5xl'>404</h1>
<img className='w-52 h-auto' src={char1} alt="" />
<h1 className='text-4xl'>عذرًا, الصفحة غير موجودة</h1>
<button className='bg-[#E9D6AD] rounded-xl text-black font-serif w-52 h-10'>العودة للصفحة الرئيسية</button>


</div>
    </div>

    </>
  )
}

export default Errorpage ;