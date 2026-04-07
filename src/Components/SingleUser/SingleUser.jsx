import React from 'react';
import { Link } from 'react-router';

const SingleUser = ({user}) => {

    const { id, name, email, phone } = user;
    
    const cardStyle = {
        border: '2px solid lightblue',
        borderRadius: "5px",
        padding: "10px",
        margin: "5px"
    }
    return (
        <div style={cardStyle}>
            <h4>{name}</h4>
           <small> <p>Phone:  {phone}</p>
                <p>Email:  {email}</p>
            </small>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default SingleUser;