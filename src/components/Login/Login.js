import React, { useState } from 'react';

import firebaseConfig from './login.config'
import * as firebase from "firebase/app";



import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [loggedUser,setloggedUser]=useContext(UserContext)
    const [user,setUser]=useState({
        isSign:false,
        name:'',
        email:''
    })
    
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
    
      <div>
        <button onClick={handleSign} style={{marginTop:'5px', marginRight:'5px'}}>SignIn</button>
       
    </div>      
 

         
              
           

           
           
    
    );
};

export default Login;