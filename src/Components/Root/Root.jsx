import React from 'react';

import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Headphones from '../Headphones/Headphones';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Headphones></Headphones>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;