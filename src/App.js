import React, { useState } from 'react';
import logo from './logos/Group 1329.png';
import fakeData from './fakeData/volunteer'
import './App.css';
import Volunteer from './components/Volunteer/Volunteer';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from './components/Register/Register';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Book from './components/Book/Book';
import Nav from './components/Nav/Nav';

export const UserContext=createContext();

function App() {
  
  const [loggedUser,setloggedUser]=useState({})
   console.log(loggedUser.name)
  return (
    <UserContext.Provider value={[loggedUser,setloggedUser]}>
       <Router>
    <div className="containerFluid">
    
    
     
    
      <Switch>
      <Route exact path="/home">
         <Nav></Nav>
        </Route>
          <Route path="/register">
            <Register />
           
          </Route>
        <PrivateRoute  path="/book" >
            <Book></Book>
        </PrivateRoute>
        </Switch>
        
    </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
