import React from 'react'

const Cards = () => {
  return (
    <>
    <div  className='w-full h-screen flex gap-5 px-14'>
        <div className="cardContainer h-[60vh] w-1/2">
            <div className="card relative w-full h-full rounded-xl  bg-[#004D43] ">
                <img className='w-32  absolute top-[42%] left-[38%]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-8 px-[13px] rounded-[50px] border-2 border-red-500  bottom-6'>&copy; 2019-2024</button>
            </div>
        </div>
        <div className="cardContainer w-1/2 flex gap-5 h-[60vh] ">
<div className="card relative w-1/2 h-full rounded-xl  bg-[#004d43]">
<img className='w-36  absolute top-[42%] left-[27%]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
<button className='absolute left-8  px-[13px] rounded-[50px] border-2 border-red-500  bottom-6'>RTING 5.0 ON CLUTCH</button></div>
<div className="card relative w-1/2 h-full rounded-xl bg-[#004d43]"><img className='w-32  absolute top-[42%] left-[30%]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
<button className='absolute left-8  px-[13px] rounded-[50px] border-2 border-red-500  bottom-6'>BUSINESS BOOTCAMP ALUMNI</button></div>
            
        </div>
    </div>
    </>
  )
}

export default Cards