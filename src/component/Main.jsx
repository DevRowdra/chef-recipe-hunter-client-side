import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';

const Main = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }
    return (
        <div className="container mx-auto" >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;