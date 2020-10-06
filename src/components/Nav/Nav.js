import React, { useState } from 'react';
import logo from '../../logos/Group 1329.png';
import fakeData from '../../fakeData/volunteer'

import Login from '../Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Volunteer from '../Volunteer/Volunteer';
import { useContext } from 'react';
import { UserContext } from '../../App';



const Nav = () => {
  const [volunteer,setvolunteer]=useState(fakeData)
   const [loggeduser,setloggeduser]=useContext(UserContext)
    return (
        <div >
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img src={logo} style={{height:'60px' , width:'120px'}} alt=""/>
    
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
    
    <ul class="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">Donation </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">Events </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">Blog </a>
      </li>
      <li className="nav-item ">
        <Login></Login>
      </li>
      <li className="nav-item ">
        <button className="btn btn-info">Admin </button> 
      </li>
    </ul>
    
    </div>
 </nav>
  <h1 style={{textAlign:'center'}}>I want to help people</h1>
  <form className="form-inline my-2 my-lg-0 " style={{marginLeft:'500px'}}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    
    <div className="row mt-3 p-3 ">
      {volunteer.map(volunteer => <Volunteer volunteer= {volunteer}></Volunteer>)}
      </div>

        </div>
    );
};

export default Nav;