import React from "react";
import Navbar from "./Navbar";

import Cardsection from "./Cardsection";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const App = () =>{
  return(
    <>
      <Navbar />
      <Outlet />
      <Cardsection />
      <Footer />
    </>
  )
}

export default App;
