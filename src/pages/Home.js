import React from 'react'
import Discuss from '../components/Discuss/discuss'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import Portfolio from '../components/Portfolio/portfolio'
import Section03 from '../components/Section03/section03'
import Service from '../components/Services/service'
import Services from '../components/Services/services'
import Testimony from '../components/Testimonials/testimony'

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <Section03 />
            <Portfolio />
            <Testimony/>
            <Discuss/>
            <Footer/>
        </div>
    )
}

export default Home