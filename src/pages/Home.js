import React from 'react'
import Discuss from '../components/Discuss/discuss'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import Portfolio from '../components/Portfolio/portfolio'
import Values from '../components/Values/values'
import Testimony from '../components/Testimonials/testimony'
import Features from '../components/Features/features'

const Home = () => {
    return (
        <div>
            <Header />
            <Values />
            <Features />
            <Portfolio />
            <Testimony/>
            <Discuss/>
            <Footer/>
        </div>
    )
}

export default Home