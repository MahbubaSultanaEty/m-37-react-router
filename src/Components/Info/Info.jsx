import React from 'react';
import { use } from 'react';

const Info = ({ userPromise }) => {
    const user = use(userPromise);
    console.log(user);
    const { name, username } = user;
    console.log("user info", name, username);

    return (
        <div>
            <h2>User Name: { username}</h2>
        </div>
    );
};

export default Info;