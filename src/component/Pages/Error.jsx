import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/errorPage.jpg'
const Error = () => {
    const {status,data} = useRouteError();
    
    return (
        <div>
            <div  >
            <img className='h-72  mx-auto'  src={errorImg} alt="" />
            </div>
            <div className='text-center'>
            <h1 className='text-8xl text-orange-500'>{status}</h1>
            <p className='text-4xl'> {data}</p>
           <Link to={'/'}> <button className="btn btn-success mt-5">Back Home</button></Link>
            </div>
        </div>
    );
};

export default Error;