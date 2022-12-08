import React from 'react'
import Navbar from './components/Navbar'
import './components/index.css'
import Offer from './components/Offer';
import {
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './components/Home'
import Accessories from './components/Accessories'
import Mobile from './components/Mobile'
import Contact from './components/Contact'
import Banner from './components/Banner'
import Deals from './components/Deals';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Banner/>
      <Offer/>
      <Deals/>
      <Footer/>
    </>
  )
}

export default App