import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import BookShow from '../BookShow/BookShow';

const BookingList = () => {
    const [bookings,setbookings]=useState([])
    const [loggedUser,setloggedUser]=useContext(UserContext)
    useEffect(()=>{
        fetch(`https://afternoon-woodland-74598.herokuapp.com/bookings?email=${loggedUser.email}`)
        .then(res=> res.json())
        .then(data=> setbookings(data))
    },[])
    return (
        <div className="row">
            {bookings.map(book => <BookShow book={book}></BookShow>)}
        </div>
    );
};

export default BookingList;
