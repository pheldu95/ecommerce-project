import './App.css'
import Navbar from './features/Navbar'
import Footer from './features/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
