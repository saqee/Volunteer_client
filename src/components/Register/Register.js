import React, { useState } from 'react';
import logo from '../../logos/Group 1329.png'
import firebaseConfig from './login.config'
import * as firebase from "firebase/app";

import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';
import './Register.css'
import { useHistory } from 'react-router-dom';
const Register = () => {
    
  const [loggedUser,setloggedUser]=useContext(UserContext)
    const [user,setUser]=useState({
        isSign:false,
        name:'',
        email:''
    })
    const history=useHistory()
    let provider = new firebase.auth.GoogleAuthProvider();
    const handleSign=()=>{
        
        firebase.auth().signInWithPopup(provider).
        then(res => {
            const {displayName,email}=res.user;
            
            let signIn={
              isSign:true,
              name:displayName,
              email:email
            }
            setUser(signIn)
           setloggedUser(signIn)
           history.push('/book');
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
    
        <div clasName="card" style={{border:'1px solid lightgrey', textAlign:'center', width: "300px", height:'300px',marginTop:'40px', marginLeft:'500px',paddingLeft:'50px',paddingTop:'150px'}}>
        <img clasName="card-img-top" src={logo} style={{width:'120px'}} alt="Card image cap"/>
        <div clasName="card-body">
          <h5 clasName="card-title">Registration Form</h5>
           <button onClick={handleSign}>GoogleSign</button>
       
        </div>
      </div>  
           
    
    );
};

export default Register;