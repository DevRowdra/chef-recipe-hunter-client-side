import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';

const Main = () => {
   
    return (
        <div className="container mx-auto overflow-hidden" >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;