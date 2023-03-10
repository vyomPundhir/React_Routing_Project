import React from "react";
import './style.css';
import Youtube from "./Assets/Youtube.svg";
import Facebook from "./Assets/Facebook.svg";
import Insta from "./Assets/Insta.svg";
import Mail from "./Assets/Mail.svg";
import Twitter from "./Assets/Twitter.svg";


const Contact = () =>{
  return(
    <section className="flex flex-row justify-center w-100 h-[500px] font-['Poppins'] bg-images bg-center">
      <div className="mt-[80px]">
        <div className=" text-center text-[50px] font-[600] font-['Poppins'] text-[#d3cfcf]">
          Zenopia Arts
        </div>
        <div className="text-center text-[25px] text-[#999797] font-[600] font-['Poppins'] mt-[50px]">
        To know more about us...kindly go through our social media handles
        </div>
        <div className="text-center font-['Poppins'] text-[20px] font-[600] text-[#9aacbf] mt-[30px]">
        The contact details are given below...
        </div>
        <div className="flex flex-row justify-center gap-[30px] text-center font-['Poppins'] text-[30px] font-[600] text-[#cde0f2] mt-[70px]">
          <img src={Facebook} className="w-[50px] ease-in-out duration-500 cursor-pointer"/>
          <img src={Insta} className="w-[45px] ease-in-out duration-500 cursor-pointer"/>
          <img src={Twitter} className="w-[48px] mt-[2px] ease-in-out duration-500 cursor-pointer"/>
          <img src={Youtube} className="w-[60px] ease-in-out duration-500 cursor-pointer"/>
          <img src={Mail} className="w-[45px] bg-[white] h-[40px] mt-[5px] ease-in-out duration-500 cursor-pointer"/>
        </div>
      </div>
    </section>
  )
}

export default Contact;