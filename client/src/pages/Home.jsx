import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Footer/>
    </div>
  )
}

export default Home
