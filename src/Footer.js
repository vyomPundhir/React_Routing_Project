import React from "react";
import './style.css';
import Youtube from "./Assets/Youtube.svg";
import Facebook from "./Assets/Facebook.svg";
import Insta from "./Assets/Insta.svg";
import Mail from "./Assets/Mail.svg";
import Twitter from "./Assets/Twitter.svg";
import Painting from "./Assets/Painting.svg";
import Feather from "./Assets/Feather.svg";
import Logo from "./Assets/Logo.png";

const Footer = () =>{
  return(
    <section className="footer flex flex-row items-center">
      <div className="border-[2px] w-[80px] ml-[100px]">
        <img src={Painting} className="w-[80px] bg-[white] rounded-[40px]"/>
      </div>
      <div className="ml-[100px] text-[15px] mt-[20px] text-[white]">
      Copyright © 2023 - All right reserved
      </div>
      <div className="flex flex-col items-center ml-[160px]">
        <div className="flex text-[white] text-[25px] font-[600]">
          Learn to create Aesthetic art works.
        <img src={Feather} className="w-[25px] mt-[-5px] ml-[10px]"/>
        </div>
        <button className="mt-[30px] text-center w-[100px] h-[30px] text-[white] text-[17px] border-[2px] rounded-[5px] hover:bg-[white] hover:text-[black] font-[600] ease-in-out duration-500">
          Join Now
        </button>
        <div className="flex flex-row mt-[25px] gap-[20px]">
          <img src={Facebook} className="w-[30px] ease-in-out duration-500 cursor-pointer"/>
          <img src={Insta} className="w-[25px] ease-in-out duration-500 cursor-pointer"/>
          <img src={Twitter} className="w-[28px] mt-[2px] ease-in-out duration-500 cursor-pointer"/>
          <img src={Youtube} className="w-[38px] ease-in-out duration-500 cursor-pointer"/>
          <img src={Mail} className="w-[30px] bg-[white] h-[25px] mt-[5px] ease-in-out duration-500 cursor-pointer"/>
        </div>
      </div>
      
    </section>
  )
}

export default Footer;