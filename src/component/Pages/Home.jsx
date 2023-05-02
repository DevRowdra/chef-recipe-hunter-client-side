import React from 'react';
import Banner from '../Banner';
import { useNavigation } from 'react-router-dom';
import Loading from './Loading';
import Chef from '../Chef';
import Categories from '../Categories';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Chef></Chef>
      <Categories></Categories>
    </div>
  );
};

export default Home;
