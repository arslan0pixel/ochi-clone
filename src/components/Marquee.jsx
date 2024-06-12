// import React from "react";

// const Marquee = () => {
//   return (
//     <div className="w-full py-24 bg-[#004d43]">
//       <div className="border-t-[1px] border-b-[1px] p overflow-hidden flex whitespace-nowrap border-zinc-400  ">
//         <h1 className=" text-[25vw] uppercase  leading-none tracking-tighter font-[700]">
//           we are ochi
//         </h1>
//         <h1 className="text-[25vw]  uppercase leading-none tracking-tighter font-[700]">
//           we are ochi
//         </h1>
//       </div>
//     </div>
//   );
// export default Marquee;
import React from "react";
import {motion} from "framer-motion"
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full py-[5.5rem] rounded-tl-[20px] rounded-tr-[20px]   bg-[#004d43]">
      <div className="border-t-[1px] border-b-[1px]  overflow-hidden flex whitespace-nowrap   border-zinc-400">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ repeat: Infinity,ease: "linear", duration:10  }}  className="text-[25vw] uppercase -mt-12 pr-10  -mb-2 leading-none tracking-tighter text-blue-500 font-[700] no-margin">we are ochi.</motion.h1>
      
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease: "linear",  duration:10  }}  className="text-[25vw] uppercase  pr-10  -mt-12 -mb-2 leading-none text-blue-500 tracking-tighter font-[700] no-margin">we are ochi.</motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
