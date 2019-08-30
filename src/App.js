import React from "react"
import Navbar from "./components/navbar/Navbar"
import './App.css'
export default (props) => {
  return (
    <div className='h-100 w-100 container-fluid ' id='app-div'>
      <Navbar />
      <div className="jumbotron w-50 m-auto bg-light pt-1">
        <h4>WELCOME TO THE ARIZONA DEPARTMENT OF WATER RESOURCES</h4>
        <h6>2018 ELECTRONIC ANNUAL REPORT PROCESS</h6>
        <hr></hr>
        {props.children}
      </div>
    </div>
  )
}