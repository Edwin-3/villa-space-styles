import React from 'react'
import './values.scss'

import { FaUserTie } from 'react-icons/fa'
import { IoGitNetworkOutline } from 'react-icons/io5'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { HiOutlineUserGroup } from 'react-icons/hi' 

const Values = () => {
  return (
    <div className='tester-section'>
      <div className='service-heading'>
        <h5>How it works</h5>
        <h2>Visualize your Ideas</h2>
      </div>
      <div className='service-card-wrapper'>
        <div className='service-card'>
          <div className='icon'>
            <FaUserTie />
          </div>
          <h4>Professionalism</h4>
          <p>We deliver the final work in a great and professional way.</p>
        </div>
        <div className='service-card'>
          <div className='icon'>
            <IoGitNetworkOutline />
          </div>
          <h4>Smooth Workflow</h4>
          <p>Providing the easiest and smoothest workflow in your interior.</p>
        </div>
        <div className='service-card'>
          <div className='icon'>
            <VscWorkspaceTrusted />
          </div>
          <h4>Trusted Platform</h4>
          <p>We have gained trust and confidence from our customers.</p>
        </div>
        <div className='service-card'>
          <div className='icon'>
            <HiOutlineUserGroup />
          </div>
          <h4>Qualified Team</h4>
          <p>Our team are experts the best in the field.</p>
        </div>
      </div>
    </div>
  )
}

export default Values