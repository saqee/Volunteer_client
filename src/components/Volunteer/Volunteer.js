import React from 'react';
import { Link } from 'react-router-dom';

const Volunteer = (props) => {
    const {name,img}=props.volunteer
    return (
        <div className="col-md-3 pb-3" style={{backgroundColor:'lightgray'}}>
          <Link to="/book">  <img src={img} style={{height:'300px'}} alt=""/>
            <h1>{name}</h1>
            </Link>
        </div>
    );
};

export default Volunteer;