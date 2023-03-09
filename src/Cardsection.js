import React from "react";
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
    <section>
      <div className="carousel carousel-center max-w-md p-4 space-x-4   bg-neutral rounded-box">
        <div className="carousel-item">
          <Card source={Watercolor} name="Watercolor Paintings"/>
        </div> 
        <div className="carousel-item">
          <Card source={Street} name="Street Arts"/>
        </div> 
        <div className="carousel-item">
          <Card source={Puppy} name="Pencil Sketches"/>
        </div> 
        <div className="carousel-item">
          <Card source={Mandala} name="Mandala Arts"/>
        </div> 
        <div className="carousel-item">
          <Card source={Pattern} name="Pattern Arts"/>
        </div> 
        <div className="carousel-item">
          <Card source={Doodle} name="Doodles"/>
        </div> 
        <div className="carousel-item">
          <Card source={Skull} name="Stipling Arts"/>
        </div>
      </div>
    </section>
  )
}

export default Cardsection;