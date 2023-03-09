import React from "react";

const Card = (source, name) =>{
  return(
    <section>
      <div>
        <img src={source}/>
      </div>
      <div>
        {name}
      </div>
    </section>
  )
}

export default Card;
