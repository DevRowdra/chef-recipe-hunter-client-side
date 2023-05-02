import React from 'react';
import Banner from '../Banner';
import { useNavigation } from 'react-router-dom';
import Loading from './Loading';
import Chef from '../Chef';

const Home = () => {
  const navigation = useNavigation()
  console.log(navigation.state)
if (navigation.state === 'loading') {
  return <Loading></Loading>
}
  return (
    <div>
      <Banner></Banner>
      <Chef></Chef>
    </div>
  );
};

export default Home;
