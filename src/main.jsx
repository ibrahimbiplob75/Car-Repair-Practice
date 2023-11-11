import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthContext from '../AuthContext/AuthContext.jsx';
import CheckOut from './Components/CheckOut/CheckOut.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/booking/:id",
        element:<CheckOut></CheckOut>,
        loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`),
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
