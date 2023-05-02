import React from 'react';
import Banner from '../Banner';
import { useNavigation } from 'react-router-dom';
import Loading from './Loading';
import Chef from '../Chef';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Chef></Chef>
    </div>
  );
};

export default Home;
