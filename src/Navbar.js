import React from "react";
import {Link} from "react-router-dom";
import Logo from "./Assets/Logo.png";


const Navbar = () =>{
  return(
    <section className="flex flex-row font-['Poppins'] bg-[#000000]">
      <div>
        <img src={Logo} className="w-[80px] mt-[5px] mb-[5px] ml-[45px] cursor-pointer"/>
      </div>
      <div className="flex flex-row items-center ml-[150px]">
        <button className="ease-in-out duration-500 text-[white] text-[15px] hover:bg-[#d3d1d1] hover:text-[black] w-[50px] rounded-[5px]">
          <Link to="/">
          Home
          </Link>
        </button>
        <button className="ease-in-out duration-500 text-[white] ml-[100px] text-[15px] hover:bg-[#d3d1d1] hover:text-[black] w-[75px] rounded-[5px]">
          <Link to="/about">
          About Us
          </Link>
        </button>
        <button className="ease-in-out duration-500 text-[white] ml-[100px] text-[15px] hover:bg-[#d3d1d1] hover:text-[black] w-[90px] rounded-[5px]">
        <Link to="/contact">
          Contact Us
          </Link>
        </button>
      </div>
      <button className="ease-in-out duration-700 flex flex-row justify-center items-center text-[white] text-[15px] ml-[390px] mt-[28px] border-[1px] border-[white] w-[110px] h-[35px] rounded-[5px] hover:bg-[#d3d1d1] hover:text-[black]">
        Login
      </button>

    </section>
  )
}

export default Navbar;