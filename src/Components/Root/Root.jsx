import React from 'react';

import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Headphones from '../Headphones/Headphones';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import "./root.css";
import { useNavigation } from 'react-router';

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div>
            <Header></Header>
            <div className='main'>
                <Sidebar></Sidebar>
                {isNavigating && < span>Loading....</span>}
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;

/**
 * 1. use: usersPromise > Suspence > promise > use(userPromise)
 * 2. Set Loader in the route definition: Load data before router component is rendered
 */