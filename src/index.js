import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App";
import Contact from "./Contact";
import About from "./About";
import Hero from "./Herosection";


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
      children:[
        {
          path:"/",
          element:<Hero />,
        },
        {
          path:"/about",
          element:<About />,
        },
        {
          path:"/contact",
          element:<Contact/>,
        }
      ]
  }
])

const root =
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);