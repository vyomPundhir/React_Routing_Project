import React from "react";
import './style.css';
import Card from "./Card";
import Puppy from "./Assets/Puppy.jpg";
import Mandala from "./Assets/Mandala.jpg";
import Watercolor from "./Assets/Watercolor.jpg";
import Pattern from "./Assets/Pattern.jpg";
import Doodle from "./Assets/Doodle.jpg";
import Skull from "./Assets/Skull.jpg";
import Street from "./Assets/Street.jpg";

const Cardsection = () =>{
  return(
    <section className="flex flex-col items-center bg-cardsec">
      <div className="text-[50px] font-['Poppins'] font-[600] mt-[60px]">
        Various Art Forms
      </div>
      <div className="cursor-pointer mt-[70px] flex gap-[10px] carousel carousel-center rounded-box w-[900px] border-[2px] h-[290px] bg-[#424141]">
        <div className="carousel-item rounded-box border-[2px]">
          <Card source={Watercolor} name="Watercolor Paintings"/>
        </div> 
        <div className="carousel-item  rounded-box border-[2px]">
          <Card source={Street} name="Street Arts"/>
        </div> 
        <div className="carousel-item  rounded-box border-[2px]">
          <Card source={Puppy} name="Pencil Sketches"/>
        </div> 
        <div className="carousel-item  rounded-box border-[2px]">
          <Card source={Mandala} name="Mandala Arts"/>
        </div> 
        <div className="carousel-item  rounded-box border-[2px]">
          <Card source={Pattern} name="Pattern Arts"/>
        </div> 
        <div className="carousel-item  rounded-box border-[2px]">
          <Card source={Doodle} name="Doodles"/>
        </div> 
        <div className="carousel-item  rounded-box border-[2px]">
          <Card source={Skull} name="Stipling Arts"/>
        </div>
      </div>
    </section>
  )
}

export default Cardsection;