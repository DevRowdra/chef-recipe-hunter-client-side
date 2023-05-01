
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../component/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element:<Home></Home> ,
        },
        {
          path: "/blog",
          element:<Blog></Blog> ,
        },
        {
          path: "/login",
          element:<Login></Login> ,
        },
        {
          path: "/register",
          element:<Register></Register> ,
        },
      ],
    },
  ]);
  export default router;