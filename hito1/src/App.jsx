import react from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar'

import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Pizza from './Pages/Pizza';
import NotFound from './Pages/NotFound';
import './App.css';

import { useUser } from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoutes';



function SiEstaLogeado({ children }) {
  const { token } = useUser()
  if (!token) {
    return children;
  } else {
    return <Navigate to='/' replace />
  }



}
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path='/cart' element={<Cart />} />

        <Route
          path='/login'
          element={
            <SiEstaLogeado>
              <LoginPage />
            </SiEstaLogeado>
          }
        />

        <Route
          path='/register'
          element={
            <SiEstaLogeado>
              <RegisterPage></RegisterPage>
            </SiEstaLogeado>

          }
        />

        <Route path='*' element={<NotFound />} />

        <Route path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />



      </Routes>
    </>

  )
}


