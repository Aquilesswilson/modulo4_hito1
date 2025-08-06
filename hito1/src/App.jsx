import react from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
// import Cart from './Components/Cart'
// import Home from './Components/Home'
import Cart from './Pages/Cart';
import LoginPage from './Pages/LoginPage';
import Pizza from './Pages/Pizza';
import RegisterPage from './Pages/RegisterPage';
import Footer from './Components/Footer';
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Profile from './Components/Profile';

// import RegisterPage from './Components/RegisterPage'
// import LoginPage from './Components/LoginPage'

function App() {
  const token = true;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/pizza/p001' element={<Pizza />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>

  )
}

export default App
