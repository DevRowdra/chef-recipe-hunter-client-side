import React from 'react';
import Banner from '../Banner';
import { useNavigation } from 'react-router-dom';
import Loading from './Loading';
import Chef from '../Chef';
import Categories from '../Categories';
import EventsAndBlog from './EventsAndBlog';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Chef></Chef>
      <Categories></Categories>
      <EventsAndBlog></EventsAndBlog>
    </div>
  );
};

export default Home;
