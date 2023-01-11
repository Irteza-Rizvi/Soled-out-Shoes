import React from 'react'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"

import Categories from '../components/Categories'
import Products from '../components/Products'


const Home = () => {
  return (
    <div>
        <Navbar/>
        
        <Categories/>
        
        <Footer/>
    </div>
  )
}

export default Home
