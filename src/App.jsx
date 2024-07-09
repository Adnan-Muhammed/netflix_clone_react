// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from "./pages/Home";

function App() {

  return (
    <>

    <Navbar/>

    <Routes>
      <Route path='/'  element ={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default App
