import React, { useEffect, useState } from "react";

const About = () => {

  return (
    <div  className="w-full py-[5.2rem] bg-[#CDEA68]">
      <h1 className="text-[3.3rem] text-zinc-700 w-[80%]  py-2 px-12 leading-[3.6rem] tracking-tighter">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell product, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full pt-4 flex flex-row mt-10 gap-10 border-b-[#76863e] border-t-[#76863e] border-[2px] h-auto  ">
        <div className=" pb-20 w-[50%] text-zinc-700 items-start">
          What you can expect:
        </div>
        <div className="w-[30%] pb-20 text-zinc-700 ">
          <p className="mb-6">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether its live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="w-[20%] pb-20 flex flex-col items-baseline justify-around text-zinc-700 ">
          <div className="flex flex-col">
            S:
            <a href="">Instagram</a>
            <a href="">Behance</a>
            <a href="">Facebook</a>
            <a href="">Linkedin</a>
          </div>
        </div>

      </div>
      <div className="w-full flex   gap-5 pt-4 px-6 ">
           <div className="w-1/2">
           <h1 className="text-5xl font-semibold">Our  Approach:</h1>
           <button className="flex items-center gap-10 mt-[22px] px-[1.8rem] py-[14px] bg-zinc-950 rounded-[50px] ">READ MORE
            <div className="w-2 h-2 rounded-full bg-zinc-50 hover:scale-150 "></div>
           </button>
           </div>
           <div className="w-1/2 overflow-hidden  rounded-2xl h-auto ">
           <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="img" />
           </div> 
        </div>
    </div>
  );
};

export default About;
