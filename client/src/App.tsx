import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './features/Navbar'
import Footer from './features/Footer'
import Store from './features/Store'

function App() {

  return (
    <>
      <Navbar/>
      <Store />
      <Footer />
    </>
  )
}

export default App
