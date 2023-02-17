import React from 'react'
import './footer.scss'

//import react icons 
import { AiOutlineMail } from 'react-icons/ai'
import { BsInstagram, BsTelephone, BsPlus } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'
import { ImFacebook } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {

  const contactData = [
    {
      icon: <BsTelephone />,
      title: "Phone Number",
      text: "+254748708036",
      href: "tel:+254748708036"
    },
    {
      icon: <AiOutlineMail />,
      title: "Email Address",
      text: "villaspace@gmail.com",
      href: "mailto:villaspace@gmail.com"
    },
    {
      icon: <MdOutlineLocationOn />,
      title: "Location",
      text: "jhvvjdhcgx sghfdstre"
    }
  ]


  return (
    <div className='footer-section'>
      <div className='flex-width'>
        <div className='col-1 items'>
          <div className='logo'></div>
          <p className='text'>Interior design consultancy firm that brings sensitivity to the design top restaurants, hotels, offices & homes around the world, the prestigious luxury is. We do all types of interior designing.</p>
          <div className='socials'>
            <div className='icon'><ImFacebook /></div>
            <div className='icon'><BsInstagram /></div>
            <div className='icon'><FaLinkedinIn /></div>
          </div>
        </div>
        <div className='col-2 items'>
          
          <div className='link-wrapper'>
          <h4>Quick Links</h4>
            <a href='./'>
              <div className='links' ><BsPlus /> Home</div>
            </a>
            <a href='./'>
              <div className='links' ><BsPlus /> About</div>
            </a>
            <a href='./'>
              <div className='links' ><BsPlus /> Projects</div>
            </a>
            <a href='./'>
              <div className='links' ><BsPlus /> Contact</div>
            </a>
          </div>
        </div>
        <div className='col-3 items'>
          <h4>Contact Us</h4>
          {
            contactData.map(({ icon, title, text, href }) => {
              return (
                <div className='contact-wrapper'>
                  <div className='contact-icon'>
                    {icon}
                  </div>
                  <div className='contact-content'>
                    <p>{title}</p>
                    <a href={href}>
                      <h6>
                        {text}
                      </h6>
                    </a>
                  </div>
                </div>
              );
            })}

        </div>
      </div>
    </div>
  )
}

export default Footer