import React from 'react';
import { useLoaderData } from 'react-router';
import SingleUser from '../SingleUser/SingleUser';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Heres our Users page</h2>
            {
                users.map(user => 
                <SingleUser key={user.id} user={user}></SingleUser>
               
                    
                )
            }
        </div>
    );
};

export default Users;