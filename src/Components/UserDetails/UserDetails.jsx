import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();

    const { website } = user;

    // const params = useParams();

    // console.log(params);
    const { userId } = useParams();
    console.log(userId);

    console.log(user);
    return (
        <div style={{margin: "30px"}}>
            <h4>{user.name}</h4>
            <p>{ website}</p>
        </div>
    );
};

export default UserDetails;