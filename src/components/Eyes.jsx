import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove); // Cleanup
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="w-full relative bg-center bg-cover h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute top-[48%] gap-10 left-[50%] -translate-x-[50%] -translate-y-[50%] flex">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="lineAnimate w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5 animate ping"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-50"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] flex items-center justify-center h-[15vw] bg-zinc-100 rounded-full">
            <div  className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="lineAnimate w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5 animate ping"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;







// import React, { useEffect, useState } from "react";

// const Eyes = () => {
//     const [rotate, setRotate] = useState(0)
//     useEffect(() => {
//       window.addEventListener("mousemove",(e)=>{
//         let mouseX = e.clientX;
//         let mouseY = e.clientY;
  
//         let deltaX = mouseX- window.innerWidth/2
//         let deltaY = mouseY- window.innerHeight/2
        
//         var angle = Math.atan2(deltaY, deltaX ) * (180/Math.PI) ;
//         setRotate(angle-180)
//         console.log(deltaX, deltaY," window posistion" )
//         console.log(angle ,"angle")
//       })
//     })
//   return (
//     <div className="w-full h-screen overflow-hidden">
//       <div className='w-full relative bg-center bg-cover h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
//         <div className=" absolute top-[48%] gap-10 left-[50%] -translate-x-[50%] -translate-y-[50%]   flex ">
//           <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full ">
//           <div className="w-2/3 h-2/3 relative   bg-zinc-900 rounded-full">
//             <div style={{transform: `trasnlate(-50%, -50%) rotate(${rotate}deg)`}} className="  w-full absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] h-5 ">
//             <div className="w-5 h-5 rounded-full bg-zinc-50 "></div> </div> 
//             </div>
//           </div>
//           <div className="w-[15vw]  flex items-center justify-center  h-[15vw] bg-zinc-100 rounded-full ">
//             <div className="w-2/3 h-2/3 relative   bg-zinc-900 rounded-full">
//             <div style={{transform: `trasnlate(50%, 50%) rotate(${rotate}deg)`}} className="   w-full absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] h-5 ">
//             <div className="w-5 h-5 rounded-full bg-zinc-50 "></div> </div> 
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Eyes;

// https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg
