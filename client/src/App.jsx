import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from "./Routes/routes";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css"; 


function App() {


  return (
    <>
       <RouterProvider router={routes} />
    </>
  )
}

export default App
