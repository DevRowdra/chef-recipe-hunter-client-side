
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../component/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
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
      ],
    },
  ]);
  export default router;