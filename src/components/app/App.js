import React from "react"
import Navbar from "../navbar/Navbar";
import Navigation from './Navigation';
import { Consumer, Conxt } from './../../Context';
import './App.css'

export default (props) => {
  return (
    <Consumer>
      {value => {
        const title = value.lookupdata.ProgramCertificateConveyanceNumber ? value.lookupdata.ProgramCertificateConveyanceNumber : null;
        return <div className='h-100 w-100 container-fluid ' id='app-div'>
          <Navbar />
          <div className="jumbotron w-50 m-auto bg-light pt-1">
            <h4>WELCOME TO THE ARIZONA DEPARTMENT OF WATER RESOURCES</h4>
            <h6>2018 ELECTRONIC ANNUAL REPORT PROCESS</h6>
            <hr></hr>
            {value.currentPage === "General" ? null :
              <div className='col-12 pcc-span bg-dark text-white'>{title}{value.currentPage === "details" ? null : <Navigation navigate={value.currentPage}/>}</div>
            }
            {props.children}
          </div>
        </div>
      }}
    </Consumer>
  )
}