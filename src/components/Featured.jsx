import { motion } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {
  const [hoverOne, setHoverOne] = useState(false)
  const [hoverTwo, setHoverTwo] = useState(false)
  return (
    <div  className="w-full py-24 ">
      <div className="w-full px-12 border-b-2 pb-12 border-zinc-600">
        <h1 className="text-5xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-12">
        <div className="cards flex  mt-20 gap-4 w-full">
          <div onMouseEnter={()=>setHoverOne(true)} onMouseLeave={()=>setHoverOne(false)} className="cardContainer  relative  w-1/2  h-[85vh]">
          <h1 className="left-full flex overflow-hidden text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 top-1/2 absolute z-[9] text-8xl font-semibold tracking-tighter  leading-none">
          {"FADE".split("").map((item , index)=>{
           return <motion.span initial={{y:"100%"}} animate={hoverOne ? {y:"0"} : {y:"100%"}} transition={{ease:[0.68, -0.6, 0.32, 1.6], duration: index * 0.2}} className="inline-block" key={index}>{item}</motion.span>
          })}
          </h1>
            <div className="card w-full rounded-xl h-full overflow-hidden bg-emerald-500 ">
            
              <img className=" w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div>
          <div onMouseEnter={()=>setHoverTwo(true)} onMouseLeave={()=>setHoverTwo(false)} className="cardContainer  relative  w-1/2  h-[85vh]">
          <h1 className="left-0 flex overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2 absolute z-[9] text-8xl font-semibold tracking-tighter text-[#CDEA68]  leading-none"> {"VISE".split("").map((item , index)=>{
           return <motion.span initial={{y:"100%"}} animate={hoverTwo ? {y:"0"} : {y:"100%"}} transition={{ease:[0.68, -0.6, 0.32, 1.6], duration: index * 0.2}} className="inline-block" key={index}>{item}</motion.span>
          })}</h1>
            <div className="card w-full rounded-xl h-full overflow-hidden bg-emerald-900 ">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
// <div className='flex w-full flex-col'>
// <p className='flex  items-center '><p className='w-2 h-2 bg-zinc-100 rounded-full '></p>FYDE</p>
// <div className="card w- bg-emerald-500 h-[80vh]">
// </div>
// </div>
// <div className='flex w-full flex-col'>
// <p className='flex  items-center '><p className='w-2 h-2 bg-zinc-100 rounded-full '></p>FYDE</p>
// <div className="card w-full bg-emerald-500 h-[80vh]">
// </div>
// </div>
