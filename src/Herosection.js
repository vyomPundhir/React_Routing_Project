import React from "react";
import './style.css';


const Hero = () =>{
  return(
    <section className="flex flex-row justify-center w-100 h-[500px] font-['Poppins'] bg-image bg-center">
      <div className="mt-[80px]">
        <div className="text-[50px] font-[600] font-['Poppins'] text-[#d3cfcf]">
          A Perfect Place For Art Lovers.
        </div>
        <div className="text-center text-[25px] text-[#999797] font-[600] font-['Poppins'] mt-[20px]">
          Most Aesthetic, Creative and Unique Art Pieces Are Available.
        </div>
        <div className="text-center font-['Poppins'] text-[20px] font-[600] text-[#9aacbf] mt-[20px]">
          A Community that supports and appreciates Artists and their works.
        </div>
        <div className="text-center font-['Poppins'] text-[30px] font-[600] text-[#cde0f2] mt-[30px]">
          500+ Art Forms are Available.
        </div>
      </div>
    </section>
  )
}

export default Hero;