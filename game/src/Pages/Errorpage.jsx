import React from 'react'
import error from '../assets/error.png'
import BackgroundError from '../assets/BackgroundError.png'

function Errorpage() {
  return (
    <>
    <div className='flex justify-center'>
    <img className='w-24 h-72 mt-8' src={BackgroundError} alt="" />
<div className='h-screen flex flex-col justify-center items-center gap-9'>
<h1 className='text-black font-serif text-5xl'>404</h1>
<img className='w-52 h-auto' src={error} alt="" />
<h1 className='text-2xl'>عذرًا, الصفحة غير موجودة</h1>
<button className='bg-[#8D3333] rounded-xl text-white font-serif w-52 h-10'>العودة للصفحة الرئيسية</button>


</div>
    </div>

    </>
  )
}

export default Errorpage ;