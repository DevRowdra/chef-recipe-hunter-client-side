import React, { useContext } from 'react';
import { AuthContext } from '../../component/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../component/Pages/Loading';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { loader, user } = useContext(AuthContext);
  if (loader) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      state={{ from: location }}
      to={'/login'}
      replace
    ></Navigate>
  );
};

export default PrivateRoute;
