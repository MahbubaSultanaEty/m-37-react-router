import React from 'react';
import { use } from 'react';

const Users2 = ({ userPromise }) => {
    const Users = use(userPromise);

console.log("This is from USers 2" , Users);
    return (
        <div>
            <h1>Heres our Users2</h1>
        </div>
    );
};

export default Users2;