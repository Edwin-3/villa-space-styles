import React from 'react'
import './about.scss'
import { GiTrophyCup } from 'react-icons/gi'
import { FaUsers, FaHandshake } from 'react-icons/fa'
import { RiCustomerService2Fill } from 'react-icons/ri'
import Footer from '../components/Footer/footer'

const About = () => {
  const cardData = [
    {
      icon: <GiTrophyCup />,
      title: "192+",
      description: "Projects Completed"
    },
    {
      icon: <FaUsers />,
      title: "42+",
      description: "Happy Clients"
    },
    {
      icon: <FaHandshake />,
      title: "5+",
      description: "Years in Business"
    },
    {
      icon: <RiCustomerService2Fill />,
      title: "24/7",
      description: "Customer Support"
    }
  ];

  return (
    <div className='about-container'>
      <div className='about-block'></div>
      <div className='about-body'>
        <div className='about-heading'>
          <h5>Our Portfolio</h5>
          <h2>Check out our Work</h2>
        </div>
        <div className='about-content'>
          <div className='about-text'>
            <h5>Our Portfolio</h5>
            <h2>Check out our Work</h2>
            <p>Welcome to Villaspace, where we believe that exceptional interior design can transform your space and enhance your life.
              Our experienced designers work closely with clients to create custom interiors that reflect their unique style and needs.
              Whether you need a stunning residential space or a functional commercial interior,
              Villaspace has the expertise to bring your project to life.
              We understand that investing in an interior design project can be a big decision, which is why we offer a collaborative approach that ensures every project is tailored to your vision and exceeds your expectations.
              Our commitment to quality craftsmanship, attention to detail, and personalized touch is evident in our diverse portfolio of projects.
              Don't just take our word for it - our satisfied clients speak for themselves, with glowing reviews and testimonials that attest to the value and impact of our design work.
              If you're ready to transform your space and enhance your life with exceptional interior design, get in touch with Villaspace today. Let us help you bring your vision to life and create a space that inspires and delights.
            </p>
            <button className='btn primary'>Send an Inquiry</button>
          </div>
          <div className='about-img'>
            <img src='/assets/villaImg02.jpg' />
          </div>
        </div>

      </div>
      <div className='about-values'>
        {cardData.map((item, index) => (
          <div className='value-card' key={index}>
            <div className='icon'> {item.icon}</div>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default About