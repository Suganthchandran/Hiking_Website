import React from 'react'
import Banner from '../components/Banner'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Footer from '../components/Footer'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
        <Banner/>
        <div className='home-main'>
        <Page1/>
        <Page2/>
        <Page3/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home
