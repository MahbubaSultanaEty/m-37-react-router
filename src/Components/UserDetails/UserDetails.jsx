import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();

    const { website } = user;

    console.log(user);
    return (
        <div style={{margin: "30px"}}>
            <h4>{user.name}</h4>
            <p>{ website}</p>
        </div>
    );
};

export default UserDetails;