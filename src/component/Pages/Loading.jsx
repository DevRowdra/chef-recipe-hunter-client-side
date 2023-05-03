import React from 'react';
import loader from '../../assets/loader.gif'
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)]">
      <img src={loader} alt="" />
      <p className="text-7xl font-thin">Loading....</p>
     
    </div>
  );
};

export default Loading;
