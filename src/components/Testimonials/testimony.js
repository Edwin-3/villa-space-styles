import React from 'react'
import './testimony.scss'
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const Testimony = () => {
    return (
        <div className='testimony-section'>
            <div className='testimony-heading'>
                <h5>Check out</h5>
                <h2>What our happy customers say</h2>
            </div>
            <div className='testimony-content'>
                <div className='testimony-image'>
                    <img />
                </div>
                <div className='testimony-text'>
                    <FaQuoteLeft className='left-quote'/>
                    <p>Really some amazing work from villaspace & styles. My home now feels warm and aesthetic thanks to you guys. I would highly recommend them.</p>
                    <FaQuoteRight className='right-quote' />
                    <div className='testimony-person'>
                        <h6>John Doe</h6>
                        <h6 className='title'>Music producer</h6>
                    </div>
                    <div className='navigation'>
                        <BsArrowLeft />
                        <BsArrowRight />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimony