import React from "react";

const Card = ({source, name}) =>{
  return(
    <section className="w-[200px] rounded-box border-[2px] hover:opacity-75 hover:bg-[white] hover:text-[black] ease-in-out duration-500">
      <div>
        <img src={source} className="w-[200px] h-[250px] rounded-box "/>
      </div>
      <div className="text-center font-[700]">
        {name}
      </div>
    </section>
  )
}

export default Card;
