import React from 'react';
import './BookShow.css'
const BookShow = (props) => {
    const {fullname,email,date,description,_id}=props.book
  const   deleteItem=()=>{
    fetch('https://afternoon-woodland-74598.herokuapp.com/delete/'+_id,{
        method:'DELETE',
    })
    .then(res => res.json())
    .then(data => console.log('success'))
    }
    return (
        <div className="bookshow" style={{float:'left'}}>
            <h1>Name:{fullname}</h1>
            <p>Email:{email}</p>
            <span>Date:{date}</span>
            <p>Description{description}</p>
            <button onClick={deleteItem}>Cancel</button>
        </div>
    );
};

export default BookShow;
