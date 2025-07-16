import react from 'react'
import Navbar from './Components/Navbar'
// import Cart from './Components/Cart'
// import Home from './Components/Home'
import Pizza from './Components/Pizza'
import Footer from './Components/Footer'
import './App.css'

// import RegisterPage from './Components/RegisterPage'
// import LoginPage from './Components/LoginPage'

function App() {
  const token = true;

  return (
    <>
      <Navbar />
      {/* <Cart/> */}
      {/* <Home /> */}
      <Pizza />
      <Footer />
      {/* {!token ? (
        <>
          <RegisterPage />
        </>
      ) : (
        <>
          <LoginPage/>
        </>
      )
      } */}
    </>
  )
}

export default App
