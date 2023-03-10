import React from "react";
import './style.css';


const About = () =>{
  return(
    <section className="flex flex-row justify-center w-100 h-[500px] font-['Poppins'] bg-img bg-center">
      <div className="mt-[80px]">
        <div className="text-[50px] font-[600] font-['Poppins'] text-[#d3cfcf]">
          We Believe In Support And Appreciation.
        </div>
        <div className="text-center text-[25px] text-[#999797] font-[600] font-['Poppins'] mt-[20px]">
        This is the place where you can showcase your creative skills.
        </div>
        <div className="text-center font-['Poppins'] text-[20px] font-[600] text-[#9aacbf] mt-[20px]">
        You can learn various Art Forms from Beginner to Advanced level.
        </div>
        <div className="text-center font-['Poppins'] text-[30px] font-[600] text-[#cde0f2] mt-[30px]">
          Join now to be a part of Zenopia Arts. 
        </div>
      </div>
    </section>
  )
}

export default About;