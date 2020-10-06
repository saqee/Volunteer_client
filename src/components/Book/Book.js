import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import TextField from '@material-ui/core/TextField';

import BookingList from '../BookingList/BookingList';
import { useHistory } from 'react-router-dom';
const Book = () => {
    
    const history=useHistory()
 const [loggedUser,setloggedUser]=useContext(UserContext)
 const [FullName,setFullName]=useState({
   fullname:'',
 })
 const [Date,setDate]=useState({
  date:'',
})
const [Description,setDescription]=useState({
  description:'',
})
 
    const handleFullname=(e)=>{
       const newFullName={...FullName}
       newFullName.fullname=e.target.value
       setFullName(newFullName)
    }
    const handleDate=(e)=>{
      const newDate={...Date}
      newDate.date=e.target.value
      setDate(newDate)
   }
   const handleDescription=(e)=>{
    const newDescription={...Description}
    newDescription.description=e.target.value
    setDescription(newDescription)
 }
    const handleBook=()=>{
        const newBooking={...loggedUser,...FullName,...Date,...Description}
        fetch('https://afternoon-woodland-74598.herokuapp.com/addBook',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newBooking)
        })
        .then(res=> res.json())
        .then(data=>{
          history.push('/book')
        }) 
    }
    return (
    <div className="container" style={{border:'1px solid lightgrey', width:'1000px', textAlign:'center',margin:'20px'}}>
      <form onSubmit={handleBook}>
       <label htmlFor="">Full name</label>
       <input type="text" onChange={handleFullname} name="name"  placeholder="Full name" />
       <label htmlFor="">Email</label>
       <input type="text" value={loggedUser.email}  />
       <input type="date" onChange={handleDate} name="date"  placeholder="Enter date" /> 
       <input type="text" onChange={handleDescription} name="description"  placeholder="Description" /> 
       <input type="submit" value="submit"/>
      </form>

    <BookingList></BookingList>
        </div>
    );
};

export default Book;