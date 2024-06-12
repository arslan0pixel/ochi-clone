import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong} from 'react-icons/fa6'
const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen pt-1">
      <div className="textStructure  rounded-md  mt-32 px-12  ">
        {["we create","eye-opening", "presentations"].map((item, index)=>(
            <div className="masker ">   
            <div className="flex items-center w-fit">
            {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className="w-[9vw] rounded-md mr-[10px] h-[4.6vw] relative mt-[12px] ">
<img className="w-full h-full bg-cover bg-center " src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

            </motion.div>)}
           <h1 className=" uppercase h-full text-8xl font-medium  leading-[6vw] tracking-tighter ">{item}</h1>
           </div>
        </div>
        ))}
      </div>
      <div className=" border-t-2 flex justify-between items-center px-12  py-2     border-zinc-400 mt-36">
{["For public and private companies", "From the first pitch to IPO"].map((item, index) =>{
 return <p key={index} className=" tracking-tight leading-none  font-semibold"> {item}</p>
})}
<div className="start flex items-center gap-4 ">
    <div className="px-4 py-[2px] font-light  text-md     capitalize   flex items-center rounded-full border-[2px] text-[17px]  border-violet-400">START THE PROJECT</div>
    <div className="  rotate-45 border-[2px] rounded-full p-2 border-violet-400"><FaArrowUpLong/></div>
</div>
      </div>
    </div>
  );
};

export default LandingPage;
