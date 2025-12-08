import './App.css'
import Navbar from './features/Navbar'
import Footer from './features/Footer'
import { Outlet } from 'react-router-dom'
import TopBar from './features/TopBar'

function App() {

  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
