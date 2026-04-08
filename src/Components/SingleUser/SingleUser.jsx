import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import Info from '../Info/Info';

const SingleUser = ({ user }) => {
    const [showInfo, setShowInfo]= useState(false)

    const { id, name, email, phone } = user;

    const userPromise= fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
    
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
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? "Hide " : "show"} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <Info userPromise={userPromise}></Info>
                </Suspense>
            }
        </div>
    );
};

export default SingleUser;