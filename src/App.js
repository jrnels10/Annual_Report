import React from "react"
import Navbar from "./components/Navbar"
export default (props) => {
  return (
    <div className='h-100 w-100 container-fluid p-0 m-0' id='app-div'>
      <Navbar />
      {props.children}
    </div>
  )
}