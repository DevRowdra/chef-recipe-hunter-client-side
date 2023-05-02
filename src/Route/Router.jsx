import { createBrowserRouter } from 'react-router-dom';
import Main from '../component/Main';
import Home from '../component/Pages/Home';

import Blog from '../component/Pages/Blog';
import Login from '../component/Pages/Login';
import Register from '../component/Pages/Register';
import Error from '../component/Pages/Error';
import Loading from '../component/Pages/Loading';
import ChefDetails from '../component/Pages/ChefDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/chef/:id',
        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute> ,
      },
      {
        path:'loader',
        element:<Loading></Loading>
      }
    ],
  },
  
]);
export default router;
