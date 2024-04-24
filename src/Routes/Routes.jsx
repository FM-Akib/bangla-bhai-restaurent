import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Secrect from "../Pages/Shared/Secrect/Secrect";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "menu",
          element: <Menu></Menu>
        },
        {
          path: "order/:category",
          element: <Order></Order>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "signup",
          element: <Signup></Signup>
        },
        {
          path: "secrect",
          element: <PrivateRoute> <Secrect></Secrect> </PrivateRoute>
        }
        
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        //admin routes
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);