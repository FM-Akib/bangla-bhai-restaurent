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
import AddItems from "../Pages/Dashboard/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems";
import EditItem from "../Pages/Dashboard/EditItem";


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
          path: 'manageItems',
          element: <ManageItems></ManageItems>
        },
        {
          path: 'editItems/:id',
          element: <EditItem></EditItem>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'addItems',
          element: <AddItems></AddItems>
        },
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);