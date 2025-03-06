import React from 'react'; // ✅ Required import
import './App.css';
import Adminlogin from './components/login/admin_login';
import Home from '@/components/homewindow/Home';
import Registration from '@/components/regform/registrationwindow';
import Header from './components/header/header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {


  const router = createBrowserRouter(
    [
      {
        path: '/',element: <Adminlogin />
      },
      {
        path: '/home',element: <Home />
      },
      {
        path: '/register',element: <Registration />
      }
    ]); 
  return  <RouterProvider router = {router} />

}

export default App;
